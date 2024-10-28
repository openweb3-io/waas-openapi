# WaaSOpenApiDocumentation.TokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TokensCreate**](TokensApi.md#v1TokensCreate) | **POST** /api/v1/tokens | Create token
[**v1TokensList**](TokensApi.md#v1TokensList) | **GET** /api/v1/tokens | List tokens
[**v1TokensRetrieve**](TokensApi.md#v1TokensRetrieve) | **GET** /api/v1/tokens/{tokenId} | Get Token
[**v1TokensUpdate**](TokensApi.md#v1TokensUpdate) | **PATCH** /api/v1/tokens/{tokenId} | Update token



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

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1TokensList

> CursorPageToken v1TokensList(opts)

List tokens

Retrieve a list of all tokens.

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TokensApi();
let opts = {
  'cursor': "cursor_example", // String | Cursor
  'limit': 56 // Number | The number of records to return default: 20
};
apiInstance.v1TokensList(opts, (error, data, response) => {
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
 **cursor** | **String**| Cursor | [optional] 
 **limit** | **Number**| The number of records to return default: 20 | [optional] 

### Return type

[**CursorPageToken**](CursorPageToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1TokensRetrieve

> Token v1TokensRetrieve(tokenId)

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

let apiInstance = new WaaSOpenApiDocumentation.TokensApi();
let tokenId = "tokenId_example"; // String | Token ID
apiInstance.v1TokensRetrieve(tokenId, (error, data, response) => {
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
 **tokenId** | **String**| Token ID | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1TokensUpdate

> Token v1TokensUpdate(tokenId, updateTokenRequest)

Update token

Update a tokens.

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TokensApi();
let tokenId = "tokenId_example"; // String | Token ID
let updateTokenRequest = new WaaSOpenApiDocumentation.UpdateTokenRequest(); // UpdateTokenRequest | Request Body
apiInstance.v1TokensUpdate(tokenId, updateTokenRequest, (error, data, response) => {
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
 **tokenId** | **String**| Token ID | 
 **updateTokenRequest** | [**UpdateTokenRequest**](UpdateTokenRequest.md)| Request Body | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

