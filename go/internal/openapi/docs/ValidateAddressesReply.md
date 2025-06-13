# ValidateAddressesReply

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]AddressValidityItem**](AddressValidityItem.md) | Address validity items | 

## Methods

### NewValidateAddressesReply

`func NewValidateAddressesReply(items []AddressValidityItem, ) *ValidateAddressesReply`

NewValidateAddressesReply instantiates a new ValidateAddressesReply object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateAddressesReplyWithDefaults

`func NewValidateAddressesReplyWithDefaults() *ValidateAddressesReply`

NewValidateAddressesReplyWithDefaults instantiates a new ValidateAddressesReply object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ValidateAddressesReply) GetItems() []AddressValidityItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ValidateAddressesReply) GetItemsOk() (*[]AddressValidityItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ValidateAddressesReply) SetItems(v []AddressValidityItem)`

SetItems sets Items field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


