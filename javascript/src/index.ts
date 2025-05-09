import {
  ServerConfiguration,
  Configuration,
  createConfiguration,
  AddressesApi,
  ValidateAddressesReply,
  ChainsApi,
  SweepsApi,
  TokensApi,
  TransactionsApi,
  WalletsApi,
  WebhookEndpointsApi,
  WebhookEventsApi,
  Middleware,
  RequestContext,
  ResponseContext,
  CursorPageAddress,
  CreateAddressRequest,
  Address,
  CursorPageChain,
  Chain,
  SweepAddressRequest,
  SweepAddressResponse,
  CursorPageToken,
  CreateTokenRequest,
  Token,
  UpdateTokenRequest,
  Transaction,
  EstimateFeeRequest,
  EstimateFeeResponse,
  CreateTransferRequest,
  CreateTransferResponse,
  CreateWalletRequest,
  Wallet,
  CursorPageWallet,
  UpdateWalletRequest,
  CursorPageEndpoint,
  Endpoint,
  CreateEndpoint,
  UpdateEndpoint,
  CursorPageEventType,
  SignMessageRequest,
  SignMessageResponse,
  GasStationsApi,
  CreateGasStationRequest,
  CursorPageGasStation,
  UpdateGasStationRequest,
  GasStation,
  GetGasStationDepositAddressRequest,
  GetGasStationDepositAddressReply,
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { constants, createHash, createVerify } from "crypto";
import * as nacl from "tweetnacl";

const VERSION = "0.2.0";

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam("User-Agent", `WaaS-libs/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

function signEd25519(data: string, privateKey: string): string {
  const hash = createHash("sha256");
  hash.update(Buffer.from(data, "utf-8"));
  const hashBuffer = hash.digest();
  const keyPair = nacl.sign.keyPair.fromSeed(Buffer.from(privateKey, "hex"));
  const signedData = nacl.sign.detached(hashBuffer, keyPair.secretKey);
  const sign = Buffer.from(signedData).toString("hex");
  return sign;
}

class SignatureMiddleware implements Middleware {
  public constructor(private readonly privateKey: string) {}

  public pre(context: RequestContext): Promise<RequestContext> {
    const timestamp = new Date().getTime().toString();
    context.setHeaderParam("x-request-time", timestamp);

    let source = "";
    const body = context.getBody();
    let bodyStr = "";
    if (body) {
      if (typeof body === "object") {
        bodyStr = JSON.stringify(body);
      } else {
        bodyStr = String(body);
      }
    }
    source += bodyStr;

    const url = new URL(context.getUrl());
    source += url.pathname + url.search;
    source += timestamp;

    const sign = signEd25519(source, this.privateKey);
    context.setHeaderParam("x-signature", sign);

    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface ApiClientOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class ApiClient {
  public readonly _configuration: Configuration;
  public readonly addresses: Addresses;
  public readonly chains: Chains;
  public readonly sweeps: Sweeps;
  public readonly tokens: Tokens;
  public readonly transactions: Transactions;
  public readonly wallets: Wallets;
  public readonly webhookEndpoints: WebhookEndpoints;
  public readonly webhookEvents: WebhookEvents;
  public readonly gasStations: GasStations;

  public constructor(apikey: string, privateKey: string, options: ApiClientOptions = {}) {
    if (apikey === "") {
      throw new Error("API key is required");
    }
    if (privateKey === "") {
      throw new Error("Private key is required");
    }

    const baseUrl: string = options.serverUrl ?? "https://api.waas.openweb3.io";

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware(), new SignatureMiddleware(privateKey)],
      authMethods: {
        ApiKeyAuth: apikey,
      },
    });

    this._configuration = config;
    this.addresses = new Addresses(config);
    this.chains = new Chains(config);
    this.sweeps = new Sweeps(config);
    this.tokens = new Tokens(config);
    this.transactions = new Transactions(config);
    this.wallets = new Wallets(config);
    this.webhookEndpoints = new WebhookEndpoints(config);
    this.webhookEvents = new WebhookEvents(config);
    this.gasStations = new GasStations(config);
  }
}
export interface PostOptions {
  idempotencyKey?: string;
}

interface CursorPageOptions {
  cursor?: string;
  limit?: number;
}

export interface ListAddressesOptions extends CursorPageOptions {
  walletIds?: string[];
  chainIds?: string[];
}

export interface ListAddressesByWalletOptions extends CursorPageOptions {
  chainIds?: string[];
}

// addresses
class Addresses {
  private readonly api: AddressesApi;

  public constructor(config: Configuration) {
    this.api = new AddressesApi(config);
  }

  public async list(options?: ListAddressesOptions): Promise<CursorPageAddress> {
    return await this.api.v1AddressesList({ ...options });
  }

  public async listByWallet(
    walletId: string,
    options?: ListAddressesByWalletOptions
  ): Promise<CursorPageAddress> {
    return await this.api.v1WalletsListAddresses({ walletId, ...options });
  }

  public async validateAddresses(
    chainId: string,
    addresses: string[]
  ): Promise<ValidateAddressesReply> {
    return await this.api.v1AddressesValidate({ chainId, addresses });
  }

  public async create(
    walletId: string,
    createAddressRequest: CreateAddressRequest
  ): Promise<Address> {
    return await this.api.v1WalletsCreateAddress({ walletId, createAddressRequest });
  }

  public async getAddress(walletId: string, address: string): Promise<Address> {
    return await this.api.v1WalletsGetAddress({ walletId, address });
  }
}

// chains
class Chains {
  private readonly api: ChainsApi;

  public constructor(config: Configuration) {
    this.api = new ChainsApi(config);
  }

  public async list(options?: CursorPageOptions): Promise<CursorPageChain> {
    return await this.api.v1ChainsList({ ...options });
  }

  public async retrieve(chainId: string): Promise<Chain> {
    return await this.api.v1ChainsRetrieve({ chainId });
  }
}

//sweeps
class Sweeps {
  private readonly api: SweepsApi;

  public constructor(config: Configuration) {
    this.api = new SweepsApi(config);
  }

  // sweep address
  public async sweepAddress(
    address: string,
    sweepAddressRequest: SweepAddressRequest
  ): Promise<SweepAddressResponse> {
    return await this.api.v1SweepsAddress({ address, sweepAddressRequest });
  }
}

// tokens
class Tokens {
  private readonly api: TokensApi;

  public constructor(config: Configuration) {
    this.api = new TokensApi(config);
  }

  public async list(options?: CursorPageOptions): Promise<CursorPageToken> {
    return await this.api.v1TokensList({ ...options });
  }

  // create token
  public async create(createTokenRequest: CreateTokenRequest): Promise<Token> {
    return await this.api.v1TokensCreate({ createTokenRequest });
  }

  // retrieve token
  public async retrieve(tokenId: string): Promise<Token> {
    return await this.api.v1TokensRetrieve({ tokenId });
  }

  // update token
  public async update(
    tokenId: string,
    updateTokenRequest: UpdateTokenRequest
  ): Promise<Token> {
    return await this.api.v1TokensUpdate({ tokenId, updateTokenRequest });
  }
}

export interface ListTransactionsOptions extends CursorPageOptions {
  walletIds?: string[];
  chainIds?: string[];
  tokenIds?: string[];
  assetIds?: string[];
  hash?: string;
  status?: string;
}

// transactions
class Transactions {
  private readonly api: TransactionsApi;

  public constructor(config: Configuration) {
    this.api = new TransactionsApi(config);
  }

  // list transactions
  public async list(options?: ListTransactionsOptions): Promise<CursorPageToken> {
    return await this.api.v1TransactionsList({ ...options });
  }

  // estimate fee
  public async estimateFee(
    estimateFeeRequest: EstimateFeeRequest
  ): Promise<EstimateFeeResponse> {
    return await this.api.v1TransactionsEstimateFee({ estimateFeeRequest });
  }

  // transfer token
  public async transfer(
    createTransferRequest: CreateTransferRequest
  ): Promise<CreateTransferResponse> {
    return await this.api.v1TransactionsTransfer({ createTransferRequest });
  }

  // get transaction
  public async getTransaction(transactionId: string): Promise<Transaction> {
    return await this.api.v1TransactionsRetrieve({ transactionId });
  }

  // sign message
  public async signMessage(
    signMessageRequest: SignMessageRequest
  ): Promise<SignMessageResponse> {
    return await this.api.v1TransactionsSignMessage({ signMessageRequest });
  }
}

class Wallets {
  private readonly api: WalletsApi;

  public constructor(config: Configuration) {
    this.api = new WalletsApi(config);
  }

  // list wallets
  public async list(options?: CursorPageOptions): Promise<CursorPageWallet> {
    return await this.api.v1WalletsList({ ...options });
  }

  // create wallet
  public async create(createWalletRequest: CreateWalletRequest): Promise<Wallet> {
    return await this.api.v1WalletsCreate({ createWalletRequest });
  }

  // delete wallet
  public async delete(walletId: string): Promise<void> {
    await this.api.v1WalletsDelete({ walletId });
  }

  // get wallet
  public async get(walletId: string): Promise<Wallet> {
    return await this.api.v1WalletsRetrieve({ walletId });
  }

  // update wallet
  public async update(
    walletId: string,
    updateWalletRequest: UpdateWalletRequest
  ): Promise<Wallet> {
    return await this.api.v1WalletsUpdate({ walletId, updateWalletRequest });
  }
}

// webhook endpoints
class WebhookEndpoints {
  private readonly api: WebhookEndpointsApi;

  public constructor(config: Configuration) {
    this.api = new WebhookEndpointsApi(config);
  }

  // list webhook endpoints
  public async list(options?: CursorPageOptions): Promise<CursorPageEndpoint> {
    return await this.api.v1WebhooksEndpointList({ ...options });
  }

  // Create webhook endpoint
  public async create(createEndpoint: CreateEndpoint): Promise<Endpoint> {
    return await this.api.v1WebhooksEndpointCreate({ createEndpoint });
  }

  // Delete webhook endpoint
  public async delete(endpointId: string): Promise<void> {
    await this.api.v1WebhooksEndpointDelete({ endpointId });
  }

  // Get webhook endpoint
  public async get(endpointId: string): Promise<Endpoint> {
    return await this.api.v1WebhooksEndpointRetrieve({ endpointId });
  }

  // Update webhook endpoint
  public async update(
    endpointId: string,
    updateEndpoint: UpdateEndpoint
  ): Promise<Endpoint> {
    return await this.api.v1WebhooksEndpointUpdate({ endpointId, updateEndpoint });
  }
}

// webhook events
class WebhookEvents {
  private readonly api: WebhookEventsApi;

  public constructor(config: Configuration) {
    this.api = new WebhookEventsApi(config);
  }

  // list webhook events
  public async list(options?: CursorPageOptions): Promise<CursorPageEventType> {
    return await this.api.v1WebhooksEventsList({ ...options });
  }
}

// gas stations
class GasStations {
  private readonly api: GasStationsApi;

  public constructor(config: Configuration) {
    this.api = new GasStationsApi(config);
  }

  // list gas stations
  public async list(options?: CursorPageOptions): Promise<CursorPageGasStation> {
    return await this.api.v1GasStationsList({ ...options });
  }

  // create gas station
  public async create(
    createGasStationRequest: CreateGasStationRequest
  ): Promise<GasStation> {
    return await this.api.v1GasStationsCreate({ createGasStationRequest });
  }

  // get gas station
  public async get(gasStationId: string): Promise<GasStation> {
    return await this.api.v1GasStationsRetrieve({ gasStationId });
  }

  // update gas station
  public async update(
    gasStationId: string,
    updateGasStationRequest: UpdateGasStationRequest
  ): Promise<GasStation> {
    return await this.api.v1GasStationsUpdate({ gasStationId, updateGasStationRequest });
  }

  // delete gas station
  public async delete(gasStationId: string): Promise<void> {
    await this.api.v1GasStationsDelete({ gasStationId });
  }

  public async getOrCreateDepositAddress(
    getGasStationDepositAddressRequest: GetGasStationDepositAddressRequest
  ): Promise<GetGasStationDepositAddressReply> {
    return await this.api.v1GasStationsGetOrCreateDepositAddress(
      getGasStationDepositAddressRequest
    );
  }
}

export class WebhookClient {
  private readonly publicKey: string;

  public constructor(publicKey: string) {
    this.publicKey = publicKey;
  }

  public async verify(payload: string, signature: string): Promise<boolean> {
    try {
      // convert payload to buffer
      const payloadBuffer = Buffer.from(payload);
      // convert signature to buffer
      const signatureBuffer = Buffer.from(signature, "base64");
      // create verify object, using pkcs#1 format public key
      const verify = createVerify("sha256");
      verify.update(payloadBuffer);

      // verify signature
      const isValid = verify.verify(
        {
          key: this.publicKey,
          padding: constants.RSA_PKCS1_PADDING,
        },
        signatureBuffer
      );

      return isValid;
    } catch (error) {
      console.error("verify signature error:", error);
      return false;
    }
  }
}