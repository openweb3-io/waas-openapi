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
     * @param hasPrev {Boolean} 
     * @param items {Array.<module:model/Chain>} 
     * @param total {Number} 
     */
    constructor(hasNext, hasPrev, items, total) { 
        
        CursorPageChain.initialize(this, hasNext, hasPrev, items, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hasNext, hasPrev, items, total) { 
        obj['has_next'] = hasNext;
        obj['has_prev'] = hasPrev;
        obj['items'] = items;
        obj['total'] = total;
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
            if (data.hasOwnProperty('has_prev')) {
                obj['has_prev'] = ApiClient.convertToType(data['has_prev'], 'Boolean');
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
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CursorPageChain</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CursorPageChain</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CursorPageChain.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Chain.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_cursor'] && !(typeof data['next_cursor'] === 'string' || data['next_cursor'] instanceof String)) {
            throw new Error("Expected the field `next_cursor` to be a primitive type in the JSON string but got " + data['next_cursor']);
        }
        // ensure the json data is a string
        if (data['prev_cursor'] && !(typeof data['prev_cursor'] === 'string' || data['prev_cursor'] instanceof String)) {
            throw new Error("Expected the field `prev_cursor` to be a primitive type in the JSON string but got " + data['prev_cursor']);
        }

        return true;
    }


}

CursorPageChain.RequiredProperties = ["has_next", "has_prev", "items", "total"];

/**
 * @member {Boolean} has_next
 */
CursorPageChain.prototype['has_next'] = undefined;

/**
 * @member {Boolean} has_prev
 */
CursorPageChain.prototype['has_prev'] = undefined;

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

/**
 * @member {Number} total
 */
CursorPageChain.prototype['total'] = undefined;






export default CursorPageChain;

