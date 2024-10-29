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
import TransferDestinationAddress from './TransferDestinationAddress';

/**
 * The CreateTransferRequestDestination model module.
 * @module model/CreateTransferRequestDestination
 * @version 1.0
 */
class CreateTransferRequestDestination {
    /**
     * Constructs a new <code>CreateTransferRequestDestination</code>.
     * The ID of the wallet to which the transfer will be made
     * @alias module:model/CreateTransferRequestDestination
     * @param {(module:model/TransferDestinationAddress)} instance The actual instance to initialize CreateTransferRequestDestination.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "TransferDestinationAddress") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TransferDestinationAddress.validateJSON(instance); // throw an exception if no match
                // create TransferDestinationAddress from JS object
                this.actualInstance = TransferDestinationAddress.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransferDestinationAddress
            errorMessages.push("Failed to construct TransferDestinationAddress: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `CreateTransferRequestDestination` with oneOf schemas TransferDestinationAddress. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `CreateTransferRequestDestination` with oneOf schemas TransferDestinationAddress. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CreateTransferRequestDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransferRequestDestination} obj Optional instance to populate.
     * @return {module:model/CreateTransferRequestDestination} The populated <code>CreateTransferRequestDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CreateTransferRequestDestination(data);
    }

    /**
     * Gets the actual instance, which can be <code>TransferDestinationAddress</code>.
     * @return {(module:model/TransferDestinationAddress)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TransferDestinationAddress</code>.
     * @param {(module:model/TransferDestinationAddress)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CreateTransferRequestDestination.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CreateTransferRequestDestination from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CreateTransferRequestDestination} An instance of CreateTransferRequestDestination.
     */
    static fromJSON = function(json_string){
        return CreateTransferRequestDestination.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Address
 * @member {String} address
 */
CreateTransferRequestDestination.prototype['address'] = undefined;


CreateTransferRequestDestination.OneOf = ["TransferDestinationAddress"];

export default CreateTransferRequestDestination;

