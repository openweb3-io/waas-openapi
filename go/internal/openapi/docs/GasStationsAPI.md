# \GasStationsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1GasStationsCreate**](GasStationsAPI.md#V1GasStationsCreate) | **Post** /api/v1/gas_stations | Create gas station
[**V1GasStationsDelete**](GasStationsAPI.md#V1GasStationsDelete) | **Delete** /api/v1/gas_stations/{gasStationId} | Delete gas station
[**V1GasStationsGetOrCreateDepositAddress**](GasStationsAPI.md#V1GasStationsGetOrCreateDepositAddress) | **Post** /api/v1/gas_stations/deposit_address | Get or create deposit address
[**V1GasStationsList**](GasStationsAPI.md#V1GasStationsList) | **Get** /api/v1/gas_stations | List gas stations
[**V1GasStationsRetrieve**](GasStationsAPI.md#V1GasStationsRetrieve) | **Get** /api/v1/gas_stations/{gasStationId} | Get gas station
[**V1GasStationsUpdate**](GasStationsAPI.md#V1GasStationsUpdate) | **Patch** /api/v1/gas_stations/{gasStationId} | Update gas station



## V1GasStationsCreate

> GasStation V1GasStationsCreate(ctx).CreateGasStationRequest(createGasStationRequest).Execute()

Create gas station



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	createGasStationRequest := *openapiclient.NewCreateGasStationRequest("ChainId_example", false, "GasCapacity_example", "GasThreshold_example", "MaxFeeLimit_example") // CreateGasStationRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsCreate(context.Background()).CreateGasStationRequest(createGasStationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsCreate`: GasStation
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGasStationRequest** | [**CreateGasStationRequest**](CreateGasStationRequest.md) | Request body | 

### Return type

[**GasStation**](GasStation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1GasStationsDelete

> GasStation V1GasStationsDelete(ctx, gasStationId).Execute()

Delete gas station



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	gasStationId := "gasStationId_example" // string | Gas Station ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsDelete(context.Background(), gasStationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsDelete`: GasStation
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**gasStationId** | **string** | Gas Station ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GasStation**](GasStation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1GasStationsGetOrCreateDepositAddress

> string V1GasStationsGetOrCreateDepositAddress(ctx).GetGasStationDepositAddressRequest(getGasStationDepositAddressRequest).Execute()

Get or create deposit address



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	getGasStationDepositAddressRequest := *openapiclient.NewGetGasStationDepositAddressRequest("ChainId_example") // GetGasStationDepositAddressRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsGetOrCreateDepositAddress(context.Background()).GetGasStationDepositAddressRequest(getGasStationDepositAddressRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsGetOrCreateDepositAddress``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsGetOrCreateDepositAddress`: string
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsGetOrCreateDepositAddress`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsGetOrCreateDepositAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGasStationDepositAddressRequest** | [**GetGasStationDepositAddressRequest**](GetGasStationDepositAddressRequest.md) | Request body | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1GasStationsList

> CursorPageGasStation V1GasStationsList(ctx).Cursor(cursor).Limit(limit).Execute()

List gas stations



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	cursor := "cursor_example" // string | Cursor (optional)
	limit := int32(56) // int32 | The number of records to return default: 20 (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsList`: CursorPageGasStation
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** | Cursor | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageGasStation**](CursorPageGasStation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1GasStationsRetrieve

> GasStation V1GasStationsRetrieve(ctx, gasStationId).Execute()

Get gas station



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	gasStationId := "gasStationId_example" // string | Gas Station ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsRetrieve(context.Background(), gasStationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsRetrieve`: GasStation
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**gasStationId** | **string** | Gas Station ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GasStation**](GasStation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1GasStationsUpdate

> GasStation V1GasStationsUpdate(ctx, gasStationId).UpdateGasStationRequest(updateGasStationRequest).Execute()

Update gas station



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	gasStationId := "gasStationId_example" // string | Gas Station ID
	updateGasStationRequest := *openapiclient.NewUpdateGasStationRequest() // UpdateGasStationRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GasStationsAPI.V1GasStationsUpdate(context.Background(), gasStationId).UpdateGasStationRequest(updateGasStationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GasStationsAPI.V1GasStationsUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1GasStationsUpdate`: GasStation
	fmt.Fprintf(os.Stdout, "Response from `GasStationsAPI.V1GasStationsUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**gasStationId** | **string** | Gas Station ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1GasStationsUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateGasStationRequest** | [**UpdateGasStationRequest**](UpdateGasStationRequest.md) | Request body | 

### Return type

[**GasStation**](GasStation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

