/*
 * WaaS OpenAPI Documentation
 * This is a custody wallet service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

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
 * CreateTransferRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-22T21:59:47.491709+08:00[Asia/Shanghai]")
public class CreateTransferRequest {
  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_DESTINATION = "destination";
  @SerializedName(SERIALIZED_NAME_DESTINATION)
  private String destination;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private String source;

  public static final String SERIALIZED_NAME_TOKEN_ID = "tokenId";
  @SerializedName(SERIALIZED_NAME_TOKEN_ID)
  private String tokenId;


  public CreateTransferRequest amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * The amount to be transferred
   * @return amount
  **/
  @ApiModelProperty(required = true, value = "The amount to be transferred")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public CreateTransferRequest destination(String destination) {
    
    this.destination = destination;
    return this;
  }

   /**
   * The ID of the wallet to which the transfer will be made
   * @return destination
  **/
  @ApiModelProperty(required = true, value = "The ID of the wallet to which the transfer will be made")

  public String getDestination() {
    return destination;
  }


  public void setDestination(String destination) {
    this.destination = destination;
  }


  public CreateTransferRequest source(String source) {
    
    this.source = source;
    return this;
  }

   /**
   * The ID of the wallet from which the transfer will be made
   * @return source
  **/
  @ApiModelProperty(required = true, value = "The ID of the wallet from which the transfer will be made")

  public String getSource() {
    return source;
  }


  public void setSource(String source) {
    this.source = source;
  }


  public CreateTransferRequest tokenId(String tokenId) {
    
    this.tokenId = tokenId;
    return this;
  }

   /**
   * The tokenId to be transferred
   * @return tokenId
  **/
  @ApiModelProperty(required = true, value = "The tokenId to be transferred")

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
    CreateTransferRequest createTransferRequest = (CreateTransferRequest) o;
    return Objects.equals(this.amount, createTransferRequest.amount) &&
        Objects.equals(this.destination, createTransferRequest.destination) &&
        Objects.equals(this.source, createTransferRequest.source) &&
        Objects.equals(this.tokenId, createTransferRequest.tokenId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, destination, source, tokenId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateTransferRequest {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    destination: ").append(toIndentedString(destination)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
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

}

