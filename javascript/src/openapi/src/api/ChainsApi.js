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


import ApiClient from "../ApiClient";
import CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain from '../model/CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain';
import Error from '../model/Error';
import Openweb3IoWaasAppWaasOpenapiServerApiDtosChain from '../model/Openweb3IoWaasAppWaasOpenapiServerApiDtosChain';

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
     * @param {module:model/CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all chains
     * List of all available chains.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor 
     * @param {Number} opts.limit 
     * @param {module:api/ChainsApi~v1ChainsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain}
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

      let authNames = ['ApiKeyAuth', 'SignatureAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain;
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
     * @param {module:model/Openweb3IoWaasAppWaasOpenapiServerApiDtosChain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve chain
     * Retrieve chain information.
     * @param {String} id Chain ID
     * @param {module:api/ChainsApi~v1ChainsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Openweb3IoWaasAppWaasOpenapiServerApiDtosChain}
     */
    v1ChainsRetrieve(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1ChainsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth', 'SignatureAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Openweb3IoWaasAppWaasOpenapiServerApiDtosChain;
      return this.apiClient.callApi(
        '/api/v1/chains/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
