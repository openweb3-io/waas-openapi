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
import { GetGasStationDepositAddressRequest } from '../models/GetGasStationDepositAddressRequest';
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
import { ObservableAddressesApi } from './ObservableAPI';

import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";
export class PromiseAddressesApi {
    private api: ObservableAddressesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressesApiRequestFactory,
        responseProcessor?: AddressesApiResponseProcessor
    ) {
        this.api = new ObservableAddressesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The chain ids.
     * @param [cursor] The cursor to use for pagination.
     * @param [limit] The number of records to return default: 20
     */
    public v1AddressesListWithHttpInfo(walletIds?: Array<string>, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageAddress>> {
        const result = this.api.v1AddressesListWithHttpInfo(walletIds, chainIds, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The chain ids.
     * @param [cursor] The cursor to use for pagination.
     * @param [limit] The number of records to return default: 20
     */
    public v1AddressesList(walletIds?: Array<string>, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageAddress> {
        const result = this.api.v1AddressesList(walletIds, chainIds, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param addresses Addresses
     * @param chainId Chain ID
     */
    public v1AddressesValidateWithHttpInfo(addresses: Array<string>, chainId: string, _options?: Configuration): Promise<HttpInfo<ValidateAddressesReply>> {
        const result = this.api.v1AddressesValidateWithHttpInfo(addresses, chainId, _options);
        return result.toPromise();
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param addresses Addresses
     * @param chainId Chain ID
     */
    public v1AddressesValidate(addresses: Array<string>, chainId: string, _options?: Configuration): Promise<ValidateAddressesReply> {
        const result = this.api.v1AddressesValidate(addresses, chainId, _options);
        return result.toPromise();
    }

    /**
     * Create address for wallet
     * Create address
     * @param walletId Wallet id or uid
     * @param createAddressRequest Request Body
     */
    public v1WalletsCreateAddressWithHttpInfo(walletId: string, createAddressRequest: CreateAddressRequest, _options?: Configuration): Promise<HttpInfo<Address>> {
        const result = this.api.v1WalletsCreateAddressWithHttpInfo(walletId, createAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * Create address for wallet
     * Create address
     * @param walletId Wallet id or uid
     * @param createAddressRequest Request Body
     */
    public v1WalletsCreateAddress(walletId: string, createAddressRequest: CreateAddressRequest, _options?: Configuration): Promise<Address> {
        const result = this.api.v1WalletsCreateAddress(walletId, createAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param walletId Wallet id or uid
     * @param address Address
     */
    public v1WalletsGetAddressWithHttpInfo(walletId: string, address: string, _options?: Configuration): Promise<HttpInfo<Address>> {
        const result = this.api.v1WalletsGetAddressWithHttpInfo(walletId, address, _options);
        return result.toPromise();
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param walletId Wallet id or uid
     * @param address Address
     */
    public v1WalletsGetAddress(walletId: string, address: string, _options?: Configuration): Promise<Address> {
        const result = this.api.v1WalletsGetAddress(walletId, address, _options);
        return result.toPromise();
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param walletId Wallet id or uid
     * @param [chainIds] chain ids
     * @param [cursor] Cursor
     * @param [limit] Limit, default is 20
     */
    public v1WalletsListAddressesWithHttpInfo(walletId: string, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageAddress>> {
        const result = this.api.v1WalletsListAddressesWithHttpInfo(walletId, chainIds, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param walletId Wallet id or uid
     * @param [chainIds] chain ids
     * @param [cursor] Cursor
     * @param [limit] Limit, default is 20
     */
    public v1WalletsListAddresses(walletId: string, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageAddress> {
        const result = this.api.v1WalletsListAddresses(walletId, chainIds, cursor, limit, _options);
        return result.toPromise();
    }


}



import { ObservableChainsApi } from './ObservableAPI';

import { ChainsApiRequestFactory, ChainsApiResponseProcessor} from "../apis/ChainsApi";
export class PromiseChainsApi {
    private api: ObservableChainsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChainsApiRequestFactory,
        responseProcessor?: ChainsApiResponseProcessor
    ) {
        this.api = new ObservableChainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of all available chains.
     * List all chains
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1ChainsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageChain>> {
        const result = this.api.v1ChainsListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List of all available chains.
     * List all chains
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1ChainsList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageChain> {
        const result = this.api.v1ChainsList(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param chainId Chain ID
     */
    public v1ChainsRetrieveWithHttpInfo(chainId: string, _options?: Configuration): Promise<HttpInfo<Chain>> {
        const result = this.api.v1ChainsRetrieveWithHttpInfo(chainId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param chainId Chain ID
     */
    public v1ChainsRetrieve(chainId: string, _options?: Configuration): Promise<Chain> {
        const result = this.api.v1ChainsRetrieve(chainId, _options);
        return result.toPromise();
    }


}



import { ObservableGasStationsApi } from './ObservableAPI';

import { GasStationsApiRequestFactory, GasStationsApiResponseProcessor} from "../apis/GasStationsApi";
export class PromiseGasStationsApi {
    private api: ObservableGasStationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GasStationsApiRequestFactory,
        responseProcessor?: GasStationsApiResponseProcessor
    ) {
        this.api = new ObservableGasStationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param createGasStationRequest Request body
     */
    public v1GasStationsCreateWithHttpInfo(createGasStationRequest: CreateGasStationRequest, _options?: Configuration): Promise<HttpInfo<GasStation>> {
        const result = this.api.v1GasStationsCreateWithHttpInfo(createGasStationRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param createGasStationRequest Request body
     */
    public v1GasStationsCreate(createGasStationRequest: CreateGasStationRequest, _options?: Configuration): Promise<GasStation> {
        const result = this.api.v1GasStationsCreate(createGasStationRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsDeleteWithHttpInfo(gasStationId: string, _options?: Configuration): Promise<HttpInfo<GasStation>> {
        const result = this.api.v1GasStationsDeleteWithHttpInfo(gasStationId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsDelete(gasStationId: string, _options?: Configuration): Promise<GasStation> {
        const result = this.api.v1GasStationsDelete(gasStationId, _options);
        return result.toPromise();
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param getGasStationDepositAddressRequest Request body
     */
    public v1GasStationsGetOrCreateDepositAddressWithHttpInfo(getGasStationDepositAddressRequest: GetGasStationDepositAddressRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.v1GasStationsGetOrCreateDepositAddressWithHttpInfo(getGasStationDepositAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param getGasStationDepositAddressRequest Request body
     */
    public v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest: GetGasStationDepositAddressRequest, _options?: Configuration): Promise<string> {
        const result = this.api.v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * List all gas stations
     * List gas stations
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1GasStationsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageGasStation>> {
        const result = this.api.v1GasStationsListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List all gas stations
     * List gas stations
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1GasStationsList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageGasStation> {
        const result = this.api.v1GasStationsList(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsRetrieveWithHttpInfo(gasStationId: string, _options?: Configuration): Promise<HttpInfo<GasStation>> {
        const result = this.api.v1GasStationsRetrieveWithHttpInfo(gasStationId, _options);
        return result.toPromise();
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsRetrieve(gasStationId: string, _options?: Configuration): Promise<GasStation> {
        const result = this.api.v1GasStationsRetrieve(gasStationId, _options);
        return result.toPromise();
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param gasStationId Gas Station ID
     * @param updateGasStationRequest Request body
     */
    public v1GasStationsUpdateWithHttpInfo(gasStationId: string, updateGasStationRequest: UpdateGasStationRequest, _options?: Configuration): Promise<HttpInfo<GasStation>> {
        const result = this.api.v1GasStationsUpdateWithHttpInfo(gasStationId, updateGasStationRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param gasStationId Gas Station ID
     * @param updateGasStationRequest Request body
     */
    public v1GasStationsUpdate(gasStationId: string, updateGasStationRequest: UpdateGasStationRequest, _options?: Configuration): Promise<GasStation> {
        const result = this.api.v1GasStationsUpdate(gasStationId, updateGasStationRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSweepsApi } from './ObservableAPI';

import { SweepsApiRequestFactory, SweepsApiResponseProcessor} from "../apis/SweepsApi";
export class PromiseSweepsApi {
    private api: ObservableSweepsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SweepsApiRequestFactory,
        responseProcessor?: SweepsApiResponseProcessor
    ) {
        this.api = new ObservableSweepsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param address Address that funds will be swept from
     * @param sweepAddressRequest Request
     */
    public v1SweepsAddressWithHttpInfo(address: string, sweepAddressRequest: SweepAddressRequest, _options?: Configuration): Promise<HttpInfo<SweepAddressResponse>> {
        const result = this.api.v1SweepsAddressWithHttpInfo(address, sweepAddressRequest, _options);
        return result.toPromise();
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param address Address that funds will be swept from
     * @param sweepAddressRequest Request
     */
    public v1SweepsAddress(address: string, sweepAddressRequest: SweepAddressRequest, _options?: Configuration): Promise<SweepAddressResponse> {
        const result = this.api.v1SweepsAddress(address, sweepAddressRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTokensApi } from './ObservableAPI';

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";
export class PromiseTokensApi {
    private api: ObservableTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.api = new ObservableTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a tokens.
     * Create token
     * @param createTokenRequest Request Body
     */
    public v1TokensCreateWithHttpInfo(createTokenRequest: CreateTokenRequest, _options?: Configuration): Promise<HttpInfo<Token>> {
        const result = this.api.v1TokensCreateWithHttpInfo(createTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a tokens.
     * Create token
     * @param createTokenRequest Request Body
     */
    public v1TokensCreate(createTokenRequest: CreateTokenRequest, _options?: Configuration): Promise<Token> {
        const result = this.api.v1TokensCreate(createTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1TokensListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageToken>> {
        const result = this.api.v1TokensListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1TokensList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageToken> {
        const result = this.api.v1TokensList(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get token info by ID
     * Get Token
     * @param tokenId Token ID
     */
    public v1TokensRetrieveWithHttpInfo(tokenId: string, _options?: Configuration): Promise<HttpInfo<Token>> {
        const result = this.api.v1TokensRetrieveWithHttpInfo(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Get token info by ID
     * Get Token
     * @param tokenId Token ID
     */
    public v1TokensRetrieve(tokenId: string, _options?: Configuration): Promise<Token> {
        const result = this.api.v1TokensRetrieve(tokenId, _options);
        return result.toPromise();
    }

    /**
     * Update a tokens.
     * Update token
     * @param tokenId Token ID
     * @param updateTokenRequest Request Body
     */
    public v1TokensUpdateWithHttpInfo(tokenId: string, updateTokenRequest: UpdateTokenRequest, _options?: Configuration): Promise<HttpInfo<Token>> {
        const result = this.api.v1TokensUpdateWithHttpInfo(tokenId, updateTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a tokens.
     * Update token
     * @param tokenId Token ID
     * @param updateTokenRequest Request Body
     */
    public v1TokensUpdate(tokenId: string, updateTokenRequest: UpdateTokenRequest, _options?: Configuration): Promise<Token> {
        const result = this.api.v1TokensUpdate(tokenId, updateTokenRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param estimateFeeRequest Request Body
     */
    public v1TransactionsEstimateFeeWithHttpInfo(estimateFeeRequest: EstimateFeeRequest, _options?: Configuration): Promise<HttpInfo<EstimateFeeResponse>> {
        const result = this.api.v1TransactionsEstimateFeeWithHttpInfo(estimateFeeRequest, _options);
        return result.toPromise();
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param estimateFeeRequest Request Body
     */
    public v1TransactionsEstimateFee(estimateFeeRequest: EstimateFeeRequest, _options?: Configuration): Promise<EstimateFeeResponse> {
        const result = this.api.v1TransactionsEstimateFee(estimateFeeRequest, _options);
        return result.toPromise();
    }

    /**
     * List transactions
     * List transactions
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The blockchain network on which the transaction takes place.
     * @param [tokenIds] The tokenId involved in the transaction.
     * @param [assetIds] The assetId involved in the transaction.
     * @param [hash] The transaction hash, which uniquely identifies a transaction on the blockchain.
     * @param [status] The status of the transaction.
     * @param [cursor] A cursor value for pagination purposes.
     * @param [limit] The number of records to return default: 20
     */
    public v1TransactionsListWithHttpInfo(walletIds?: Array<string>, chainIds?: Array<string>, tokenIds?: Array<string>, assetIds?: Array<string>, hash?: string, status?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageTransaction>> {
        const result = this.api.v1TransactionsListWithHttpInfo(walletIds, chainIds, tokenIds, assetIds, hash, status, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List transactions
     * List transactions
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The blockchain network on which the transaction takes place.
     * @param [tokenIds] The tokenId involved in the transaction.
     * @param [assetIds] The assetId involved in the transaction.
     * @param [hash] The transaction hash, which uniquely identifies a transaction on the blockchain.
     * @param [status] The status of the transaction.
     * @param [cursor] A cursor value for pagination purposes.
     * @param [limit] The number of records to return default: 20
     */
    public v1TransactionsList(walletIds?: Array<string>, chainIds?: Array<string>, tokenIds?: Array<string>, assetIds?: Array<string>, hash?: string, status?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageTransaction> {
        const result = this.api.v1TransactionsList(walletIds, chainIds, tokenIds, assetIds, hash, status, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param transactionId Transaction ID
     */
    public v1TransactionsRetrieveWithHttpInfo(transactionId: string, _options?: Configuration): Promise<HttpInfo<Transaction>> {
        const result = this.api.v1TransactionsRetrieveWithHttpInfo(transactionId, _options);
        return result.toPromise();
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param transactionId Transaction ID
     */
    public v1TransactionsRetrieve(transactionId: string, _options?: Configuration): Promise<Transaction> {
        const result = this.api.v1TransactionsRetrieve(transactionId, _options);
        return result.toPromise();
    }

    /**
     * Sign message
     * Sign message
     * @param signMessageRequest Request Body
     */
    public v1TransactionsSignMessageWithHttpInfo(signMessageRequest: SignMessageRequest, _options?: Configuration): Promise<HttpInfo<SignMessageResponse>> {
        const result = this.api.v1TransactionsSignMessageWithHttpInfo(signMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Sign message
     * Sign message
     * @param signMessageRequest Request Body
     */
    public v1TransactionsSignMessage(signMessageRequest: SignMessageRequest, _options?: Configuration): Promise<SignMessageResponse> {
        const result = this.api.v1TransactionsSignMessage(signMessageRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param createTransferRequest Request Body
     */
    public v1TransactionsTransferWithHttpInfo(createTransferRequest: CreateTransferRequest, _options?: Configuration): Promise<HttpInfo<CreateTransferResponse>> {
        const result = this.api.v1TransactionsTransferWithHttpInfo(createTransferRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param createTransferRequest Request Body
     */
    public v1TransactionsTransfer(createTransferRequest: CreateTransferRequest, _options?: Configuration): Promise<CreateTransferResponse> {
        const result = this.api.v1TransactionsTransfer(createTransferRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWalletsApi } from './ObservableAPI';

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class PromiseWalletsApi {
    private api: ObservableWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param createWalletRequest Request body
     */
    public v1WalletsCreateWithHttpInfo(createWalletRequest: CreateWalletRequest, _options?: Configuration): Promise<HttpInfo<Wallet>> {
        const result = this.api.v1WalletsCreateWithHttpInfo(createWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param createWalletRequest Request body
     */
    public v1WalletsCreate(createWalletRequest: CreateWalletRequest, _options?: Configuration): Promise<Wallet> {
        const result = this.api.v1WalletsCreate(createWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsDeleteWithHttpInfo(walletId: string, _options?: Configuration): Promise<HttpInfo<Wallet>> {
        const result = this.api.v1WalletsDeleteWithHttpInfo(walletId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsDelete(walletId: string, _options?: Configuration): Promise<Wallet> {
        const result = this.api.v1WalletsDelete(walletId, _options);
        return result.toPromise();
    }

    /**
     * List all wallets
     * List wallets
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1WalletsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageWallet>> {
        const result = this.api.v1WalletsListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List all wallets
     * List wallets
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1WalletsList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageWallet> {
        const result = this.api.v1WalletsList(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsRetrieveWithHttpInfo(walletId: string, _options?: Configuration): Promise<HttpInfo<Wallet>> {
        const result = this.api.v1WalletsRetrieveWithHttpInfo(walletId, _options);
        return result.toPromise();
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsRetrieve(walletId: string, _options?: Configuration): Promise<Wallet> {
        const result = this.api.v1WalletsRetrieve(walletId, _options);
        return result.toPromise();
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param walletId Wallet id or uid
     * @param updateWalletRequest Request body
     */
    public v1WalletsUpdateWithHttpInfo(walletId: string, updateWalletRequest: UpdateWalletRequest, _options?: Configuration): Promise<HttpInfo<Wallet>> {
        const result = this.api.v1WalletsUpdateWithHttpInfo(walletId, updateWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param walletId Wallet id or uid
     * @param updateWalletRequest Request body
     */
    public v1WalletsUpdate(walletId: string, updateWalletRequest: UpdateWalletRequest, _options?: Configuration): Promise<Wallet> {
        const result = this.api.v1WalletsUpdate(walletId, updateWalletRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookEndpointsApi } from './ObservableAPI';

import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";
export class PromiseWebhookEndpointsApi {
    private api: ObservableWebhookEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointsApiRequestFactory,
        responseProcessor?: WebhookEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param createEndpoint Request body
     */
    public v1WebhooksEndpointCreateWithHttpInfo(createEndpoint: CreateEndpoint, _options?: Configuration): Promise<HttpInfo<Endpoint>> {
        const result = this.api.v1WebhooksEndpointCreateWithHttpInfo(createEndpoint, _options);
        return result.toPromise();
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param createEndpoint Request body
     */
    public v1WebhooksEndpointCreate(createEndpoint: CreateEndpoint, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhooksEndpointCreate(createEndpoint, _options);
        return result.toPromise();
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointDeleteWithHttpInfo(endpointId: string, _options?: Configuration): Promise<HttpInfo<Endpoint>> {
        const result = this.api.v1WebhooksEndpointDeleteWithHttpInfo(endpointId, _options);
        return result.toPromise();
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointDelete(endpointId: string, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhooksEndpointDelete(endpointId, _options);
        return result.toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param [cursor]
     * @param [limit] The number of records to return default: 20
     */
    public v1WebhooksEndpointListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageEndpoint>> {
        const result = this.api.v1WebhooksEndpointListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param [cursor]
     * @param [limit] The number of records to return default: 20
     */
    public v1WebhooksEndpointList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageEndpoint> {
        const result = this.api.v1WebhooksEndpointList(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointRetrieveWithHttpInfo(endpointId: string, _options?: Configuration): Promise<HttpInfo<Endpoint>> {
        const result = this.api.v1WebhooksEndpointRetrieveWithHttpInfo(endpointId, _options);
        return result.toPromise();
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointRetrieve(endpointId: string, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhooksEndpointRetrieve(endpointId, _options);
        return result.toPromise();
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param endpointId Endpoint ID
     * @param updateEndpoint Request body
     */
    public v1WebhooksEndpointUpdateWithHttpInfo(endpointId: string, updateEndpoint: UpdateEndpoint, _options?: Configuration): Promise<HttpInfo<Endpoint>> {
        const result = this.api.v1WebhooksEndpointUpdateWithHttpInfo(endpointId, updateEndpoint, _options);
        return result.toPromise();
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param endpointId Endpoint ID
     * @param updateEndpoint Request body
     */
    public v1WebhooksEndpointUpdate(endpointId: string, updateEndpoint: UpdateEndpoint, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhooksEndpointUpdate(endpointId, updateEndpoint, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookEventsApi } from './ObservableAPI';

import { WebhookEventsApiRequestFactory, WebhookEventsApiResponseProcessor} from "../apis/WebhookEventsApi";
export class PromiseWebhookEventsApi {
    private api: ObservableWebhookEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEventsApiRequestFactory,
        responseProcessor?: WebhookEventsApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param [cursor]
     * @param [limit] The number of records to return default: 100
     */
    public v1WebhooksEventsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CursorPageEventType>> {
        const result = this.api.v1WebhooksEventsListWithHttpInfo(cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param [cursor]
     * @param [limit] The number of records to return default: 100
     */
    public v1WebhooksEventsList(cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageEventType> {
        const result = this.api.v1WebhooksEventsList(cursor, limit, _options);
        return result.toPromise();
    }


}



