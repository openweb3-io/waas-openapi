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

export class CreateAddressRequest {
    /**
    * Chain ID
    */
    'chainId': string;
    /**
    * Address Type
    */
    'type': CreateAddressRequestTypeEnum;

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
            "name": "type",
            "baseName": "type",
            "type": "CreateAddressRequestTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAddressRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateAddressRequestTypeEnum {
    Deposit = 'DEPOSIT',
    Hot = 'HOT'
}

