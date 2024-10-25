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
 * Chain
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-25T20:13:15.872929+08:00[Asia/Shanghai]")
public class Chain {
  public static final String SERIALIZED_NAME_CONFIRM_NUM = "confirm_num";
  @SerializedName(SERIALIZED_NAME_CONFIRM_NUM)
  private Integer confirmNum;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_EXPLORER_ADDRESS_URL = "explorer_address_url";
  @SerializedName(SERIALIZED_NAME_EXPLORER_ADDRESS_URL)
  private String explorerAddressUrl;

  public static final String SERIALIZED_NAME_EXPLORER_TX_URL = "explorer_tx_url";
  @SerializedName(SERIALIZED_NAME_EXPLORER_TX_URL)
  private String explorerTxUrl;

  public static final String SERIALIZED_NAME_ICON_URL = "icon_url";
  @SerializedName(SERIALIZED_NAME_ICON_URL)
  private String iconUrl;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_NEED_MEMO = "need_memo";
  @SerializedName(SERIALIZED_NAME_NEED_MEMO)
  private Boolean needMemo;

  public static final String SERIALIZED_NAME_SYMBOL = "symbol";
  @SerializedName(SERIALIZED_NAME_SYMBOL)
  private String symbol;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;


  public Chain confirmNum(Integer confirmNum) {
    
    this.confirmNum = confirmNum;
    return this;
  }

   /**
   * Confirmation number
   * @return confirmNum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Confirmation number")

  public Integer getConfirmNum() {
    return confirmNum;
  }


  public void setConfirmNum(Integer confirmNum) {
    this.confirmNum = confirmNum;
  }


  public Chain createdAt(String createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Created time
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Created time")

  public String getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public Chain explorerAddressUrl(String explorerAddressUrl) {
    
    this.explorerAddressUrl = explorerAddressUrl;
    return this;
  }

   /**
   * Explorer address URL
   * @return explorerAddressUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Explorer address URL")

  public String getExplorerAddressUrl() {
    return explorerAddressUrl;
  }


  public void setExplorerAddressUrl(String explorerAddressUrl) {
    this.explorerAddressUrl = explorerAddressUrl;
  }


  public Chain explorerTxUrl(String explorerTxUrl) {
    
    this.explorerTxUrl = explorerTxUrl;
    return this;
  }

   /**
   * Explorer transaction URL
   * @return explorerTxUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Explorer transaction URL")

  public String getExplorerTxUrl() {
    return explorerTxUrl;
  }


  public void setExplorerTxUrl(String explorerTxUrl) {
    this.explorerTxUrl = explorerTxUrl;
  }


  public Chain iconUrl(String iconUrl) {
    
    this.iconUrl = iconUrl;
    return this;
  }

   /**
   * Icon URL
   * @return iconUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Icon URL")

  public String getIconUrl() {
    return iconUrl;
  }


  public void setIconUrl(String iconUrl) {
    this.iconUrl = iconUrl;
  }


  public Chain id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * Chain ID
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Chain ID")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public Chain name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Chain name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Chain name")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public Chain needMemo(Boolean needMemo) {
    
    this.needMemo = needMemo;
    return this;
  }

   /**
   * Need memo
   * @return needMemo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Need memo")

  public Boolean getNeedMemo() {
    return needMemo;
  }


  public void setNeedMemo(Boolean needMemo) {
    this.needMemo = needMemo;
  }


  public Chain symbol(String symbol) {
    
    this.symbol = symbol;
    return this;
  }

   /**
   * Chain symbol
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Chain symbol")

  public String getSymbol() {
    return symbol;
  }


  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public Chain updatedAt(String updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Updated time
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Updated time")

  public String getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Chain chain = (Chain) o;
    return Objects.equals(this.confirmNum, chain.confirmNum) &&
        Objects.equals(this.createdAt, chain.createdAt) &&
        Objects.equals(this.explorerAddressUrl, chain.explorerAddressUrl) &&
        Objects.equals(this.explorerTxUrl, chain.explorerTxUrl) &&
        Objects.equals(this.iconUrl, chain.iconUrl) &&
        Objects.equals(this.id, chain.id) &&
        Objects.equals(this.name, chain.name) &&
        Objects.equals(this.needMemo, chain.needMemo) &&
        Objects.equals(this.symbol, chain.symbol) &&
        Objects.equals(this.updatedAt, chain.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(confirmNum, createdAt, explorerAddressUrl, explorerTxUrl, iconUrl, id, name, needMemo, symbol, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Chain {\n");
    sb.append("    confirmNum: ").append(toIndentedString(confirmNum)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    explorerAddressUrl: ").append(toIndentedString(explorerAddressUrl)).append("\n");
    sb.append("    explorerTxUrl: ").append(toIndentedString(explorerTxUrl)).append("\n");
    sb.append("    iconUrl: ").append(toIndentedString(iconUrl)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    needMemo: ").append(toIndentedString(needMemo)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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

