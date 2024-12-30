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
import java.io.IOException;
import java.util.Arrays;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.openweb3.waas.internal.JSON;

/**
 * UpdateGasStationRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class UpdateGasStationRequest {
  public static final String SERIALIZED_NAME_DISABLED = "disabled";
  @SerializedName(SERIALIZED_NAME_DISABLED)
  private Boolean disabled;

  public static final String SERIALIZED_NAME_GAS_CAPACITY = "gas_capacity";
  @SerializedName(SERIALIZED_NAME_GAS_CAPACITY)
  private String gasCapacity;

  public static final String SERIALIZED_NAME_GAS_THRESHOLD = "gas_threshold";
  @SerializedName(SERIALIZED_NAME_GAS_THRESHOLD)
  private String gasThreshold;

  public static final String SERIALIZED_NAME_MAX_FEE_LIMIT = "max_fee_limit";
  @SerializedName(SERIALIZED_NAME_MAX_FEE_LIMIT)
  private String maxFeeLimit;

  public UpdateGasStationRequest() {
  }

  public UpdateGasStationRequest disabled(Boolean disabled) {
    this.disabled = disabled;
    return this;
  }

  /**
   * Disabled
   * @return disabled
   */
  @javax.annotation.Nullable
  public Boolean getDisabled() {
    return disabled;
  }

  public void setDisabled(Boolean disabled) {
    this.disabled = disabled;
  }


  public UpdateGasStationRequest gasCapacity(String gasCapacity) {
    this.gasCapacity = gasCapacity;
    return this;
  }

  /**
   * Gas Capacity
   * @return gasCapacity
   */
  @javax.annotation.Nullable
  public String getGasCapacity() {
    return gasCapacity;
  }

  public void setGasCapacity(String gasCapacity) {
    this.gasCapacity = gasCapacity;
  }


  public UpdateGasStationRequest gasThreshold(String gasThreshold) {
    this.gasThreshold = gasThreshold;
    return this;
  }

  /**
   * Gas Threshold
   * @return gasThreshold
   */
  @javax.annotation.Nullable
  public String getGasThreshold() {
    return gasThreshold;
  }

  public void setGasThreshold(String gasThreshold) {
    this.gasThreshold = gasThreshold;
  }


  public UpdateGasStationRequest maxFeeLimit(String maxFeeLimit) {
    this.maxFeeLimit = maxFeeLimit;
    return this;
  }

  /**
   * Max Fee Limit
   * @return maxFeeLimit
   */
  @javax.annotation.Nullable
  public String getMaxFeeLimit() {
    return maxFeeLimit;
  }

  public void setMaxFeeLimit(String maxFeeLimit) {
    this.maxFeeLimit = maxFeeLimit;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateGasStationRequest updateGasStationRequest = (UpdateGasStationRequest) o;
    return Objects.equals(this.disabled, updateGasStationRequest.disabled) &&
        Objects.equals(this.gasCapacity, updateGasStationRequest.gasCapacity) &&
        Objects.equals(this.gasThreshold, updateGasStationRequest.gasThreshold) &&
        Objects.equals(this.maxFeeLimit, updateGasStationRequest.maxFeeLimit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(disabled, gasCapacity, gasThreshold, maxFeeLimit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateGasStationRequest {\n");
    sb.append("    disabled: ").append(toIndentedString(disabled)).append("\n");
    sb.append("    gasCapacity: ").append(toIndentedString(gasCapacity)).append("\n");
    sb.append("    gasThreshold: ").append(toIndentedString(gasThreshold)).append("\n");
    sb.append("    maxFeeLimit: ").append(toIndentedString(maxFeeLimit)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("disabled");
    openapiFields.add("gas_capacity");
    openapiFields.add("gas_threshold");
    openapiFields.add("max_fee_limit");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to UpdateGasStationRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!UpdateGasStationRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in UpdateGasStationRequest is not found in the empty JSON string", UpdateGasStationRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!UpdateGasStationRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `UpdateGasStationRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("gas_capacity") != null && !jsonObj.get("gas_capacity").isJsonNull()) && !jsonObj.get("gas_capacity").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `gas_capacity` to be a primitive type in the JSON string but got `%s`", jsonObj.get("gas_capacity").toString()));
      }
      if ((jsonObj.get("gas_threshold") != null && !jsonObj.get("gas_threshold").isJsonNull()) && !jsonObj.get("gas_threshold").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `gas_threshold` to be a primitive type in the JSON string but got `%s`", jsonObj.get("gas_threshold").toString()));
      }
      if ((jsonObj.get("max_fee_limit") != null && !jsonObj.get("max_fee_limit").isJsonNull()) && !jsonObj.get("max_fee_limit").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `max_fee_limit` to be a primitive type in the JSON string but got `%s`", jsonObj.get("max_fee_limit").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!UpdateGasStationRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'UpdateGasStationRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<UpdateGasStationRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(UpdateGasStationRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<UpdateGasStationRequest>() {
           @Override
           public void write(JsonWriter out, UpdateGasStationRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public UpdateGasStationRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of UpdateGasStationRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of UpdateGasStationRequest
   * @throws IOException if the JSON string is invalid with respect to UpdateGasStationRequest
   */
  public static UpdateGasStationRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, UpdateGasStationRequest.class);
  }

  /**
   * Convert an instance of UpdateGasStationRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

