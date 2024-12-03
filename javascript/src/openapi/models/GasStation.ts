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

export class GasStation {
    /**
    * Application ID
    */
    'appId': string;
    /**
    * Chain ID
    */
    'chainId': string;
    /**
    * Created time
    */
    'createdAt'?: string;
    /**
    * Disabled
    */
    'disabled': boolean;
    /**
    * Gas Capacity
    */
    'gasCapacity': string;
    /**
    * Gas Threshold
    */
    'gasThreshold': string;
    /**
    * Gas Station ID
    */
    'id': string;
    /**
    * Max Fee Limit
    */
    'maxFeeLimit': string;
    /**
    * Organization ID
    */
    'orgId': string;
    /**
    * Updated time
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chain_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
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
            "name": "id",
            "baseName": "id",
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
            "name": "orgId",
            "baseName": "org_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GasStation.attributeTypeMap;
    }

    public constructor() {
    }
}
