# .WalletsApi

All URIs are relative to *https://api.waas.openweb3.io*

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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiV1WalletsCreateRequest = {
  // CreateWalletRequest | Request body
  createWalletRequest: {
    name: "name_example",
    subType: "subType_example",
    type: "type_example",
    uid: "uid_example",
  },
};

apiInstance.v1WalletsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiV1WalletsDeleteRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
};

apiInstance.v1WalletsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiV1WalletsListRequest = {
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 20 (optional)
  limit: 1,
};

apiInstance.v1WalletsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiV1WalletsRetrieveRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
};

apiInstance.v1WalletsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletsApi(configuration);

let body:.WalletsApiV1WalletsUpdateRequest = {
  // string | Wallet id or uid
  walletId: "walletId_example",
  // UpdateWalletRequest | Request body
  updateWalletRequest: {
    name: "name_example",
    uid: "uid_example",
  },
};

apiInstance.v1WalletsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


