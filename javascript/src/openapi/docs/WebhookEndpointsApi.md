# WaaSOpenApiDocumentation.WebhookEndpointsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksEndpointCreate**](WebhookEndpointsApi.md#v1WebhooksEndpointCreate) | **POST** /api/v1/webhooks/endpoints | Create webhook endpoint
[**v1WebhooksEndpointDelete**](WebhookEndpointsApi.md#v1WebhooksEndpointDelete) | **DELETE** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
[**v1WebhooksEndpointList**](WebhookEndpointsApi.md#v1WebhooksEndpointList) | **GET** /api/v1/webhooks/endpoints | List webhook endpoints
[**v1WebhooksEndpointRetrieve**](WebhookEndpointsApi.md#v1WebhooksEndpointRetrieve) | **GET** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
[**v1WebhooksEndpointUpdate**](WebhookEndpointsApi.md#v1WebhooksEndpointUpdate) | **PATCH** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint



## v1WebhooksEndpointCreate

> Endpoint v1WebhooksEndpointCreate(createEndpoint)

Create webhook endpoint

Create a webhook endpoint

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let createEndpoint = new WaaSOpenApiDocumentation.CreateEndpoint(); // CreateEndpoint | Request body
apiInstance.v1WebhooksEndpointCreate(createEndpoint, (error, data, response) => {
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
 **createEndpoint** | [**CreateEndpoint**](CreateEndpoint.md)| Request body | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WebhooksEndpointDelete

> Endpoint v1WebhooksEndpointDelete(endpointId)

Delete webhook endpoint

Delete specific webhook endpoint

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
apiInstance.v1WebhooksEndpointDelete(endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Endpoint ID | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksEndpointList

> CursorIteratorEndpoint v1WebhooksEndpointList(opts)

List webhook endpoints

List webhook endpoints

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56 // Number | The number of records to return default: 20
};
apiInstance.v1WebhooksEndpointList(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of records to return default: 20 | [optional] 

### Return type

[**CursorIteratorEndpoint**](CursorIteratorEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksEndpointRetrieve

> Endpoint v1WebhooksEndpointRetrieve(endpointId)

Get webhook endpoint

Get specific webhook endpoint

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
apiInstance.v1WebhooksEndpointRetrieve(endpointId, (error, data, response) => {
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
 **endpointId** | **String**| Endpoint ID | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksEndpointUpdate

> Endpoint v1WebhooksEndpointUpdate(endpointId, updateEndpoint)

Update webhook endpoint

Update specific webhook endpoint

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
let updateEndpoint = new WaaSOpenApiDocumentation.UpdateEndpoint(); // UpdateEndpoint | Request body
apiInstance.v1WebhooksEndpointUpdate(endpointId, updateEndpoint, (error, data, response) => {
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
 **endpointId** | **String**| Endpoint ID | 
 **updateEndpoint** | [**UpdateEndpoint**](UpdateEndpoint.md)| Request body | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

