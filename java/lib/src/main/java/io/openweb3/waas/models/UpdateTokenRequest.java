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
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * UpdateTokenRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-26T22:02:49.883062+08:00[Asia/Shanghai]")
public class UpdateTokenRequest {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;


  public UpdateTokenRequest id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * Token ID
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Token ID")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public UpdateTokenRequest name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Token name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Token name")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public UpdateTokenRequest uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * Unique ID
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Unique ID")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateTokenRequest updateTokenRequest = (UpdateTokenRequest) o;
    return Objects.equals(this.id, updateTokenRequest.id) &&
        Objects.equals(this.name, updateTokenRequest.name) &&
        Objects.equals(this.uid, updateTokenRequest.uid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, uid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateTokenRequest {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
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

}

