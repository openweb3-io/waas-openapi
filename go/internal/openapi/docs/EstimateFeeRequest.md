# EstimateFeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount | 
**ContractAddress** | Pointer to **string** | Contract address | [optional] 
**Extra** | Pointer to **string** | Extra | [optional] 
**FromAddress** | **string** | From address | 
**Memo** | Pointer to **string** | Memo | [optional] 
**ToAddress** | **string** | To address | 
**TokenId** | **string** | Token ID | 

## Methods

### NewEstimateFeeRequest

`func NewEstimateFeeRequest(amount string, fromAddress string, toAddress string, tokenId string, ) *EstimateFeeRequest`

NewEstimateFeeRequest instantiates a new EstimateFeeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEstimateFeeRequestWithDefaults

`func NewEstimateFeeRequestWithDefaults() *EstimateFeeRequest`

NewEstimateFeeRequestWithDefaults instantiates a new EstimateFeeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *EstimateFeeRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *EstimateFeeRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *EstimateFeeRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetContractAddress

`func (o *EstimateFeeRequest) GetContractAddress() string`

GetContractAddress returns the ContractAddress field if non-nil, zero value otherwise.

### GetContractAddressOk

`func (o *EstimateFeeRequest) GetContractAddressOk() (*string, bool)`

GetContractAddressOk returns a tuple with the ContractAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAddress

`func (o *EstimateFeeRequest) SetContractAddress(v string)`

SetContractAddress sets ContractAddress field to given value.

### HasContractAddress

`func (o *EstimateFeeRequest) HasContractAddress() bool`

HasContractAddress returns a boolean if a field has been set.

### GetExtra

`func (o *EstimateFeeRequest) GetExtra() string`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *EstimateFeeRequest) GetExtraOk() (*string, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *EstimateFeeRequest) SetExtra(v string)`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *EstimateFeeRequest) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### GetFromAddress

`func (o *EstimateFeeRequest) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *EstimateFeeRequest) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *EstimateFeeRequest) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.


### GetMemo

`func (o *EstimateFeeRequest) GetMemo() string`

GetMemo returns the Memo field if non-nil, zero value otherwise.

### GetMemoOk

`func (o *EstimateFeeRequest) GetMemoOk() (*string, bool)`

GetMemoOk returns a tuple with the Memo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemo

`func (o *EstimateFeeRequest) SetMemo(v string)`

SetMemo sets Memo field to given value.

### HasMemo

`func (o *EstimateFeeRequest) HasMemo() bool`

HasMemo returns a boolean if a field has been set.

### GetToAddress

`func (o *EstimateFeeRequest) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *EstimateFeeRequest) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *EstimateFeeRequest) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.


### GetTokenId

`func (o *EstimateFeeRequest) GetTokenId() string`

GetTokenId returns the TokenId field if non-nil, zero value otherwise.

### GetTokenIdOk

`func (o *EstimateFeeRequest) GetTokenIdOk() (*string, bool)`

GetTokenIdOk returns a tuple with the TokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenId

`func (o *EstimateFeeRequest) SetTokenId(v string)`

SetTokenId sets TokenId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


