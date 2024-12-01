# .ChainsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ChainsList**](ChainsApi.md#v1ChainsList) | **GET** /api/v1/chains | List all chains
[**v1ChainsRetrieve**](ChainsApi.md#v1ChainsRetrieve) | **GET** /api/v1/chains/{chainId} | Retrieve chain


# **v1ChainsList**
> CursorPageChain v1ChainsList()

List of all available chains.

### Example


```typescript
import { createConfiguration, ChainsApi } from '';
import type { ChainsApiV1ChainsListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ChainsApi(configuration);

const request: ChainsApiV1ChainsListRequest = {
    // Cursor (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1ChainsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageChain**

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

# **v1ChainsRetrieve**
> Chain v1ChainsRetrieve()

Retrieve chain information.

### Example


```typescript
import { createConfiguration, ChainsApi } from '';
import type { ChainsApiV1ChainsRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ChainsApi(configuration);

const request: ChainsApiV1ChainsRetrieveRequest = {
    // Chain ID
  chainId: "chainId_example",
};

const data = await apiInstance.v1ChainsRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | [**string**] | Chain ID | defaults to undefined


### Return type

**Chain**

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


