/**
 * WaaS OpenAPI Documentation
 * This is a WaaS OpenAPI Server.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransferDestinationAddress } from '../models/TransferDestinationAddress';
import { HttpFile } from '../http/http';

/**
* The ID of the wallet to which the transfer will be made
*/
/**
 * @type CreateTransferRequestDestination
 * Type
 * @export
 */
export type CreateTransferRequestDestination = TransferDestinationAddress;

/**
* @type CreateTransferRequestDestinationClass
    * The ID of the wallet to which the transfer will be made
* @export
*/
export class CreateTransferRequestDestinationClass {
    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}