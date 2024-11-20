# \SweepsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1SweepsAddress**](SweepsAPI.md#V1SweepsAddress) | **Post** /api/v1/sweeps/address/{address} | Sweep address



## V1SweepsAddress

> SweepAddressResponse V1SweepsAddress(ctx, address).SweepAddressRequest(sweepAddressRequest).Execute()

Sweep address



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
	address := "address_example" // string | Address that funds will be swept from
	sweepAddressRequest := *openapiclient.NewSweepAddressRequest("FeeAddress_example", "ToAddress_example", "TokenId_example") // SweepAddressRequest | Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SweepsAPI.V1SweepsAddress(context.Background(), address).SweepAddressRequest(sweepAddressRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SweepsAPI.V1SweepsAddress``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1SweepsAddress`: SweepAddressResponse
	fmt.Fprintf(os.Stdout, "Response from `SweepsAPI.V1SweepsAddress`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**address** | **string** | Address that funds will be swept from | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1SweepsAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sweepAddressRequest** | [**SweepAddressRequest**](SweepAddressRequest.md) | Request | 

### Return type

[**SweepAddressResponse**](SweepAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

