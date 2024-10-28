/**
 * WaaS OpenAPI Documentation
 * This is a WaaS OpenAPI Server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Chain from '../model/Chain';
import CursorPageChain from '../model/CursorPageChain';
import Error from '../model/Error';

/**
* Chains service.
* @module api/ChainsApi
* @version 1.0
*/
export default class ChainsApi {

    /**
    * Constructs a new ChainsApi. 
    * @alias module:api/ChainsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1ChainsList operation.
     * @callback module:api/ChainsApi~v1ChainsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CursorPageChain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all chains
     * List of all available chains.
     * @param {Object} opts Optional parameters
     * @param {String} [cursor] Cursor
     * @param {Number} [limit] The number of records to return default: 20
     * @param {module:api/ChainsApi~v1ChainsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CursorPageChain}
     */
    v1ChainsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CursorPageChain;
      return this.apiClient.callApi(
        '/api/v1/chains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1ChainsRetrieve operation.
     * @callback module:api/ChainsApi~v1ChainsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Chain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve chain
     * Retrieve chain information.
     * @param {String} chainId Chain ID
     * @param {module:api/ChainsApi~v1ChainsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Chain}
     */
    v1ChainsRetrieve(chainId, callback) {
      let postBody = null;
      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling v1ChainsRetrieve");
      }

      let pathParams = {
        'chainId': chainId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Chain;
      return this.apiClient.callApi(
        '/api/v1/chains/{chainId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
