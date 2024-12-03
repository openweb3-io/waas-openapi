import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AddressesApiRequestFactory, AddressesApiResponseProcessor} from "../apis/AddressesApi";
export class ObservableAddressesApi {
    private requestFactory: AddressesApiRequestFactory;
    private responseProcessor: AddressesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressesApiRequestFactory,
        responseProcessor?: AddressesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AddressesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AddressesApiResponseProcessor();
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The chain ids.
     * @param [cursor] The cursor to use for pagination.
     * @param [limit] The number of records to return default: 20
     */
    public v1AddressesListWithHttpInfo(walletIds?: Array<string>, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageAddress>> {
        const requestContextPromise = this.requestFactory.v1AddressesList(walletIds, chainIds, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddressesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of all available addresses.
     * List all addresses
     * @param [walletIds] Unique system generated identifier of the wallet
     * @param [chainIds] The chain ids.
     * @param [cursor] The cursor to use for pagination.
     * @param [limit] The number of records to return default: 20
     */
    public v1AddressesList(walletIds?: Array<string>, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageAddress> {
        return this.v1AddressesListWithHttpInfo(walletIds, chainIds, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageAddress>) => apiResponse.data));
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param addresses Addresses
     * @param chainId Chain ID
     */
    public v1AddressesValidateWithHttpInfo(addresses: Array<string>, chainId: string, _options?: Configuration): Observable<HttpInfo<ValidateAddressesReply>> {
        const requestContextPromise = this.requestFactory.v1AddressesValidate(addresses, chainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AddressesValidateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validate addresses
     * Validate addresses
     * @param addresses Addresses
     * @param chainId Chain ID
     */
    public v1AddressesValidate(addresses: Array<string>, chainId: string, _options?: Configuration): Observable<ValidateAddressesReply> {
        return this.v1AddressesValidateWithHttpInfo(addresses, chainId, _options).pipe(map((apiResponse: HttpInfo<ValidateAddressesReply>) => apiResponse.data));
    }

    /**
     * Create address for wallet
     * Create address
     * @param walletId Wallet id or uid
     * @param createAddressRequest Request Body
     */
    public v1WalletsCreateAddressWithHttpInfo(walletId: string, createAddressRequest: CreateAddressRequest, _options?: Configuration): Observable<HttpInfo<Address>> {
        const requestContextPromise = this.requestFactory.v1WalletsCreateAddress(walletId, createAddressRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsCreateAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create address for wallet
     * Create address
     * @param walletId Wallet id or uid
     * @param createAddressRequest Request Body
     */
    public v1WalletsCreateAddress(walletId: string, createAddressRequest: CreateAddressRequest, _options?: Configuration): Observable<Address> {
        return this.v1WalletsCreateAddressWithHttpInfo(walletId, createAddressRequest, _options).pipe(map((apiResponse: HttpInfo<Address>) => apiResponse.data));
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param walletId Wallet id or uid
     * @param address Address
     */
    public v1WalletsGetAddressWithHttpInfo(walletId: string, address: string, _options?: Configuration): Observable<HttpInfo<Address>> {
        const requestContextPromise = this.requestFactory.v1WalletsGetAddress(walletId, address, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsGetAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get specific address information in wallet
     * Get address information
     * @param walletId Wallet id or uid
     * @param address Address
     */
    public v1WalletsGetAddress(walletId: string, address: string, _options?: Configuration): Observable<Address> {
        return this.v1WalletsGetAddressWithHttpInfo(walletId, address, _options).pipe(map((apiResponse: HttpInfo<Address>) => apiResponse.data));
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param walletId Wallet id or uid
     * @param [chainIds] chain ids
     * @param [cursor] Cursor
     * @param [limit] Limit, default is 20
     */
    public v1WalletsListAddressesWithHttpInfo(walletId: string, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageAddress>> {
        const requestContextPromise = this.requestFactory.v1WalletsListAddresses(walletId, chainIds, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsListAddressesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List addresses in wallet
     * List wallet addresses
     * @param walletId Wallet id or uid
     * @param [chainIds] chain ids
     * @param [cursor] Cursor
     * @param [limit] Limit, default is 20
     */
    public v1WalletsListAddresses(walletId: string, chainIds?: Array<string>, cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageAddress> {
        return this.v1WalletsListAddressesWithHttpInfo(walletId, chainIds, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageAddress>) => apiResponse.data));
    }

}

import { ChainsApiRequestFactory, ChainsApiResponseProcessor} from "../apis/ChainsApi";
export class ObservableChainsApi {
    private requestFactory: ChainsApiRequestFactory;
    private responseProcessor: ChainsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChainsApiRequestFactory,
        responseProcessor?: ChainsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChainsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChainsApiResponseProcessor();
    }

    /**
     * List of all available chains.
     * List all chains
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1ChainsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageChain>> {
        const requestContextPromise = this.requestFactory.v1ChainsList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ChainsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of all available chains.
     * List all chains
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1ChainsList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageChain> {
        return this.v1ChainsListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageChain>) => apiResponse.data));
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param chainId Chain ID
     */
    public v1ChainsRetrieveWithHttpInfo(chainId: string, _options?: Configuration): Observable<HttpInfo<Chain>> {
        const requestContextPromise = this.requestFactory.v1ChainsRetrieve(chainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ChainsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve chain information.
     * Retrieve chain
     * @param chainId Chain ID
     */
    public v1ChainsRetrieve(chainId: string, _options?: Configuration): Observable<Chain> {
        return this.v1ChainsRetrieveWithHttpInfo(chainId, _options).pipe(map((apiResponse: HttpInfo<Chain>) => apiResponse.data));
    }

}

import { GasStationsApiRequestFactory, GasStationsApiResponseProcessor} from "../apis/GasStationsApi";
export class ObservableGasStationsApi {
    private requestFactory: GasStationsApiRequestFactory;
    private responseProcessor: GasStationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GasStationsApiRequestFactory,
        responseProcessor?: GasStationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GasStationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GasStationsApiResponseProcessor();
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param createGasStationRequest Request body
     */
    public v1GasStationsCreateWithHttpInfo(createGasStationRequest: CreateGasStationRequest, _options?: Configuration): Observable<HttpInfo<GasStation>> {
        const requestContextPromise = this.requestFactory.v1GasStationsCreate(createGasStationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Gas Station
     * Create gas station
     * @param createGasStationRequest Request body
     */
    public v1GasStationsCreate(createGasStationRequest: CreateGasStationRequest, _options?: Configuration): Observable<GasStation> {
        return this.v1GasStationsCreateWithHttpInfo(createGasStationRequest, _options).pipe(map((apiResponse: HttpInfo<GasStation>) => apiResponse.data));
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsDeleteWithHttpInfo(gasStationId: string, _options?: Configuration): Observable<HttpInfo<GasStation>> {
        const requestContextPromise = this.requestFactory.v1GasStationsDelete(gasStationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Gas Station
     * Delete gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsDelete(gasStationId: string, _options?: Configuration): Observable<GasStation> {
        return this.v1GasStationsDeleteWithHttpInfo(gasStationId, _options).pipe(map((apiResponse: HttpInfo<GasStation>) => apiResponse.data));
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param getGasStationDepositAddressRequest Request body
     */
    public v1GasStationsGetOrCreateDepositAddressWithHttpInfo(getGasStationDepositAddressRequest: GetGasStationDepositAddressRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsGetOrCreateDepositAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get or create a deposit address for a gas station
     * Get or create deposit address
     * @param getGasStationDepositAddressRequest Request body
     */
    public v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest: GetGasStationDepositAddressRequest, _options?: Configuration): Observable<string> {
        return this.v1GasStationsGetOrCreateDepositAddressWithHttpInfo(getGasStationDepositAddressRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * List all gas stations
     * List gas stations
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1GasStationsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageGasStation>> {
        const requestContextPromise = this.requestFactory.v1GasStationsList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all gas stations
     * List gas stations
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1GasStationsList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageGasStation> {
        return this.v1GasStationsListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageGasStation>) => apiResponse.data));
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsRetrieveWithHttpInfo(gasStationId: string, _options?: Configuration): Observable<HttpInfo<GasStation>> {
        const requestContextPromise = this.requestFactory.v1GasStationsRetrieve(gasStationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a gas station by ID
     * Get gas station
     * @param gasStationId Gas Station ID
     */
    public v1GasStationsRetrieve(gasStationId: string, _options?: Configuration): Observable<GasStation> {
        return this.v1GasStationsRetrieveWithHttpInfo(gasStationId, _options).pipe(map((apiResponse: HttpInfo<GasStation>) => apiResponse.data));
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param gasStationId Gas Station ID
     * @param updateGasStationRequest Request body
     */
    public v1GasStationsUpdateWithHttpInfo(gasStationId: string, updateGasStationRequest: UpdateGasStationRequest, _options?: Configuration): Observable<HttpInfo<GasStation>> {
        const requestContextPromise = this.requestFactory.v1GasStationsUpdate(gasStationId, updateGasStationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GasStationsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Gas Station
     * Update gas station
     * @param gasStationId Gas Station ID
     * @param updateGasStationRequest Request body
     */
    public v1GasStationsUpdate(gasStationId: string, updateGasStationRequest: UpdateGasStationRequest, _options?: Configuration): Observable<GasStation> {
        return this.v1GasStationsUpdateWithHttpInfo(gasStationId, updateGasStationRequest, _options).pipe(map((apiResponse: HttpInfo<GasStation>) => apiResponse.data));
    }

}

import { SweepsApiRequestFactory, SweepsApiResponseProcessor} from "../apis/SweepsApi";
export class ObservableSweepsApi {
    private requestFactory: SweepsApiRequestFactory;
    private responseProcessor: SweepsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SweepsApiRequestFactory,
        responseProcessor?: SweepsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SweepsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SweepsApiResponseProcessor();
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param address Address that funds will be swept from
     * @param sweepAddressRequest Request
     */
    public v1SweepsAddressWithHttpInfo(address: string, sweepAddressRequest: SweepAddressRequest, _options?: Configuration): Observable<HttpInfo<SweepAddressResponse>> {
        const requestContextPromise = this.requestFactory.v1SweepsAddress(address, sweepAddressRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SweepsAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sweep funds from a single address
     * Sweep address
     * @param address Address that funds will be swept from
     * @param sweepAddressRequest Request
     */
    public v1SweepsAddress(address: string, sweepAddressRequest: SweepAddressRequest, _options?: Configuration): Observable<SweepAddressResponse> {
        return this.v1SweepsAddressWithHttpInfo(address, sweepAddressRequest, _options).pipe(map((apiResponse: HttpInfo<SweepAddressResponse>) => apiResponse.data));
    }

}

import { TokensApiRequestFactory, TokensApiResponseProcessor} from "../apis/TokensApi";
export class ObservableTokensApi {
    private requestFactory: TokensApiRequestFactory;
    private responseProcessor: TokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokensApiRequestFactory,
        responseProcessor?: TokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokensApiResponseProcessor();
    }

    /**
     * Create a tokens.
     * Create token
     * @param createTokenRequest Request Body
     */
    public v1TokensCreateWithHttpInfo(createTokenRequest: CreateTokenRequest, _options?: Configuration): Observable<HttpInfo<Token>> {
        const requestContextPromise = this.requestFactory.v1TokensCreate(createTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TokensCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a tokens.
     * Create token
     * @param createTokenRequest Request Body
     */
    public v1TokensCreate(createTokenRequest: CreateTokenRequest, _options?: Configuration): Observable<Token> {
        return this.v1TokensCreateWithHttpInfo(createTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Token>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1TokensListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageToken>> {
        const requestContextPromise = this.requestFactory.v1TokensList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TokensListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all tokens.
     * List tokens
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1TokensList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageToken> {
        return this.v1TokensListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageToken>) => apiResponse.data));
    }

    /**
     * Get token info by ID
     * Get Token
     * @param tokenId Token ID
     */
    public v1TokensRetrieveWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<Token>> {
        const requestContextPromise = this.requestFactory.v1TokensRetrieve(tokenId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TokensRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get token info by ID
     * Get Token
     * @param tokenId Token ID
     */
    public v1TokensRetrieve(tokenId: string, _options?: Configuration): Observable<Token> {
        return this.v1TokensRetrieveWithHttpInfo(tokenId, _options).pipe(map((apiResponse: HttpInfo<Token>) => apiResponse.data));
    }

    /**
     * Update a tokens.
     * Update token
     * @param tokenId Token ID
     * @param updateTokenRequest Request Body
     */
    public v1TokensUpdateWithHttpInfo(tokenId: string, updateTokenRequest: UpdateTokenRequest, _options?: Configuration): Observable<HttpInfo<Token>> {
        const requestContextPromise = this.requestFactory.v1TokensUpdate(tokenId, updateTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TokensUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a tokens.
     * Update token
     * @param tokenId Token ID
     * @param updateTokenRequest Request Body
     */
    public v1TokensUpdate(tokenId: string, updateTokenRequest: UpdateTokenRequest, _options?: Configuration): Observable<Token> {
        return this.v1TokensUpdateWithHttpInfo(tokenId, updateTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Token>) => apiResponse.data));
    }

}

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class ObservableTransactionsApi {
    private requestFactory: TransactionsApiRequestFactory;
    private responseProcessor: TransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionsApiResponseProcessor();
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param estimateFeeRequest Request Body
     */
    public v1TransactionsEstimateFeeWithHttpInfo(estimateFeeRequest: EstimateFeeRequest, _options?: Configuration): Observable<HttpInfo<EstimateFeeResponse>> {
        const requestContextPromise = this.requestFactory.v1TransactionsEstimateFee(estimateFeeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransactionsEstimateFeeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Estimate fee for a transfer transaction
     * Estimate fee
     * @param estimateFeeRequest Request Body
     */
    public v1TransactionsEstimateFee(estimateFeeRequest: EstimateFeeRequest, _options?: Configuration): Observable<EstimateFeeResponse> {
        return this.v1TransactionsEstimateFeeWithHttpInfo(estimateFeeRequest, _options).pipe(map((apiResponse: HttpInfo<EstimateFeeResponse>) => apiResponse.data));
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
    public v1TransactionsListWithHttpInfo(walletIds?: Array<string>, chainIds?: Array<string>, tokenIds?: Array<string>, assetIds?: Array<string>, hash?: string, status?: string, cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageTransaction>> {
        const requestContextPromise = this.requestFactory.v1TransactionsList(walletIds, chainIds, tokenIds, assetIds, hash, status, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransactionsListWithHttpInfo(rsp)));
            }));
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
    public v1TransactionsList(walletIds?: Array<string>, chainIds?: Array<string>, tokenIds?: Array<string>, assetIds?: Array<string>, hash?: string, status?: string, cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageTransaction> {
        return this.v1TransactionsListWithHttpInfo(walletIds, chainIds, tokenIds, assetIds, hash, status, cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageTransaction>) => apiResponse.data));
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param transactionId Transaction ID
     */
    public v1TransactionsRetrieveWithHttpInfo(transactionId: string, _options?: Configuration): Observable<HttpInfo<Transaction>> {
        const requestContextPromise = this.requestFactory.v1TransactionsRetrieve(transactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransactionsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a transaction by ID
     * Get transaction
     * @param transactionId Transaction ID
     */
    public v1TransactionsRetrieve(transactionId: string, _options?: Configuration): Observable<Transaction> {
        return this.v1TransactionsRetrieveWithHttpInfo(transactionId, _options).pipe(map((apiResponse: HttpInfo<Transaction>) => apiResponse.data));
    }

    /**
     * Sign message
     * Sign message
     * @param signMessageRequest Request Body
     */
    public v1TransactionsSignMessageWithHttpInfo(signMessageRequest: SignMessageRequest, _options?: Configuration): Observable<HttpInfo<SignMessageResponse>> {
        const requestContextPromise = this.requestFactory.v1TransactionsSignMessage(signMessageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransactionsSignMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sign message
     * Sign message
     * @param signMessageRequest Request Body
     */
    public v1TransactionsSignMessage(signMessageRequest: SignMessageRequest, _options?: Configuration): Observable<SignMessageResponse> {
        return this.v1TransactionsSignMessageWithHttpInfo(signMessageRequest, _options).pipe(map((apiResponse: HttpInfo<SignMessageResponse>) => apiResponse.data));
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param createTransferRequest Request Body
     */
    public v1TransactionsTransferWithHttpInfo(createTransferRequest: CreateTransferRequest, _options?: Configuration): Observable<HttpInfo<CreateTransferResponse>> {
        const requestContextPromise = this.requestFactory.v1TransactionsTransfer(createTransferRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransactionsTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a transfer transaction
     * Transfer token
     * @param createTransferRequest Request Body
     */
    public v1TransactionsTransfer(createTransferRequest: CreateTransferRequest, _options?: Configuration): Observable<CreateTransferResponse> {
        return this.v1TransactionsTransferWithHttpInfo(createTransferRequest, _options).pipe(map((apiResponse: HttpInfo<CreateTransferResponse>) => apiResponse.data));
    }

}

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class ObservableWalletsApi {
    private requestFactory: WalletsApiRequestFactory;
    private responseProcessor: WalletsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletsApiResponseProcessor();
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param createWalletRequest Request body
     */
    public v1WalletsCreateWithHttpInfo(createWalletRequest: CreateWalletRequest, _options?: Configuration): Observable<HttpInfo<Wallet>> {
        const requestContextPromise = this.requestFactory.v1WalletsCreate(createWalletRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Wallet
     * Create wallet
     * @param createWalletRequest Request body
     */
    public v1WalletsCreate(createWalletRequest: CreateWalletRequest, _options?: Configuration): Observable<Wallet> {
        return this.v1WalletsCreateWithHttpInfo(createWalletRequest, _options).pipe(map((apiResponse: HttpInfo<Wallet>) => apiResponse.data));
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsDeleteWithHttpInfo(walletId: string, _options?: Configuration): Observable<HttpInfo<Wallet>> {
        const requestContextPromise = this.requestFactory.v1WalletsDelete(walletId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Wallet
     * Delete wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsDelete(walletId: string, _options?: Configuration): Observable<Wallet> {
        return this.v1WalletsDeleteWithHttpInfo(walletId, _options).pipe(map((apiResponse: HttpInfo<Wallet>) => apiResponse.data));
    }

    /**
     * List all wallets
     * List wallets
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1WalletsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageWallet>> {
        const requestContextPromise = this.requestFactory.v1WalletsList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all wallets
     * List wallets
     * @param [cursor] Cursor
     * @param [limit] The number of records to return default: 20
     */
    public v1WalletsList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageWallet> {
        return this.v1WalletsListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageWallet>) => apiResponse.data));
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsRetrieveWithHttpInfo(walletId: string, _options?: Configuration): Observable<HttpInfo<Wallet>> {
        const requestContextPromise = this.requestFactory.v1WalletsRetrieve(walletId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a wallet by ID
     * Get wallet
     * @param walletId Wallet id or uid
     */
    public v1WalletsRetrieve(walletId: string, _options?: Configuration): Observable<Wallet> {
        return this.v1WalletsRetrieveWithHttpInfo(walletId, _options).pipe(map((apiResponse: HttpInfo<Wallet>) => apiResponse.data));
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param walletId Wallet id or uid
     * @param updateWalletRequest Request body
     */
    public v1WalletsUpdateWithHttpInfo(walletId: string, updateWalletRequest: UpdateWalletRequest, _options?: Configuration): Observable<HttpInfo<Wallet>> {
        const requestContextPromise = this.requestFactory.v1WalletsUpdate(walletId, updateWalletRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WalletsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Wallet
     * Update wallet
     * @param walletId Wallet id or uid
     * @param updateWalletRequest Request body
     */
    public v1WalletsUpdate(walletId: string, updateWalletRequest: UpdateWalletRequest, _options?: Configuration): Observable<Wallet> {
        return this.v1WalletsUpdateWithHttpInfo(walletId, updateWalletRequest, _options).pipe(map((apiResponse: HttpInfo<Wallet>) => apiResponse.data));
    }

}

import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";
export class ObservableWebhookEndpointsApi {
    private requestFactory: WebhookEndpointsApiRequestFactory;
    private responseProcessor: WebhookEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointsApiRequestFactory,
        responseProcessor?: WebhookEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookEndpointsApiResponseProcessor();
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param createEndpoint Request body
     */
    public v1WebhooksEndpointCreateWithHttpInfo(createEndpoint: CreateEndpoint, _options?: Configuration): Observable<HttpInfo<Endpoint>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEndpointCreate(createEndpoint, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEndpointCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a webhook endpoint
     * Create webhook endpoint
     * @param createEndpoint Request body
     */
    public v1WebhooksEndpointCreate(createEndpoint: CreateEndpoint, _options?: Configuration): Observable<Endpoint> {
        return this.v1WebhooksEndpointCreateWithHttpInfo(createEndpoint, _options).pipe(map((apiResponse: HttpInfo<Endpoint>) => apiResponse.data));
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointDeleteWithHttpInfo(endpointId: string, _options?: Configuration): Observable<HttpInfo<Endpoint>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEndpointDelete(endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEndpointDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete specific webhook endpoint
     * Delete webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointDelete(endpointId: string, _options?: Configuration): Observable<Endpoint> {
        return this.v1WebhooksEndpointDeleteWithHttpInfo(endpointId, _options).pipe(map((apiResponse: HttpInfo<Endpoint>) => apiResponse.data));
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param [cursor]
     * @param [limit] The number of records to return default: 20
     */
    public v1WebhooksEndpointListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageEndpoint>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEndpointList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEndpointListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param [cursor]
     * @param [limit] The number of records to return default: 20
     */
    public v1WebhooksEndpointList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageEndpoint> {
        return this.v1WebhooksEndpointListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageEndpoint>) => apiResponse.data));
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointRetrieveWithHttpInfo(endpointId: string, _options?: Configuration): Observable<HttpInfo<Endpoint>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEndpointRetrieve(endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEndpointRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get specific webhook endpoint
     * Get webhook endpoint
     * @param endpointId Endpoint ID
     */
    public v1WebhooksEndpointRetrieve(endpointId: string, _options?: Configuration): Observable<Endpoint> {
        return this.v1WebhooksEndpointRetrieveWithHttpInfo(endpointId, _options).pipe(map((apiResponse: HttpInfo<Endpoint>) => apiResponse.data));
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param endpointId Endpoint ID
     * @param updateEndpoint Request body
     */
    public v1WebhooksEndpointUpdateWithHttpInfo(endpointId: string, updateEndpoint: UpdateEndpoint, _options?: Configuration): Observable<HttpInfo<Endpoint>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEndpointUpdate(endpointId, updateEndpoint, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEndpointUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update specific webhook endpoint
     * Update webhook endpoint
     * @param endpointId Endpoint ID
     * @param updateEndpoint Request body
     */
    public v1WebhooksEndpointUpdate(endpointId: string, updateEndpoint: UpdateEndpoint, _options?: Configuration): Observable<Endpoint> {
        return this.v1WebhooksEndpointUpdateWithHttpInfo(endpointId, updateEndpoint, _options).pipe(map((apiResponse: HttpInfo<Endpoint>) => apiResponse.data));
    }

}

import { WebhookEventsApiRequestFactory, WebhookEventsApiResponseProcessor} from "../apis/WebhookEventsApi";
export class ObservableWebhookEventsApi {
    private requestFactory: WebhookEventsApiRequestFactory;
    private responseProcessor: WebhookEventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEventsApiRequestFactory,
        responseProcessor?: WebhookEventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookEventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookEventsApiResponseProcessor();
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param [cursor]
     * @param [limit] The number of records to return default: 100
     */
    public v1WebhooksEventsListWithHttpInfo(cursor?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CursorPageEventType>> {
        const requestContextPromise = this.requestFactory.v1WebhooksEventsList(cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhooksEventsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List webhook event types
     * List webhook event types
     * @param [cursor]
     * @param [limit] The number of records to return default: 100
     */
    public v1WebhooksEventsList(cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageEventType> {
        return this.v1WebhooksEventsListWithHttpInfo(cursor, limit, _options).pipe(map((apiResponse: HttpInfo<CursorPageEventType>) => apiResponse.data));
    }

}
