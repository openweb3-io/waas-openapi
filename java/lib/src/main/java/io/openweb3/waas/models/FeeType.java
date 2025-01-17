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
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.JsonElement;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Fee type
 */
@JsonAdapter(FeeType.Adapter.class)
public enum FeeType {
  
  FeeType_Fixed(1);

  private Integer value;

  FeeType(Integer value) {
    this.value = value;
  }

  public Integer getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static FeeType fromValue(Integer value) {
    for (FeeType b : FeeType.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<FeeType> {
    @Override
    public void write(final JsonWriter jsonWriter, final FeeType enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public FeeType read(final JsonReader jsonReader) throws IOException {
      Integer value = jsonReader.nextInt();
      return FeeType.fromValue(value);
    }
  }

  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
    Integer value = jsonElement.getAsInt();
    FeeType.fromValue(value);
  }
}

