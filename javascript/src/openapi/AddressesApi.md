# .AddressesApi

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AddressesList**](AddressesApi.md#v1AddressesList) | **GET** /api/v1/addresses | List all addresses
[**v1AddressesValidate**](AddressesApi.md#v1AddressesValidate) | **GET** /api/v1/addresses/validate | Validate addresses
[**v1WalletsCreateAddress**](AddressesApi.md#v1WalletsCreateAddress) | **POST** /api/v1/wallets/{walletId}/addresses | Create address
[**v1WalletsGetAddress**](AddressesApi.md#v1WalletsGetAddress) | **GET** /api/v1/wallets/{walletId}/addresses/{address} | Get address information
[**v1WalletsListAddresses**](AddressesApi.md#v1WalletsListAddresses) | **GET** /api/v1/wallets/{walletId}/addresses | List wallet addresses


# **v1AddressesList**
> CursorPageAddress v1AddressesList()

List of all available addresses.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiV1AddressesListRequest = {
  // Array<string> | Unique system generated identifier of the wallet (optional)
  walletIds: [
    "wallet_ids_example",
  ],
  // Array<string> | The chain ids. (optional)
  chainIds: [
    "chain_ids_example",
  ],
  // string | The cursor to use for pagination. (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 20 (optional)
  limit: 1,
};

apiInstance.v1AddressesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletIds** | **Array&lt;string&gt;** | Unique system generated identifier of the wallet | (optional) defaults to undefined
 **chainIds** | **Array&lt;string&gt;** | The chain ids. | (optional) defaults to undefined
 **cursor** | [**string**] | The cursor to use for pagination. | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageAddress**

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
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AddressesValidate**
> ValidateAddressesReply v1AddressesValidate()

Validate addresses

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiV1AddressesValidateRequest = {
  // Array<string> | Addresses
  addresses: [
    "addresses_example",
  ],
  // string | Chain ID
  chainId: "chain_id_example",
};

apiInstance.v1AddressesValidate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **Array&lt;string&gt;** | Addresses | defaults to undefined
 **chainId** | [**string**] | Chain ID | defaults to undefined


### Return type

**ValidateAddressesReply**

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
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WalletsCreateAddress**
> Address v1WalletsCreateAddress(createAddressRequest)

Create address for wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiV1WalletsCreateAddressRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
  // CreateAddressRequest | Request Body
  createAddressRequest: {
    chainId: "chainId_example",
  },
};

apiInstance.v1WalletsCreateAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAddressRequest** | **CreateAddressRequest**| Request Body |
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined


### Return type

**Address**

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
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WalletsGetAddress**
> Address v1WalletsGetAddress()

Get specific address information in wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiV1WalletsGetAddressRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
  // string | Address
  address: "address_example",
};

apiInstance.v1WalletsGetAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined
 **address** | [**string**] | Address | defaults to undefined


### Return type

**Address**

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
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1WalletsListAddresses**
> CursorPageAddress v1WalletsListAddresses()

List addresses in wallet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AddressesApi(configuration);

let body:.AddressesApiV1WalletsListAddressesRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
  // Array<string> | chain ids (optional)
  chainIds: [
    "chain_ids_example",
  ],
  // 'DEPOSIT' | 'HOT' | address type (optional)
  addressType: "DEPOSIT",
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | Limit, default is 20 (optional)
  limit: 1,
};

apiInstance.v1WalletsListAddresses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined
 **chainIds** | **Array&lt;string&gt;** | chain ids | (optional) defaults to undefined
 **addressType** | [**&#39;DEPOSIT&#39; | &#39;HOT&#39;**]**Array<&#39;DEPOSIT&#39; &#124; &#39;HOT&#39;>** | address type | (optional) defaults to undefined
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | Limit, default is 20 | (optional) defaults to undefined


### Return type

**CursorPageAddress**

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
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


