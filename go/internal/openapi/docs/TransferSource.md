# TransferSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**TransferSourceAddress**](TransferSourceAddress.md) | Address | [optional] 
**Type** | [**TransferSourceType**](TransferSourceType.md) | Transfer source type | 

## Methods

### NewTransferSource

`func NewTransferSource(type_ TransferSourceType, ) *TransferSource`

NewTransferSource instantiates a new TransferSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferSourceWithDefaults

`func NewTransferSourceWithDefaults() *TransferSource`

NewTransferSourceWithDefaults instantiates a new TransferSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *TransferSource) GetAddress() TransferSourceAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TransferSource) GetAddressOk() (*TransferSourceAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TransferSource) SetAddress(v TransferSourceAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *TransferSource) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetType

`func (o *TransferSource) GetType() TransferSourceType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransferSource) GetTypeOk() (*TransferSourceType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransferSource) SetType(v TransferSourceType)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


