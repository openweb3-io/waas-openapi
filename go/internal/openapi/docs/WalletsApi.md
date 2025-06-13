# \WalletsAPI

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1WalletsCreate**](WalletsAPI.md#V1WalletsCreate) | **Post** /api/v1/wallets | Create wallet
[**V1WalletsDelete**](WalletsAPI.md#V1WalletsDelete) | **Delete** /api/v1/wallets/{walletId} | Delete wallet
[**V1WalletsList**](WalletsAPI.md#V1WalletsList) | **Get** /api/v1/wallets | List wallets
[**V1WalletsRetrieve**](WalletsAPI.md#V1WalletsRetrieve) | **Get** /api/v1/wallets/{walletId} | Get wallet
[**V1WalletsUpdate**](WalletsAPI.md#V1WalletsUpdate) | **Patch** /api/v1/wallets/{walletId} | Update wallet



## V1WalletsCreate

> Wallet V1WalletsCreate(ctx).CreateWalletRequest(createWalletRequest).Execute()

Create wallet



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
	createWalletRequest := *openapiclient.NewCreateWalletRequest("Name_example", openapiclient.WalletSubType("Asset"), openapiclient.WalletType("Custodial")) // CreateWalletRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WalletsAPI.V1WalletsCreate(context.Background()).CreateWalletRequest(createWalletRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WalletsAPI.V1WalletsCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WalletsCreate`: Wallet
	fmt.Fprintf(os.Stdout, "Response from `WalletsAPI.V1WalletsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWalletRequest** | [**CreateWalletRequest**](CreateWalletRequest.md) | Request body | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsDelete

> Wallet V1WalletsDelete(ctx, walletId).Execute()

Delete wallet



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
	walletId := "walletId_example" // string | Wallet id or uid

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WalletsAPI.V1WalletsDelete(context.Background(), walletId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WalletsAPI.V1WalletsDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WalletsDelete`: Wallet
	fmt.Fprintf(os.Stdout, "Response from `WalletsAPI.V1WalletsDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet id or uid | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsList

> CursorPageWallet V1WalletsList(ctx).Cursor(cursor).Limit(limit).Execute()

List wallets



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
	resp, r, err := apiClient.WalletsAPI.V1WalletsList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WalletsAPI.V1WalletsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WalletsList`: CursorPageWallet
	fmt.Fprintf(os.Stdout, "Response from `WalletsAPI.V1WalletsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** | Cursor | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageWallet**](CursorPageWallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsRetrieve

> Wallet V1WalletsRetrieve(ctx, walletId).Execute()

Get wallet



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
	walletId := "walletId_example" // string | Wallet id or uid

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WalletsAPI.V1WalletsRetrieve(context.Background(), walletId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WalletsAPI.V1WalletsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WalletsRetrieve`: Wallet
	fmt.Fprintf(os.Stdout, "Response from `WalletsAPI.V1WalletsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet id or uid | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WalletsUpdate

> Wallet V1WalletsUpdate(ctx, walletId).UpdateWalletRequest(updateWalletRequest).Execute()

Update wallet



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
	walletId := "walletId_example" // string | Wallet id or uid
	updateWalletRequest := *openapiclient.NewUpdateWalletRequest() // UpdateWalletRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WalletsAPI.V1WalletsUpdate(context.Background(), walletId).UpdateWalletRequest(updateWalletRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WalletsAPI.V1WalletsUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WalletsUpdate`: Wallet
	fmt.Fprintf(os.Stdout, "Response from `WalletsAPI.V1WalletsUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletId** | **string** | Wallet id or uid | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WalletsUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateWalletRequest** | [**UpdateWalletRequest**](UpdateWalletRequest.md) | Request body | 

### Return type

[**Wallet**](Wallet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

