# CreateTransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | The amount to be transferred | 
**Destination** | **string** | The ID of the wallet to which the transfer will be made | 
**Source** | **string** | The ID of the wallet from which the transfer will be made | 
**TokenId** | **string** | The tokenId to be transferred | 

## Methods

### NewCreateTransferRequest

`func NewCreateTransferRequest(amount string, destination string, source string, tokenId string, ) *CreateTransferRequest`

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

`func (o *CreateTransferRequest) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *CreateTransferRequest) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *CreateTransferRequest) SetDestination(v string)`

SetDestination sets Destination field to given value.


### GetSource

`func (o *CreateTransferRequest) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *CreateTransferRequest) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *CreateTransferRequest) SetSource(v string)`

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


