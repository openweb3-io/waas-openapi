# .ChainsApi

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ChainsList**](ChainsApi.md#v1ChainsList) | **GET** /api/v1/chains | List all chains
[**v1ChainsRetrieve**](ChainsApi.md#v1ChainsRetrieve) | **GET** /api/v1/chains/{chainId} | Retrieve chain


# **v1ChainsList**
> CursorPageChain v1ChainsList()

List of all available chains.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChainsApi(configuration);

let body:.ChainsApiV1ChainsListRequest = {
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 20 (optional)
  limit: 1,
};

apiInstance.v1ChainsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChainsApi(configuration);

let body:.ChainsApiV1ChainsRetrieveRequest = {
  // string | Chain ID
  chainId: "chainId_example",
};

apiInstance.v1ChainsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


