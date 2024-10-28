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
import io.openweb3.waas.models.Address;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
 * CursorPageAddress
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-29T01:35:38.261544+08:00[Asia/Shanghai]", comments = "Generator version: 7.9.0")
public class CursorPageAddress {
  public static final String SERIALIZED_NAME_HAS_NEXT = "has_next";
  @SerializedName(SERIALIZED_NAME_HAS_NEXT)
  private Boolean hasNext;

  public static final String SERIALIZED_NAME_HAS_PREV = "has_prev";
  @SerializedName(SERIALIZED_NAME_HAS_PREV)
  private Boolean hasPrev;

  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<Address> items = new ArrayList<>();

  public static final String SERIALIZED_NAME_NEXT_CURSOR = "next_cursor";
  @SerializedName(SERIALIZED_NAME_NEXT_CURSOR)
  private String nextCursor;

  public static final String SERIALIZED_NAME_PREV_CURSOR = "prev_cursor";
  @SerializedName(SERIALIZED_NAME_PREV_CURSOR)
  private String prevCursor;

  public static final String SERIALIZED_NAME_TOTAL = "total";
  @SerializedName(SERIALIZED_NAME_TOTAL)
  private Integer total;

  public CursorPageAddress() {
  }

  public CursorPageAddress hasNext(Boolean hasNext) {
    this.hasNext = hasNext;
    return this;
  }

  /**
   * Get hasNext
   * @return hasNext
   */
  @javax.annotation.Nonnull
  public Boolean getHasNext() {
    return hasNext;
  }

  public void setHasNext(Boolean hasNext) {
    this.hasNext = hasNext;
  }


  public CursorPageAddress hasPrev(Boolean hasPrev) {
    this.hasPrev = hasPrev;
    return this;
  }

  /**
   * Get hasPrev
   * @return hasPrev
   */
  @javax.annotation.Nonnull
  public Boolean getHasPrev() {
    return hasPrev;
  }

  public void setHasPrev(Boolean hasPrev) {
    this.hasPrev = hasPrev;
  }


  public CursorPageAddress items(List<Address> items) {
    this.items = items;
    return this;
  }

  public CursorPageAddress addItemsItem(Address itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<>();
    }
    this.items.add(itemsItem);
    return this;
  }

  /**
   * Get items
   * @return items
   */
  @javax.annotation.Nonnull
  public List<Address> getItems() {
    return items;
  }

  public void setItems(List<Address> items) {
    this.items = items;
  }


  public CursorPageAddress nextCursor(String nextCursor) {
    this.nextCursor = nextCursor;
    return this;
  }

  /**
   * Get nextCursor
   * @return nextCursor
   */
  @javax.annotation.Nullable
  public String getNextCursor() {
    return nextCursor;
  }

  public void setNextCursor(String nextCursor) {
    this.nextCursor = nextCursor;
  }


  public CursorPageAddress prevCursor(String prevCursor) {
    this.prevCursor = prevCursor;
    return this;
  }

  /**
   * Get prevCursor
   * @return prevCursor
   */
  @javax.annotation.Nullable
  public String getPrevCursor() {
    return prevCursor;
  }

  public void setPrevCursor(String prevCursor) {
    this.prevCursor = prevCursor;
  }


  public CursorPageAddress total(Integer total) {
    this.total = total;
    return this;
  }

  /**
   * Get total
   * @return total
   */
  @javax.annotation.Nonnull
  public Integer getTotal() {
    return total;
  }

  public void setTotal(Integer total) {
    this.total = total;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CursorPageAddress cursorPageAddress = (CursorPageAddress) o;
    return Objects.equals(this.hasNext, cursorPageAddress.hasNext) &&
        Objects.equals(this.hasPrev, cursorPageAddress.hasPrev) &&
        Objects.equals(this.items, cursorPageAddress.items) &&
        Objects.equals(this.nextCursor, cursorPageAddress.nextCursor) &&
        Objects.equals(this.prevCursor, cursorPageAddress.prevCursor) &&
        Objects.equals(this.total, cursorPageAddress.total);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hasNext, hasPrev, items, nextCursor, prevCursor, total);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CursorPageAddress {\n");
    sb.append("    hasNext: ").append(toIndentedString(hasNext)).append("\n");
    sb.append("    hasPrev: ").append(toIndentedString(hasPrev)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    nextCursor: ").append(toIndentedString(nextCursor)).append("\n");
    sb.append("    prevCursor: ").append(toIndentedString(prevCursor)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
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
    openapiFields.add("has_next");
    openapiFields.add("has_prev");
    openapiFields.add("items");
    openapiFields.add("next_cursor");
    openapiFields.add("prev_cursor");
    openapiFields.add("total");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("has_next");
    openapiRequiredFields.add("has_prev");
    openapiRequiredFields.add("items");
    openapiRequiredFields.add("total");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CursorPageAddress
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CursorPageAddress.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CursorPageAddress is not found in the empty JSON string", CursorPageAddress.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CursorPageAddress.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CursorPageAddress` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : CursorPageAddress.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the json data is an array
      if (!jsonObj.get("items").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `items` to be an array in the JSON string but got `%s`", jsonObj.get("items").toString()));
      }

      JsonArray jsonArrayitems = jsonObj.getAsJsonArray("items");
      // validate the required field `items` (array)
      for (int i = 0; i < jsonArrayitems.size(); i++) {
        Address.validateJsonElement(jsonArrayitems.get(i));
      };
      if ((jsonObj.get("next_cursor") != null && !jsonObj.get("next_cursor").isJsonNull()) && !jsonObj.get("next_cursor").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `next_cursor` to be a primitive type in the JSON string but got `%s`", jsonObj.get("next_cursor").toString()));
      }
      if ((jsonObj.get("prev_cursor") != null && !jsonObj.get("prev_cursor").isJsonNull()) && !jsonObj.get("prev_cursor").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `prev_cursor` to be a primitive type in the JSON string but got `%s`", jsonObj.get("prev_cursor").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CursorPageAddress.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CursorPageAddress' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CursorPageAddress> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CursorPageAddress.class));

       return (TypeAdapter<T>) new TypeAdapter<CursorPageAddress>() {
           @Override
           public void write(JsonWriter out, CursorPageAddress value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CursorPageAddress read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CursorPageAddress given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CursorPageAddress
   * @throws IOException if the JSON string is invalid with respect to CursorPageAddress
   */
  public static CursorPageAddress fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CursorPageAddress.class);
  }

  /**
   * Convert an instance of CursorPageAddress to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

