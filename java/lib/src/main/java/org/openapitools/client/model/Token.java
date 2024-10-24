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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Token
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-24T00:17:04.449656+08:00[Asia/Shanghai]")
public class Token {
  public static final String SERIALIZED_NAME_CAN_DEPOSIT = "can_deposit";
  @SerializedName(SERIALIZED_NAME_CAN_DEPOSIT)
  private Boolean canDeposit;

  public static final String SERIALIZED_NAME_CAN_WITHDRAW = "can_withdraw";
  @SerializedName(SERIALIZED_NAME_CAN_WITHDRAW)
  private Boolean canWithdraw;

  public static final String SERIALIZED_NAME_CONTRACT_ADDRESS = "contract_address";
  @SerializedName(SERIALIZED_NAME_CONTRACT_ADDRESS)
  private String contractAddress;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_DECIMALS = "decimals";
  @SerializedName(SERIALIZED_NAME_DECIMALS)
  private Integer decimals;

  public static final String SERIALIZED_NAME_ICON_URL = "icon_url";
  @SerializedName(SERIALIZED_NAME_ICON_URL)
  private String iconUrl;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_MAX_WITHDRAW_AMOUNT = "max_withdraw_amount";
  @SerializedName(SERIALIZED_NAME_MAX_WITHDRAW_AMOUNT)
  private Object maxWithdrawAmount;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = null;

  public static final String SERIALIZED_NAME_MIN_DEPOSIT_AMOUNT = "min_deposit_amount";
  @SerializedName(SERIALIZED_NAME_MIN_DEPOSIT_AMOUNT)
  private Object minDepositAmount;

  public static final String SERIALIZED_NAME_MIN_WITHDRAW_AMOUNT = "min_withdraw_amount";
  @SerializedName(SERIALIZED_NAME_MIN_WITHDRAW_AMOUNT)
  private Object minWithdrawAmount;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_NEED_MEMO = "need_memo";
  @SerializedName(SERIALIZED_NAME_NEED_MEMO)
  private Boolean needMemo;

  public static final String SERIALIZED_NAME_PRECISION = "precision";
  @SerializedName(SERIALIZED_NAME_PRECISION)
  private Integer precision;

  public static final String SERIALIZED_NAME_SYMBOL = "symbol";
  @SerializedName(SERIALIZED_NAME_SYMBOL)
  private String symbol;

  public static final String SERIALIZED_NAME_TOTAL_SUPPLY = "total_supply";
  @SerializedName(SERIALIZED_NAME_TOTAL_SUPPLY)
  private Object totalSupply;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;


  public Token canDeposit(Boolean canDeposit) {
    
    this.canDeposit = canDeposit;
    return this;
  }

