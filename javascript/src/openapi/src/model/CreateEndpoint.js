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
 * The CreateEndpoint model module.
 * @module model/CreateEndpoint
 * @version 1.0
 */
class CreateEndpoint {
    /**
     * Constructs a new <code>CreateEndpoint</code>.
     * @alias module:model/CreateEndpoint
     * @param eventTypes {Array.<String>} The event types of the endpoint
     * @param url {String} The url of the endpoint
     */
    constructor(eventTypes, url) { 
        
        CreateEndpoint.initialize(this, eventTypes, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTypes, url) { 
        obj['eventTypes'] = eventTypes;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>CreateEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEndpoint} obj Optional instance to populate.
     * @return {module:model/CreateEndpoint} The populated <code>CreateEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEndpoint();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('eventTypes')) {
                obj['eventTypes'] = ApiClient.convertToType(data['eventTypes'], ['String']);
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
 * The description of the endpoint
 * @member {String} description
 */
CreateEndpoint.prototype['description'] = undefined;

/**
 * The disabled of the endpoint
 * @member {Boolean} disabled
 */
CreateEndpoint.prototype['disabled'] = undefined;

/**
 * The event types of the endpoint
 * @member {Array.<String>} eventTypes
 */
CreateEndpoint.prototype['eventTypes'] = undefined;

/**
 * The uid of the endpoint
 * @member {String} uid
 */
CreateEndpoint.prototype['uid'] = undefined;

/**
 * The url of the endpoint
 * @member {String} url
 */
CreateEndpoint.prototype['url'] = undefined;






export default CreateEndpoint;

