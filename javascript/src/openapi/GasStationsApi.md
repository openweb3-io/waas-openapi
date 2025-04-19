# .GasStationsApi

All URIs are relative to *https://api.waas.openweb3.io*

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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsCreateRequest = {
  // CreateGasStationRequest | Request body
  createGasStationRequest: {
    chainId: "chainId_example",
    disabled: true,
    gasCapacity: "gasCapacity_example",
    gasThreshold: "gasThreshold_example",
    maxFeeLimit: "maxFeeLimit_example",
  },
};

apiInstance.v1GasStationsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsDeleteRequest = {
  // string | Gas Station ID
  gasStationId: "gasStationId_example",
};

apiInstance.v1GasStationsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsGetOrCreateDepositAddressRequest = {
  // string | Chain ID
  chainId: "chain_id_example",
  // string | Wallet ID (optional)
  walletId: "wallet_id_example",
};

apiInstance.v1GasStationsGetOrCreateDepositAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | [**string**] | Chain ID | defaults to undefined
 **walletId** | [**string**] | Wallet ID | (optional) defaults to undefined


### Return type

**GetGasStationDepositAddressReply**

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

# **v1GasStationsList**
> CursorPageGasStation v1GasStationsList()

List all gas stations

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsListRequest = {
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 20 (optional)
  limit: 1,
};

apiInstance.v1GasStationsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsRetrieveRequest = {
  // string | Gas Station ID
  gasStationId: "gasStationId_example",
};

apiInstance.v1GasStationsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GasStationsApi(configuration);

let body:.GasStationsApiV1GasStationsUpdateRequest = {
  // string | Gas Station ID
  gasStationId: "gasStationId_example",
  // UpdateGasStationRequest | Request body
  updateGasStationRequest: {
    disabled: true,
    gasCapacity: "gasCapacity_example",
    gasThreshold: "gasThreshold_example",
    maxFeeLimit: "maxFeeLimit_example",
  },
};

apiInstance.v1GasStationsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


