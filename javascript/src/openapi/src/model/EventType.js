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
* Enum class EventType.
* @enum {}
* @readonly
*/
export default class EventType {
    
        /**
         * value: "transaction.success"
         * @const
         */
        "EventTypeDepositSuccess" = "transaction.success";

    

    /**
    * Returns a <code>EventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EventType} The enum <code>EventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

