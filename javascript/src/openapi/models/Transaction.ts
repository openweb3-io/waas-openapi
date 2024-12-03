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

import { Fee } from '../models/Fee';
import { TransactionEndpoint } from '../models/TransactionEndpoint';
import { HttpFile } from '../http/http';

export class Transaction {
    /**
    * Asset ID
    */
    'assetId'?: string;
    /**
    * Chain
    */
    'chain'?: string;
    /**
    * Chain ID
    */
    'chainId'?: string;
    /**
    * Confirmed number
    */
    'confirmedNum'?: number;
    /**
    * Created time
    */
    'createdAt'?: string;
    /**
    * Description
    */
    'description'?: string;
    'destination'?: TransactionEndpoint;
    /**
    * Extra
    */
    'extra'?: { [key: string]: any; };
    /**
    * Failed reason
    */
    'failedReason'?: string;
    'fee'?: Fee;
    /**
    * Transaction hash
    */
    'hash'?: string;
    /**
    * Transaction ID
    */
    'id'?: string;
    /**
    * Signature
    */
    'signature'?: string;
    'source'?: TransactionEndpoint;
    /**
    * Transaction status
    */
    'status'?: string;
    /**
    * Token ID
    */
    'tokenId'?: string;
    /**
    * Transaction type
    */
    'type'?: string;
    /**
    * The custom unique transaction identifier
    */
    'uid'?: string;
    /**
    * Updated time
    */
    'updatedAt'?: string;
    /**
    * Wallet ID
    */
    'walletId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "string",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmedNum",
            "baseName": "confirmedNum",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "TransactionEndpoint",
            "format": ""
        },
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "failedReason",
            "baseName": "failedReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "Fee",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
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
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "TransactionEndpoint",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenId",
            "baseName": "tokenId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "walletId",
            "baseName": "walletId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}