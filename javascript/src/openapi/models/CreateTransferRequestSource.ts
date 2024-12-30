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
export class CreateTransferRequestSource {
    /**
    * source type
    */
    'sourceType': string;
    /**
    * Wallet ID
    */
    'walletId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sourceType",
            "baseName": "source_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "walletId",
            "baseName": "wallet_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateTransferRequestSource.attributeTypeMap;
    }

    public constructor() {
    }
}

