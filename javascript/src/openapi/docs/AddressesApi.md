# WaaSOpenApiDocumentation.AddressesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressesList**](AddressesApi.md#v1AddressesList) | **GET** /api/v1/addresses | List all addresses
[**v1AddressesValidate**](AddressesApi.md#v1AddressesValidate) | **GET** /api/v1/addresses/validate | Validate addresses
[**v1WalletsCreateAddress**](AddressesApi.md#v1WalletsCreateAddress) | **POST** /api/v1/wallets/{walletId}/addresses | Create address
[**v1WalletsGetAddress**](AddressesApi.md#v1WalletsGetAddress) | **GET** /api/v1/wallets/{walletId}/addresses/{address} | Get address information
[**v1WalletsListAddresses**](AddressesApi.md#v1WalletsListAddresses) | **GET** /api/v1/wallets/{walletId}/addresses | List wallet addresses



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

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let opts = {
  'walletIds': ["null"], // [String] | Unique system generated identifier of the wallet
  'chainIds': ["null"], // [String] | The chain ids.
  'cursor': "cursor_example", // String | The cursor to use for pagination.
  'limit': 56 // Number | The number of records to return default: 20
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
 **walletIds** | [**[String]**](String.md)| Unique system generated identifier of the wallet | [optional] 
 **chainIds** | [**[String]**](String.md)| The chain ids. | [optional] 
 **cursor** | **String**| The cursor to use for pagination. | [optional] 
 **limit** | **Number**| The number of records to return default: 20 | [optional] 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddressesValidate

> ValidateAddressesReply v1AddressesValidate(chainId, addresses)

Validate addresses

Validate addresses

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let chainId = "chainId_example"; // String | Chain ID
let addresses = ["null"]; // [String] | Addresses
apiInstance.v1AddressesValidate(chainId, addresses, (error, data, response) => {
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
 **chainId** | **String**| Chain ID | 
 **addresses** | [**[String]**](String.md)| Addresses | 

### Return type

[**ValidateAddressesReply**](ValidateAddressesReply.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsCreateAddress

> Address v1WalletsCreateAddress(walletId, createAddressRequest)

Create address

Create address for wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet id or uid
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
 **walletId** | **String**| Wallet id or uid | 
 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md)| Request Body | 

### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WalletsGetAddress

> Address v1WalletsGetAddress(walletId, address)

Get address information

Get specific address information in wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet id or uid
let address = "address_example"; // String | Address
apiInstance.v1WalletsGetAddress(walletId, address, (error, data, response) => {
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
 **walletId** | **String**| Wallet id or uid | 
 **address** | **String**| Address | 

### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsListAddresses

> CursorPageAddress v1WalletsListAddresses(walletId, opts)

List wallet addresses

List addresses in wallet

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.AddressesApi();
let walletId = "walletId_example"; // String | Wallet id or uid
let opts = {
  'chainIds': ["null"], // [String] | chain ids
  'cursor': "cursor_example", // String | Cursor
  'limit': 56 // Number | Limit, default is 20
};
apiInstance.v1WalletsListAddresses(walletId, opts, (error, data, response) => {
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
 **walletId** | **String**| Wallet id or uid | 
 **chainIds** | [**[String]**](String.md)| chain ids | [optional] 
 **cursor** | **String**| Cursor | [optional] 
 **limit** | **Number**| Limit, default is 20 | [optional] 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

