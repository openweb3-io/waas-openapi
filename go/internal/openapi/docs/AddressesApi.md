# \AddressesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1AddressesList**](AddressesApi.md#V1AddressesList) | **Get** /api/v1/addresses | List all addresses
[**V1WalletsCreateAddress**](AddressesApi.md#V1WalletsCreateAddress) | **Post** /api/v1/wallets/{walletId}/addresses | Create address
[**V1WalletsGetAddress**](AddressesApi.md#V1WalletsGetAddress) | **Get** /api/v1/wallets/{walletId}/addresses/{address} | Get address information
[**V1WalletsListAddresses**](AddressesApi.md#V1WalletsListAddresses) | **Get** /api/v1/wallets/{walletId}/addresses | List wallet addresses



## V1AddressesList

> CursorPageAddress V1AddressesList(ctx).ChainIds(chainIds).Cursor(cursor).Limit(limit).WalletIds(walletIds).Execute()

List all addresses



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
    chainIds := []string{"Inner_example"} // []string | The chain ids. (optional)
    cursor := "cursor_example" // string | The cursor to use for pagination. (optional)
    limit := int32(56) // int32 | The number of records to return default: 20 (optional)
    walletIds := []string{"Inner_example"} // []string | Unique system generated identifier of the wallet (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressesApi.V1AddressesList(context.Background()).ChainIds(chainIds).Cursor(cursor).Limit(limit).WalletIds(walletIds).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressesApi.V1AddressesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1AddressesList`: CursorPageAddress
    fmt.Fprintf(os.Stdout, "Response from `AddressesApi.V1AddressesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1AddressesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainIds** | **[]string** | The chain ids. | 
 **cursor** | **string** | The cursor to use for pagination. | 
 **limit** | **int32** | The number of records to return default: 20 | 
 **walletIds** | **[]string** | Unique system generated identifier of the wallet | 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsCreateAddress

> Address V1WalletsCreateAddress(ctx, walletId).CreateAddressRequest(createAddressRequest).Execute()

Create address



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
    walletId := "walletId_example" // string | Wallet ID
    createAddressRequest := *openapiclient.NewCreateAddressRequest("ChainId_example") // CreateAddressRequest | Request Body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressesApi.V1WalletsCreateAddress(context.Background(), walletId).CreateAddressRequest(createAddressRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressesApi.V1WalletsCreateAddress``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WalletsCreateAddress`: Address
    fmt.Fprintf(os.Stdout, "Response from `AddressesApi.V1WalletsCreateAddress`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsCreateAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md) | Request Body | 

### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsGetAddress

> Address V1WalletsGetAddress(ctx, walletId, address).Execute()

Get address information



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
    walletId := "walletId_example" // string | Wallet ID
    address := "address_example" // string | Address

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressesApi.V1WalletsGetAddress(context.Background(), walletId, address).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressesApi.V1WalletsGetAddress``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WalletsGetAddress`: Address
    fmt.Fprintf(os.Stdout, "Response from `AddressesApi.V1WalletsGetAddress`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet ID | 
**address** | **string** | Address | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsGetAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Address**](Address.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsListAddresses

> CursorPageAddress V1WalletsListAddresses(ctx, walletId).ChainIds(chainIds).Cursor(cursor).Limit(limit).Execute()

List wallet addresses



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
    walletId := "walletId_example" // string | Wallet ID
    chainIds := []string{"Inner_example"} // []string | chain ids (optional)
    cursor := "cursor_example" // string | Cursor (optional)
    limit := int32(56) // int32 | Limit, default is 20 (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AddressesApi.V1WalletsListAddresses(context.Background(), walletId).ChainIds(chainIds).Cursor(cursor).Limit(limit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AddressesApi.V1WalletsListAddresses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WalletsListAddresses`: CursorPageAddress
    fmt.Fprintf(os.Stdout, "Response from `AddressesApi.V1WalletsListAddresses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsListAddressesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **chainIds** | **[]string** | chain ids | 
 **cursor** | **string** | Cursor | 
 **limit** | **int32** | Limit, default is 20 | 

### Return type

[**CursorPageAddress**](CursorPageAddress.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

