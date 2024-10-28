# \TransactionsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1TransactionsEstimateFee**](TransactionsAPI.md#V1TransactionsEstimateFee) | **Post** /api/v1/transactions/estimate_fee | Estimate fee
[**V1TransactionsList**](TransactionsAPI.md#V1TransactionsList) | **Get** /api/v1/transactions | List transactions
[**V1TransactionsRetrieve**](TransactionsAPI.md#V1TransactionsRetrieve) | **Get** /api/v1/transactions/{transactionId} | Get transaction
[**V1TransactionsTransfer**](TransactionsAPI.md#V1TransactionsTransfer) | **Post** /api/v1/transactions/transfer | Transfer token



## V1TransactionsEstimateFee

> EstimateFeeResponse V1TransactionsEstimateFee(ctx).EstimateFeeRequest(estimateFeeRequest).Execute()

Estimate fee



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
	estimateFeeRequest := *openapiclient.NewEstimateFeeRequest("Amount_example", []int32{int32(123)}, []int32{int32(123)}, "TokenId_example") // EstimateFeeRequest | Request Body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransactionsAPI.V1TransactionsEstimateFee(context.Background()).EstimateFeeRequest(estimateFeeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransactionsAPI.V1TransactionsEstimateFee``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TransactionsEstimateFee`: EstimateFeeResponse
	fmt.Fprintf(os.Stdout, "Response from `TransactionsAPI.V1TransactionsEstimateFee`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TransactionsEstimateFeeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateFeeRequest** | [**EstimateFeeRequest**](EstimateFeeRequest.md) | Request Body | 

### Return type

[**EstimateFeeResponse**](EstimateFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TransactionsList

> CursorPageTransaction V1TransactionsList(ctx).WalletIds(walletIds).ChainIds(chainIds).TokenIds(tokenIds).AssetIds(assetIds).Hash(hash).Status(status).Cursor(cursor).Limit(limit).Execute()

List transactions



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
	walletIds := []string{"Inner_example"} // []string | Unique system generated identifier of the wallet (optional)
	chainIds := []string{"Inner_example"} // []string | The blockchain network on which the transaction takes place. (optional)
	tokenIds := []string{"Inner_example"} // []string | The tokenId involved in the transaction. (optional)
	assetIds := []string{"Inner_example"} // []string | The assetId involved in the transaction. (optional)
	hash := "hash_example" // string | The transaction hash, which uniquely identifies a transaction on the blockchain. (optional)
	status := "status_example" // string | The status of the transaction. (optional)
	cursor := "cursor_example" // string | A cursor value for pagination purposes. (optional)
	limit := int32(56) // int32 | The number of records to return default: 20 (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransactionsAPI.V1TransactionsList(context.Background()).WalletIds(walletIds).ChainIds(chainIds).TokenIds(tokenIds).AssetIds(assetIds).Hash(hash).Status(status).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransactionsAPI.V1TransactionsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TransactionsList`: CursorPageTransaction
	fmt.Fprintf(os.Stdout, "Response from `TransactionsAPI.V1TransactionsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TransactionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletIds** | **[]string** | Unique system generated identifier of the wallet | 
 **chainIds** | **[]string** | The blockchain network on which the transaction takes place. | 
 **tokenIds** | **[]string** | The tokenId involved in the transaction. | 
 **assetIds** | **[]string** | The assetId involved in the transaction. | 
 **hash** | **string** | The transaction hash, which uniquely identifies a transaction on the blockchain. | 
 **status** | **string** | The status of the transaction. | 
 **cursor** | **string** | A cursor value for pagination purposes. | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageTransaction**](CursorPageTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TransactionsRetrieve

> Transaction V1TransactionsRetrieve(ctx, transactionId).Execute()

Get transaction



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
	transactionId := "transactionId_example" // string | Transaction ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransactionsAPI.V1TransactionsRetrieve(context.Background(), transactionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransactionsAPI.V1TransactionsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TransactionsRetrieve`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `TransactionsAPI.V1TransactionsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Transaction ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1TransactionsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Transaction**](Transaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1TransactionsTransfer

> CreateTransferResponse V1TransactionsTransfer(ctx).CreateTransferRequest(createTransferRequest).Execute()

Transfer token



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
	createTransferRequest := *openapiclient.NewCreateTransferRequest("Amount_example", []int32{int32(123)}, []int32{int32(123)}, "TokenId_example") // CreateTransferRequest | Request Body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransactionsAPI.V1TransactionsTransfer(context.Background()).CreateTransferRequest(createTransferRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransactionsAPI.V1TransactionsTransfer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1TransactionsTransfer`: CreateTransferResponse
	fmt.Fprintf(os.Stdout, "Response from `TransactionsAPI.V1TransactionsTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TransactionsTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTransferRequest** | [**CreateTransferRequest**](CreateTransferRequest.md) | Request Body | 

### Return type

[**CreateTransferResponse**](CreateTransferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

