# AddressesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressesList**](AddressesApi.md#v1AddressesList) | **GET** /api/v1/addresses | List all addresses
[**v1WalletsCreateAddress**](AddressesApi.md#v1WalletsCreateAddress) | **POST** /api/v1/wallets/{walletId}/addresses | Create deposit address
[**v1WalletsGetDepositAddress**](AddressesApi.md#v1WalletsGetDepositAddress) | **GET** /api/v1/wallets/{walletId}/addresses/{address} | Get deposit address
[**v1WalletsListDepositAddresses**](AddressesApi.md#v1WalletsListDepositAddresses) | **GET** /api/v1/wallets/{walletId}/addresses | List deposit addresses


<a name="v1AddressesList"></a>
# **v1AddressesList**
> CursorPageAddress v1AddressesList(chainIds, cursor, limit, walletIds)

List all addresses

List of all available addresses.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AddressesApi;

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

    AddressesApi apiInstance = new AddressesApi(defaultClient);
    List<String> chainIds = Arrays.asList(); // List<String> | The chain ids.
    String cursor = "cursor_example"; // String | The cursor to use for pagination.
    Integer limit = 56; // Integer | The number of records to return default: 20
    List<String> walletIds = Arrays.asList(); // List<String> | Unique system generated identifier of the wallet
    try {
      CursorPageAddress result = apiInstance.v1AddressesList(chainIds, cursor, limit, walletIds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddressesApi#v1AddressesList");
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
 **chainIds** | [**List&lt;String&gt;**](String.md)| The chain ids. | [optional]
 **cursor** | **String**| The cursor to use for pagination. | [optional]
 **limit** | **Integer**| The number of records to return default: 20 | [optional]
 **walletIds** | [**List&lt;String&gt;**](String.md)| Unique system generated identifier of the wallet | [optional]

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

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

<a name="v1WalletsCreateAddress"></a>
# **v1WalletsCreateAddress**
> Address v1WalletsCreateAddress(walletId, createAddressRequest)

Create deposit address

Create deposit address for wallet

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AddressesApi;

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

    AddressesApi apiInstance = new AddressesApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    CreateAddressRequest createAddressRequest = new CreateAddressRequest(); // CreateAddressRequest | Request Body
    try {
      Address result = apiInstance.v1WalletsCreateAddress(walletId, createAddressRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddressesApi#v1WalletsCreateAddress");
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
 **walletId** | **String**| Wallet ID |
 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md)| Request Body |

### Return type

[**Address**](Address.md)

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

<a name="v1WalletsGetDepositAddress"></a>
# **v1WalletsGetDepositAddress**
> Address v1WalletsGetDepositAddress(walletId, address, tokenId)

Get deposit address

Get wallet&#39;s deposit address

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AddressesApi;

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

    AddressesApi apiInstance = new AddressesApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    String address = "address_example"; // String | Address
    String tokenId = "tokenId_example"; // String | The token id used in the transaction (e.g., TON, USDT_ETH, etc.).
    try {
      Address result = apiInstance.v1WalletsGetDepositAddress(walletId, address, tokenId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddressesApi#v1WalletsGetDepositAddress");
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
 **walletId** | **String**| Wallet ID |
 **address** | **String**| Address |
 **tokenId** | **String**| The token id used in the transaction (e.g., TON, USDT_ETH, etc.). |

### Return type

[**Address**](Address.md)

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

<a name="v1WalletsListDepositAddresses"></a>
# **v1WalletsListDepositAddresses**
> CursorPageAddress v1WalletsListDepositAddresses(walletId, chainIds, cursor, limit)

List deposit addresses

List wallet&#39;s deposit addresses

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AddressesApi;

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

    AddressesApi apiInstance = new AddressesApi(defaultClient);
    String walletId = "walletId_example"; // String | Wallet ID
    List<String> chainIds = Arrays.asList(); // List<String> | chain ids
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | Limit, default is 20
    try {
      CursorPageAddress result = apiInstance.v1WalletsListDepositAddresses(walletId, chainIds, cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddressesApi#v1WalletsListDepositAddresses");
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
 **walletId** | **String**| Wallet ID |
 **chainIds** | [**List&lt;String&gt;**](String.md)| chain ids | [optional]
 **cursor** | **String**| Cursor | [optional]
 **limit** | **Integer**| Limit, default is 20 | [optional]

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

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

