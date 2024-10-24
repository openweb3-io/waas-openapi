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
 * The Endpoint model module.
 * @module model/Endpoint
 * @version 1.0
 */
class Endpoint {
    /**
     * Constructs a new <code>Endpoint</code>.
     * @alias module:model/Endpoint
     * @param createdAt {String} 
     * @param description {String} 
     * @param disabled {Boolean} 
     * @param eventTypes {Array.<String>} 
     * @param filter {String} 
     * @param id {String} 
     * @param url {String} 
     */
    constructor(createdAt, description, disabled, eventTypes, filter, id, url) { 
        
        Endpoint.initialize(this, createdAt, description, disabled, eventTypes, filter, id, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, description, disabled, eventTypes, filter, id, url) { 
        obj['createdAt'] = createdAt;
        obj['description'] = description;
        obj['disabled'] = disabled;
        obj['eventTypes'] = eventTypes;
        obj['filter'] = filter;
        obj['id'] = id;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Endpoint} obj Optional instance to populate.
     * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Endpoint();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('eventTypes')) {
                obj['eventTypes'] = ApiClient.convertToType(data['eventTypes'], ['String']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
 * @member {String} createdAt
 */
Endpoint.prototype['createdAt'] = undefined;

/**
 * @member {String} description
 */
Endpoint.prototype['description'] = undefined;

/**
 * @member {Boolean} disabled
 */
Endpoint.prototype['disabled'] = undefined;

/**
 * @member {Array.<String>} eventTypes
 */
Endpoint.prototype['eventTypes'] = undefined;

/**
 * @member {String} filter
 */
Endpoint.prototype['filter'] = undefined;

/**
 * @member {String} id
 */
Endpoint.prototype['id'] = undefined;

/**
 * @member {String} uid
 */
Endpoint.prototype['uid'] = undefined;

/**
 * @member {String} url
 */
Endpoint.prototype['url'] = undefined;






export default Endpoint;

