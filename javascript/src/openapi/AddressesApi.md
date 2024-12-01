# .AddressesApi

All URIs are relative to *http://localhost*

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
import { createConfiguration, AddressesApi } from '';
import type { AddressesApiV1AddressesListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AddressesApi(configuration);

const request: AddressesApiV1AddressesListRequest = {
    // Unique system generated identifier of the wallet (optional)
  walletIds: [
    "wallet_ids_example",
  ],
    // The chain ids. (optional)
  chainIds: [
    "chain_ids_example",
  ],
    // The cursor to use for pagination. (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1AddressesList(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AddressesApi } from '';
import type { AddressesApiV1AddressesValidateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AddressesApi(configuration);

const request: AddressesApiV1AddressesValidateRequest = {
    // Chain ID
  chainId: "chain_id_example",
    // Addresses
  addresses: [
    "addresses_example",
  ],
};

const data = await apiInstance.v1AddressesValidate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | [**string**] | Chain ID | defaults to undefined
 **addresses** | **Array&lt;string&gt;** | Addresses | defaults to undefined


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
import { createConfiguration, AddressesApi } from '';
import type { AddressesApiV1WalletsCreateAddressRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AddressesApi(configuration);

const request: AddressesApiV1WalletsCreateAddressRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
    // Request Body
  createAddressRequest: {
    chainId: "chainId_example",
    type: "DEPOSIT",
  },
};

const data = await apiInstance.v1WalletsCreateAddress(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AddressesApi } from '';
import type { AddressesApiV1WalletsGetAddressRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AddressesApi(configuration);

const request: AddressesApiV1WalletsGetAddressRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
    // Address
  address: "address_example",
};

const data = await apiInstance.v1WalletsGetAddress(request);
console.log('API called successfully. Returned data:', data);
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
import { createConfiguration, AddressesApi } from '';
import type { AddressesApiV1WalletsListAddressesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AddressesApi(configuration);

const request: AddressesApiV1WalletsListAddressesRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
    // chain ids (optional)
  chainIds: [
    "chain_ids_example",
  ],
    // Cursor (optional)
  cursor: "cursor_example",
    // Limit, default is 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1WalletsListAddresses(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined
 **chainIds** | **Array&lt;string&gt;** | chain ids | (optional) defaults to undefined
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


