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

export class AddressValidityItem {
    /**
    * Address
    */
    'address': string;
    /**
    * Validity
    */
    'validity': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "validity",
            "baseName": "validity",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressValidityItem.attributeTypeMap;
    }

    public constructor() {
    }
}

