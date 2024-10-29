/*
 * WaaS OpenAPI Documentation
 * This is a WaaS OpenAPI Server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.waas.models;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.openweb3.waas.models.TransferDestinationAddress;
import java.io.IOException;
import java.util.Arrays;



import java.io.IOException;
import java.lang.reflect.Type;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapter;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.JsonPrimitive;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.JsonParseException;

import io.openweb3.waas.internal.JSON;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-29T15:00:41.402192+08:00[Asia/Shanghai]", comments = "Generator version: 7.9.0")
public class CreateTransferRequestDestination extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(CreateTransferRequestDestination.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!CreateTransferRequestDestination.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'CreateTransferRequestDestination' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<TransferDestinationAddress> adapterTransferDestinationAddress = gson.getDelegateAdapter(this, TypeToken.get(TransferDestinationAddress.class));

            return (TypeAdapter<T>) new TypeAdapter<CreateTransferRequestDestination>() {
                @Override
                public void write(JsonWriter out, CreateTransferRequestDestination value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `TransferDestinationAddress`
                    if (value.getActualInstance() instanceof TransferDestinationAddress) {
                        JsonElement element = adapterTransferDestinationAddress.toJsonTree((TransferDestinationAddress)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: TransferDestinationAddress");
                }

                @Override
                public CreateTransferRequestDestination read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize TransferDestinationAddress
                    try {
                        // validate the JSON object to see if any exception is thrown
                        TransferDestinationAddress.validateJsonElement(jsonElement);
                        actualAdapter = adapterTransferDestinationAddress;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'TransferDestinationAddress'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for TransferDestinationAddress failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'TransferDestinationAddress'", e);
                    }

                    if (match == 1) {
                        CreateTransferRequestDestination ret = new CreateTransferRequestDestination();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for CreateTransferRequestDestination: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public CreateTransferRequestDestination() {
        super("oneOf", Boolean.FALSE);
    }

    public CreateTransferRequestDestination(Object o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("TransferDestinationAddress", TransferDestinationAddress.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return CreateTransferRequestDestination.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * TransferDestinationAddress
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof TransferDestinationAddress) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be TransferDestinationAddress");
    }

    /**
     * Get the actual instance, which can be the following:
     * TransferDestinationAddress
     *
     * @return The actual instance (TransferDestinationAddress)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `TransferDestinationAddress`. If the actual instance is not `TransferDestinationAddress`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `TransferDestinationAddress`
     * @throws ClassCastException if the instance is not `TransferDestinationAddress`
     */
    public TransferDestinationAddress getTransferDestinationAddress() throws ClassCastException {
        return (TransferDestinationAddress)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to CreateTransferRequestDestination
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with TransferDestinationAddress
        try {
            TransferDestinationAddress.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for TransferDestinationAddress failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for CreateTransferRequestDestination with oneOf schemas: TransferDestinationAddress. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of CreateTransferRequestDestination given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of CreateTransferRequestDestination
     * @throws IOException if the JSON string is invalid with respect to CreateTransferRequestDestination
     */
    public static CreateTransferRequestDestination fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, CreateTransferRequestDestination.class);
    }

    /**
     * Convert an instance of CreateTransferRequestDestination to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

