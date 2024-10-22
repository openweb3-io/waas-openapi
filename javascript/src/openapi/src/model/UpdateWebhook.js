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
import EventType from './EventType';

/**
 * The UpdateWebhook model module.
 * @module model/UpdateWebhook
 * @version 1.0
 */
class UpdateWebhook {
    /**
     * Constructs a new <code>UpdateWebhook</code>.
     * @alias module:model/UpdateWebhook
     * @param eventTypes {Array.<module:model/EventType>} 
     * @param headers {Object.<String, String>} 
     * @param metadata {Object.<String, Object>} 
     */
    constructor(eventTypes, headers, metadata) { 
        
        UpdateWebhook.initialize(this, eventTypes, headers, metadata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTypes, headers, metadata) { 
        obj['eventTypes'] = eventTypes;
        obj['headers'] = headers;
        obj['metadata'] = metadata;
    }

    /**
     * Constructs a <code>UpdateWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWebhook} obj Optional instance to populate.
     * @return {module:model/UpdateWebhook} The populated <code>UpdateWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebhook();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('eventTypes')) {
                obj['eventTypes'] = ApiClient.convertToType(data['eventTypes'], [EventType]);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
UpdateWebhook.prototype['description'] = undefined;

/**
 * @member {Boolean} disabled
 */
UpdateWebhook.prototype['disabled'] = undefined;

/**
 * @member {Array.<module:model/EventType>} eventTypes
 */
UpdateWebhook.prototype['eventTypes'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
UpdateWebhook.prototype['headers'] = undefined;

/**
 * @member {Object.<String, Object>} metadata
 */
UpdateWebhook.prototype['metadata'] = undefined;

/**
 * @member {String} uid
 */
UpdateWebhook.prototype['uid'] = undefined;

/**
 * @member {String} url
 */
UpdateWebhook.prototype['url'] = undefined;






export default UpdateWebhook;

