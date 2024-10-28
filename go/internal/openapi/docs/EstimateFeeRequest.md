# EstimateFeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount | 
**Destination** | **[]int32** | The ID of the wallet to which the transfer will be made | 
**Extra** | Pointer to **string** | Extra | [optional] 
**Memo** | Pointer to **string** | Memo | [optional] 
**Source** | **[]int32** | The ID of the wallet from which the transfer will be made | 
**TokenId** | **string** | Token ID | 

## Methods

### NewEstimateFeeRequest

`func NewEstimateFeeRequest(amount string, destination []int32, source []int32, tokenId string, ) *EstimateFeeRequest`

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


### GetDestination

`func (o *EstimateFeeRequest) GetDestination() []int32`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *EstimateFeeRequest) GetDestinationOk() (*[]int32, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *EstimateFeeRequest) SetDestination(v []int32)`

SetDestination sets Destination field to given value.


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

### GetSource

`func (o *EstimateFeeRequest) GetSource() []int32`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *EstimateFeeRequest) GetSourceOk() (*[]int32, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *EstimateFeeRequest) SetSource(v []int32)`

SetSource sets Source field to given value.


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


