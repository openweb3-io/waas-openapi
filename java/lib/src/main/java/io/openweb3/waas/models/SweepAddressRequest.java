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
 * SweepAddressRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.9.0")
public class SweepAddressRequest {
  public static final String SERIALIZED_NAME_FEE_ADDRESS = "fee_address";
  @SerializedName(SERIALIZED_NAME_FEE_ADDRESS)
  private String feeAddress;

  public static final String SERIALIZED_NAME_MAX_FEE_LIMIT = "max_fee_limit";
  @SerializedName(SERIALIZED_NAME_MAX_FEE_LIMIT)
  private String maxFeeLimit;

  public static final String SERIALIZED_NAME_MIN_COLLECT_AMOUNT = "min_collect_amount";
  @SerializedName(SERIALIZED_NAME_MIN_COLLECT_AMOUNT)
  private String minCollectAmount;

  public static final String SERIALIZED_NAME_TO_ADDRESS = "to_address";
  @SerializedName(SERIALIZED_NAME_TO_ADDRESS)
  private String toAddress;

  public static final String SERIALIZED_NAME_TOKEN_ID = "token_id";
  @SerializedName(SERIALIZED_NAME_TOKEN_ID)
  private String tokenId;

  public SweepAddressRequest() {
  }

  public SweepAddressRequest feeAddress(String feeAddress) {
    this.feeAddress = feeAddress;
    return this;
  }

  /**
   * address to pay the fee
   * @return feeAddress
   */
  @javax.annotation.Nonnull
  public String getFeeAddress() {
    return feeAddress;
  }

  public void setFeeAddress(String feeAddress) {
    this.feeAddress = feeAddress;
  }


  public SweepAddressRequest maxFeeLimit(String maxFeeLimit) {
    this.maxFeeLimit = maxFeeLimit;
    return this;
  }

  /**
   * max fee limit
   * @return maxFeeLimit
   */
  @javax.annotation.Nullable
  public String getMaxFeeLimit() {
    return maxFeeLimit;
  }

  public void setMaxFeeLimit(String maxFeeLimit) {
    this.maxFeeLimit = maxFeeLimit;
  }


  public SweepAddressRequest minCollectAmount(String minCollectAmount) {
    this.minCollectAmount = minCollectAmount;
    return this;
  }

  /**
   * min collect amount
   * @return minCollectAmount
   */
  @javax.annotation.Nullable
  public String getMinCollectAmount() {
    return minCollectAmount;
  }

  public void setMinCollectAmount(String minCollectAmount) {
    this.minCollectAmount = minCollectAmount;
  }


  public SweepAddressRequest toAddress(String toAddress) {
    this.toAddress = toAddress;
    return this;
  }

  /**
   * address to sweep to
   * @return toAddress
   */
  @javax.annotation.Nonnull
  public String getToAddress() {
    return toAddress;
  }

  public void setToAddress(String toAddress) {
    this.toAddress = toAddress;
  }


  public SweepAddressRequest tokenId(String tokenId) {
    this.tokenId = tokenId;
    return this;
  }

  /**
   * token id to sweep
   * @return tokenId
   */
  @javax.annotation.Nonnull
  public String getTokenId() {
    return tokenId;
  }

  public void setTokenId(String tokenId) {
    this.tokenId = tokenId;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SweepAddressRequest sweepAddressRequest = (SweepAddressRequest) o;
    return Objects.equals(this.feeAddress, sweepAddressRequest.feeAddress) &&
        Objects.equals(this.maxFeeLimit, sweepAddressRequest.maxFeeLimit) &&
        Objects.equals(this.minCollectAmount, sweepAddressRequest.minCollectAmount) &&
        Objects.equals(this.toAddress, sweepAddressRequest.toAddress) &&
        Objects.equals(this.tokenId, sweepAddressRequest.tokenId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(feeAddress, maxFeeLimit, minCollectAmount, toAddress, tokenId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SweepAddressRequest {\n");
    sb.append("    feeAddress: ").append(toIndentedString(feeAddress)).append("\n");
    sb.append("    maxFeeLimit: ").append(toIndentedString(maxFeeLimit)).append("\n");
    sb.append("    minCollectAmount: ").append(toIndentedString(minCollectAmount)).append("\n");
    sb.append("    toAddress: ").append(toIndentedString(toAddress)).append("\n");
    sb.append("    tokenId: ").append(toIndentedString(tokenId)).append("\n");
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
    openapiFields.add("fee_address");
    openapiFields.add("max_fee_limit");
    openapiFields.add("min_collect_amount");
    openapiFields.add("to_address");
    openapiFields.add("token_id");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("fee_address");
    openapiRequiredFields.add("to_address");
    openapiRequiredFields.add("token_id");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to SweepAddressRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!SweepAddressRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in SweepAddressRequest is not found in the empty JSON string", SweepAddressRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!SweepAddressRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `SweepAddressRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : SweepAddressRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("fee_address").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `fee_address` to be a primitive type in the JSON string but got `%s`", jsonObj.get("fee_address").toString()));
      }
      if ((jsonObj.get("max_fee_limit") != null && !jsonObj.get("max_fee_limit").isJsonNull()) && !jsonObj.get("max_fee_limit").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `max_fee_limit` to be a primitive type in the JSON string but got `%s`", jsonObj.get("max_fee_limit").toString()));
      }
      if ((jsonObj.get("min_collect_amount") != null && !jsonObj.get("min_collect_amount").isJsonNull()) && !jsonObj.get("min_collect_amount").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `min_collect_amount` to be a primitive type in the JSON string but got `%s`", jsonObj.get("min_collect_amount").toString()));
      }
      if (!jsonObj.get("to_address").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `to_address` to be a primitive type in the JSON string but got `%s`", jsonObj.get("to_address").toString()));
      }
      if (!jsonObj.get("token_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `token_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("token_id").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!SweepAddressRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'SweepAddressRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<SweepAddressRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(SweepAddressRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<SweepAddressRequest>() {
           @Override
           public void write(JsonWriter out, SweepAddressRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public SweepAddressRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of SweepAddressRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of SweepAddressRequest
   * @throws IOException if the JSON string is invalid with respect to SweepAddressRequest
   */
  public static SweepAddressRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, SweepAddressRequest.class);
  }

  /**
   * Convert an instance of SweepAddressRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

