# \ChainsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1ChainsList**](ChainsApi.md#V1ChainsList) | **Get** /api/v1/chains | List all chains
[**V1ChainsRetrieve**](ChainsApi.md#V1ChainsRetrieve) | **Get** /api/v1/chains/{id} | Retrieve chain



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
    openapiclient "./openapi"
)

func main() {
    cursor := "cursor_example" // string | Cursor (optional)
    limit := int32(56) // int32 | The number of records to return default: 20 (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ChainsApi.V1ChainsList(context.Background()).Cursor(cursor).Limit(limit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainsApi.V1ChainsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ChainsList`: CursorPageChain
    fmt.Fprintf(os.Stdout, "Response from `ChainsApi.V1ChainsList`: %v\n", resp)
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ChainsRetrieve

> Chain V1ChainsRetrieve(ctx, id).Execute()

Retrieve chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    id := "id_example" // string | Chain ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ChainsApi.V1ChainsRetrieve(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainsApi.V1ChainsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ChainsRetrieve`: Chain
    fmt.Fprintf(os.Stdout, "Response from `ChainsApi.V1ChainsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Chain ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1ChainsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Chain**](Chain.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

