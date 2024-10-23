/**
 * WaaS OpenAPI Documentation
 * This is a custody wallet service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Address from './model/Address';
import Chain from './model/Chain';
import CreateAddressRequest from './model/CreateAddressRequest';
import CreateEndpoint from './model/CreateEndpoint';
import CreateTokenRequest from './model/CreateTokenRequest';
import CreateTransferRequest from './model/CreateTransferRequest';
import CreateTransferResponse from './model/CreateTransferResponse';
import CreateWalletRequest from './model/CreateWalletRequest';
import CursorPageAddress from './model/CursorPageAddress';
import CursorPageChain from './model/CursorPageChain';
import CursorPageEndpoint from './model/CursorPageEndpoint';
import CursorPageToken from './model/CursorPageToken';
import CursorPageWallet from './model/CursorPageWallet';
import Endpoint from './model/Endpoint';
import Error from './model/Error';
import Fee from './model/Fee';
import FeeType from './model/FeeType';
import PageTransaction from './model/PageTransaction';
import Token from './model/Token';
import Transaction from './model/Transaction';
import TransactionEndpoint from './model/TransactionEndpoint';
import TransactionType from './model/TransactionType';
import UpdateEndpoint from './model/UpdateEndpoint';
import UpdateTokenRequest from './model/UpdateTokenRequest';
import UpdateWalletRequest from './model/UpdateWalletRequest';
import Wallet from './model/Wallet';
import AddressesApi from './api/AddressesApi';
import ChainsApi from './api/ChainsApi';
import TokensApi from './api/TokensApi';
import TransactionsApi from './api/TransactionsApi';
import WalletsApi from './api/WalletsApi';
import WebhookEndpointsApi from './api/WebhookEndpointsApi';


/**
* This_is_a_custody_wallet_service_openapi_server_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WaaSOpenApiDocumentation = require('index'); // See note below*.
* var xxxSvc = new WaaSOpenApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WaaSOpenApiDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WaaSOpenApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WaaSOpenApiDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The Chain model constructor.
     * @property {module:model/Chain}
     */
    Chain,

    /**
     * The CreateAddressRequest model constructor.
     * @property {module:model/CreateAddressRequest}
     */
    CreateAddressRequest,

    /**
     * The CreateEndpoint model constructor.
     * @property {module:model/CreateEndpoint}
     */
    CreateEndpoint,

    /**
     * The CreateTokenRequest model constructor.
     * @property {module:model/CreateTokenRequest}
     */
    CreateTokenRequest,

    /**
     * The CreateTransferRequest model constructor.
     * @property {module:model/CreateTransferRequest}
     */
    CreateTransferRequest,

    /**
     * The CreateTransferResponse model constructor.
     * @property {module:model/CreateTransferResponse}
     */
    CreateTransferResponse,

    /**
     * The CreateWalletRequest model constructor.
     * @property {module:model/CreateWalletRequest}
     */
    CreateWalletRequest,

    /**
     * The CursorPageAddress model constructor.
     * @property {module:model/CursorPageAddress}
     */
    CursorPageAddress,

    /**
     * The CursorPageChain model constructor.
     * @property {module:model/CursorPageChain}
     */
    CursorPageChain,

    /**
     * The CursorPageEndpoint model constructor.
     * @property {module:model/CursorPageEndpoint}
     */
    CursorPageEndpoint,

    /**
     * The CursorPageToken model constructor.
     * @property {module:model/CursorPageToken}
     */
    CursorPageToken,

    /**
     * The CursorPageWallet model constructor.
     * @property {module:model/CursorPageWallet}
     */
    CursorPageWallet,

    /**
     * The Endpoint model constructor.
     * @property {module:model/Endpoint}
     */
    Endpoint,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Fee model constructor.
     * @property {module:model/Fee}
     */
    Fee,

    /**
     * The FeeType model constructor.
     * @property {module:model/FeeType}
     */
    FeeType,

    /**
     * The PageTransaction model constructor.
     * @property {module:model/PageTransaction}
     */
    PageTransaction,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction,

    /**
     * The TransactionEndpoint model constructor.
     * @property {module:model/TransactionEndpoint}
     */
    TransactionEndpoint,

    /**
     * The TransactionType model constructor.
     * @property {module:model/TransactionType}
     */
    TransactionType,

    /**
     * The UpdateEndpoint model constructor.
     * @property {module:model/UpdateEndpoint}
     */
    UpdateEndpoint,

    /**
     * The UpdateTokenRequest model constructor.
     * @property {module:model/UpdateTokenRequest}
     */
    UpdateTokenRequest,

    /**
     * The UpdateWalletRequest model constructor.
     * @property {module:model/UpdateWalletRequest}
     */
    UpdateWalletRequest,

    /**
     * The Wallet model constructor.
     * @property {module:model/Wallet}
     */
    Wallet,

    /**
    * The AddressesApi service constructor.
    * @property {module:api/AddressesApi}
    */
    AddressesApi,

    /**
    * The ChainsApi service constructor.
    * @property {module:api/ChainsApi}
    */
    ChainsApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi,

    /**
    * The WalletsApi service constructor.
    * @property {module:api/WalletsApi}
    */
    WalletsApi,

    /**
    * The WebhookEndpointsApi service constructor.
    * @property {module:api/WebhookEndpointsApi}
    */
    WebhookEndpointsApi
};
