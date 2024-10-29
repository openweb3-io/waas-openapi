# WaaSOpenApiDocumentation.TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransactionsEstimateFee**](TransactionsApi.md#v1TransactionsEstimateFee) | **POST** /api/v1/transactions/estimate_fee | Estimate fee
[**v1TransactionsList**](TransactionsApi.md#v1TransactionsList) | **GET** /api/v1/transactions | List transactions
[**v1TransactionsRetrieve**](TransactionsApi.md#v1TransactionsRetrieve) | **GET** /api/v1/transactions/{transactionId} | Get transaction
[**v1TransactionsTransfer**](TransactionsApi.md#v1TransactionsTransfer) | **POST** /api/v1/transactions/transfer | Transfer token



## v1TransactionsEstimateFee

> EstimateFeeResponse v1TransactionsEstimateFee(estimateFeeRequest)

Estimate fee

Estimate fee for a transfer transaction

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TransactionsApi();
let estimateFeeRequest = new WaaSOpenApiDocumentation.EstimateFeeRequest(); // EstimateFeeRequest | Request Body
apiInstance.v1TransactionsEstimateFee(estimateFeeRequest, (error, data, response) => {
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
 **estimateFeeRequest** | [**EstimateFeeRequest**](EstimateFeeRequest.md)| Request Body | 

### Return type

[**EstimateFeeResponse**](EstimateFeeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1TransactionsList

> CursorPageTransaction v1TransactionsList(opts)

List transactions

List transactions

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TransactionsApi();
let opts = {
  'chainIds': ["null"], // [String] | The blockchain network on which the transaction takes place.
  'tokenIds': ["null"], // [String] | The tokenId involved in the transaction.
  'assetIds': ["null"], // [String] | The assetId involved in the transaction.
  'hash': "hash_example", // String | The transaction hash, which uniquely identifies a transaction on the blockchain.
  'status': "status_example", // String | The status of the transaction.
  'cursor': "cursor_example", // String | A cursor value for pagination purposes.
  'limit': 56, // Number | The number of records to return default: 20
  'walletIds': ["null"] // [String] | Unique system generated identifier of the wallet
};
apiInstance.v1TransactionsList(opts, (error, data, response) => {
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
 **chainIds** | [**[String]**](String.md)| The blockchain network on which the transaction takes place. | [optional] 
 **tokenIds** | [**[String]**](String.md)| The tokenId involved in the transaction. | [optional] 
 **assetIds** | [**[String]**](String.md)| The assetId involved in the transaction. | [optional] 
 **hash** | **String**| The transaction hash, which uniquely identifies a transaction on the blockchain. | [optional] 
 **status** | **String**| The status of the transaction. | [optional] 
 **cursor** | **String**| A cursor value for pagination purposes. | [optional] 
 **limit** | **Number**| The number of records to return default: 20 | [optional] 
 **walletIds** | [**[String]**](String.md)| Unique system generated identifier of the wallet | [optional] 

### Return type

[**CursorPageTransaction**](CursorPageTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1TransactionsRetrieve

> Transaction v1TransactionsRetrieve(transactionId)

Get transaction

Get a transaction by ID

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TransactionsApi();
let transactionId = "transactionId_example"; // String | Transaction ID
apiInstance.v1TransactionsRetrieve(transactionId, (error, data, response) => {
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
 **transactionId** | **String**| Transaction ID | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1TransactionsTransfer

> CreateTransferResponse v1TransactionsTransfer(createTransferRequest)

Transfer token

Create a transfer transaction

### Example

```javascript
import WaaSOpenApiDocumentation from 'waa_s_open_api_documentation';
let defaultClient = WaaSOpenApiDocumentation.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new WaaSOpenApiDocumentation.TransactionsApi();
let createTransferRequest = new WaaSOpenApiDocumentation.CreateTransferRequest(); // CreateTransferRequest | Request Body
apiInstance.v1TransactionsTransfer(createTransferRequest, (error, data, response) => {
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
 **createTransferRequest** | [**CreateTransferRequest**](CreateTransferRequest.md)| Request Body | 

### Return type

[**CreateTransferResponse**](CreateTransferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

