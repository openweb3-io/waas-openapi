

# Transaction


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assetId** | **String** | Asset ID |  |
|**chain** | **String** | Chain |  |
|**chainId** | **String** | Chain ID |  |
|**confirmedNum** | **Integer** | Confirmed number |  |
|**createdAt** | **String** | Created time |  |
|**description** | **String** | Description |  |
|**destination** | [**TransactionEndpoint**](TransactionEndpoint.md) |  |  [optional] |
|**extra** | **Map&lt;String, Object&gt;** | Extra |  [optional] |
|**failedReason** | **String** | Failed reason |  |
|**fee** | [**Fee**](Fee.md) |  |  [optional] |
|**hash** | **String** | Transaction hash |  |
|**id** | **String** | Transaction ID |  |
|**signature** | **String** | Signature |  |
|**source** | [**TransactionEndpoint**](TransactionEndpoint.md) |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Transaction status |  |
|**tokenId** | **String** | Token ID |  |
|**type** | **TransactionType** |  |  |
|**uid** | **String** | The custom unique transaction identifier |  [optional] |
|**updatedAt** | **String** | Updated time |  |
|**walletId** | **String** | Wallet ID |  |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| SUBMITTED | &quot;Submitted&quot; |
| PENDING_SIGNATURE | &quot;PendingSignature&quot; |
| FAILED | &quot;Failed&quot; |
| BROADCASTING | &quot;Broadcasting&quot; |
| CONFIRMING | &quot;Confirming&quot; |
| COMPLETED | &quot;Completed&quot; |



