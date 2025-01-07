export * from '../models/Address';
export * from '../models/AddressValidityItem';
export * from '../models/Chain';
export * from '../models/CreateAddressRequest';
export * from '../models/CreateEndpoint';
export * from '../models/CreateGasStationRequest';
export * from '../models/CreateTokenRequest';
export * from '../models/CreateTransferRequest';
export * from '../models/CreateTransferRequestDestination';
export * from '../models/CreateTransferRequestSource';
export * from '../models/CreateTransferResponse';
export * from '../models/CreateWalletRequest';
export * from '../models/CursorPageAddress';
export * from '../models/CursorPageChain';
export * from '../models/CursorPageEndpoint';
export * from '../models/CursorPageEventType';
export * from '../models/CursorPageGasStation';
export * from '../models/CursorPageToken';
export * from '../models/CursorPageTransaction';
export * from '../models/CursorPageWallet';
export * from '../models/Endpoint';
export * from '../models/EstimateFeeRequest';
export * from '../models/EstimateFeeResponse';
export * from '../models/EventType';
export * from '../models/Fee';
export * from '../models/FeeType';
export * from '../models/GasStation';
export * from '../models/GetGasStationDepositAddressReply';
export * from '../models/ModelError';
export * from '../models/SignMessageRequest';
export * from '../models/SignMessageRequestSource';
export * from '../models/SignMessageResponse';
export * from '../models/SweepAddressRequest';
export * from '../models/SweepAddressResponse';
export * from '../models/Token';
export * from '../models/Transaction';
export * from '../models/TransactionEndpoint';
export * from '../models/TransferDestinationAddress';
export * from '../models/TransferDestinationType';
export * from '../models/TransferSourceAsset';
export * from '../models/TransferSourceType';
export * from '../models/TransferSourceWeb3';
export * from '../models/UpdateEndpoint';
export * from '../models/UpdateGasStationRequest';
export * from '../models/UpdateTokenRequest';
export * from '../models/UpdateWalletRequest';
export * from '../models/ValidateAddressesReply';
export * from '../models/Wallet';
export * from '../models/WalletSubType';
export * from '../models/WalletType';

