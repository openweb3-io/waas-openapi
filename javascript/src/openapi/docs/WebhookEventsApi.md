# WaaSOpenApiDocumentation.WebhookEventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksEventsList**](WebhookEventsApi.md#v1WebhooksEventsList) | **GET** /api/v1/webhooks/events | List webhook event types



## v1WebhooksEventsList

> CursorIteratorEventType v1WebhooksEventsList(opts)

List webhook event types

List webhook event types

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEventsApi();
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56 // Number | The number of records to return default: 100
};
apiInstance.v1WebhooksEventsList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**|  | [optional] 
 **limit** | **Number**| The number of records to return default: 100 | [optional] 

### Return type

[**CursorIteratorEventType**](CursorIteratorEventType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

