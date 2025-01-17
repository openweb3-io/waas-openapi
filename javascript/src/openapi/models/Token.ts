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

export class Token {
    /**
    * Whether deposits are allowed
    */
    'canDeposit'?: boolean;
    /**
    * Whether withdrawals are allowed
    */
    'canWithdraw'?: boolean;
    /**
    * Contract address
    */
    'contractAddress'?: string;
    /**
    * Creation time
    */
    'createdAt'?: string;
    /**
    * Decimals
    */
    'decimals'?: number;
    /**
    * Icon
    */
    'iconUrl'?: string;
    /**
    * Token ID
    */
    'id'?: string;
    /**
    * Max withdraw amount
    */
    'maxWithdrawAmount'?: string;
    /**
    * Extended metadata
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Min deposit amount
    */
    'minDepositAmount'?: string;
    /**
    * Min withdraw amount
    */
    'minWithdrawAmount'?: string;
    /**
    * Name
    */
    'name'?: string;
    /**
    * Whether a memo is required
    */
    'needMemo'?: boolean;
    /**
    * Precision
    */
    'precision'?: number;
    /**
    * Symbol . e.g.: BTC / ETH
    */
    'symbol'?: string;
    /**
    * Total supply
    */
    'totalSupply'?: string;
    /**
    * Last updated time
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "canDeposit",
            "baseName": "can_deposit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canWithdraw",
            "baseName": "can_withdraw",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contractAddress",
            "baseName": "contract_address",
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
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
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
            "name": "maxWithdrawAmount",
            "baseName": "max_withdraw_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "minDepositAmount",
            "baseName": "min_deposit_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "minWithdrawAmount",
            "baseName": "min_withdraw_amount",
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
            "name": "precision",
            "baseName": "precision",
            "type": "number",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalSupply",
            "baseName": "total_supply",
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
        return Token.attributeTypeMap;
    }

    public constructor() {
    }
}

