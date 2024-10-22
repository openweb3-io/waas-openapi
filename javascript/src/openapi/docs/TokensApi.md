# WaaSOpenApiDocumentation.TokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TokensCreate**](TokensApi.md#v1TokensCreate) | **GET** /api/v1/tokens | Create token
[**v1TokensRetrieve**](TokensApi.md#v1TokensRetrieve) | **GET** /api/v1/tokens/{id} | Get Token



## v1TokensCreate

> Token v1TokensCreate(createTokenRequest)

Create token

Create a tokens.

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

let apiInstance = new WaaSOpenApiDocumentation.TokensApi();
let createTokenRequest = new WaaSOpenApiDocumentation.CreateTokenRequest(); // CreateTokenRequest | Request Body
apiInstance.v1TokensCreate(createTokenRequest, (error, data, response) => {
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
 **createTokenRequest** | [**CreateTokenRequest**](CreateTokenRequest.md)| Request Body | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1TokensRetrieve

> Token v1TokensRetrieve(id)

Get Token

Get token info by ID

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

let apiInstance = new WaaSOpenApiDocumentation.TokensApi();
let id = "id_example"; // String | Token ID
apiInstance.v1TokensRetrieve(id, (error, data, response) => {
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
 **id** | **String**| Token ID | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

