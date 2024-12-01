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

export class Chain {
    /**
    * Chain
    */
    'chain'?: string;
    /**
    * Confirmation number
    */
    'confirmNum'?: number;
    /**
    * Created time
    */
    'createdAt'?: string;
    /**
    * Explorer address URL
    */
    'explorerAddressUrl'?: string;
    /**
    * Explorer block URL
    */
    'explorerBlockUrl'?: string;
    /**
    * Explorer transaction URL
    */
    'explorerTxUrl'?: string;
    /**
    * Icon URL
    */
    'iconUrl'?: string;
    /**
    * Chain ID
    */
    'id'?: string;
    /**
    * Chain name
    */
    'name'?: string;
    /**
    * Need memo
    */
    'needMemo'?: boolean;
    /**
    * Chain network
    */
    'network'?: string;
    /**
    * Chain symbol
    */
    'symbol'?: string;
    /**
    * Updated time
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmNum",
            "baseName": "confirm_num",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "explorerAddressUrl",
            "baseName": "explorer_address_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "explorerBlockUrl",
            "baseName": "explorer_block_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "explorerTxUrl",
            "baseName": "explorer_tx_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "needMemo",
            "baseName": "need_memo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Chain.attributeTypeMap;
    }

    public constructor() {
    }
}