import { Address } from '../models/Address';
import { AddressValidityItem } from '../models/AddressValidityItem';
import { Chain } from '../models/Chain';
import { CreateAddressRequest } from '../models/CreateAddressRequest';
import { CreateEndpoint } from '../models/CreateEndpoint';
import { CreateGasStationRequest } from '../models/CreateGasStationRequest';
import { CreateTokenRequest } from '../models/CreateTokenRequest';
import { CreateTransferRequest } from '../models/CreateTransferRequest';
import { CreateTransferRequestDestination   } from '../models/CreateTransferRequestDestination';
import { CreateTransferRequestSource    } from '../models/CreateTransferRequestSource';
import { CreateTransferResponse } from '../models/CreateTransferResponse';
import { CreateWalletRequest     } from '../models/CreateWalletRequest';
import { CursorPageAddress } from '../models/CursorPageAddress';
import { CursorPageChain } from '../models/CursorPageChain';
import { CursorPageEndpoint } from '../models/CursorPageEndpoint';
import { CursorPageEventType } from '../models/CursorPageEventType';
import { CursorPageGasStation } from '../models/CursorPageGasStation';
import { CursorPageToken } from '../models/CursorPageToken';
import { CursorPageTransaction } from '../models/CursorPageTransaction';
import { CursorPageWallet } from '../models/CursorPageWallet';
import { Endpoint } from '../models/Endpoint';
import { EstimateFeeRequest } from '../models/EstimateFeeRequest';
import { EstimateFeeResponse } from '../models/EstimateFeeResponse';
import { EventType } from '../models/EventType';
import { Fee    } from '../models/Fee';
import { FeeType } from '../models/FeeType';
import { GasStation } from '../models/GasStation';
import { GetGasStationDepositAddressReply } from '../models/GetGasStationDepositAddressReply';
import { ModelError } from '../models/ModelError';
import { SignMessageRequest } from '../models/SignMessageRequest';
import { SignMessageRequestSource    } from '../models/SignMessageRequestSource';
import { SignMessageResponse } from '../models/SignMessageResponse';
import { SweepAddressRequest } from '../models/SweepAddressRequest';
import { SweepAddressResponse } from '../models/SweepAddressResponse';
import { Token } from '../models/Token';
import { Transaction } from '../models/Transaction';
import { TransactionEndpoint } from '../models/TransactionEndpoint';
import { TransferDestinationAddress   } from '../models/TransferDestinationAddress';
import { TransferDestinationType } from '../models/TransferDestinationType';
import { TransferSourceAsset   } from '../models/TransferSourceAsset';
import { TransferSourceType } from '../models/TransferSourceType';
import { TransferSourceWeb3    } from '../models/TransferSourceWeb3';
import { UpdateEndpoint } from '../models/UpdateEndpoint';
import { UpdateGasStationRequest } from '../models/UpdateGasStationRequest';
import { UpdateTokenRequest } from '../models/UpdateTokenRequest';
import { UpdateWalletRequest } from '../models/UpdateWalletRequest';
import { ValidateAddressesReply } from '../models/ValidateAddressesReply';
import { Wallet        } from '../models/Wallet';
import { WalletSubType } from '../models/WalletSubType';
import { WalletType } from '../models/WalletType';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "FeeType",
    "TransferDestinationType",
    "TransferSourceType",
    "WalletSubType",
    "WalletType",
]);

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AddressValidityItem": AddressValidityItem,
    "Chain": Chain,
    "CreateAddressRequest": CreateAddressRequest,
    "CreateEndpoint": CreateEndpoint,
    "CreateGasStationRequest": CreateGasStationRequest,
    "CreateTokenRequest": CreateTokenRequest,
    "CreateTransferRequest": CreateTransferRequest,
    "CreateTransferRequestDestination": CreateTransferRequestDestination,
    "CreateTransferRequestSource": CreateTransferRequestSource,
    "CreateTransferResponse": CreateTransferResponse,
    "CreateWalletRequest": CreateWalletRequest,
    "CursorPageAddress": CursorPageAddress,
    "CursorPageChain": CursorPageChain,
    "CursorPageEndpoint": CursorPageEndpoint,
    "CursorPageEventType": CursorPageEventType,
    "CursorPageGasStation": CursorPageGasStation,
    "CursorPageToken": CursorPageToken,
    "CursorPageTransaction": CursorPageTransaction,
    "CursorPageWallet": CursorPageWallet,
    "Endpoint": Endpoint,
    "EstimateFeeRequest": EstimateFeeRequest,
    "EstimateFeeResponse": EstimateFeeResponse,
    "EventType": EventType,
    "Fee": Fee,
    "GasStation": GasStation,
    "GetGasStationDepositAddressReply": GetGasStationDepositAddressReply,
    "ModelError": ModelError,
    "SignMessageRequest": SignMessageRequest,
    "SignMessageRequestSource": SignMessageRequestSource,
    "SignMessageResponse": SignMessageResponse,
    "SweepAddressRequest": SweepAddressRequest,
    "SweepAddressResponse": SweepAddressResponse,
    "Token": Token,
    "Transaction": Transaction,
    "TransactionEndpoint": TransactionEndpoint,
    "TransferDestinationAddress": TransferDestinationAddress,
    "TransferSourceAsset": TransferSourceAsset,
    "TransferSourceWeb3": TransferSourceWeb3,
    "UpdateEndpoint": UpdateEndpoint,
    "UpdateGasStationRequest": UpdateGasStationRequest,
    "UpdateTokenRequest": UpdateTokenRequest,
    "UpdateWalletRequest": UpdateWalletRequest,
    "ValidateAddressesReply": ValidateAddressesReply,
    "Wallet": Wallet,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
