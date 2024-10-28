# \ChainsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1ChainsList**](ChainsAPI.md#V1ChainsList) | **Get** /api/v1/chains | List all chains
[**V1ChainsRetrieve**](ChainsAPI.md#V1ChainsRetrieve) | **Get** /api/v1/chains/{chainId} | Retrieve chain



## V1ChainsList

> CursorPageChain V1ChainsList(ctx).Cursor(cursor).Limit(limit).Execute()

List all chains



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
	resp, r, err := apiClient.ChainsAPI.V1ChainsList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ChainsAPI.V1ChainsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1ChainsList`: CursorPageChain
	fmt.Fprintf(os.Stdout, "Response from `ChainsAPI.V1ChainsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1ChainsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** | Cursor | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageChain**](CursorPageChain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ChainsRetrieve

> Chain V1ChainsRetrieve(ctx, chainId).Execute()

Retrieve chain



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
	chainId := "chainId_example" // string | Chain ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ChainsAPI.V1ChainsRetrieve(context.Background(), chainId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ChainsAPI.V1ChainsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1ChainsRetrieve`: Chain
	fmt.Fprintf(os.Stdout, "Response from `ChainsAPI.V1ChainsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**chainId** | **string** | Chain ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1ChainsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Chain**](Chain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

