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
import Chain from './Chain';

/**
 * The CursorPageChain model module.
 * @module model/CursorPageChain
 * @version 1.0
 */
class CursorPageChain {
    /**
     * Constructs a new <code>CursorPageChain</code>.
     * @alias module:model/CursorPageChain
     * @param hasNext {Boolean} 
     * @param items {Array.<module:model/Chain>} 
     */
    constructor(hasNext, items) { 
        
        CursorPageChain.initialize(this, hasNext, items);
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
     * Constructs a <code>CursorPageChain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CursorPageChain} obj Optional instance to populate.
     * @return {module:model/CursorPageChain} The populated <code>CursorPageChain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CursorPageChain();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Chain]);
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
CursorPageChain.prototype['has_next'] = undefined;

/**
 * @member {Array.<module:model/Chain>} items
 */
CursorPageChain.prototype['items'] = undefined;

/**
 * @member {String} next_cursor
 */
CursorPageChain.prototype['next_cursor'] = undefined;

/**
 * @member {String} prev_cursor
 */
CursorPageChain.prototype['prev_cursor'] = undefined;






export default CursorPageChain;

