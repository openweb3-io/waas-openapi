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
 * The UpdateWalletRequest model module.
 * @module model/UpdateWalletRequest
 * @version 1.0
 */
class UpdateWalletRequest {
    /**
     * Constructs a new <code>UpdateWalletRequest</code>.
     * @alias module:model/UpdateWalletRequest
     */
    constructor() { 
        
        UpdateWalletRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWalletRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWalletRequest} The populated <code>UpdateWalletRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWalletRequest();

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
 * Wallet Name
 * @member {String} name
 */
UpdateWalletRequest.prototype['name'] = undefined;

/**
 * Custom ID
 * @member {String} uid
 */
UpdateWalletRequest.prototype['uid'] = undefined;






export default UpdateWalletRequest;

