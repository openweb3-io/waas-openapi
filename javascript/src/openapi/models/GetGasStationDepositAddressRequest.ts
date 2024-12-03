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

export class GetGasStationDepositAddressRequest {
    /**
    * Chain ID
    */
    'chainId': string;
    /**
    * Wallet ID
    */
    'walletId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainId",
            "baseName": "chain_id",
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
        return GetGasStationDepositAddressRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
