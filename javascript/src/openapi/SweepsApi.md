# .SweepsApi

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SweepsAddress**](SweepsApi.md#v1SweepsAddress) | **POST** /api/v1/sweeps/address/{address} | Sweep address


# **v1SweepsAddress**
> SweepAddressResponse v1SweepsAddress(sweepAddressRequest)

Sweep funds from a single address

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SweepsApi(configuration);

let body:.SweepsApiV1SweepsAddressRequest = {
  // string | Address that funds will be swept from
  address: "address_example",
  // SweepAddressRequest | Request
  sweepAddressRequest: {
    feeAddress: "feeAddress_example",
    maxFeeLimit: "maxFeeLimit_example",
    minCollectAmount: "minCollectAmount_example",
    toAddress: "toAddress_example",
    tokenId: "tokenId_example",
  },
};

apiInstance.v1SweepsAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sweepAddressRequest** | **SweepAddressRequest**| Request |
 **address** | [**string**] | Address that funds will be swept from | defaults to undefined


### Return type

**SweepAddressResponse**

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


