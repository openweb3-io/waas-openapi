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
import io.openweb3.waas.models.Fee;
import io.openweb3.waas.models.TransactionEndpoint;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

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
 * Transaction
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
public class Transaction {
  public static final String SERIALIZED_NAME_ASSET_ID = "assetId";
  @SerializedName(SERIALIZED_NAME_ASSET_ID)
  private String assetId;

  public static final String SERIALIZED_NAME_CHAIN = "chain";
  @SerializedName(SERIALIZED_NAME_CHAIN)
  private String chain;

  public static final String SERIALIZED_NAME_CHAIN_ID = "chainId";
  @SerializedName(SERIALIZED_NAME_CHAIN_ID)
  private String chainId;

  public static final String SERIALIZED_NAME_CONFIRMED_NUM = "confirmedNum";
  @SerializedName(SERIALIZED_NAME_CONFIRMED_NUM)
  private Integer confirmedNum;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_DESTINATION = "destination";
  @SerializedName(SERIALIZED_NAME_DESTINATION)
  private TransactionEndpoint destination;

  public static final String SERIALIZED_NAME_EXTRA = "extra";
  @SerializedName(SERIALIZED_NAME_EXTRA)
  private Map<String, Object> extra = new HashMap<>();

  public static final String SERIALIZED_NAME_FAILED_REASON = "failedReason";
  @SerializedName(SERIALIZED_NAME_FAILED_REASON)
  private String failedReason;

  public static final String SERIALIZED_NAME_FEE = "fee";
  @SerializedName(SERIALIZED_NAME_FEE)
  private Fee fee;

  public static final String SERIALIZED_NAME_HASH = "hash";
  @SerializedName(SERIALIZED_NAME_HASH)
  private String hash;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_SIGNATURE = "signature";
  @SerializedName(SERIALIZED_NAME_SIGNATURE)
  private String signature;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private TransactionEndpoint source;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private String status;

  public static final String SERIALIZED_NAME_TOKEN_ID = "tokenId";
  @SerializedName(SERIALIZED_NAME_TOKEN_ID)
  private String tokenId;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updatedAt";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private String updatedAt;

  public static final String SERIALIZED_NAME_WALLET_ID = "walletId";
  @SerializedName(SERIALIZED_NAME_WALLET_ID)
  private String walletId;

  public Transaction() {
  }

  public Transaction assetId(String assetId) {
    this.assetId = assetId;
    return this;
  }

  /**
   * Asset ID
   * @return assetId
   */
  @javax.annotation.Nullable
  public String getAssetId() {
    return assetId;
  }

  public void setAssetId(String assetId) {
    this.assetId = assetId;
  }


  public Transaction chain(String chain) {
    this.chain = chain;
    return this;
  }

  /**
   * Chain
   * @return chain
   */
  @javax.annotation.Nullable
  public String getChain() {
    return chain;
  }

  public void setChain(String chain) {
    this.chain = chain;
  }


  public Transaction chainId(String chainId) {
    this.chainId = chainId;
    return this;
  }

  /**
   * Chain ID
   * @return chainId
   */
  @javax.annotation.Nullable
  public String getChainId() {
    return chainId;
  }

  public void setChainId(String chainId) {
    this.chainId = chainId;
  }


  public Transaction confirmedNum(Integer confirmedNum) {
    this.confirmedNum = confirmedNum;
    return this;
  }

  /**
   * Confirmed number
   * @return confirmedNum
   */
  @javax.annotation.Nullable
  public Integer getConfirmedNum() {
    return confirmedNum;
  }

  public void setConfirmedNum(Integer confirmedNum) {
    this.confirmedNum = confirmedNum;
  }


