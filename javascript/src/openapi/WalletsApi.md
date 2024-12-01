# .WalletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WalletsCreate**](WalletsApi.md#v1WalletsCreate) | **POST** /api/v1/wallets | Create wallet
[**v1WalletsDelete**](WalletsApi.md#v1WalletsDelete) | **DELETE** /api/v1/wallets/{walletId} | Delete wallet
[**v1WalletsList**](WalletsApi.md#v1WalletsList) | **GET** /api/v1/wallets | List wallets
[**v1WalletsRetrieve**](WalletsApi.md#v1WalletsRetrieve) | **GET** /api/v1/wallets/{walletId} | Get wallet
[**v1WalletsUpdate**](WalletsApi.md#v1WalletsUpdate) | **PATCH** /api/v1/wallets/{walletId} | Update wallet


# **v1WalletsCreate**
> Wallet v1WalletsCreate(createWalletRequest)

Create a Wallet

### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiV1WalletsCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiV1WalletsCreateRequest = {
    // Request body
  createWalletRequest: {
    name: "name_example",
    subType: "subType_example",
    type: "type_example",
    uid: "uid_example",
  },
};

const data = await apiInstance.v1WalletsCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWalletRequest** | **CreateWalletRequest**| Request body |


### Return type

**Wallet**

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

# **v1WalletsDelete**
> Wallet v1WalletsDelete()

Delete a Wallet

### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiV1WalletsDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiV1WalletsDeleteRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
};

const data = await apiInstance.v1WalletsDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined


### Return type

**Wallet**

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

# **v1WalletsList**
> CursorPageWallet v1WalletsList()

List all wallets

### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiV1WalletsListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiV1WalletsListRequest = {
    // Cursor (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1WalletsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageWallet**

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

# **v1WalletsRetrieve**
> Wallet v1WalletsRetrieve()

Get a wallet by ID

### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiV1WalletsRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiV1WalletsRetrieveRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
};

const data = await apiInstance.v1WalletsRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined


### Return type

**Wallet**

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

# **v1WalletsUpdate**
> Wallet v1WalletsUpdate(updateWalletRequest)

Update a Wallet

### Example


```typescript
import { createConfiguration, WalletsApi } from '';
import type { WalletsApiV1WalletsUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WalletsApi(configuration);

const request: WalletsApiV1WalletsUpdateRequest = {
    // Wallet id or uid
  walletId: "walletId_example",
    // Request body
  updateWalletRequest: {
    name: "name_example",
    uid: "uid_example",
  },
};

const data = await apiInstance.v1WalletsUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWalletRequest** | **UpdateWalletRequest**| Request body |
 **walletId** | [**string**] | Wallet id or uid | defaults to undefined


### Return type

**Wallet**

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


