# WaaSOpenApiDocumentation.AddressesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressesList**](AddressesApi.md#v1AddressesList) | **GET** /api/v1/addresses | List all addresses
[**v1WalletsCreateAddress**](AddressesApi.md#v1WalletsCreateAddress) | **POST** /api/v1/wallets/{walletId}/addresses | Get deposit address
[**v1WalletsGetDepositAddress**](AddressesApi.md#v1WalletsGetDepositAddress) | **GET** /api/v1/wallets/{walletId}/addresses/{address} | Get deposit address
[**v1WalletsListDepositAddresses**](AddressesApi.md#v1WalletsListDepositAddresses) | **GET** /api/v1/wallets/{walletId}/deposit_addresses | List deposit addresses



## v1AddressesList

> CursorPageAddress v1AddressesList(opts)

List all addresses

List of all available addresses.

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

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let opts = {
  'chainIds': ["null"], // [String] | The chain ids.
  'cursor': "cursor_example", // String | The cursor to use for pagination.
  'limit': 56, // Number | The number of records to return default: 20
  'walletIds': ["null"] // [String] | Unique system generated identifier of the wallet
};
apiInstance.v1AddressesList(opts, (error, data, response) => {
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
 **chainIds** | [**[String]**](String.md)| The chain ids. | [optional] 
 **cursor** | **String**| The cursor to use for pagination. | [optional] 
 **limit** | **Number**| The number of records to return default: 20 | [optional] 
 **walletIds** | [**[String]**](String.md)| Unique system generated identifier of the wallet | [optional] 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsCreateAddress

> Address v1WalletsCreateAddress(walletId, createAddressRequest)

Get deposit address

Get wallet&#39;s deposit address

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

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet ID
let createAddressRequest = new WaaSOpenApiDocumentation.CreateAddressRequest(); // CreateAddressRequest | Request Body
apiInstance.v1WalletsCreateAddress(walletId, createAddressRequest, (error, data, response) => {
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
 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md)| Request Body | 

### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WalletsGetDepositAddress

> Address v1WalletsGetDepositAddress(walletId, address, tokenId)

Get deposit address

Get wallet&#39;s deposit address

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

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet ID
let address = "address_example"; // String | Address
let tokenId = "tokenId_example"; // String | The token id used in the transaction (e.g., TON, USDT_ETH, etc.).
apiInstance.v1WalletsGetDepositAddress(walletId, address, tokenId, (error, data, response) => {
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
 **address** | **String**| Address | 
 **tokenId** | **String**| The token id used in the transaction (e.g., TON, USDT_ETH, etc.). | 

### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsListDepositAddresses

> CursorPageAddress v1WalletsListDepositAddresses(walletId, opts)

List deposit addresses

List wallet&#39;s deposit addresses

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

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet ID
let opts = {
  'chainIds': ["null"], // [String] | chain ids
  'cursor': "cursor_example", // String | Cursor
  'limit': 56 // Number | Limit, default is 20
};
apiInstance.v1WalletsListDepositAddresses(walletId, opts, (error, data, response) => {
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
 **chainIds** | [**[String]**](String.md)| chain ids | [optional] 
 **cursor** | **String**| Cursor | [optional] 
 **limit** | **Number**| Limit, default is 20 | [optional] 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

