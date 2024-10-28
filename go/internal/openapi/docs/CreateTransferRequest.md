# CreateTransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | The amount to be transferred | 
**Destination** | **[]int32** | The ID of the wallet to which the transfer will be made | 
**Extra** | Pointer to **string** | Extra | [optional] 
**Fee** | Pointer to [**Fee**](Fee.md) |  | [optional] 
**Memo** | Pointer to **string** | Memo | [optional] 
**Source** | **[]int32** | The ID of the wallet from which the transfer will be made | 
**TokenId** | **string** | The tokenId to be transferred | 

## Methods

### NewCreateTransferRequest

`func NewCreateTransferRequest(amount string, destination []int32, source []int32, tokenId string, ) *CreateTransferRequest`

NewCreateTransferRequest instantiates a new CreateTransferRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTransferRequestWithDefaults

`func NewCreateTransferRequestWithDefaults() *CreateTransferRequest`

NewCreateTransferRequestWithDefaults instantiates a new CreateTransferRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreateTransferRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreateTransferRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreateTransferRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetDestination

`func (o *CreateTransferRequest) GetDestination() []int32`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *CreateTransferRequest) GetDestinationOk() (*[]int32, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *CreateTransferRequest) SetDestination(v []int32)`

SetDestination sets Destination field to given value.


### GetExtra

`func (o *CreateTransferRequest) GetExtra() string`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *CreateTransferRequest) GetExtraOk() (*string, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *CreateTransferRequest) SetExtra(v string)`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *CreateTransferRequest) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### GetFee

`func (o *CreateTransferRequest) GetFee() Fee`

GetFee returns the Fee field if non-nil, zero value otherwise.

### GetFeeOk

`func (o *CreateTransferRequest) GetFeeOk() (*Fee, bool)`

GetFeeOk returns a tuple with the Fee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFee

`func (o *CreateTransferRequest) SetFee(v Fee)`

SetFee sets Fee field to given value.

### HasFee

`func (o *CreateTransferRequest) HasFee() bool`

HasFee returns a boolean if a field has been set.

### GetMemo

`func (o *CreateTransferRequest) GetMemo() string`

GetMemo returns the Memo field if non-nil, zero value otherwise.

### GetMemoOk

`func (o *CreateTransferRequest) GetMemoOk() (*string, bool)`

GetMemoOk returns a tuple with the Memo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemo

`func (o *CreateTransferRequest) SetMemo(v string)`

SetMemo sets Memo field to given value.

### HasMemo

`func (o *CreateTransferRequest) HasMemo() bool`

HasMemo returns a boolean if a field has been set.

### GetSource

`func (o *CreateTransferRequest) GetSource() []int32`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateTransferRequest) GetSourceOk() (*[]int32, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateTransferRequest) SetSource(v []int32)`

SetSource sets Source field to given value.


### GetTokenId

`func (o *CreateTransferRequest) GetTokenId() string`

GetTokenId returns the TokenId field if non-nil, zero value otherwise.

### GetTokenIdOk

`func (o *CreateTransferRequest) GetTokenIdOk() (*string, bool)`

GetTokenIdOk returns a tuple with the TokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenId

`func (o *CreateTransferRequest) SetTokenId(v string)`

SetTokenId sets TokenId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


