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
import Endpoint from './Endpoint';

/**
 * The CursorPageEndpoint model module.
 * @module model/CursorPageEndpoint
 * @version 1.0
 */
class CursorPageEndpoint {
    /**
     * Constructs a new <code>CursorPageEndpoint</code>.
     * @alias module:model/CursorPageEndpoint
     * @param hasNext {Boolean} 
     * @param items {Array.<module:model/Endpoint>} 
     */
    constructor(hasNext, items) { 
        
        CursorPageEndpoint.initialize(this, hasNext, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hasNext, items) { 
        obj['has_next'] = hasNext;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>CursorPageEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CursorPageEndpoint} obj Optional instance to populate.
     * @return {module:model/CursorPageEndpoint} The populated <code>CursorPageEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CursorPageEndpoint();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Endpoint]);
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('prev_cursor')) {
                obj['prev_cursor'] = ApiClient.convertToType(data['prev_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} has_next
 */
CursorPageEndpoint.prototype['has_next'] = undefined;

/**
 * @member {Array.<module:model/Endpoint>} items
 */
CursorPageEndpoint.prototype['items'] = undefined;

/**
 * @member {String} next_cursor
 */
CursorPageEndpoint.prototype['next_cursor'] = undefined;

/**
 * @member {String} prev_cursor
 */
CursorPageEndpoint.prototype['prev_cursor'] = undefined;






export default CursorPageEndpoint;

