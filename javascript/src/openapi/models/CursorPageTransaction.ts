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

import { Transaction } from '../models/Transaction';
import { HttpFile } from '../http/http';

export class CursorPageTransaction {
    'hasNext': boolean;
    'hasPrev': boolean;
    'items': Array<Transaction>;
    'nextCursor'?: string;
    'prevCursor'?: string;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hasNext",
            "baseName": "has_next",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasPrev",
            "baseName": "has_prev",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "prevCursor",
            "baseName": "prev_cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CursorPageTransaction.attributeTypeMap;
    }

    public constructor() {
    }
}
