# .GasStationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1GasStationsCreate**](GasStationsApi.md#v1GasStationsCreate) | **POST** /api/v1/gas_stations | Create gas station
[**v1GasStationsDelete**](GasStationsApi.md#v1GasStationsDelete) | **DELETE** /api/v1/gas_stations/{gasStationId} | Delete gas station
[**v1GasStationsGetOrCreateDepositAddress**](GasStationsApi.md#v1GasStationsGetOrCreateDepositAddress) | **GET** /api/v1/gas_stations/deposit_address | Get or create deposit address
[**v1GasStationsList**](GasStationsApi.md#v1GasStationsList) | **GET** /api/v1/gas_stations | List gas stations
[**v1GasStationsRetrieve**](GasStationsApi.md#v1GasStationsRetrieve) | **GET** /api/v1/gas_stations/{gasStationId} | Get gas station
[**v1GasStationsUpdate**](GasStationsApi.md#v1GasStationsUpdate) | **PATCH** /api/v1/gas_stations/{gasStationId} | Update gas station


# **v1GasStationsCreate**
> GasStation v1GasStationsCreate(createGasStationRequest)

Create a Gas Station

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsCreateRequest = {
    // Request body
  createGasStationRequest: {
    chainId: "chainId_example",
    disabled: true,
    gasCapacity: "gasCapacity_example",
    gasThreshold: "gasThreshold_example",
    maxFeeLimit: "maxFeeLimit_example",
  },
};

const data = await apiInstance.v1GasStationsCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGasStationRequest** | **CreateGasStationRequest**| Request body |


### Return type

**GasStation**

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

# **v1GasStationsDelete**
> GasStation v1GasStationsDelete()

Delete a Gas Station

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsDeleteRequest = {
    // Gas Station ID
  gasStationId: "gasStationId_example",
};

const data = await apiInstance.v1GasStationsDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gasStationId** | [**string**] | Gas Station ID | defaults to undefined


### Return type

**GasStation**

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

# **v1GasStationsGetOrCreateDepositAddress**
> GetGasStationDepositAddressReply v1GasStationsGetOrCreateDepositAddress()

Get or create a deposit address for a gas station

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest = {
    // Chain ID
  chainId: "chain_id_example",
    // Wallet ID (optional)
  walletId: "wallet_id_example",
  
  body: {},
};

const data = await apiInstance.v1GasStationsGetOrCreateDepositAddress(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **chainId** | [**string**] | Chain ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | (optional) defaults to undefined


### Return type

**GetGasStationDepositAddressReply**

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

# **v1GasStationsList**
> CursorPageGasStation v1GasStationsList()

List all gas stations

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsListRequest = {
    // Cursor (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1GasStationsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageGasStation**

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

# **v1GasStationsRetrieve**
> GasStation v1GasStationsRetrieve()

Get a gas station by ID

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsRetrieveRequest = {
    // Gas Station ID
  gasStationId: "gasStationId_example",
};

const data = await apiInstance.v1GasStationsRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gasStationId** | [**string**] | Gas Station ID | defaults to undefined


### Return type

**GasStation**

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

# **v1GasStationsUpdate**
> GasStation v1GasStationsUpdate(updateGasStationRequest)

Update a Gas Station

### Example


```typescript
import { createConfiguration, GasStationsApi } from '';
import type { GasStationsApiV1GasStationsUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GasStationsApi(configuration);

const request: GasStationsApiV1GasStationsUpdateRequest = {
    // Gas Station ID
  gasStationId: "gasStationId_example",
    // Request body
  updateGasStationRequest: {
    disabled: true,
    gasCapacity: "gasCapacity_example",
    gasThreshold: "gasThreshold_example",
    maxFeeLimit: "maxFeeLimit_example",
  },
};

const data = await apiInstance.v1GasStationsUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGasStationRequest** | **UpdateGasStationRequest**| Request body |
 **gasStationId** | [**string**] | Gas Station ID | defaults to undefined


### Return type

**GasStation**

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