  public Transaction createdAt(String createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  /**
   * Created time
   * @return createdAt
   */
  @javax.annotation.Nullable
  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public Transaction description(String description) {
    this.description = description;
    return this;
  }

  /**
   * Description
   * @return description
   */
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  public Transaction destination(TransactionEndpoint destination) {
    this.destination = destination;
    return this;
  }

  /**
   * Get destination
   * @return destination
   */
  @javax.annotation.Nullable
  public TransactionEndpoint getDestination() {
    return destination;
  }

  public void setDestination(TransactionEndpoint destination) {
    this.destination = destination;
  }


  public Transaction extra(Map<String, Object> extra) {
    this.extra = extra;
    return this;
  }

  public Transaction putExtraItem(String key, Object extraItem) {
    if (this.extra == null) {
      this.extra = new HashMap<>();
    }
    this.extra.put(key, extraItem);
    return this;
  }

  /**
   * Extra
   * @return extra
   */
  @javax.annotation.Nullable
  public Map<String, Object> getExtra() {
    return extra;
  }

  public void setExtra(Map<String, Object> extra) {
    this.extra = extra;
  }


  public Transaction failedReason(String failedReason) {
    this.failedReason = failedReason;
    return this;
  }

  /**
   * Failed reason
   * @return failedReason
   */
  @javax.annotation.Nullable
  public String getFailedReason() {
    return failedReason;
  }

  public void setFailedReason(String failedReason) {
    this.failedReason = failedReason;
  }


  public Transaction fee(Fee fee) {
    this.fee = fee;
    return this;
  }

  /**
   * Get fee
   * @return fee
   */
  @javax.annotation.Nullable
  public Fee getFee() {
    return fee;
  }

  public void setFee(Fee fee) {
    this.fee = fee;
  }


  public Transaction hash(String hash) {
    this.hash = hash;
    return this;
  }

  /**
   * Transaction hash
   * @return hash
   */
  @javax.annotation.Nullable
  public String getHash() {
    return hash;
  }

  public void setHash(String hash) {
    this.hash = hash;
  }


  public Transaction id(String id) {
    this.id = id;
    return this;
  }

  /**
   * Transaction ID
   * @return id
   */
  @javax.annotation.Nullable
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public Transaction signature(String signature) {
    this.signature = signature;
    return this;
  }

  /**
   * Signature
   * @return signature
   */
  @javax.annotation.Nullable
  public String getSignature() {
    return signature;
  }

  public void setSignature(String signature) {
    this.signature = signature;
  }


  public Transaction source(TransactionEndpoint source) {
    this.source = source;
    return this;
  }

  /**
   * Get source
   * @return source
   */
  @javax.annotation.Nullable
  public TransactionEndpoint getSource() {
    return source;
  }

  public void setSource(TransactionEndpoint source) {
    this.source = source;
  }


  public Transaction status(String status) {
    this.status = status;
    return this;
  }

  /**
   * Transaction status
   * @return status
   */
  @javax.annotation.Nullable
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }


  public Transaction tokenId(String tokenId) {
    this.tokenId = tokenId;
    return this;
  }

  /**
   * Token ID
   * @return tokenId
   */
  @javax.annotation.Nullable
  public String getTokenId() {
    return tokenId;
  }

  public void setTokenId(String tokenId) {
    this.tokenId = tokenId;
  }


  public Transaction type(String type) {
    this.type = type;
    return this;
  }

  /**
   * Transaction type
   * @return type
   */
  @javax.annotation.Nullable
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  public Transaction uid(String uid) {
    this.uid = uid;
    return this;
  }

  /**
   * The custom unique transaction identifier
   * @return uid
   */
  @javax.annotation.Nullable
  public String getUid() {
    return uid;
  }

  public void setUid(String uid) {
    this.uid = uid;
  }


  public Transaction updatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

