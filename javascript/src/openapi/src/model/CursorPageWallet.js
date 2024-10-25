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
import Wallet from './Wallet';

/**
 * The CursorPageWallet model module.
 * @module model/CursorPageWallet
 * @version 1.0
 */
class CursorPageWallet {
    /**
     * Constructs a new <code>CursorPageWallet</code>.
     * @alias module:model/CursorPageWallet
     * @param hasNext {Boolean} 
     * @param hasPrev {Boolean} 
     * @param items {Array.<module:model/Wallet>} 
     * @param total {Number} 
     */
    constructor(hasNext, hasPrev, items, total) { 
        
        CursorPageWallet.initialize(this, hasNext, hasPrev, items, total);
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
     * Constructs a <code>CursorPageWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CursorPageWallet} obj Optional instance to populate.
     * @return {module:model/CursorPageWallet} The populated <code>CursorPageWallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CursorPageWallet();

            if (data.hasOwnProperty('has_next')) {
                obj['has_next'] = ApiClient.convertToType(data['has_next'], 'Boolean');
            }
            if (data.hasOwnProperty('has_prev')) {
                obj['has_prev'] = ApiClient.convertToType(data['has_prev'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Wallet]);
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


}

/**
 * @member {Boolean} has_next
 */
CursorPageWallet.prototype['has_next'] = undefined;

/**
 * @member {Boolean} has_prev
 */
CursorPageWallet.prototype['has_prev'] = undefined;

/**
 * @member {Array.<module:model/Wallet>} items
 */
CursorPageWallet.prototype['items'] = undefined;

/**
 * @member {String} next_cursor
 */
CursorPageWallet.prototype['next_cursor'] = undefined;

/**
 * @member {String} prev_cursor
 */
CursorPageWallet.prototype['prev_cursor'] = undefined;

/**
 * @member {Number} total
 */
CursorPageWallet.prototype['total'] = undefined;






export default CursorPageWallet;

