# WaaSOpenApiDocumentation.SweepsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SweepsAddress**](SweepsApi.md#v1SweepsAddress) | **POST** /api/v1/sweeps/address/{address} | Sweep address



## v1SweepsAddress

> SweepAddressResponse v1SweepsAddress(address, sweepAddressRequest)

Sweep address

Sweep funds from a single address

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.SweepsApi();
let address = "address_example"; // String | Address that funds will be swept from
let sweepAddressRequest = new WaaSOpenApiDocumentation.SweepAddressRequest(); // SweepAddressRequest | Request
apiInstance.v1SweepsAddress(address, sweepAddressRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Address that funds will be swept from | 
 **sweepAddressRequest** | [**SweepAddressRequest**](SweepAddressRequest.md)| Request | 

### Return type

[**SweepAddressResponse**](SweepAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

