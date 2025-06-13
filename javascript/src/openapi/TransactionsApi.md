# .TransactionsApi

All URIs are relative to *https://api.waas.openweb3.io*

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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiV1TransactionsEstimateFeeRequest = {
  // EstimateFeeRequest | Request Body
  estimateFeeRequest: {
    amount: "amount_example",
    destination: {
    address: "address_example",
    destinationType: "Address",
  },
    extra: "extra_example",
    memo: "memo_example",
    source: {
    sourceType: "Asset",
    walletId: "walletId_example",
  },
    tokenId: "tokenId_example",
  },
};

apiInstance.v1TransactionsEstimateFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiV1TransactionsListRequest = {
  // Array<string> | Unique system generated identifier of the wallet (optional)
  walletIds: [
    "wallet_ids_example",
  ],
  // Array<string> | The blockchain network on which the transaction takes place. (optional)
  chainIds: [
    "chain_ids_example",
  ],
  // Array<string> | The tokenId involved in the transaction. (optional)
  tokenIds: [
    "token_ids_example",
  ],
  // Array<string> | The assetId involved in the transaction. (optional)
  assetIds: [
    "asset_ids_example",
  ],
  // string | The transaction hash, which uniquely identifies a transaction on the blockchain. (optional)
  hash: "hash_example",
  // 'Submitted' | 'PendingSignature' | 'Failed' | 'Broadcasting' | 'Confirming' | 'Completed' | The status of the transaction. (optional)
  status: "Submitted",
  // string | A cursor value for pagination purposes. (optional)
  cursor: "cursor_example",
  // number | The number of records to return default: 20 (optional)
  limit: 1,
};

apiInstance.v1TransactionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletIds** | **Array&lt;string&gt;** | Unique system generated identifier of the wallet | (optional) defaults to undefined
 **chainIds** | **Array&lt;string&gt;** | The blockchain network on which the transaction takes place. | (optional) defaults to undefined
 **tokenIds** | **Array&lt;string&gt;** | The tokenId involved in the transaction. | (optional) defaults to undefined
 **assetIds** | **Array&lt;string&gt;** | The assetId involved in the transaction. | (optional) defaults to undefined
 **hash** | [**string**] | The transaction hash, which uniquely identifies a transaction on the blockchain. | (optional) defaults to undefined
 **status** | [**&#39;Submitted&#39; | &#39;PendingSignature&#39; | &#39;Failed&#39; | &#39;Broadcasting&#39; | &#39;Confirming&#39; | &#39;Completed&#39;**]**Array<&#39;Submitted&#39; &#124; &#39;PendingSignature&#39; &#124; &#39;Failed&#39; &#124; &#39;Broadcasting&#39; &#124; &#39;Confirming&#39; &#124; &#39;Completed&#39;>** | The status of the transaction. | (optional) defaults to undefined
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiV1TransactionsRetrieveRequest = {
  // string | Transaction ID
  transactionId: "transactionId_example",
};

apiInstance.v1TransactionsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiV1TransactionsSignMessageRequest = {
  // SignMessageRequest | Request Body
  signMessageRequest: {
    chainId: "chainId_example",
    message: "message_example",
    source: {
    address: "address_example",
    sourceType: "Asset",
    walletId: "walletId_example",
  },
  },
};

apiInstance.v1TransactionsSignMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiV1TransactionsTransferRequest = {
  // CreateTransferRequest | Request Body
  createTransferRequest: {
    amount: "amount_example",
    destination: {
    address: "address_example",
    destinationType: "Address",
  },
    extra: "extra_example",
    fee: {
      maxFeeAmount: "maxFeeAmount_example",
      tokenId: "tokenId_example",
      type: 1,
    },
    memo: "memo_example",
    source: {
    sourceType: "Asset",
    walletId: "walletId_example",
  },
    tokenId: "tokenId_example",
    uid: "uid_example",
  },
};

apiInstance.v1TransactionsTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


