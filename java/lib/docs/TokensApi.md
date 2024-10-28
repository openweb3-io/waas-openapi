# TokensApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1TokensCreate**](TokensApi.md#v1TokensCreate) | **POST** /api/v1/tokens | Create token |
| [**v1TokensList**](TokensApi.md#v1TokensList) | **GET** /api/v1/tokens | List tokens |
| [**v1TokensRetrieve**](TokensApi.md#v1TokensRetrieve) | **GET** /api/v1/tokens/{tokenId} | Get Token |
| [**v1TokensUpdate**](TokensApi.md#v1TokensUpdate) | **PATCH** /api/v1/tokens/{tokenId} | Update token |


<a id="v1TokensCreate"></a>
# **v1TokensCreate**
> Token v1TokensCreate(createTokenRequest)

Create token

Create a tokens.

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.TokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    TokensApi apiInstance = new TokensApi(defaultClient);
    CreateTokenRequest createTokenRequest = new CreateTokenRequest(); // CreateTokenRequest | Request Body
    try {
      Token result = apiInstance.v1TokensCreate(createTokenRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TokensApi#v1TokensCreate");
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
| **createTokenRequest** | [**CreateTokenRequest**](CreateTokenRequest.md)| Request Body | |

### Return type

[**Token**](Token.md)

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

<a id="v1TokensList"></a>
# **v1TokensList**
> CursorPageToken v1TokensList(cursor, limit)

List tokens

Retrieve a list of all tokens.

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.TokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    TokensApi apiInstance = new TokensApi(defaultClient);
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | The number of records to return default: 20
    try {
      CursorPageToken result = apiInstance.v1TokensList(cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TokensApi#v1TokensList");
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

[**CursorPageToken**](CursorPageToken.md)

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

<a id="v1TokensRetrieve"></a>
# **v1TokensRetrieve**
> Token v1TokensRetrieve(tokenId)

Get Token

Get token info by ID

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.TokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    TokensApi apiInstance = new TokensApi(defaultClient);
    String tokenId = "tokenId_example"; // String | Token ID
    try {
      Token result = apiInstance.v1TokensRetrieve(tokenId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TokensApi#v1TokensRetrieve");
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
| **tokenId** | **String**| Token ID | |

### Return type

[**Token**](Token.md)

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

<a id="v1TokensUpdate"></a>
# **v1TokensUpdate**
> Token v1TokensUpdate(tokenId, updateTokenRequest)

Update token

Update a tokens.

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.TokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    TokensApi apiInstance = new TokensApi(defaultClient);
    String tokenId = "tokenId_example"; // String | Token ID
    UpdateTokenRequest updateTokenRequest = new UpdateTokenRequest(); // UpdateTokenRequest | Request Body
    try {
      Token result = apiInstance.v1TokensUpdate(tokenId, updateTokenRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TokensApi#v1TokensUpdate");
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
| **tokenId** | **String**| Token ID | |
| **updateTokenRequest** | [**UpdateTokenRequest**](UpdateTokenRequest.md)| Request Body | |

### Return type

[**Token**](Token.md)

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

