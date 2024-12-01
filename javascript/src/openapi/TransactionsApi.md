# .TransactionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransactionsEstimateFee**](TransactionsApi.md#v1TransactionsEstimateFee) | **POST** /api/v1/transactions/estimate_fee | Estimate fee
[**v1TransactionsList**](TransactionsApi.md#v1TransactionsList) | **GET** /api/v1/transactions | List transactions
[**v1TransactionsRetrieve**](TransactionsApi.md#v1TransactionsRetrieve) | **GET** /api/v1/transactions/{transactionId} | Get transaction
[**v1TransactionsSignMessage**](TransactionsApi.md#v1TransactionsSignMessage) | **POST** /api/v1/transactions/sign_message | Sign message
[**v1TransactionsTransfer**](TransactionsApi.md#v1TransactionsTransfer) | **POST** /api/v1/transactions/transfer | Transfer token


# **v1TransactionsEstimateFee**
> EstimateFeeResponse v1TransactionsEstimateFee(estimateFeeRequest)

Estimate fee for a transfer transaction

### Example


```typescript
import { createConfiguration, TransactionsApi } from '';
import type { TransactionsApiV1TransactionsEstimateFeeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

const request: TransactionsApiV1TransactionsEstimateFeeRequest = {
    // Request Body
  estimateFeeRequest: {
    amount: "amount_example",
    destination: {
    address: "address_example",
    destinationType: "destinationType_example",
  },
    extra: "extra_example",
    memo: "memo_example",
    source: {
    sourceType: "sourceType_example",
    walletId: "walletId_example",
  },
    tokenId: "tokenId_example",
  },
};

const data = await apiInstance.v1TransactionsEstimateFee(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimateFeeRequest** | **EstimateFeeRequest**| Request Body |


### Return type

**EstimateFeeResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TransactionsList**
> CursorPageTransaction v1TransactionsList()

List transactions

### Example


```typescript
import { createConfiguration, TransactionsApi } from '';
import type { TransactionsApiV1TransactionsListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

const request: TransactionsApiV1TransactionsListRequest = {
    // Unique system generated identifier of the wallet (optional)
  walletIds: [
    "wallet_ids_example",
  ],
    // The blockchain network on which the transaction takes place. (optional)
  chainIds: [
    "chain_ids_example",
  ],
    // The tokenId involved in the transaction. (optional)
  tokenIds: [
    "token_ids_example",
  ],
    // The assetId involved in the transaction. (optional)
  assetIds: [
    "asset_ids_example",
  ],
    // The transaction hash, which uniquely identifies a transaction on the blockchain. (optional)
  hash: "hash_example",
    // The status of the transaction. (optional)
  status: "status_example",
    // A cursor value for pagination purposes. (optional)
  cursor: "cursor_example",
    // The number of records to return default: 20 (optional)
  limit: 1,
};

const data = await apiInstance.v1TransactionsList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletIds** | **Array&lt;string&gt;** | Unique system generated identifier of the wallet | (optional) defaults to undefined
 **chainIds** | **Array&lt;string&gt;** | The blockchain network on which the transaction takes place. | (optional) defaults to undefined
 **tokenIds** | **Array&lt;string&gt;** | The tokenId involved in the transaction. | (optional) defaults to undefined
 **assetIds** | **Array&lt;string&gt;** | The assetId involved in the transaction. | (optional) defaults to undefined
 **hash** | [**string**] | The transaction hash, which uniquely identifies a transaction on the blockchain. | (optional) defaults to undefined
 **status** | [**string**] | The status of the transaction. | (optional) defaults to undefined
 **cursor** | [**string**] | A cursor value for pagination purposes. | (optional) defaults to undefined
 **limit** | [**number**] | The number of records to return default: 20 | (optional) defaults to undefined


### Return type

**CursorPageTransaction**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TransactionsRetrieve**
> Transaction v1TransactionsRetrieve()

Get a transaction by ID

### Example


```typescript
import { createConfiguration, TransactionsApi } from '';
import type { TransactionsApiV1TransactionsRetrieveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

const request: TransactionsApiV1TransactionsRetrieveRequest = {
    // Transaction ID
  transactionId: "transactionId_example",
};

const data = await apiInstance.v1TransactionsRetrieve(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | [**string**] | Transaction ID | defaults to undefined


### Return type

**Transaction**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TransactionsSignMessage**
> SignMessageResponse v1TransactionsSignMessage(signMessageRequest)

Sign message

### Example


```typescript
import { createConfiguration, TransactionsApi } from '';
import type { TransactionsApiV1TransactionsSignMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

const request: TransactionsApiV1TransactionsSignMessageRequest = {
    // Request Body
  signMessageRequest: {
    chainId: "chainId_example",
    message: "message_example",
    source: {
    address: "address_example",
    sourceType: "sourceType_example",
    walletId: "walletId_example",
  },
  },
};

const data = await apiInstance.v1TransactionsSignMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signMessageRequest** | **SignMessageRequest**| Request Body |


### Return type

**SignMessageResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1TransactionsTransfer**
> CreateTransferResponse v1TransactionsTransfer(createTransferRequest)

Create a transfer transaction

### Example


```typescript
import { createConfiguration, TransactionsApi } from '';
import type { TransactionsApiV1TransactionsTransferRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransactionsApi(configuration);

const request: TransactionsApiV1TransactionsTransferRequest = {
    // Request Body
  createTransferRequest: {
    amount: "amount_example",
    destination: {
    address: "address_example",
    destinationType: "destinationType_example",
  },
    extra: "extra_example",
    fee: {
      maxFeeAmount: "maxFeeAmount_example",
      tokenId: "tokenId_example",
      type: 1,
    },
    memo: "memo_example",
    source: {
    sourceType: "sourceType_example",
    walletId: "walletId_example",
  },
    tokenId: "tokenId_example",
    uid: "uid_example",
  },
};

const data = await apiInstance.v1TransactionsTransfer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTransferRequest** | **CreateTransferRequest**| Request Body |


### Return type

**CreateTransferResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


