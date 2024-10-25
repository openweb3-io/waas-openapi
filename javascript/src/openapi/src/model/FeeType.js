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
* Enum class FeeType.
* @enum {}
* @readonly
*/
export default class FeeType {
    
        /**
         * value: 0
         * @const
         */
        "Fixed" = 0;

    

    /**
    * Returns a <code>FeeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FeeType} The enum <code>FeeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

