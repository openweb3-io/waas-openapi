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

import { CreateTransferRequestDestination } from '../models/CreateTransferRequestDestination';
import { CreateTransferRequestSource } from '../models/CreateTransferRequestSource';
import { Fee } from '../models/Fee';
import { HttpFile } from '../http/http';

export class CreateTransferRequest {
    /**
    * The amount to be transferred
    */
    'amount': string;
    'destination': CreateTransferRequestDestination;
    /**
    * Extra
    */
    'extra'?: string;
    'fee'?: Fee;
    /**
    * Memo
    */
    'memo'?: string;
    'source': CreateTransferRequestSource;
    /**
    * The tokenId to be transferred
    */
    'tokenId': string;
    /**
    * The custom unique transaction identifier
    */
    'uid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "CreateTransferRequestDestination",
            "format": ""
        },
        {
            "name": "extra",
            "baseName": "extra",
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
            "name": "memo",
            "baseName": "memo",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "CreateTransferRequestSource",
            "format": ""
        },
        {
            "name": "tokenId",
            "baseName": "token_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateTransferRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

