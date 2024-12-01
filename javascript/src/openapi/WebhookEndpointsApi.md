# .WebhookEndpointsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksEndpointCreate**](WebhookEndpointsApi.md#v1WebhooksEndpointCreate) | **POST** /api/v1/webhooks/endpoints | Create webhook endpoint
[**v1WebhooksEndpointDelete**](WebhookEndpointsApi.md#v1WebhooksEndpointDelete) | **DELETE** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
[**v1WebhooksEndpointList**](WebhookEndpointsApi.md#v1WebhooksEndpointList) | **GET** /api/v1/webhooks/endpoints | List webhook endpoints
[**v1WebhooksEndpointRetrieve**](WebhookEndpointsApi.md#v1WebhooksEndpointRetrieve) | **GET** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
[**v1WebhooksEndpointUpdate**](WebhookEndpointsApi.md#v1WebhooksEndpointUpdate) | **PATCH** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint


# **v1WebhooksEndpointCreate**
> Endpoint v1WebhooksEndpointCreate(createEndpoint)

Create a webhook endpoint

### Example


```typescript
import { createConfiguration, WebhookEndpointsApi } from '';
import type { WebhookEndpointsApiV1WebhooksEndpointCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEndpointsApi(configuration);

const request: WebhookEndpointsApiV1WebhooksEndpointCreateRequest = {
    // Request body
  createEndpoint: {
    description: "description_example",
    disabled: true,
    eventTypes: [
      "eventTypes_example",
    ],
    uid: "uid_example",
    url: "url_example",
  },
};

const data = await apiInstance.v1WebhooksEndpointCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEndpoint** | **CreateEndpoint**| Request body |


### Return type

**Endpoint**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WebhooksEndpointDelete**
> Endpoint v1WebhooksEndpointDelete()

Delete specific webhook endpoint

### Example


```typescript
import { createConfiguration, WebhookEndpointsApi } from '';
import type { WebhookEndpointsApiV1WebhooksEndpointDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEndpointsApi(configuration);

const request: WebhookEndpointsApiV1WebhooksEndpointDeleteRequest = {
    // Endpoint ID
  endpointId: "endpointId_example",
};

const data = await apiInstance.v1WebhooksEndpointDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Endpoint**

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

# **v1WebhooksEndpointList**
> CursorIteratorEndpoint v1WebhooksEndpointList()

List webhook endpoints

### Example


```typescript
import { createConfiguration, WebhookEndpointsApi } from '';
import type { WebhookEndpointsApiV1WebhooksEndpointListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEndpointsApi(configuration);

const request: WebhookEndpointsApiV1WebhooksEndpointListRequest = {
  
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1WebhooksEndpointList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorIteratorEndpoint**

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

# **v1WebhooksEndpointRetrieve**
> Endpoint v1WebhooksEndpointRetrieve()

Get specific webhook endpoint

### Example


```typescript
import { createConfiguration, WebhookEndpointsApi } from '';
import type { WebhookEndpointsApiV1WebhooksEndpointRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEndpointsApi(configuration);

const request: WebhookEndpointsApiV1WebhooksEndpointRetrieveRequest = {
    // Endpoint ID
  endpointId: "endpointId_example",
};

const data = await apiInstance.v1WebhooksEndpointRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Endpoint**

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WebhooksEndpointUpdate**
> Endpoint v1WebhooksEndpointUpdate(updateEndpoint)

Update specific webhook endpoint

### Example


```typescript
import { createConfiguration, WebhookEndpointsApi } from '';
import type { WebhookEndpointsApiV1WebhooksEndpointUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebhookEndpointsApi(configuration);

const request: WebhookEndpointsApiV1WebhooksEndpointUpdateRequest = {
    // Endpoint ID
  endpointId: "endpointId_example",
    // Request body
  updateEndpoint: {
    description: "description_example",
    disabled: true,
    eventTypes: [
      "eventTypes_example",
    ],
    uid: "uid_example",
    url: "url_example",
  },
};

const data = await apiInstance.v1WebhooksEndpointUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEndpoint** | **UpdateEndpoint**| Request body |
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Endpoint**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


