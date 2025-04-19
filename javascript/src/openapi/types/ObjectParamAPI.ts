import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { AddressValidityItem } from '../models/AddressValidityItem';
import { Chain } from '../models/Chain';
import { CreateAddressRequest } from '../models/CreateAddressRequest';
import { CreateEndpoint } from '../models/CreateEndpoint';
import { CreateGasStationRequest } from '../models/CreateGasStationRequest';
import { CreateTokenRequest } from '../models/CreateTokenRequest';
import { CreateTransferRequest } from '../models/CreateTransferRequest';
import { CreateTransferRequestDestination } from '../models/CreateTransferRequestDestination';
import { CreateTransferRequestSource } from '../models/CreateTransferRequestSource';
import { CreateTransferResponse } from '../models/CreateTransferResponse';
import { CreateWalletRequest } from '../models/CreateWalletRequest';
import { CursorPageAddress } from '../models/CursorPageAddress';
import { CursorPageChain } from '../models/CursorPageChain';
import { CursorPageEndpoint } from '../models/CursorPageEndpoint';
import { CursorPageEventType } from '../models/CursorPageEventType';
import { CursorPageGasStation } from '../models/CursorPageGasStation';
import { CursorPageToken } from '../models/CursorPageToken';
import { CursorPageTransaction } from '../models/CursorPageTransaction';
import { CursorPageWallet } from '../models/CursorPageWallet';
import { Endpoint } from '../models/Endpoint';
import { EstimateFeeRequest } from '../models/EstimateFeeRequest';
import { EstimateFeeResponse } from '../models/EstimateFeeResponse';
import { EventType } from '../models/EventType';
import { Fee } from '../models/Fee';
import { GasStation } from '../models/GasStation';
import { GetGasStationDepositAddressReply } from '../models/GetGasStationDepositAddressReply';
import { ModelError } from '../models/ModelError';
import { SignMessageRequest } from '../models/SignMessageRequest';
import { SignMessageRequestSource } from '../models/SignMessageRequestSource';
import { SignMessageResponse } from '../models/SignMessageResponse';
import { SweepAddressRequest } from '../models/SweepAddressRequest';
import { SweepAddressResponse } from '../models/SweepAddressResponse';
import { Token } from '../models/Token';
import { Transaction } from '../models/Transaction';
import { TransactionEndpoint } from '../models/TransactionEndpoint';
import { TransferDestinationAddress } from '../models/TransferDestinationAddress';
import { TransferSourceAsset } from '../models/TransferSourceAsset';
import { TransferSourceWeb3 } from '../models/TransferSourceWeb3';
import { UpdateEndpoint } from '../models/UpdateEndpoint';
import { UpdateGasStationRequest } from '../models/UpdateGasStationRequest';
import { UpdateTokenRequest } from '../models/UpdateTokenRequest';
import { UpdateWalletRequest } from '../models/UpdateWalletRequest';
import { ValidateAddressesReply } from '../models/ValidateAddressesReply';
import { Wallet } from '../models/Wallet';

import { ObservableAddressesApi } from "./ObservableAPI";
import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";

export interface AddressesApiV1AddressesListRequest {
    /**
     * Unique system generated identifier of the wallet
     * @type Array&lt;string&gt;
     * @memberof AddressesApiv1AddressesList
     */
    walletIds?: Array<string>
    /**
     * The chain ids.
     * @type Array&lt;string&gt;
     * @memberof AddressesApiv1AddressesList
     */
    chainIds?: Array<string>
    /**
     * The cursor to use for pagination.
     * @type string
     * @memberof AddressesApiv1AddressesList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof AddressesApiv1AddressesList
     */
    limit?: number
}

export interface AddressesApiV1AddressesValidateRequest {
    /**
     * Chain ID
     * @type string
     * @memberof AddressesApiv1AddressesValidate
     */
    chainId: string
    /**
     * Addresses
     * @type Array&lt;string&gt;
     * @memberof AddressesApiv1AddressesValidate
     */
    addresses: Array<string>
}

export interface AddressesApiV1WalletsCreateAddressRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof AddressesApiv1WalletsCreateAddress
     */
    walletId: string
    /**
     * Request Body
     * @type CreateAddressRequest
     * @memberof AddressesApiv1WalletsCreateAddress
     */
    createAddressRequest: CreateAddressRequest
}

export interface AddressesApiV1WalletsGetAddressRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof AddressesApiv1WalletsGetAddress
     */
    walletId: string
    /**
     * Address
     * @type string
     * @memberof AddressesApiv1WalletsGetAddress
     */
    address: string
}

