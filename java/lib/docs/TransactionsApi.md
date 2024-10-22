# TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransactionsList**](TransactionsApi.md#v1TransactionsList) | **GET** /api/v1/transactions | List transactions
[**v1TransactionsRetrieve**](TransactionsApi.md#v1TransactionsRetrieve) | **GET** /api/v1/transactions/{transactionId} | Get transaction
[**v1TransactionsTransfer**](TransactionsApi.md#v1TransactionsTransfer) | **POST** /api/v1/transactions/transfer | Transfer token


<a name="v1TransactionsList"></a>
# **v1TransactionsList**
> PageTransaction v1TransactionsList(assetIds, chainIds, cursor, hash, limit, status, tokenIds, walletIds)

List transactions

List transactions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: SignatureAuth
    ApiKeyAuth SignatureAuth = (ApiKeyAuth) defaultClient.getAuthentication("SignatureAuth");
    SignatureAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //SignatureAuth.setApiKeyPrefix("Token");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    List<String> assetIds = Arrays.asList(); // List<String> | The assetId involved in the transaction.
    List<String> chainIds = Arrays.asList(); // List<String> | The blockchain network on which the transaction takes place.
    String cursor = "cursor_example"; // String | A cursor value for pagination purposes.
    String hash = "hash_example"; // String | The transaction hash, which uniquely identifies a transaction on the blockchain.
    Integer limit = 56; // Integer | The number of records to return default: 20
    String status = "status_example"; // String | The status of the transaction.
    List<String> tokenIds = Arrays.asList(); // List<String> | The tokenId involved in the transaction.
    List<String> walletIds = Arrays.asList(); // List<String> | Unique system generated identifier of the wallet
    try {
      PageTransaction result = apiInstance.v1TransactionsList(assetIds, chainIds, cursor, hash, limit, status, tokenIds, walletIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#v1TransactionsList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIds** | [**List&lt;String&gt;**](String.md)| The assetId involved in the transaction. | [optional]
 **chainIds** | [**List&lt;String&gt;**](String.md)| The blockchain network on which the transaction takes place. | [optional]
 **cursor** | **String**| A cursor value for pagination purposes. | [optional]
 **hash** | **String**| The transaction hash, which uniquely identifies a transaction on the blockchain. | [optional]
 **limit** | **Integer**| The number of records to return default: 20 | [optional]
 **status** | **String**| The status of the transaction. | [optional]
 **tokenIds** | [**List&lt;String&gt;**](String.md)| The tokenId involved in the transaction. | [optional]
 **walletIds** | [**List&lt;String&gt;**](String.md)| Unique system generated identifier of the wallet | [optional]

### Return type

[**PageTransaction**](PageTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

<a name="v1TransactionsRetrieve"></a>
# **v1TransactionsRetrieve**
> Transaction v1TransactionsRetrieve(transactionId)

Get transaction

Get a transaction by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: SignatureAuth
    ApiKeyAuth SignatureAuth = (ApiKeyAuth) defaultClient.getAuthentication("SignatureAuth");
    SignatureAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //SignatureAuth.setApiKeyPrefix("Token");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String transactionId = "transactionId_example"; // String | Transaction ID
    try {
      Transaction result = apiInstance.v1TransactionsRetrieve(transactionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#v1TransactionsRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Transaction ID |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

<a name="v1TransactionsTransfer"></a>
# **v1TransactionsTransfer**
> CreateTransferResponse v1TransactionsTransfer(createTransferRequest)

Transfer token

Create a transfer transaction

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: SignatureAuth
    ApiKeyAuth SignatureAuth = (ApiKeyAuth) defaultClient.getAuthentication("SignatureAuth");
    SignatureAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //SignatureAuth.setApiKeyPrefix("Token");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    CreateTransferRequest createTransferRequest = new CreateTransferRequest(); // CreateTransferRequest | Request Body
    try {
      CreateTransferResponse result = apiInstance.v1TransactionsTransfer(createTransferRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#v1TransactionsTransfer");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTransferRequest** | [**CreateTransferRequest**](CreateTransferRequest.md)| Request Body |

### Return type

[**CreateTransferResponse**](CreateTransferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

