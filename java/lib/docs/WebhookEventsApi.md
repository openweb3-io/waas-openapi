# WebhookEventsApi

All URIs are relative to *https://api.waas.openweb3.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1WebhooksEventsList**](WebhookEventsApi.md#v1WebhooksEventsList) | **GET** /api/v1/webhooks/events | List webhook event types |


<a id="v1WebhooksEventsList"></a>
# **v1WebhooksEventsList**
> CursorPageEventType v1WebhooksEventsList(cursor, limit)

List webhook event types

List webhook event types

### Example
```java
// Import classes:
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.auth.*;
import io.openweb3.waas.internal.models.*;
import io.openweb3.waas.internal.api.WebhookEventsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.waas.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEventsApi apiInstance = new WebhookEventsApi(defaultClient);
    String cursor = "cursor_example"; // String | 
    Integer limit = 56; // Integer | The number of records to return default: 100
    try {
      CursorPageEventType result = apiInstance.v1WebhooksEventsList(cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEventsApi#v1WebhooksEventsList");
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
| **cursor** | **String**|  | [optional] |
| **limit** | **Integer**| The number of records to return default: 100 | [optional] |

### Return type

[**CursorPageEventType**](CursorPageEventType.md)

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
| **500** | Internal Server Error |  -  |

