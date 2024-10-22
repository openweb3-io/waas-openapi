# \TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1TransactionsList**](TransactionsApi.md#V1TransactionsList) | **Get** /api/v1/transactions | List transactions
[**V1TransactionsRetrieve**](TransactionsApi.md#V1TransactionsRetrieve) | **Get** /api/v1/transactions/{transactionId} | Get transaction
[**V1TransactionsTransfer**](TransactionsApi.md#V1TransactionsTransfer) | **Post** /api/v1/transactions/transfer | Transfer token



## V1TransactionsList

> PageTransaction V1TransactionsList(ctx).AssetIds(assetIds).ChainIds(chainIds).Cursor(cursor).Hash(hash).Limit(limit).Status(status).TokenIds(tokenIds).WalletIds(walletIds).Execute()

List transactions



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
    assetIds := []string{"Inner_example"} // []string | The assetId involved in the transaction. (optional)
    chainIds := []string{"Inner_example"} // []string | The blockchain network on which the transaction takes place. (optional)
    cursor := "cursor_example" // string | A cursor value for pagination purposes. (optional)
    hash := "hash_example" // string | The transaction hash, which uniquely identifies a transaction on the blockchain. (optional)
    limit := int32(56) // int32 | The number of records to return default: 20 (optional)
    status := "status_example" // string | The status of the transaction. (optional)
    tokenIds := []string{"Inner_example"} // []string | The tokenId involved in the transaction. (optional)
    walletIds := []string{"Inner_example"} // []string | Unique system generated identifier of the wallet (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TransactionsApi.V1TransactionsList(context.Background()).AssetIds(assetIds).ChainIds(chainIds).Cursor(cursor).Hash(hash).Limit(limit).Status(status).TokenIds(tokenIds).WalletIds(walletIds).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionsApi.V1TransactionsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1TransactionsList`: PageTransaction
    fmt.Fprintf(os.Stdout, "Response from `TransactionsApi.V1TransactionsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TransactionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetIds** | **[]string** | The assetId involved in the transaction. | 
 **chainIds** | **[]string** | The blockchain network on which the transaction takes place. | 
 **cursor** | **string** | A cursor value for pagination purposes. | 
 **hash** | **string** | The transaction hash, which uniquely identifies a transaction on the blockchain. | 
 **limit** | **int32** | The number of records to return default: 20 | 
 **status** | **string** | The status of the transaction. | 
 **tokenIds** | **[]string** | The tokenId involved in the transaction. | 
 **walletIds** | **[]string** | Unique system generated identifier of the wallet | 

### Return type

[**PageTransaction**](PageTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

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
    openapiclient "./openapi"
)

func main() {
    transactionId := "transactionId_example" // string | Transaction ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TransactionsApi.V1TransactionsRetrieve(context.Background(), transactionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionsApi.V1TransactionsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1TransactionsRetrieve`: Transaction
    fmt.Fprintf(os.Stdout, "Response from `TransactionsApi.V1TransactionsRetrieve`: %v\n", resp)
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

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
    openapiclient "./openapi"
)

func main() {
    createTransferRequest := *openapiclient.NewCreateTransferRequest("Amount_example", "Destination_example", "Source_example", "TokenId_example") // CreateTransferRequest | Request Body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TransactionsApi.V1TransactionsTransfer(context.Background()).CreateTransferRequest(createTransferRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransactionsApi.V1TransactionsTransfer``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1TransactionsTransfer`: CreateTransferResponse
    fmt.Fprintf(os.Stdout, "Response from `TransactionsApi.V1TransactionsTransfer`: %v\n", resp)
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

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

