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

import { HttpFile } from '../http/http';

export class EstimateFeeResponse {
    /**
    * Amount
    */
    'amount': string;
    /**
    * Token ID
    */
    'tokenId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenId",
            "baseName": "token_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimateFeeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
