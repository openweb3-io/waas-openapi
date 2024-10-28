# WalletsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1WalletsCreate**](WalletsApi.md#v1WalletsCreate) | **POST** /api/v1/wallets | Create wallet |
| [**v1WalletsDelete**](WalletsApi.md#v1WalletsDelete) | **DELETE** /api/v1/wallets/{walletId} | Delete wallet |
| [**v1WalletsList**](WalletsApi.md#v1WalletsList) | **GET** /api/v1/wallets | List wallets |
| [**v1WalletsRetrieve**](WalletsApi.md#v1WalletsRetrieve) | **GET** /api/v1/wallets/{walletId} | Get wallet |
| [**v1WalletsUpdate**](WalletsApi.md#v1WalletsUpdate) | **PATCH** /api/v1/wallets/{walletId} | Update wallet |


<a id="v1WalletsCreate"></a>
# **v1WalletsCreate**
> Wallet v1WalletsCreate(createWalletRequest)

Create wallet

Create a Wallet

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WalletsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WalletsApi apiInstance = new WalletsApi(defaultClient);
    CreateWalletRequest createWalletRequest = new CreateWalletRequest(); // CreateWalletRequest | Request body
    try {
      Wallet result = apiInstance.v1WalletsCreate(createWalletRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletsApi#v1WalletsCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createWalletRequest** | [**CreateWalletRequest**](CreateWalletRequest.md)| Request body | |

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1WalletsDelete"></a>
# **v1WalletsDelete**
> Wallet v1WalletsDelete(walletId, body)

Delete wallet

Delete a Wallet

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WalletsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WalletsApi apiInstance = new WalletsApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    Object body = null; // Object | 
    try {
      Wallet result = apiInstance.v1WalletsDelete(walletId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletsApi#v1WalletsDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **walletId** | **String**| Wallet ID | |
| **body** | **Object**|  | [optional] |

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1WalletsList"></a>
# **v1WalletsList**
> CursorPageWallet v1WalletsList(cursor, limit)

List wallets

List all wallets

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WalletsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WalletsApi apiInstance = new WalletsApi(defaultClient);
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | The number of records to return default: 20
    try {
      CursorPageWallet result = apiInstance.v1WalletsList(cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletsApi#v1WalletsList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cursor** | **String**| Cursor | [optional] |
| **limit** | **Integer**| The number of records to return default: 20 | [optional] |

### Return type

[**CursorPageWallet**](CursorPageWallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1WalletsRetrieve"></a>
# **v1WalletsRetrieve**
> Wallet v1WalletsRetrieve(walletId)

Get wallet

Get a wallet by ID

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WalletsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WalletsApi apiInstance = new WalletsApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    try {
      Wallet result = apiInstance.v1WalletsRetrieve(walletId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletsApi#v1WalletsRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **walletId** | **String**| Wallet ID | |

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1WalletsUpdate"></a>
# **v1WalletsUpdate**
> Wallet v1WalletsUpdate(walletId, updateWalletRequest)

Update wallet

Update a Wallet

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WalletsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WalletsApi apiInstance = new WalletsApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    UpdateWalletRequest updateWalletRequest = new UpdateWalletRequest(); // UpdateWalletRequest | Request body
    try {
      Wallet result = apiInstance.v1WalletsUpdate(walletId, updateWalletRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletsApi#v1WalletsUpdate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **walletId** | **String**| Wallet ID | |
| **updateWalletRequest** | [**UpdateWalletRequest**](UpdateWalletRequest.md)| Request body | |

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

