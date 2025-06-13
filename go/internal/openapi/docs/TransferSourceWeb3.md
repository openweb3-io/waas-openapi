# TransferSourceWeb3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | **string** | Address | 
**SourceType** | [**TransferSourceType**](TransferSourceType.md) |  | 
**WalletId** | **string** | Wallet ID | 

## Methods

### NewTransferSourceWeb3

`func NewTransferSourceWeb3(address string, sourceType TransferSourceType, walletId string, ) *TransferSourceWeb3`

NewTransferSourceWeb3 instantiates a new TransferSourceWeb3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferSourceWeb3WithDefaults

`func NewTransferSourceWeb3WithDefaults() *TransferSourceWeb3`

NewTransferSourceWeb3WithDefaults instantiates a new TransferSourceWeb3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *TransferSourceWeb3) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TransferSourceWeb3) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TransferSourceWeb3) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetSourceType

`func (o *TransferSourceWeb3) GetSourceType() TransferSourceType`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *TransferSourceWeb3) GetSourceTypeOk() (*TransferSourceType, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *TransferSourceWeb3) SetSourceType(v TransferSourceType)`

SetSourceType sets SourceType field to given value.


### GetWalletId

`func (o *TransferSourceWeb3) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *TransferSourceWeb3) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *TransferSourceWeb3) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


