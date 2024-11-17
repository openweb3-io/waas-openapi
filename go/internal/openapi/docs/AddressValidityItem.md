# AddressValidityItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to **string** | Address | [optional] 
**Validity** | Pointer to **bool** | Validity | [optional] 

## Methods

### NewAddressValidityItem

`func NewAddressValidityItem() *AddressValidityItem`

NewAddressValidityItem instantiates a new AddressValidityItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressValidityItemWithDefaults

`func NewAddressValidityItemWithDefaults() *AddressValidityItem`

NewAddressValidityItemWithDefaults instantiates a new AddressValidityItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *AddressValidityItem) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *AddressValidityItem) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *AddressValidityItem) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *AddressValidityItem) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetValidity

`func (o *AddressValidityItem) GetValidity() bool`

GetValidity returns the Validity field if non-nil, zero value otherwise.

### GetValidityOk

`func (o *AddressValidityItem) GetValidityOk() (*bool, bool)`

GetValidityOk returns a tuple with the Validity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidity

`func (o *AddressValidityItem) SetValidity(v bool)`

SetValidity sets Validity field to given value.

### HasValidity

`func (o *AddressValidityItem) HasValidity() bool`

HasValidity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


