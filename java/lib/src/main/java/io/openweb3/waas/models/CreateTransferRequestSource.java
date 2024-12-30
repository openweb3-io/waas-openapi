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
import io.openweb3.waas.models.TransferSourceAsset;
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

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class CreateTransferRequestSource extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(CreateTransferRequestSource.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!CreateTransferRequestSource.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'CreateTransferRequestSource' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<TransferSourceAsset> adapterTransferSourceAsset = gson.getDelegateAdapter(this, TypeToken.get(TransferSourceAsset.class));

            return (TypeAdapter<T>) new TypeAdapter<CreateTransferRequestSource>() {
                @Override
                public void write(JsonWriter out, CreateTransferRequestSource value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `TransferSourceAsset`
                    if (value.getActualInstance() instanceof TransferSourceAsset) {
                        JsonElement element = adapterTransferSourceAsset.toJsonTree((TransferSourceAsset)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: TransferSourceAsset");
                }

                @Override
                public CreateTransferRequestSource read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize TransferSourceAsset
                    try {
                        // validate the JSON object to see if any exception is thrown
                        TransferSourceAsset.validateJsonElement(jsonElement);
                        actualAdapter = adapterTransferSourceAsset;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'TransferSourceAsset'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for TransferSourceAsset failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'TransferSourceAsset'", e);
                    }

                    if (match == 1) {
                        CreateTransferRequestSource ret = new CreateTransferRequestSource();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for CreateTransferRequestSource: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public CreateTransferRequestSource() {
        super("oneOf", Boolean.FALSE);
    }

    public CreateTransferRequestSource(Object o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("TransferSourceAsset", TransferSourceAsset.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return CreateTransferRequestSource.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * TransferSourceAsset
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof TransferSourceAsset) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be TransferSourceAsset");
    }

    /**
     * Get the actual instance, which can be the following:
     * TransferSourceAsset
     *
     * @return The actual instance (TransferSourceAsset)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `TransferSourceAsset`. If the actual instance is not `TransferSourceAsset`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `TransferSourceAsset`
     * @throws ClassCastException if the instance is not `TransferSourceAsset`
     */
    public TransferSourceAsset getTransferSourceAsset() throws ClassCastException {
        return (TransferSourceAsset)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to CreateTransferRequestSource
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with TransferSourceAsset
        try {
            TransferSourceAsset.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for TransferSourceAsset failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for CreateTransferRequestSource with oneOf schemas: TransferSourceAsset. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of CreateTransferRequestSource given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of CreateTransferRequestSource
     * @throws IOException if the JSON string is invalid with respect to CreateTransferRequestSource
     */
    public static CreateTransferRequestSource fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, CreateTransferRequestSource.class);
    }

    /**
     * Convert an instance of CreateTransferRequestSource to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

