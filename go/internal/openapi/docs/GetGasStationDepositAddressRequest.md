# GetGasStationDepositAddressRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | **string** | Chain ID | 
**WalletId** | Pointer to **string** | Wallet ID | [optional] 

## Methods

### NewGetGasStationDepositAddressRequest

`func NewGetGasStationDepositAddressRequest(chainId string, ) *GetGasStationDepositAddressRequest`

NewGetGasStationDepositAddressRequest instantiates a new GetGasStationDepositAddressRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetGasStationDepositAddressRequestWithDefaults

`func NewGetGasStationDepositAddressRequestWithDefaults() *GetGasStationDepositAddressRequest`

NewGetGasStationDepositAddressRequestWithDefaults instantiates a new GetGasStationDepositAddressRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainId

`func (o *GetGasStationDepositAddressRequest) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *GetGasStationDepositAddressRequest) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *GetGasStationDepositAddressRequest) SetChainId(v string)`

SetChainId sets ChainId field to given value.


### GetWalletId

`func (o *GetGasStationDepositAddressRequest) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *GetGasStationDepositAddressRequest) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *GetGasStationDepositAddressRequest) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.

### HasWalletId

`func (o *GetGasStationDepositAddressRequest) HasWalletId() bool`

HasWalletId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


