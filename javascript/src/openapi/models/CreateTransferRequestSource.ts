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

import { TransferSourceAsset } from '../models/TransferSourceAsset';
import { HttpFile } from '../http/http';

/**
* The ID of the wallet from which the transfer will be made
*/
/**
 * @type CreateTransferRequestSource
 * Type
 * @export
 */
export type CreateTransferRequestSource = TransferSourceAsset;

/**
* @type CreateTransferRequestSourceClass
    * The ID of the wallet from which the transfer will be made
* @export
*/
export class CreateTransferRequestSourceClass {
    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}
