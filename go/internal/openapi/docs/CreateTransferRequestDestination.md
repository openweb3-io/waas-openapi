# CreateTransferRequestDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | **string** | Address | 
**DestinationType** | [**TransferDestinationType**](TransferDestinationType.md) |  | 

## Methods

### NewCreateTransferRequestDestination

`func NewCreateTransferRequestDestination(address string, destinationType TransferDestinationType, ) *CreateTransferRequestDestination`

NewCreateTransferRequestDestination instantiates a new CreateTransferRequestDestination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTransferRequestDestinationWithDefaults

`func NewCreateTransferRequestDestinationWithDefaults() *CreateTransferRequestDestination`

NewCreateTransferRequestDestinationWithDefaults instantiates a new CreateTransferRequestDestination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *CreateTransferRequestDestination) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreateTransferRequestDestination) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreateTransferRequestDestination) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetDestinationType

`func (o *CreateTransferRequestDestination) GetDestinationType() TransferDestinationType`

GetDestinationType returns the DestinationType field if non-nil, zero value otherwise.

### GetDestinationTypeOk

`func (o *CreateTransferRequestDestination) GetDestinationTypeOk() (*TransferDestinationType, bool)`

GetDestinationTypeOk returns a tuple with the DestinationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationType

`func (o *CreateTransferRequestDestination) SetDestinationType(v TransferDestinationType)`

SetDestinationType sets DestinationType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


