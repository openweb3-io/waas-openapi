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

import ApiClient from '../ApiClient';

/**
 * The CreateAddressRequest model module.
 * @module model/CreateAddressRequest
 * @version 1.0
 */
class CreateAddressRequest {
    /**
     * Constructs a new <code>CreateAddressRequest</code>.
     * @alias module:model/CreateAddressRequest
     * @param chainId {String} Chain ID
     */
    constructor(chainId) { 
        
        CreateAddressRequest.initialize(this, chainId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chainId) { 
        obj['chain_id'] = chainId;
    }

    /**
     * Constructs a <code>CreateAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAddressRequest} obj Optional instance to populate.
     * @return {module:model/CreateAddressRequest} The populated <code>CreateAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAddressRequest();

            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Chain ID
 * @member {String} chain_id
 */
CreateAddressRequest.prototype['chain_id'] = undefined;






export default CreateAddressRequest;

