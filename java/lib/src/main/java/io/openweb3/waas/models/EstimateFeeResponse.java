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
 * EstimateFeeResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-25T20:59:16.612595+08:00[Asia/Shanghai]")
public class EstimateFeeResponse {
  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_TOKEN_ID = "token_id";
  @SerializedName(SERIALIZED_NAME_TOKEN_ID)
  private String tokenId;


  public EstimateFeeResponse amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Amount
   * @return amount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Amount")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public EstimateFeeResponse tokenId(String tokenId) {
    
    this.tokenId = tokenId;
    return this;
  }

   /**
   * Token ID
   * @return tokenId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Token ID")

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
    EstimateFeeResponse estimateFeeResponse = (EstimateFeeResponse) o;
    return Objects.equals(this.amount, estimateFeeResponse.amount) &&
        Objects.equals(this.tokenId, estimateFeeResponse.tokenId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, tokenId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EstimateFeeResponse {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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

