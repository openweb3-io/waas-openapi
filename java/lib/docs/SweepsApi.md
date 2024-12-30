# SweepsApi

All URIs are relative to *https://api.waas.openweb3.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1SweepsAddress**](SweepsApi.md#v1SweepsAddress) | **POST** /api/v1/sweeps/address/{address} | Sweep address |


<a id="v1SweepsAddress"></a>
# **v1SweepsAddress**
> SweepAddressResponse v1SweepsAddress(address, sweepAddressRequest)

Sweep address

Sweep funds from a single address

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.SweepsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.waas.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    SweepsApi apiInstance = new SweepsApi(defaultClient);
    String address = "address_example"; // String | Address that funds will be swept from
    SweepAddressRequest sweepAddressRequest = new SweepAddressRequest(); // SweepAddressRequest | Request
    try {
      SweepAddressResponse result = apiInstance.v1SweepsAddress(address, sweepAddressRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SweepsApi#v1SweepsAddress");
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
| **address** | **String**| Address that funds will be swept from | |
| **sweepAddressRequest** | [**SweepAddressRequest**](SweepAddressRequest.md)| Request | |

### Return type

[**SweepAddressResponse**](SweepAddressResponse.md)

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

