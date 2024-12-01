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
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { createHash } from "crypto";
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
  public constructor(private privateKey: string) {}

  public pre(context: RequestContext): Promise<RequestContext> {
    const timestamp = new Date().getTime().toString();
    context.setHeaderParam("x-request-time", timestamp);

    let source = "";
    source += context.getBody()?.toString() || "";
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

export interface WaaSOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class WaaS {
  public readonly _configuration: Configuration;
  public readonly Addresses: Addresses;
  public readonly Chains: Chains;
  public readonly Sweeps: Sweeps;
  public readonly Tokens: Tokens;
  public readonly Transactions: Transactions;
  public readonly Wallets: Wallets;
  public readonly WebhookEndpoints: WebhookEndpoints;
  public readonly WebhookEvents: WebhookEvents;

  public constructor(apikey: string, privateKey: string, options: WaaSOptions = {}) {
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
    this.Addresses = new Addresses(config);
    this.Chains = new Chains(config);
    this.Sweeps = new Sweeps(config);
    this.Tokens = new Tokens(config);
    this.Transactions = new Transactions(config);
    this.Wallets = new Wallets(config);
    this.WebhookEndpoints = new WebhookEndpoints(config);
    this.WebhookEvents = new WebhookEvents(config);
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
  public async transferToken(
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
