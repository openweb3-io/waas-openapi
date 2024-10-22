# WaaSOpenApiDocumentation.ChainsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ChainsList**](ChainsApi.md#v1ChainsList) | **GET** /api/v1/chains | List all chains
[**v1ChainsRetrieve**](ChainsApi.md#v1ChainsRetrieve) | **GET** /api/v1/chains/{id} | Retrieve chain



## v1ChainsList

> CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain v1ChainsList(opts)

List all chains

List of all available chains.

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

let apiInstance = new WaaSOpenApiDocumentation.ChainsApi();
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.v1ChainsList(opts, (error, data, response) => {
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
 **limit** | **Number**|  | [optional] 

### Return type

[**CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain**](CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ChainsRetrieve

> Openweb3IoWaasAppWaasOpenapiServerApiDtosChain v1ChainsRetrieve(id)

Retrieve chain

Retrieve chain information.

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

let apiInstance = new WaaSOpenApiDocumentation.ChainsApi();
let id = "id_example"; // String | Chain ID
apiInstance.v1ChainsRetrieve(id, (error, data, response) => {
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
 **id** | **String**| Chain ID | 

### Return type

[**Openweb3IoWaasAppWaasOpenapiServerApiDtosChain**](Openweb3IoWaasAppWaasOpenapiServerApiDtosChain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

