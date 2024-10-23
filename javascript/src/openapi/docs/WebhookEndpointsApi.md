# WaaSOpenApiDocumentation.WebhookEndpointsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhooksCreate**](WebhookEndpointsApi.md#v1WebhooksCreate) | **POST** /api/v1/webhooks/endpoints | Create webhook endpoint
[**v1WebhooksDelete**](WebhookEndpointsApi.md#v1WebhooksDelete) | **DELETE** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
[**v1WebhooksList**](WebhookEndpointsApi.md#v1WebhooksList) | **GET** /api/v1/endpoints | List webhook endpoints
[**v1WebhooksRetrieve**](WebhookEndpointsApi.md#v1WebhooksRetrieve) | **GET** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
[**v1WebhooksUpdate**](WebhookEndpointsApi.md#v1WebhooksUpdate) | **PATCH** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint



## v1WebhooksCreate

> Endpoint v1WebhooksCreate(createEndpoint)

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
// Configure API key authorization: SignatureAuth
let SignatureAuth = defaultClient.authentications['SignatureAuth'];
SignatureAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SignatureAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let createEndpoint = new WaaSOpenApiDocumentation.CreateEndpoint(); // CreateEndpoint | Request body
apiInstance.v1WebhooksCreate(createEndpoint, (error, data, response) => {
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WebhooksDelete

> Endpoint v1WebhooksDelete(endpointId)

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
// Configure API key authorization: SignatureAuth
let SignatureAuth = defaultClient.authentications['SignatureAuth'];
SignatureAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SignatureAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
apiInstance.v1WebhooksDelete(endpointId, (error, data, response) => {
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksList

> CursorPageEndpoint v1WebhooksList(opts)

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
// Configure API key authorization: SignatureAuth
let SignatureAuth = defaultClient.authentications['SignatureAuth'];
SignatureAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SignatureAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56 // Number | The number of records to return default: 20
};
apiInstance.v1WebhooksList(opts, (error, data, response) => {
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

[**CursorPageEndpoint**](CursorPageEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksRetrieve

> Endpoint v1WebhooksRetrieve(endpointId)

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
// Configure API key authorization: SignatureAuth
let SignatureAuth = defaultClient.authentications['SignatureAuth'];
SignatureAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SignatureAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
apiInstance.v1WebhooksRetrieve(endpointId, (error, data, response) => {
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebhooksUpdate

> Endpoint v1WebhooksUpdate(endpointId, updateEndpoint)

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
// Configure API key authorization: SignatureAuth
let SignatureAuth = defaultClient.authentications['SignatureAuth'];
SignatureAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SignatureAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WebhookEndpointsApi();
let endpointId = "endpointId_example"; // String | Endpoint ID
let updateEndpoint = new WaaSOpenApiDocumentation.UpdateEndpoint(); // UpdateEndpoint | Request body
apiInstance.v1WebhooksUpdate(endpointId, updateEndpoint, (error, data, response) => {
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

