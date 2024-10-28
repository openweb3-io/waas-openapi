# WaaSOpenApiDocumentation.WalletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WalletsCreate**](WalletsApi.md#v1WalletsCreate) | **POST** /api/v1/wallets | Create wallet
[**v1WalletsDelete**](WalletsApi.md#v1WalletsDelete) | **DELETE** /api/v1/wallets/{walletId} | Delete wallet
[**v1WalletsList**](WalletsApi.md#v1WalletsList) | **GET** /api/v1/wallets | List wallets
[**v1WalletsRetrieve**](WalletsApi.md#v1WalletsRetrieve) | **GET** /api/v1/wallets/{walletId} | Get wallet
[**v1WalletsUpdate**](WalletsApi.md#v1WalletsUpdate) | **PATCH** /api/v1/wallets/{walletId} | Update wallet



## v1WalletsCreate

> Wallet v1WalletsCreate(createWalletRequest)

Create wallet

Create a Wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WalletsApi();
let createWalletRequest = new WaaSOpenApiDocumentation.CreateWalletRequest(); // CreateWalletRequest | Request body
apiInstance.v1WalletsCreate(createWalletRequest, (error, data, response) => {
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
 **createWalletRequest** | [**CreateWalletRequest**](CreateWalletRequest.md)| Request body | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WalletsDelete

> Wallet v1WalletsDelete(walletId, opts)

Delete wallet

Delete a Wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WalletsApi();
let walletId = "walletId_example"; // String | Wallet ID
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.v1WalletsDelete(walletId, opts, (error, data, response) => {
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
 **walletId** | **String**| Wallet ID | 
 **body** | **Object**|  | [optional] 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WalletsList

> CursorPageWallet v1WalletsList(opts)

List wallets

List all wallets

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WalletsApi();
let opts = {
  'cursor': "cursor_example", // String | Cursor
  'limit': 56 // Number | The number of records to return default: 20
};
apiInstance.v1WalletsList(opts, (error, data, response) => {
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

[**CursorPageWallet**](CursorPageWallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsRetrieve

> Wallet v1WalletsRetrieve(walletId)

Get wallet

Get a wallet by ID

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WalletsApi();
let walletId = "walletId_example"; // String | Wallet ID
apiInstance.v1WalletsRetrieve(walletId, (error, data, response) => {
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
 **walletId** | **String**| Wallet ID | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsUpdate

> Wallet v1WalletsUpdate(walletId, updateWalletRequest)

Update wallet

Update a Wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.WalletsApi();
let walletId = "walletId_example"; // String | Wallet ID
let updateWalletRequest = new WaaSOpenApiDocumentation.UpdateWalletRequest(); // UpdateWalletRequest | Request body
apiInstance.v1WalletsUpdate(walletId, updateWalletRequest, (error, data, response) => {
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
 **walletId** | **String**| Wallet ID | 
 **updateWalletRequest** | [**UpdateWalletRequest**](UpdateWalletRequest.md)| Request body | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

