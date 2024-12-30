# .WebhookEventsApi

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksEventsList**](WebhookEventsApi.md#v1WebhooksEventsList) | **GET** /api/v1/webhooks/events | List webhook event types


# **v1WebhooksEventsList**
> CursorPageEventType v1WebhooksEventsList()

List webhook event types

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookEventsApi(configuration);

let body:.WebhookEventsApiV1WebhooksEventsListRequest = {
  // string (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 100 (optional)
  limit: 1,
};

apiInstance.v1WebhooksEventsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 100 | (optional) defaults to undefined


### Return type

**CursorPageEventType**

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


