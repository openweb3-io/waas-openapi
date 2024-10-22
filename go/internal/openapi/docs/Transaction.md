# Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetId** | Pointer to **string** |  | [optional] 
**Chain** | Pointer to **string** |  | [optional] 
**ChainId** | Pointer to **string** |  | [optional] 
**ConfirmedNum** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Destination** | Pointer to [**TransactionEndpoint**](TransactionEndpoint.md) |  | [optional] 
**Extra** | Pointer to **map[string]interface{}** |  | [optional] 
**FailedReason** | Pointer to **string** |  | [optional] 
**Fee** | Pointer to [**Fee**](Fee.md) |  | [optional] 
**Hash** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Signature** | Pointer to **string** |  | [optional] 
**Source** | Pointer to [**TransactionEndpoint**](TransactionEndpoint.md) |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**TokenId** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**TransactionType**](TransactionType.md) |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 
**WalletId** | Pointer to **string** |  | [optional] 

## Methods

### NewTransaction

`func NewTransaction() *Transaction`

NewTransaction instantiates a new Transaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionWithDefaults

`func NewTransactionWithDefaults() *Transaction`

NewTransactionWithDefaults instantiates a new Transaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetId

`func (o *Transaction) GetAssetId() string`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *Transaction) GetAssetIdOk() (*string, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *Transaction) SetAssetId(v string)`

SetAssetId sets AssetId field to given value.

### HasAssetId

`func (o *Transaction) HasAssetId() bool`

HasAssetId returns a boolean if a field has been set.

### GetChain

`func (o *Transaction) GetChain() string`

GetChain returns the Chain field if non-nil, zero value otherwise.

### GetChainOk

`func (o *Transaction) GetChainOk() (*string, bool)`

GetChainOk returns a tuple with the Chain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChain

`func (o *Transaction) SetChain(v string)`

SetChain sets Chain field to given value.

### HasChain

`func (o *Transaction) HasChain() bool`

HasChain returns a boolean if a field has been set.

### GetChainId

`func (o *Transaction) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *Transaction) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *Transaction) SetChainId(v string)`

SetChainId sets ChainId field to given value.

### HasChainId

`func (o *Transaction) HasChainId() bool`

HasChainId returns a boolean if a field has been set.

### GetConfirmedNum

`func (o *Transaction) GetConfirmedNum() int32`

GetConfirmedNum returns the ConfirmedNum field if non-nil, zero value otherwise.

### GetConfirmedNumOk

`func (o *Transaction) GetConfirmedNumOk() (*int32, bool)`

GetConfirmedNumOk returns a tuple with the ConfirmedNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmedNum

`func (o *Transaction) SetConfirmedNum(v int32)`

SetConfirmedNum sets ConfirmedNum field to given value.

### HasConfirmedNum

`func (o *Transaction) HasConfirmedNum() bool`

HasConfirmedNum returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Transaction) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Transaction) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Transaction) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Transaction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *Transaction) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Transaction) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Transaction) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Transaction) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDestination

`func (o *Transaction) GetDestination() TransactionEndpoint`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *Transaction) GetDestinationOk() (*TransactionEndpoint, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *Transaction) SetDestination(v TransactionEndpoint)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *Transaction) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetExtra

`func (o *Transaction) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *Transaction) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *Transaction) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *Transaction) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### GetFailedReason

`func (o *Transaction) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *Transaction) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *Transaction) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *Transaction) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### GetFee

`func (o *Transaction) GetFee() Fee`

GetFee returns the Fee field if non-nil, zero value otherwise.

### GetFeeOk

`func (o *Transaction) GetFeeOk() (*Fee, bool)`

GetFeeOk returns a tuple with the Fee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFee

`func (o *Transaction) SetFee(v Fee)`

SetFee sets Fee field to given value.

### HasFee

`func (o *Transaction) HasFee() bool`

HasFee returns a boolean if a field has been set.

### GetHash

`func (o *Transaction) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *Transaction) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *Transaction) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *Transaction) HasHash() bool`

HasHash returns a boolean if a field has been set.

### GetId

`func (o *Transaction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Transaction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Transaction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Transaction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSignature

`func (o *Transaction) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *Transaction) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *Transaction) SetSignature(v string)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *Transaction) HasSignature() bool`

HasSignature returns a boolean if a field has been set.

### GetSource

`func (o *Transaction) GetSource() TransactionEndpoint`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Transaction) GetSourceOk() (*TransactionEndpoint, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Transaction) SetSource(v TransactionEndpoint)`

SetSource sets Source field to given value.

### HasSource

`func (o *Transaction) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetStatus

`func (o *Transaction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Transaction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Transaction) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Transaction) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTokenId

`func (o *Transaction) GetTokenId() string`

GetTokenId returns the TokenId field if non-nil, zero value otherwise.

### GetTokenIdOk

`func (o *Transaction) GetTokenIdOk() (*string, bool)`

GetTokenIdOk returns a tuple with the TokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenId

`func (o *Transaction) SetTokenId(v string)`

SetTokenId sets TokenId field to given value.

### HasTokenId

`func (o *Transaction) HasTokenId() bool`

HasTokenId returns a boolean if a field has been set.

### GetType

`func (o *Transaction) GetType() TransactionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Transaction) GetTypeOk() (*TransactionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Transaction) SetType(v TransactionType)`

SetType sets Type field to given value.

### HasType

`func (o *Transaction) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Transaction) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Transaction) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Transaction) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Transaction) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetWalletId

`func (o *Transaction) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *Transaction) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *Transaction) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.

### HasWalletId

`func (o *Transaction) HasWalletId() bool`

HasWalletId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


