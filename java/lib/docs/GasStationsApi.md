# GasStationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1GasStationsCreate**](GasStationsApi.md#v1GasStationsCreate) | **POST** /api/v1/gas_stations | Create gas station |
| [**v1GasStationsDelete**](GasStationsApi.md#v1GasStationsDelete) | **DELETE** /api/v1/gas_stations/{gasStationId} | Delete gas station |
| [**v1GasStationsGetOrCreateDepositAddress**](GasStationsApi.md#v1GasStationsGetOrCreateDepositAddress) | **GET** /api/v1/gas_stations/deposit_address | Get or create deposit address |
| [**v1GasStationsList**](GasStationsApi.md#v1GasStationsList) | **GET** /api/v1/gas_stations | List gas stations |
| [**v1GasStationsRetrieve**](GasStationsApi.md#v1GasStationsRetrieve) | **GET** /api/v1/gas_stations/{gasStationId} | Get gas station |
| [**v1GasStationsUpdate**](GasStationsApi.md#v1GasStationsUpdate) | **PATCH** /api/v1/gas_stations/{gasStationId} | Update gas station |


<a id="v1GasStationsCreate"></a>
# **v1GasStationsCreate**
> GasStation v1GasStationsCreate(createGasStationRequest)

Create gas station

Create a Gas Station

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    CreateGasStationRequest createGasStationRequest = new CreateGasStationRequest(); // CreateGasStationRequest | Request body
    try {
      GasStation result = apiInstance.v1GasStationsCreate(createGasStationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsCreate");
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
| **createGasStationRequest** | [**CreateGasStationRequest**](CreateGasStationRequest.md)| Request body | |

### Return type

[**GasStation**](GasStation.md)

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

<a id="v1GasStationsDelete"></a>
# **v1GasStationsDelete**
> GasStation v1GasStationsDelete(gasStationId)

Delete gas station

Delete a Gas Station

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    String gasStationId = "gasStationId_example"; // String | Gas Station ID
    try {
      GasStation result = apiInstance.v1GasStationsDelete(gasStationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsDelete");
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
| **gasStationId** | **String**| Gas Station ID | |

### Return type

[**GasStation**](GasStation.md)

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

<a id="v1GasStationsGetOrCreateDepositAddress"></a>
# **v1GasStationsGetOrCreateDepositAddress**
> String v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest)

Get or create deposit address

Get or create a deposit address for a gas station

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    GetGasStationDepositAddressRequest getGasStationDepositAddressRequest = new GetGasStationDepositAddressRequest(); // GetGasStationDepositAddressRequest | Request body
    try {
      String result = apiInstance.v1GasStationsGetOrCreateDepositAddress(getGasStationDepositAddressRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsGetOrCreateDepositAddress");
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
| **getGasStationDepositAddressRequest** | [**GetGasStationDepositAddressRequest**](GetGasStationDepositAddressRequest.md)| Request body | |

### Return type

**String**

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

<a id="v1GasStationsList"></a>
# **v1GasStationsList**
> CursorPageGasStation v1GasStationsList(cursor, limit)

List gas stations

List all gas stations

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | The number of records to return default: 20
    try {
      CursorPageGasStation result = apiInstance.v1GasStationsList(cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsList");
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

[**CursorPageGasStation**](CursorPageGasStation.md)

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

<a id="v1GasStationsRetrieve"></a>
# **v1GasStationsRetrieve**
> GasStation v1GasStationsRetrieve(gasStationId)

Get gas station

Get a gas station by ID

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    String gasStationId = "gasStationId_example"; // String | Gas Station ID
    try {
      GasStation result = apiInstance.v1GasStationsRetrieve(gasStationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsRetrieve");
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
| **gasStationId** | **String**| Gas Station ID | |

### Return type

[**GasStation**](GasStation.md)

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

<a id="v1GasStationsUpdate"></a>
# **v1GasStationsUpdate**
> GasStation v1GasStationsUpdate(gasStationId, updateGasStationRequest)

Update gas station

Update a Gas Station

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.GasStationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    GasStationsApi apiInstance = new GasStationsApi(defaultClient);
    String gasStationId = "gasStationId_example"; // String | Gas Station ID
    UpdateGasStationRequest updateGasStationRequest = new UpdateGasStationRequest(); // UpdateGasStationRequest | Request body
    try {
      GasStation result = apiInstance.v1GasStationsUpdate(gasStationId, updateGasStationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GasStationsApi#v1GasStationsUpdate");
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
| **gasStationId** | **String**| Gas Station ID | |
| **updateGasStationRequest** | [**UpdateGasStationRequest**](UpdateGasStationRequest.md)| Request body | |

### Return type

[**GasStation**](GasStation.md)

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

