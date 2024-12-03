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

import { AddressValidityItem } from '../models/AddressValidityItem';
import { HttpFile } from '../http/http';

export class ValidateAddressesReply {
    /**
    * Address validity items
    */
    'items'?: Array<AddressValidityItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<AddressValidityItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValidateAddressesReply.attributeTypeMap;
    }

    public constructor() {
    }
}