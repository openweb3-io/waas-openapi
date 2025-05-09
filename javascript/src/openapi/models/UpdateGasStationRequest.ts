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

export class UpdateGasStationRequest {
    /**
    * Disabled
    */
    'disabled'?: boolean;
    /**
    * Gas Capacity
    */
    'gasCapacity'?: string;
    /**
    * Gas Threshold
    */
    'gasThreshold'?: string;
    /**
    * Max Fee Limit
    */
    'maxFeeLimit'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "gasCapacity",
            "baseName": "gas_capacity",
            "type": "string",
            "format": ""
        },
        {
            "name": "gasThreshold",
            "baseName": "gas_threshold",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxFeeLimit",
            "baseName": "max_fee_limit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateGasStationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

