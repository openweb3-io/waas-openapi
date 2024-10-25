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
 * The TransactionEndpoint model module.
 * @module model/TransactionEndpoint
 * @version 1.0
 */
class TransactionEndpoint {
    /**
     * Constructs a new <code>TransactionEndpoint</code>.
     * @alias module:model/TransactionEndpoint
     */
    constructor() { 
        
        TransactionEndpoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionEndpoint} obj Optional instance to populate.
     * @return {module:model/TransactionEndpoint} The populated <code>TransactionEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionEndpoint();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address
 * @member {String} address
 */
TransactionEndpoint.prototype['address'] = undefined;

/**
 * Amount
 * @member {String} amount
 */
TransactionEndpoint.prototype['amount'] = undefined;

/**
 * The memo
 * @member {String} memo
 */
TransactionEndpoint.prototype['memo'] = undefined;

/**
 * Transaction endpoint type
 * @member {String} type
 */
TransactionEndpoint.prototype['type'] = undefined;






export default TransactionEndpoint;

