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

/**
 * The CreateTokenRequest model module.
 * @module model/CreateTokenRequest
 * @version 1.0
 */
class CreateTokenRequest {
    /**
     * Constructs a new <code>CreateTokenRequest</code>.
     * @alias module:model/CreateTokenRequest
     */
    constructor() { 
        
        CreateTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokenRequest} obj Optional instance to populate.
     * @return {module:model/CreateTokenRequest} The populated <code>CreateTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTokenRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Token name
 * @member {String} name
 */
CreateTokenRequest.prototype['name'] = undefined;

/**
 * Unique ID
 * @member {String} uid
 */
CreateTokenRequest.prototype['uid'] = undefined;






export default CreateTokenRequest;

