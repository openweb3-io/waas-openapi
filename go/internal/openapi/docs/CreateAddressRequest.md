# CreateAddressRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | **string** | Chain ID | 
**WalletId** | **string** | Wallet ID | 

## Methods

### NewCreateAddressRequest

`func NewCreateAddressRequest(chainId string, walletId string, ) *CreateAddressRequest`

NewCreateAddressRequest instantiates a new CreateAddressRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAddressRequestWithDefaults

`func NewCreateAddressRequestWithDefaults() *CreateAddressRequest`

NewCreateAddressRequestWithDefaults instantiates a new CreateAddressRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainId

`func (o *CreateAddressRequest) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *CreateAddressRequest) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *CreateAddressRequest) SetChainId(v string)`

SetChainId sets ChainId field to given value.


### GetWalletId

`func (o *CreateAddressRequest) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *CreateAddressRequest) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *CreateAddressRequest) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


