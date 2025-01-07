# TransferSourceAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceType** | [**TransferSourceType**](TransferSourceType.md) |  | 
**WalletId** | **string** | Wallet ID | 

## Methods

### NewTransferSourceAsset

`func NewTransferSourceAsset(sourceType TransferSourceType, walletId string, ) *TransferSourceAsset`

NewTransferSourceAsset instantiates a new TransferSourceAsset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferSourceAssetWithDefaults

`func NewTransferSourceAssetWithDefaults() *TransferSourceAsset`

NewTransferSourceAssetWithDefaults instantiates a new TransferSourceAsset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceType

`func (o *TransferSourceAsset) GetSourceType() TransferSourceType`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *TransferSourceAsset) GetSourceTypeOk() (*TransferSourceType, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *TransferSourceAsset) SetSourceType(v TransferSourceType)`

SetSourceType sets SourceType field to given value.


### GetWalletId

`func (o *TransferSourceAsset) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *TransferSourceAsset) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *TransferSourceAsset) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


