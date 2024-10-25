# TransferDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**TransferDestinationAddress**](TransferDestinationAddress.md) | Address | [optional] 
**Type** | Pointer to [**TransferDestinationType**](TransferDestinationType.md) | Transfer destination type | [optional] 

## Methods

### NewTransferDestination

`func NewTransferDestination() *TransferDestination`

NewTransferDestination instantiates a new TransferDestination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferDestinationWithDefaults

`func NewTransferDestinationWithDefaults() *TransferDestination`

NewTransferDestinationWithDefaults instantiates a new TransferDestination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *TransferDestination) GetAddress() TransferDestinationAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TransferDestination) GetAddressOk() (*TransferDestinationAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TransferDestination) SetAddress(v TransferDestinationAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *TransferDestination) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetType

`func (o *TransferDestination) GetType() TransferDestinationType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferDestination) GetTypeOk() (*TransferDestinationType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferDestination) SetType(v TransferDestinationType)`

SetType sets Type field to given value.

### HasType

`func (o *TransferDestination) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


