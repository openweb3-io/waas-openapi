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

import ApiClient from '../ApiClient';
import CreateTransferRequestDestination from './CreateTransferRequestDestination';
import CreateTransferRequestSource from './CreateTransferRequestSource';
import Fee from './Fee';

/**
 * The CreateTransferRequest model module.
 * @module model/CreateTransferRequest
 * @version 1.0
 */
class CreateTransferRequest {
    /**
     * Constructs a new <code>CreateTransferRequest</code>.
     * @alias module:model/CreateTransferRequest
     * @param amount {String} The amount to be transferred
     * @param destination {module:model/CreateTransferRequestDestination} 
     * @param source {module:model/CreateTransferRequestSource} 
     * @param tokenId {String} The tokenId to be transferred
     */
    constructor(amount, destination, source, tokenId) { 
        
        CreateTransferRequest.initialize(this, amount, destination, source, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, destination, source, tokenId) { 
        obj['amount'] = amount;
        obj['destination'] = destination;
        obj['source'] = source;
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>CreateTransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransferRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransferRequest} The populated <code>CreateTransferRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransferRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = CreateTransferRequestDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = Fee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = CreateTransferRequestSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTransferRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTransferRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateTransferRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          CreateTransferRequestDestination.validateJSON(data['destination']);
        }
        // ensure the json data is a string
        if (data['extra'] && !(typeof data['extra'] === 'string' || data['extra'] instanceof String)) {
            throw new Error("Expected the field `extra` to be a primitive type in the JSON string but got " + data['extra']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          Fee.validateJSON(data['fee']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          CreateTransferRequestSource.validateJSON(data['source']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

CreateTransferRequest.RequiredProperties = ["amount", "destination", "source", "token_id"];

/**
 * The amount to be transferred
 * @member {String} amount
 */
CreateTransferRequest.prototype['amount'] = undefined;

/**
 * @member {module:model/CreateTransferRequestDestination} destination
 */
CreateTransferRequest.prototype['destination'] = undefined;

/**
 * Extra
 * @member {String} extra
 */
CreateTransferRequest.prototype['extra'] = undefined;

/**
 * @member {module:model/Fee} fee
 */
CreateTransferRequest.prototype['fee'] = undefined;

/**
 * Memo
 * @member {String} memo
 */
CreateTransferRequest.prototype['memo'] = undefined;

/**
 * @member {module:model/CreateTransferRequestSource} source
 */
CreateTransferRequest.prototype['source'] = undefined;

/**
 * The tokenId to be transferred
 * @member {String} token_id
 */
CreateTransferRequest.prototype['token_id'] = undefined;






export default CreateTransferRequest;

