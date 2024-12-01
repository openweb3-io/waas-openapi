# .WebhookEventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksEventsList**](WebhookEventsApi.md#v1WebhooksEventsList) | **GET** /api/v1/webhooks/events | List webhook event types


# **v1WebhooksEventsList**
> CursorIteratorEventType v1WebhooksEventsList()

List webhook event types

### Example


```typescript
import { createConfiguration, WebhookEventsApi } from '';
import type { WebhookEventsApiV1WebhooksEventsListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEventsApi(configuration);

const request: WebhookEventsApiV1WebhooksEventsListRequest = {
  
  cursor: "cursor_example",
    // The number of records to return default: 100 (optional)
  limit: 1,
};

const data = await apiInstance.v1WebhooksEventsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 100 | (optional) defaults to undefined


### Return type

**CursorIteratorEventType**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


