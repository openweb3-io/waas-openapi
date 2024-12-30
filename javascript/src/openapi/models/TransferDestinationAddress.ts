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

export class TransferDestinationAddress {
    /**
    * Address
    */
    'address': string;
    /**
    * destination type
    */
    'destinationType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationType",
            "baseName": "destination_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferDestinationAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