  /**
   * Updated time
   * @return updatedAt
   */
  @javax.annotation.Nullable
  public String getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }


  public Transaction walletId(String walletId) {
    this.walletId = walletId;
    return this;
  }

  /**
   * Wallet ID
   * @return walletId
   */
  @javax.annotation.Nullable
  public String getWalletId() {
    return walletId;
  }

  public void setWalletId(String walletId) {
    this.walletId = walletId;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Transaction transaction = (Transaction) o;
    return Objects.equals(this.assetId, transaction.assetId) &&
        Objects.equals(this.chain, transaction.chain) &&
        Objects.equals(this.chainId, transaction.chainId) &&
        Objects.equals(this.confirmedNum, transaction.confirmedNum) &&
        Objects.equals(this.createdAt, transaction.createdAt) &&
        Objects.equals(this.description, transaction.description) &&
        Objects.equals(this.destination, transaction.destination) &&
        Objects.equals(this.extra, transaction.extra) &&
        Objects.equals(this.failedReason, transaction.failedReason) &&
        Objects.equals(this.fee, transaction.fee) &&
        Objects.equals(this.hash, transaction.hash) &&
        Objects.equals(this.id, transaction.id) &&
        Objects.equals(this.signature, transaction.signature) &&
        Objects.equals(this.source, transaction.source) &&
        Objects.equals(this.status, transaction.status) &&
        Objects.equals(this.tokenId, transaction.tokenId) &&
        Objects.equals(this.type, transaction.type) &&
        Objects.equals(this.uid, transaction.uid) &&
        Objects.equals(this.updatedAt, transaction.updatedAt) &&
        Objects.equals(this.walletId, transaction.walletId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetId, chain, chainId, confirmedNum, createdAt, description, destination, extra, failedReason, fee, hash, id, signature, source, status, tokenId, type, uid, updatedAt, walletId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Transaction {\n");
    sb.append("    assetId: ").append(toIndentedString(assetId)).append("\n");
    sb.append("    chain: ").append(toIndentedString(chain)).append("\n");
    sb.append("    chainId: ").append(toIndentedString(chainId)).append("\n");
    sb.append("    confirmedNum: ").append(toIndentedString(confirmedNum)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    destination: ").append(toIndentedString(destination)).append("\n");
    sb.append("    extra: ").append(toIndentedString(extra)).append("\n");
    sb.append("    failedReason: ").append(toIndentedString(failedReason)).append("\n");
    sb.append("    fee: ").append(toIndentedString(fee)).append("\n");
    sb.append("    hash: ").append(toIndentedString(hash)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    signature: ").append(toIndentedString(signature)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    tokenId: ").append(toIndentedString(tokenId)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    walletId: ").append(toIndentedString(walletId)).append("\n");
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
    openapiFields.add("assetId");
    openapiFields.add("chain");
    openapiFields.add("chainId");
    openapiFields.add("confirmedNum");
    openapiFields.add("createdAt");
    openapiFields.add("description");
    openapiFields.add("destination");
    openapiFields.add("extra");
    openapiFields.add("failedReason");
    openapiFields.add("fee");
    openapiFields.add("hash");
    openapiFields.add("id");
    openapiFields.add("signature");
    openapiFields.add("source");
    openapiFields.add("status");
    openapiFields.add("tokenId");
    openapiFields.add("type");
    openapiFields.add("uid");
    openapiFields.add("updatedAt");
    openapiFields.add("walletId");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to Transaction
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!Transaction.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Transaction is not found in the empty JSON string", Transaction.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!Transaction.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Transaction` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("assetId") != null && !jsonObj.get("assetId").isJsonNull()) && !jsonObj.get("assetId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("assetId").toString()));
      }
      if ((jsonObj.get("chain") != null && !jsonObj.get("chain").isJsonNull()) && !jsonObj.get("chain").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `chain` to be a primitive type in the JSON string but got `%s`", jsonObj.get("chain").toString()));
      }
      if ((jsonObj.get("chainId") != null && !jsonObj.get("chainId").isJsonNull()) && !jsonObj.get("chainId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `chainId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("chainId").toString()));
      }
      if ((jsonObj.get("createdAt") != null && !jsonObj.get("createdAt").isJsonNull()) && !jsonObj.get("createdAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `createdAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("createdAt").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      // validate the optional field `destination`
      if (jsonObj.get("destination") != null && !jsonObj.get("destination").isJsonNull()) {
        TransactionEndpoint.validateJsonElement(jsonObj.get("destination"));
      }
      if ((jsonObj.get("failedReason") != null && !jsonObj.get("failedReason").isJsonNull()) && !jsonObj.get("failedReason").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `failedReason` to be a primitive type in the JSON string but got `%s`", jsonObj.get("failedReason").toString()));
      }
      // validate the optional field `fee`
      if (jsonObj.get("fee") != null && !jsonObj.get("fee").isJsonNull()) {
        Fee.validateJsonElement(jsonObj.get("fee"));
      }
      if ((jsonObj.get("hash") != null && !jsonObj.get("hash").isJsonNull()) && !jsonObj.get("hash").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `hash` to be a primitive type in the JSON string but got `%s`", jsonObj.get("hash").toString()));
      }
      if ((jsonObj.get("id") != null && !jsonObj.get("id").isJsonNull()) && !jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if ((jsonObj.get("signature") != null && !jsonObj.get("signature").isJsonNull()) && !jsonObj.get("signature").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `signature` to be a primitive type in the JSON string but got `%s`", jsonObj.get("signature").toString()));
      }
      // validate the optional field `source`
      if (jsonObj.get("source") != null && !jsonObj.get("source").isJsonNull()) {
        TransactionEndpoint.validateJsonElement(jsonObj.get("source"));
      }
      if ((jsonObj.get("status") != null && !jsonObj.get("status").isJsonNull()) && !jsonObj.get("status").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `status` to be a primitive type in the JSON string but got `%s`", jsonObj.get("status").toString()));
      }
      if ((jsonObj.get("tokenId") != null && !jsonObj.get("tokenId").isJsonNull()) && !jsonObj.get("tokenId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `tokenId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("tokenId").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("uid") != null && !jsonObj.get("uid").isJsonNull()) && !jsonObj.get("uid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uid").toString()));
      }
      if ((jsonObj.get("updatedAt") != null && !jsonObj.get("updatedAt").isJsonNull()) && !jsonObj.get("updatedAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `updatedAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("updatedAt").toString()));
      }
      if ((jsonObj.get("walletId") != null && !jsonObj.get("walletId").isJsonNull()) && !jsonObj.get("walletId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `walletId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("walletId").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Transaction.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Transaction' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Transaction> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Transaction.class));

       return (TypeAdapter<T>) new TypeAdapter<Transaction>() {
           @Override
           public void write(JsonWriter out, Transaction value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Transaction read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of Transaction given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of Transaction
   * @throws IOException if the JSON string is invalid with respect to Transaction
   */
  public static Transaction fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Transaction.class);
  }

  /**
   * Convert an instance of Transaction to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

