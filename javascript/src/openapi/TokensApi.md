# .TokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TokensCreate**](TokensApi.md#v1TokensCreate) | **POST** /api/v1/tokens | Create token
[**v1TokensList**](TokensApi.md#v1TokensList) | **GET** /api/v1/tokens | List tokens
[**v1TokensRetrieve**](TokensApi.md#v1TokensRetrieve) | **GET** /api/v1/tokens/{tokenId} | Get Token
[**v1TokensUpdate**](TokensApi.md#v1TokensUpdate) | **PATCH** /api/v1/tokens/{tokenId} | Update token


# **v1TokensCreate**
> Token v1TokensCreate(createTokenRequest)

Create a tokens.

### Example


```typescript
import { createConfiguration, TokensApi } from '';
import type { TokensApiV1TokensCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TokensApi(configuration);

const request: TokensApiV1TokensCreateRequest = {
    // Request Body
  createTokenRequest: {
    name: "name_example",
    uid: "uid_example",
  },
};

const data = await apiInstance.v1TokensCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenRequest** | **CreateTokenRequest**| Request Body |


### Return type

**Token**

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

# **v1TokensList**
> CursorPageToken v1TokensList()

Retrieve a list of all tokens.

### Example


```typescript
import { createConfiguration, TokensApi } from '';
import type { TokensApiV1TokensListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TokensApi(configuration);

const request: TokensApiV1TokensListRequest = {
    // Cursor (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1TokensList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageToken**

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

# **v1TokensRetrieve**
> Token v1TokensRetrieve()

Get token info by ID

### Example


```typescript
import { createConfiguration, TokensApi } from '';
import type { TokensApiV1TokensRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TokensApi(configuration);

const request: TokensApiV1TokensRetrieveRequest = {
    // Token ID
  tokenId: "tokenId_example",
};

const data = await apiInstance.v1TokensRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] | Token ID | defaults to undefined


### Return type

**Token**

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

# **v1TokensUpdate**
> Token v1TokensUpdate(updateTokenRequest)

Update a tokens.

### Example


```typescript
import { createConfiguration, TokensApi } from '';
import type { TokensApiV1TokensUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TokensApi(configuration);

const request: TokensApiV1TokensUpdateRequest = {
    // Token ID
  tokenId: "tokenId_example",
    // Request Body
  updateTokenRequest: {
    id: "id_example",
    name: "name_example",
    uid: "uid_example",
  },
};

const data = await apiInstance.v1TokensUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTokenRequest** | **UpdateTokenRequest**| Request Body |
 **tokenId** | [**string**] | Token ID | defaults to undefined


### Return type

**Token**

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


