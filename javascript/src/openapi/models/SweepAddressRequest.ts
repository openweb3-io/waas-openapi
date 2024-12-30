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

export class SweepAddressRequest {
    /**
    * address to pay the fee
    */
    'feeAddress': string;
    /**
    * max fee limit
    */
    'maxFeeLimit'?: string;
    /**
    * min collect amount
    */
    'minCollectAmount'?: string;
    /**
    * address to sweep to
    */
    'toAddress': string;
    /**
    * token id to sweep
    */
    'tokenId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "feeAddress",
            "baseName": "fee_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxFeeLimit",
            "baseName": "max_fee_limit",
            "type": "string",
            "format": ""
        },
        {
            "name": "minCollectAmount",
            "baseName": "min_collect_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "toAddress",
            "baseName": "to_address",
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
        return SweepAddressRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