export interface AddressesApiV1WalletsListAddressesRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof AddressesApiv1WalletsListAddresses
     */
    walletId: string
    /**
     * chain ids
     * @type Array&lt;string&gt;
     * @memberof AddressesApiv1WalletsListAddresses
     */
    chainIds?: Array<string>
    /**
     * address type
     * @type &#39;DEPOSIT&#39; | &#39;HOT&#39;
     * @memberof AddressesApiv1WalletsListAddresses
     */
    addressType?: 'DEPOSIT' | 'HOT'
    /**
     * Cursor
     * @type string
     * @memberof AddressesApiv1WalletsListAddresses
     */
    cursor?: string
    /**
     * Limit, default is 20
     * @type number
     * @memberof AddressesApiv1WalletsListAddresses
     */
    limit?: number
}

export class ObjectAddressesApi {
    private api: ObservableAddressesApi

    public constructor(configuration: Configuration, requestFactory?: AddressesApiRequestFactory, responseProcessor?: AddressesApiResponseProcessor) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param param the request object
     */
    public v1AddressesListWithHttpInfo(param: AddressesApiV1AddressesListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageAddress>> {
        return this.api.v1AddressesListWithHttpInfo(param.walletIds, param.chainIds, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param param the request object
     */
    public v1AddressesList(param: AddressesApiV1AddressesListRequest = {}, options?: Configuration): Promise<CursorPageAddress> {
        return this.api.v1AddressesList(param.walletIds, param.chainIds, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param param the request object
     */
    public v1AddressesValidateWithHttpInfo(param: AddressesApiV1AddressesValidateRequest, options?: Configuration): Promise<HttpInfo<ValidateAddressesReply>> {
        return this.api.v1AddressesValidateWithHttpInfo(param.chainId, param.addresses,  options).toPromise();
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param param the request object
     */
    public v1AddressesValidate(param: AddressesApiV1AddressesValidateRequest, options?: Configuration): Promise<ValidateAddressesReply> {
        return this.api.v1AddressesValidate(param.chainId, param.addresses,  options).toPromise();
    }

    /**
     * Create address for wallet
     * Create address
     * @param param the request object
     */
    public v1WalletsCreateAddressWithHttpInfo(param: AddressesApiV1WalletsCreateAddressRequest, options?: Configuration): Promise<HttpInfo<Address>> {
        return this.api.v1WalletsCreateAddressWithHttpInfo(param.walletId, param.createAddressRequest,  options).toPromise();
    }

    /**
     * Create address for wallet
     * Create address
     * @param param the request object
     */
    public v1WalletsCreateAddress(param: AddressesApiV1WalletsCreateAddressRequest, options?: Configuration): Promise<Address> {
        return this.api.v1WalletsCreateAddress(param.walletId, param.createAddressRequest,  options).toPromise();
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param param the request object
     */
    public v1WalletsGetAddressWithHttpInfo(param: AddressesApiV1WalletsGetAddressRequest, options?: Configuration): Promise<HttpInfo<Address>> {
        return this.api.v1WalletsGetAddressWithHttpInfo(param.walletId, param.address,  options).toPromise();
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param param the request object
     */
    public v1WalletsGetAddress(param: AddressesApiV1WalletsGetAddressRequest, options?: Configuration): Promise<Address> {
        return this.api.v1WalletsGetAddress(param.walletId, param.address,  options).toPromise();
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param param the request object
     */
    public v1WalletsListAddressesWithHttpInfo(param: AddressesApiV1WalletsListAddressesRequest, options?: Configuration): Promise<HttpInfo<CursorPageAddress>> {
        return this.api.v1WalletsListAddressesWithHttpInfo(param.walletId, param.chainIds, param.addressType, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param param the request object
     */
    public v1WalletsListAddresses(param: AddressesApiV1WalletsListAddressesRequest, options?: Configuration): Promise<CursorPageAddress> {
        return this.api.v1WalletsListAddresses(param.walletId, param.chainIds, param.addressType, param.cursor, param.limit,  options).toPromise();
    }

}

import { ObservableChainsApi } from "./ObservableAPI";
import { ChainsApiRequestFactory, ChainsApiResponseProcessor} from "../apis/ChainsApi";

export interface ChainsApiV1ChainsListRequest {
    /**
     * Cursor
     * @type string
     * @memberof ChainsApiv1ChainsList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof ChainsApiv1ChainsList
     */
    limit?: number
}

export interface ChainsApiV1ChainsRetrieveRequest {
    /**
     * Chain ID
     * @type string
     * @memberof ChainsApiv1ChainsRetrieve
     */
    chainId: string
}

export class ObjectChainsApi {
    private api: ObservableChainsApi

    public constructor(configuration: Configuration, requestFactory?: ChainsApiRequestFactory, responseProcessor?: ChainsApiResponseProcessor) {
        this.api = new ObservableChainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available chains.
     * List all chains
     * @param param the request object
     */
    public v1ChainsListWithHttpInfo(param: ChainsApiV1ChainsListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageChain>> {
        return this.api.v1ChainsListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List of all available chains.
     * List all chains
     * @param param the request object
     */
    public v1ChainsList(param: ChainsApiV1ChainsListRequest = {}, options?: Configuration): Promise<CursorPageChain> {
        return this.api.v1ChainsList(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param param the request object
     */
    public v1ChainsRetrieveWithHttpInfo(param: ChainsApiV1ChainsRetrieveRequest, options?: Configuration): Promise<HttpInfo<Chain>> {
        return this.api.v1ChainsRetrieveWithHttpInfo(param.chainId,  options).toPromise();
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param param the request object
     */
    public v1ChainsRetrieve(param: ChainsApiV1ChainsRetrieveRequest, options?: Configuration): Promise<Chain> {
        return this.api.v1ChainsRetrieve(param.chainId,  options).toPromise();
    }

}

import { ObservableGasStationsApi } from "./ObservableAPI";
import { GasStationsApiRequestFactory, GasStationsApiResponseProcessor} from "../apis/GasStationsApi";

export interface GasStationsApiV1GasStationsCreateRequest {
    /**
     * Request body
     * @type CreateGasStationRequest
     * @memberof GasStationsApiv1GasStationsCreate
     */
    createGasStationRequest: CreateGasStationRequest
}

export interface GasStationsApiV1GasStationsDeleteRequest {
    /**
     * Gas Station ID
     * @type string
     * @memberof GasStationsApiv1GasStationsDelete
     */
    gasStationId: string
}

export interface GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest {
    /**
     * Chain ID
     * @type string
     * @memberof GasStationsApiv1GasStationsGetOrCreateDepositAddress
     */
    chainId: string
    /**
     * Wallet ID
     * @type string
     * @memberof GasStationsApiv1GasStationsGetOrCreateDepositAddress
     */
    walletId?: string
}

export interface GasStationsApiV1GasStationsListRequest {
    /**
     * Cursor
     * @type string
     * @memberof GasStationsApiv1GasStationsList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof GasStationsApiv1GasStationsList
     */
    limit?: number
}

export interface GasStationsApiV1GasStationsRetrieveRequest {
    /**
     * Gas Station ID
     * @type string
     * @memberof GasStationsApiv1GasStationsRetrieve
     */
    gasStationId: string
}

export interface GasStationsApiV1GasStationsUpdateRequest {
    /**
     * Gas Station ID
     * @type string
     * @memberof GasStationsApiv1GasStationsUpdate
     */
    gasStationId: string
    /**
     * Request body
     * @type UpdateGasStationRequest
     * @memberof GasStationsApiv1GasStationsUpdate
     */
    updateGasStationRequest: UpdateGasStationRequest
}

export class ObjectGasStationsApi {
    private api: ObservableGasStationsApi

    public constructor(configuration: Configuration, requestFactory?: GasStationsApiRequestFactory, responseProcessor?: GasStationsApiResponseProcessor) {
        this.api = new ObservableGasStationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param param the request object
     */
    public v1GasStationsCreateWithHttpInfo(param: GasStationsApiV1GasStationsCreateRequest, options?: Configuration): Promise<HttpInfo<GasStation>> {
        return this.api.v1GasStationsCreateWithHttpInfo(param.createGasStationRequest,  options).toPromise();
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param param the request object
     */
    public v1GasStationsCreate(param: GasStationsApiV1GasStationsCreateRequest, options?: Configuration): Promise<GasStation> {
        return this.api.v1GasStationsCreate(param.createGasStationRequest,  options).toPromise();
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param param the request object
     */
    public v1GasStationsDeleteWithHttpInfo(param: GasStationsApiV1GasStationsDeleteRequest, options?: Configuration): Promise<HttpInfo<GasStation>> {
        return this.api.v1GasStationsDeleteWithHttpInfo(param.gasStationId,  options).toPromise();
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param param the request object
     */
    public v1GasStationsDelete(param: GasStationsApiV1GasStationsDeleteRequest, options?: Configuration): Promise<GasStation> {
        return this.api.v1GasStationsDelete(param.gasStationId,  options).toPromise();
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param param the request object
     */
    public v1GasStationsGetOrCreateDepositAddressWithHttpInfo(param: GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest, options?: Configuration): Promise<HttpInfo<GetGasStationDepositAddressReply>> {
        return this.api.v1GasStationsGetOrCreateDepositAddressWithHttpInfo(param.chainId, param.walletId,  options).toPromise();
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param param the request object
     */
    public v1GasStationsGetOrCreateDepositAddress(param: GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest, options?: Configuration): Promise<GetGasStationDepositAddressReply> {
        return this.api.v1GasStationsGetOrCreateDepositAddress(param.chainId, param.walletId,  options).toPromise();
    }

    /**
     * List all gas stations
     * List gas stations
     * @param param the request object
     */
    public v1GasStationsListWithHttpInfo(param: GasStationsApiV1GasStationsListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageGasStation>> {
        return this.api.v1GasStationsListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List all gas stations
     * List gas stations
     * @param param the request object
     */
    public v1GasStationsList(param: GasStationsApiV1GasStationsListRequest = {}, options?: Configuration): Promise<CursorPageGasStation> {
        return this.api.v1GasStationsList(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param param the request object
     */
    public v1GasStationsRetrieveWithHttpInfo(param: GasStationsApiV1GasStationsRetrieveRequest, options?: Configuration): Promise<HttpInfo<GasStation>> {
        return this.api.v1GasStationsRetrieveWithHttpInfo(param.gasStationId,  options).toPromise();
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param param the request object
     */
    public v1GasStationsRetrieve(param: GasStationsApiV1GasStationsRetrieveRequest, options?: Configuration): Promise<GasStation> {
        return this.api.v1GasStationsRetrieve(param.gasStationId,  options).toPromise();
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param param the request object
     */
    public v1GasStationsUpdateWithHttpInfo(param: GasStationsApiV1GasStationsUpdateRequest, options?: Configuration): Promise<HttpInfo<GasStation>> {
        return this.api.v1GasStationsUpdateWithHttpInfo(param.gasStationId, param.updateGasStationRequest,  options).toPromise();
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param param the request object
     */
    public v1GasStationsUpdate(param: GasStationsApiV1GasStationsUpdateRequest, options?: Configuration): Promise<GasStation> {
        return this.api.v1GasStationsUpdate(param.gasStationId, param.updateGasStationRequest,  options).toPromise();
    }

}

import { ObservableSweepsApi } from "./ObservableAPI";
import { SweepsApiRequestFactory, SweepsApiResponseProcessor} from "../apis/SweepsApi";

export interface SweepsApiV1SweepsAddressRequest {
    /**
     * Address that funds will be swept from
     * @type string
     * @memberof SweepsApiv1SweepsAddress
     */
    address: string
    /**
     * Request
     * @type SweepAddressRequest
     * @memberof SweepsApiv1SweepsAddress
     */
    sweepAddressRequest: SweepAddressRequest
}

export class ObjectSweepsApi {
    private api: ObservableSweepsApi

    public constructor(configuration: Configuration, requestFactory?: SweepsApiRequestFactory, responseProcessor?: SweepsApiResponseProcessor) {
        this.api = new ObservableSweepsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param param the request object
     */
    public v1SweepsAddressWithHttpInfo(param: SweepsApiV1SweepsAddressRequest, options?: Configuration): Promise<HttpInfo<SweepAddressResponse>> {
        return this.api.v1SweepsAddressWithHttpInfo(param.address, param.sweepAddressRequest,  options).toPromise();
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param param the request object
     */
    public v1SweepsAddress(param: SweepsApiV1SweepsAddressRequest, options?: Configuration): Promise<SweepAddressResponse> {
        return this.api.v1SweepsAddress(param.address, param.sweepAddressRequest,  options).toPromise();
    }

}

import { ObservableTokensApi } from "./ObservableAPI";
import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";

export interface TokensApiV1TokensCreateRequest {
    /**
     * Request Body
     * @type CreateTokenRequest
     * @memberof TokensApiv1TokensCreate
     */
    createTokenRequest: CreateTokenRequest
}

export interface TokensApiV1TokensListRequest {
    /**
     * Cursor
     * @type string
     * @memberof TokensApiv1TokensList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof TokensApiv1TokensList
     */
    limit?: number
}

export interface TokensApiV1TokensRetrieveRequest {
    /**
     * Token ID
     * @type string
     * @memberof TokensApiv1TokensRetrieve
     */
    tokenId: string
}

export interface TokensApiV1TokensUpdateRequest {
    /**
     * Token ID
     * @type string
     * @memberof TokensApiv1TokensUpdate
     */
    tokenId: string
    /**
     * Request Body
     * @type UpdateTokenRequest
     * @memberof TokensApiv1TokensUpdate
     */
    updateTokenRequest: UpdateTokenRequest
}

export class ObjectTokensApi {
    private api: ObservableTokensApi

    public constructor(configuration: Configuration, requestFactory?: TokensApiRequestFactory, responseProcessor?: TokensApiResponseProcessor) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a tokens.
     * Create token
     * @param param the request object
     */
    public v1TokensCreateWithHttpInfo(param: TokensApiV1TokensCreateRequest, options?: Configuration): Promise<HttpInfo<Token>> {
        return this.api.v1TokensCreateWithHttpInfo(param.createTokenRequest,  options).toPromise();
    }

    /**
     * Create a tokens.
     * Create token
     * @param param the request object
     */
    public v1TokensCreate(param: TokensApiV1TokensCreateRequest, options?: Configuration): Promise<Token> {
        return this.api.v1TokensCreate(param.createTokenRequest,  options).toPromise();
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param param the request object
     */
    public v1TokensListWithHttpInfo(param: TokensApiV1TokensListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageToken>> {
        return this.api.v1TokensListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param param the request object
     */
    public v1TokensList(param: TokensApiV1TokensListRequest = {}, options?: Configuration): Promise<CursorPageToken> {
        return this.api.v1TokensList(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get token info by ID
     * Get Token
     * @param param the request object
     */
    public v1TokensRetrieveWithHttpInfo(param: TokensApiV1TokensRetrieveRequest, options?: Configuration): Promise<HttpInfo<Token>> {
        return this.api.v1TokensRetrieveWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Get token info by ID
     * Get Token
     * @param param the request object
     */
    public v1TokensRetrieve(param: TokensApiV1TokensRetrieveRequest, options?: Configuration): Promise<Token> {
        return this.api.v1TokensRetrieve(param.tokenId,  options).toPromise();
    }

    /**
     * Update a tokens.
     * Update token
     * @param param the request object
     */
    public v1TokensUpdateWithHttpInfo(param: TokensApiV1TokensUpdateRequest, options?: Configuration): Promise<HttpInfo<Token>> {
        return this.api.v1TokensUpdateWithHttpInfo(param.tokenId, param.updateTokenRequest,  options).toPromise();
    }

    /**
     * Update a tokens.
     * Update token
     * @param param the request object
     */
    public v1TokensUpdate(param: TokensApiV1TokensUpdateRequest, options?: Configuration): Promise<Token> {
        return this.api.v1TokensUpdate(param.tokenId, param.updateTokenRequest,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiV1TransactionsEstimateFeeRequest {
    /**
     * Request Body
     * @type EstimateFeeRequest
     * @memberof TransactionsApiv1TransactionsEstimateFee
     */
    estimateFeeRequest: EstimateFeeRequest
}

export interface TransactionsApiV1TransactionsListRequest {
    /**
     * Unique system generated identifier of the wallet
     * @type Array&lt;string&gt;
     * @memberof TransactionsApiv1TransactionsList
     */
    walletIds?: Array<string>
    /**
     * The blockchain network on which the transaction takes place.
     * @type Array&lt;string&gt;
     * @memberof TransactionsApiv1TransactionsList
     */
    chainIds?: Array<string>
    /**
     * The tokenId involved in the transaction.
     * @type Array&lt;string&gt;
     * @memberof TransactionsApiv1TransactionsList
     */
    tokenIds?: Array<string>
    /**
     * The assetId involved in the transaction.
     * @type Array&lt;string&gt;
     * @memberof TransactionsApiv1TransactionsList
     */
    assetIds?: Array<string>
    /**
     * The transaction hash, which uniquely identifies a transaction on the blockchain.
     * @type string
     * @memberof TransactionsApiv1TransactionsList
     */
    hash?: string
    /**
     * The status of the transaction.
     * @type string
     * @memberof TransactionsApiv1TransactionsList
     */
    status?: string
    /**
     * A cursor value for pagination purposes.
     * @type string
     * @memberof TransactionsApiv1TransactionsList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof TransactionsApiv1TransactionsList
     */
    limit?: number
}

export interface TransactionsApiV1TransactionsRetrieveRequest {
    /**
     * Transaction ID
     * @type string
     * @memberof TransactionsApiv1TransactionsRetrieve
     */
    transactionId: string
}

export interface TransactionsApiV1TransactionsSignMessageRequest {
    /**
     * Request Body
     * @type SignMessageRequest
     * @memberof TransactionsApiv1TransactionsSignMessage
     */
    signMessageRequest: SignMessageRequest
}

export interface TransactionsApiV1TransactionsTransferRequest {
    /**
     * Request Body
     * @type CreateTransferRequest
     * @memberof TransactionsApiv1TransactionsTransfer
     */
    createTransferRequest: CreateTransferRequest
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param param the request object
     */
    public v1TransactionsEstimateFeeWithHttpInfo(param: TransactionsApiV1TransactionsEstimateFeeRequest, options?: Configuration): Promise<HttpInfo<EstimateFeeResponse>> {
        return this.api.v1TransactionsEstimateFeeWithHttpInfo(param.estimateFeeRequest,  options).toPromise();
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param param the request object
     */
    public v1TransactionsEstimateFee(param: TransactionsApiV1TransactionsEstimateFeeRequest, options?: Configuration): Promise<EstimateFeeResponse> {
        return this.api.v1TransactionsEstimateFee(param.estimateFeeRequest,  options).toPromise();
    }

    /**
     * List transactions
     * List transactions
     * @param param the request object
     */
    public v1TransactionsListWithHttpInfo(param: TransactionsApiV1TransactionsListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageTransaction>> {
        return this.api.v1TransactionsListWithHttpInfo(param.walletIds, param.chainIds, param.tokenIds, param.assetIds, param.hash, param.status, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List transactions
     * List transactions
     * @param param the request object
     */
    public v1TransactionsList(param: TransactionsApiV1TransactionsListRequest = {}, options?: Configuration): Promise<CursorPageTransaction> {
        return this.api.v1TransactionsList(param.walletIds, param.chainIds, param.tokenIds, param.assetIds, param.hash, param.status, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param param the request object
     */
    public v1TransactionsRetrieveWithHttpInfo(param: TransactionsApiV1TransactionsRetrieveRequest, options?: Configuration): Promise<HttpInfo<Transaction>> {
        return this.api.v1TransactionsRetrieveWithHttpInfo(param.transactionId,  options).toPromise();
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param param the request object
     */
    public v1TransactionsRetrieve(param: TransactionsApiV1TransactionsRetrieveRequest, options?: Configuration): Promise<Transaction> {
        return this.api.v1TransactionsRetrieve(param.transactionId,  options).toPromise();
    }

    /**
     * Sign message
     * Sign message
     * @param param the request object
     */
    public v1TransactionsSignMessageWithHttpInfo(param: TransactionsApiV1TransactionsSignMessageRequest, options?: Configuration): Promise<HttpInfo<SignMessageResponse>> {
        return this.api.v1TransactionsSignMessageWithHttpInfo(param.signMessageRequest,  options).toPromise();
    }

    /**
     * Sign message
     * Sign message
     * @param param the request object
     */
    public v1TransactionsSignMessage(param: TransactionsApiV1TransactionsSignMessageRequest, options?: Configuration): Promise<SignMessageResponse> {
        return this.api.v1TransactionsSignMessage(param.signMessageRequest,  options).toPromise();
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param param the request object
     */
    public v1TransactionsTransferWithHttpInfo(param: TransactionsApiV1TransactionsTransferRequest, options?: Configuration): Promise<HttpInfo<CreateTransferResponse>> {
        return this.api.v1TransactionsTransferWithHttpInfo(param.createTransferRequest,  options).toPromise();
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param param the request object
     */
    public v1TransactionsTransfer(param: TransactionsApiV1TransactionsTransferRequest, options?: Configuration): Promise<CreateTransferResponse> {
        return this.api.v1TransactionsTransfer(param.createTransferRequest,  options).toPromise();
    }

}

import { ObservableWalletsApi } from "./ObservableAPI";
import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";

export interface WalletsApiV1WalletsCreateRequest {
    /**
     * Request body
     * @type CreateWalletRequest
     * @memberof WalletsApiv1WalletsCreate
     */
    createWalletRequest: CreateWalletRequest
}

export interface WalletsApiV1WalletsDeleteRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof WalletsApiv1WalletsDelete
     */
    walletId: string
}

export interface WalletsApiV1WalletsListRequest {
    /**
     * Cursor
     * @type string
     * @memberof WalletsApiv1WalletsList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof WalletsApiv1WalletsList
     */
    limit?: number
}

export interface WalletsApiV1WalletsRetrieveRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof WalletsApiv1WalletsRetrieve
     */
    walletId: string
}

export interface WalletsApiV1WalletsUpdateRequest {
    /**
     * Wallet id or uid
     * @type string
     * @memberof WalletsApiv1WalletsUpdate
     */
    walletId: string
    /**
     * Request body
     * @type UpdateWalletRequest
     * @memberof WalletsApiv1WalletsUpdate
     */
    updateWalletRequest: UpdateWalletRequest
}

export class ObjectWalletsApi {
    private api: ObservableWalletsApi

    public constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param param the request object
     */
    public v1WalletsCreateWithHttpInfo(param: WalletsApiV1WalletsCreateRequest, options?: Configuration): Promise<HttpInfo<Wallet>> {
        return this.api.v1WalletsCreateWithHttpInfo(param.createWalletRequest,  options).toPromise();
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param param the request object
     */
    public v1WalletsCreate(param: WalletsApiV1WalletsCreateRequest, options?: Configuration): Promise<Wallet> {
        return this.api.v1WalletsCreate(param.createWalletRequest,  options).toPromise();
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param param the request object
     */
    public v1WalletsDeleteWithHttpInfo(param: WalletsApiV1WalletsDeleteRequest, options?: Configuration): Promise<HttpInfo<Wallet>> {
        return this.api.v1WalletsDeleteWithHttpInfo(param.walletId,  options).toPromise();
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param param the request object
     */
    public v1WalletsDelete(param: WalletsApiV1WalletsDeleteRequest, options?: Configuration): Promise<Wallet> {
        return this.api.v1WalletsDelete(param.walletId,  options).toPromise();
    }

    /**
     * List all wallets
     * List wallets
     * @param param the request object
     */
    public v1WalletsListWithHttpInfo(param: WalletsApiV1WalletsListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageWallet>> {
        return this.api.v1WalletsListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List all wallets
     * List wallets
     * @param param the request object
     */
    public v1WalletsList(param: WalletsApiV1WalletsListRequest = {}, options?: Configuration): Promise<CursorPageWallet> {
        return this.api.v1WalletsList(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param param the request object
     */
    public v1WalletsRetrieveWithHttpInfo(param: WalletsApiV1WalletsRetrieveRequest, options?: Configuration): Promise<HttpInfo<Wallet>> {
        return this.api.v1WalletsRetrieveWithHttpInfo(param.walletId,  options).toPromise();
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param param the request object
     */
    public v1WalletsRetrieve(param: WalletsApiV1WalletsRetrieveRequest, options?: Configuration): Promise<Wallet> {
        return this.api.v1WalletsRetrieve(param.walletId,  options).toPromise();
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param param the request object
     */
    public v1WalletsUpdateWithHttpInfo(param: WalletsApiV1WalletsUpdateRequest, options?: Configuration): Promise<HttpInfo<Wallet>> {
        return this.api.v1WalletsUpdateWithHttpInfo(param.walletId, param.updateWalletRequest,  options).toPromise();
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param param the request object
     */
    public v1WalletsUpdate(param: WalletsApiV1WalletsUpdateRequest, options?: Configuration): Promise<Wallet> {
        return this.api.v1WalletsUpdate(param.walletId, param.updateWalletRequest,  options).toPromise();
    }

}

import { ObservableWebhookEndpointsApi } from "./ObservableAPI";
import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";

export interface WebhookEndpointsApiV1WebhooksEndpointCreateRequest {
    /**
     * Request body
     * @type CreateEndpoint
     * @memberof WebhookEndpointsApiv1WebhooksEndpointCreate
     */
    createEndpoint: CreateEndpoint
}

export interface WebhookEndpointsApiV1WebhooksEndpointDeleteRequest {
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookEndpointsApiv1WebhooksEndpointDelete
     */
    endpointId: string
}

export interface WebhookEndpointsApiV1WebhooksEndpointListRequest {
    /**
     * 
     * @type string
     * @memberof WebhookEndpointsApiv1WebhooksEndpointList
     */
    cursor?: string
    /**
     * The number of records to return default: 20
     * @type number
     * @memberof WebhookEndpointsApiv1WebhooksEndpointList
     */
    limit?: number
}

export interface WebhookEndpointsApiV1WebhooksEndpointRetrieveRequest {
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookEndpointsApiv1WebhooksEndpointRetrieve
     */
    endpointId: string
}

export interface WebhookEndpointsApiV1WebhooksEndpointUpdateRequest {
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookEndpointsApiv1WebhooksEndpointUpdate
     */
    endpointId: string
    /**
     * Request body
     * @type UpdateEndpoint
     * @memberof WebhookEndpointsApiv1WebhooksEndpointUpdate
     */
    updateEndpoint: UpdateEndpoint
}

export class ObjectWebhookEndpointsApi {
    private api: ObservableWebhookEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEndpointsApiRequestFactory, responseProcessor?: WebhookEndpointsApiResponseProcessor) {
        this.api = new ObservableWebhookEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointCreateWithHttpInfo(param: WebhookEndpointsApiV1WebhooksEndpointCreateRequest, options?: Configuration): Promise<HttpInfo<Endpoint>> {
        return this.api.v1WebhooksEndpointCreateWithHttpInfo(param.createEndpoint,  options).toPromise();
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointCreate(param: WebhookEndpointsApiV1WebhooksEndpointCreateRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhooksEndpointCreate(param.createEndpoint,  options).toPromise();
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointDeleteWithHttpInfo(param: WebhookEndpointsApiV1WebhooksEndpointDeleteRequest, options?: Configuration): Promise<HttpInfo<Endpoint>> {
        return this.api.v1WebhooksEndpointDeleteWithHttpInfo(param.endpointId,  options).toPromise();
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointDelete(param: WebhookEndpointsApiV1WebhooksEndpointDeleteRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhooksEndpointDelete(param.endpointId,  options).toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param param the request object
     */
    public v1WebhooksEndpointListWithHttpInfo(param: WebhookEndpointsApiV1WebhooksEndpointListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageEndpoint>> {
        return this.api.v1WebhooksEndpointListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param param the request object
     */
    public v1WebhooksEndpointList(param: WebhookEndpointsApiV1WebhooksEndpointListRequest = {}, options?: Configuration): Promise<CursorPageEndpoint> {
        return this.api.v1WebhooksEndpointList(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointRetrieveWithHttpInfo(param: WebhookEndpointsApiV1WebhooksEndpointRetrieveRequest, options?: Configuration): Promise<HttpInfo<Endpoint>> {
        return this.api.v1WebhooksEndpointRetrieveWithHttpInfo(param.endpointId,  options).toPromise();
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointRetrieve(param: WebhookEndpointsApiV1WebhooksEndpointRetrieveRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhooksEndpointRetrieve(param.endpointId,  options).toPromise();
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointUpdateWithHttpInfo(param: WebhookEndpointsApiV1WebhooksEndpointUpdateRequest, options?: Configuration): Promise<HttpInfo<Endpoint>> {
        return this.api.v1WebhooksEndpointUpdateWithHttpInfo(param.endpointId, param.updateEndpoint,  options).toPromise();
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param param the request object
     */
    public v1WebhooksEndpointUpdate(param: WebhookEndpointsApiV1WebhooksEndpointUpdateRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhooksEndpointUpdate(param.endpointId, param.updateEndpoint,  options).toPromise();
    }

}

import { ObservableWebhookEventsApi } from "./ObservableAPI";
import { WebhookEventsApiRequestFactory, WebhookEventsApiResponseProcessor} from "../apis/WebhookEventsApi";

export interface WebhookEventsApiV1WebhooksEventsListRequest {
    /**
     * 
     * @type string
     * @memberof WebhookEventsApiv1WebhooksEventsList
     */
    cursor?: string
    /**
     * The number of records to return default: 100
     * @type number
     * @memberof WebhookEventsApiv1WebhooksEventsList
     */
    limit?: number
}

export class ObjectWebhookEventsApi {
    private api: ObservableWebhookEventsApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEventsApiRequestFactory, responseProcessor?: WebhookEventsApiResponseProcessor) {
        this.api = new ObservableWebhookEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param param the request object
     */
    public v1WebhooksEventsListWithHttpInfo(param: WebhookEventsApiV1WebhooksEventsListRequest = {}, options?: Configuration): Promise<HttpInfo<CursorPageEventType>> {
        return this.api.v1WebhooksEventsListWithHttpInfo(param.cursor, param.limit,  options).toPromise();
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param param the request object
     */
    public v1WebhooksEventsList(param: WebhookEventsApiV1WebhooksEventsListRequest = {}, options?: Configuration): Promise<CursorPageEventType> {
        return this.api.v1WebhooksEventsList(param.cursor, param.limit,  options).toPromise();
    }

}