   /**
   * Whether deposits are allowed
   * @return canDeposit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Whether deposits are allowed")

  public Boolean getCanDeposit() {
    return canDeposit;
  }


  public void setCanDeposit(Boolean canDeposit) {
    this.canDeposit = canDeposit;
  }


  public Token canWithdraw(Boolean canWithdraw) {
    
    this.canWithdraw = canWithdraw;
    return this;
  }

   /**
   * Whether withdrawals are allowed
   * @return canWithdraw
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Whether withdrawals are allowed")

  public Boolean getCanWithdraw() {
    return canWithdraw;
  }


  public void setCanWithdraw(Boolean canWithdraw) {
    this.canWithdraw = canWithdraw;
  }


  public Token contractAddress(String contractAddress) {
    
    this.contractAddress = contractAddress;
    return this;
  }

   /**
   * Contract address
   * @return contractAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Contract address")

  public String getContractAddress() {
    return contractAddress;
  }


  public void setContractAddress(String contractAddress) {
    this.contractAddress = contractAddress;
  }


  public Token createdAt(String createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Creation time
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Creation time")

  public String getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public Token decimals(Integer decimals) {
    
    this.decimals = decimals;
    return this;
  }

   /**
   * Decimals
   * @return decimals
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Decimals")

  public Integer getDecimals() {
    return decimals;
  }


  public void setDecimals(Integer decimals) {
    this.decimals = decimals;
  }


  public Token iconUrl(String iconUrl) {
    
    this.iconUrl = iconUrl;
    return this;
  }

   /**
   * Icon
   * @return iconUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Icon")

  public String getIconUrl() {
    return iconUrl;
  }


  public void setIconUrl(String iconUrl) {
    this.iconUrl = iconUrl;
  }


  public Token id(String id) {
    
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


  public Token maxWithdrawAmount(Object maxWithdrawAmount) {
    
    this.maxWithdrawAmount = maxWithdrawAmount;
    return this;
  }

   /**
   * Max withdraw amount
   * @return maxWithdrawAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Max withdraw amount")

  public Object getMaxWithdrawAmount() {
    return maxWithdrawAmount;
  }


  public void setMaxWithdrawAmount(Object maxWithdrawAmount) {
    this.maxWithdrawAmount = maxWithdrawAmount;
  }


  public Token metadata(Map<String, String> metadata) {
    
    this.metadata = metadata;
    return this;
  }

  public Token putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<String, String>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Extended metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Extended metadata")

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public Token minDepositAmount(Object minDepositAmount) {
    
    this.minDepositAmount = minDepositAmount;
    return this;
  }

   /**
   * Min deposit amount
   * @return minDepositAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Min deposit amount")

  public Object getMinDepositAmount() {
    return minDepositAmount;
  }


  public void setMinDepositAmount(Object minDepositAmount) {
    this.minDepositAmount = minDepositAmount;
  }


  public Token minWithdrawAmount(Object minWithdrawAmount) {
    
    this.minWithdrawAmount = minWithdrawAmount;
    return this;
  }

   /**
   * Min withdraw amount
   * @return minWithdrawAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Min withdraw amount")

  public Object getMinWithdrawAmount() {
    return minWithdrawAmount;
  }


  public void setMinWithdrawAmount(Object minWithdrawAmount) {
    this.minWithdrawAmount = minWithdrawAmount;
  }


  public Token name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public Token needMemo(Boolean needMemo) {
    
    this.needMemo = needMemo;
    return this;
  }

   /**
   * Whether a memo is required
   * @return needMemo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Whether a memo is required")

  public Boolean getNeedMemo() {
    return needMemo;
  }


  public void setNeedMemo(Boolean needMemo) {
    this.needMemo = needMemo;
  }


  public Token precision(Integer precision) {
    
    this.precision = precision;
    return this;
  }

   /**
   * Precision
   * @return precision
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Precision")

  public Integer getPrecision() {
    return precision;
  }


  public void setPrecision(Integer precision) {
    this.precision = precision;
  }


  public Token symbol(String symbol) {
    
    this.symbol = symbol;
    return this;
  }

   /**
   * Symbol . e.g.: BTC / ETH
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Symbol . e.g.: BTC / ETH")

  public String getSymbol() {
    return symbol;
  }


  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public Token totalSupply(Object totalSupply) {
    
    this.totalSupply = totalSupply;
    return this;
  }

   /**
   * Total supply
   * @return totalSupply
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Total supply")

  public Object getTotalSupply() {
    return totalSupply;
  }


  public void setTotalSupply(Object totalSupply) {
    this.totalSupply = totalSupply;
  }


  public Token updatedAt(String updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Last updated time
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Last updated time")

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
    Token token = (Token) o;
    return Objects.equals(this.canDeposit, token.canDeposit) &&
        Objects.equals(this.canWithdraw, token.canWithdraw) &&
        Objects.equals(this.contractAddress, token.contractAddress) &&
        Objects.equals(this.createdAt, token.createdAt) &&
        Objects.equals(this.decimals, token.decimals) &&
        Objects.equals(this.iconUrl, token.iconUrl) &&
        Objects.equals(this.id, token.id) &&
        Objects.equals(this.maxWithdrawAmount, token.maxWithdrawAmount) &&
        Objects.equals(this.metadata, token.metadata) &&
        Objects.equals(this.minDepositAmount, token.minDepositAmount) &&
        Objects.equals(this.minWithdrawAmount, token.minWithdrawAmount) &&
        Objects.equals(this.name, token.name) &&
        Objects.equals(this.needMemo, token.needMemo) &&
        Objects.equals(this.precision, token.precision) &&
        Objects.equals(this.symbol, token.symbol) &&
        Objects.equals(this.totalSupply, token.totalSupply) &&
        Objects.equals(this.updatedAt, token.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(canDeposit, canWithdraw, contractAddress, createdAt, decimals, iconUrl, id, maxWithdrawAmount, metadata, minDepositAmount, minWithdrawAmount, name, needMemo, precision, symbol, totalSupply, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Token {\n");
    sb.append("    canDeposit: ").append(toIndentedString(canDeposit)).append("\n");
    sb.append("    canWithdraw: ").append(toIndentedString(canWithdraw)).append("\n");
    sb.append("    contractAddress: ").append(toIndentedString(contractAddress)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    decimals: ").append(toIndentedString(decimals)).append("\n");
    sb.append("    iconUrl: ").append(toIndentedString(iconUrl)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    maxWithdrawAmount: ").append(toIndentedString(maxWithdrawAmount)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    minDepositAmount: ").append(toIndentedString(minDepositAmount)).append("\n");
    sb.append("    minWithdrawAmount: ").append(toIndentedString(minWithdrawAmount)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    needMemo: ").append(toIndentedString(needMemo)).append("\n");
    sb.append("    precision: ").append(toIndentedString(precision)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    totalSupply: ").append(toIndentedString(totalSupply)).append("\n");
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

