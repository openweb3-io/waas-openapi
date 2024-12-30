# \TokensAPI

All URIs are relative to *https://api.waas.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1TokensCreate**](TokensAPI.md#V1TokensCreate) | **Post** /api/v1/tokens | Create token
[**V1TokensList**](TokensAPI.md#V1TokensList) | **Get** /api/v1/tokens | List tokens
[**V1TokensRetrieve**](TokensAPI.md#V1TokensRetrieve) | **Get** /api/v1/tokens/{tokenId} | Get Token
[**V1TokensUpdate**](TokensAPI.md#V1TokensUpdate) | **Patch** /api/v1/tokens/{tokenId} | Update token



## V1TokensCreate

> Token V1TokensCreate(ctx).CreateTokenRequest(createTokenRequest).Execute()

Create token



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
	createTokenRequest := *openapiclient.NewCreateTokenRequest() // CreateTokenRequest | Request Body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.V1TokensCreate(context.Background()).CreateTokenRequest(createTokenRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.V1TokensCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TokensCreate`: Token
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.V1TokensCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TokensCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenRequest** | [**CreateTokenRequest**](CreateTokenRequest.md) | Request Body | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TokensList

> CursorPageToken V1TokensList(ctx).Cursor(cursor).Limit(limit).Execute()

List tokens



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
	resp, r, err := apiClient.TokensAPI.V1TokensList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.V1TokensList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TokensList`: CursorPageToken
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.V1TokensList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TokensListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** | Cursor | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageToken**](CursorPageToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TokensRetrieve

> Token V1TokensRetrieve(ctx, tokenId).Execute()

Get Token



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
	tokenId := "tokenId_example" // string | Token ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.V1TokensRetrieve(context.Background(), tokenId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.V1TokensRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TokensRetrieve`: Token
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.V1TokensRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** | Token ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1TokensRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TokensUpdate

> Token V1TokensUpdate(ctx, tokenId).UpdateTokenRequest(updateTokenRequest).Execute()

Update token



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
	tokenId := "tokenId_example" // string | Token ID
	updateTokenRequest := *openapiclient.NewUpdateTokenRequest() // UpdateTokenRequest | Request Body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TokensAPI.V1TokensUpdate(context.Background(), tokenId).UpdateTokenRequest(updateTokenRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TokensAPI.V1TokensUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TokensUpdate`: Token
	fmt.Fprintf(os.Stdout, "Response from `TokensAPI.V1TokensUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** | Token ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1TokensUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateTokenRequest** | [**UpdateTokenRequest**](UpdateTokenRequest.md) | Request Body | 

### Return type

[**Token**](Token.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

