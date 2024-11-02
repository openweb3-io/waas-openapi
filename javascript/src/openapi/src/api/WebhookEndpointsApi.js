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
import CreateEndpoint from '../model/CreateEndpoint';
import CursorIteratorEndpoint from '../model/CursorIteratorEndpoint';
import Endpoint from '../model/Endpoint';
import Error from '../model/Error';
import UpdateEndpoint from '../model/UpdateEndpoint';

/**
* WebhookEndpoints service.
* @module api/WebhookEndpointsApi
* @version 1.0
*/
export default class WebhookEndpointsApi {

    /**
    * Constructs a new WebhookEndpointsApi. 
    * @alias module:api/WebhookEndpointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1WebhooksEndpointCreate operation.
     * @callback module:api/WebhookEndpointsApi~v1WebhooksEndpointCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endpoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create webhook endpoint
     * Create a webhook endpoint
     * @param {module:model/CreateEndpoint} createEndpoint Request body
     * @param {module:api/WebhookEndpointsApi~v1WebhooksEndpointCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Endpoint}
     */
    v1WebhooksEndpointCreate(createEndpoint, callback) {
      let postBody = createEndpoint;
      // verify the required parameter 'createEndpoint' is set
      if (createEndpoint === undefined || createEndpoint === null) {
        throw new Error("Missing the required parameter 'createEndpoint' when calling v1WebhooksEndpointCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/api/v1/webhooks/endpoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1WebhooksEndpointDelete operation.
     * @callback module:api/WebhookEndpointsApi~v1WebhooksEndpointDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endpoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete webhook endpoint
     * Delete specific webhook endpoint
     * @param {String} endpointId Endpoint ID
     * @param {module:api/WebhookEndpointsApi~v1WebhooksEndpointDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Endpoint}
     */
    v1WebhooksEndpointDelete(endpointId, callback) {
      let postBody = null;
      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw new Error("Missing the required parameter 'endpointId' when calling v1WebhooksEndpointDelete");
      }

      let pathParams = {
        'endpointId': endpointId
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
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/api/v1/webhooks/endpoints/{endpointId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1WebhooksEndpointList operation.
     * @callback module:api/WebhookEndpointsApi~v1WebhooksEndpointListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CursorIteratorEndpoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param {Object} opts Optional parameters
     * @param {String} [cursor] 
     * @param {Number} [limit] The number of records to return default: 20
     * @param {module:api/WebhookEndpointsApi~v1WebhooksEndpointListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CursorIteratorEndpoint}
     */
    v1WebhooksEndpointList(opts, callback) {
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
      let returnType = CursorIteratorEndpoint;
      return this.apiClient.callApi(
        '/api/v1/webhooks/endpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1WebhooksEndpointRetrieve operation.
     * @callback module:api/WebhookEndpointsApi~v1WebhooksEndpointRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endpoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook endpoint
     * Get specific webhook endpoint
     * @param {String} endpointId Endpoint ID
     * @param {module:api/WebhookEndpointsApi~v1WebhooksEndpointRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Endpoint}
     */
    v1WebhooksEndpointRetrieve(endpointId, callback) {
      let postBody = null;
      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw new Error("Missing the required parameter 'endpointId' when calling v1WebhooksEndpointRetrieve");
      }

      let pathParams = {
        'endpointId': endpointId
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
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/api/v1/webhooks/endpoints/{endpointId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1WebhooksEndpointUpdate operation.
     * @callback module:api/WebhookEndpointsApi~v1WebhooksEndpointUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endpoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update webhook endpoint
     * Update specific webhook endpoint
     * @param {String} endpointId Endpoint ID
     * @param {module:model/UpdateEndpoint} updateEndpoint Request body
     * @param {module:api/WebhookEndpointsApi~v1WebhooksEndpointUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Endpoint}
     */
    v1WebhooksEndpointUpdate(endpointId, updateEndpoint, callback) {
      let postBody = updateEndpoint;
      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw new Error("Missing the required parameter 'endpointId' when calling v1WebhooksEndpointUpdate");
      }
      // verify the required parameter 'updateEndpoint' is set
      if (updateEndpoint === undefined || updateEndpoint === null) {
        throw new Error("Missing the required parameter 'updateEndpoint' when calling v1WebhooksEndpointUpdate");
      }

      let pathParams = {
        'endpointId': endpointId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/api/v1/webhooks/endpoints/{endpointId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
