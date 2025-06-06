/*
WaaS OpenAPI Documentation

This is a WaaS OpenAPI Server.

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the ValidateAddressesReply type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ValidateAddressesReply{}

// ValidateAddressesReply struct for ValidateAddressesReply
type ValidateAddressesReply struct {
	// Address validity items
	Items []AddressValidityItem `json:"items,omitempty"`
}

// NewValidateAddressesReply instantiates a new ValidateAddressesReply object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewValidateAddressesReply() *ValidateAddressesReply {
	this := ValidateAddressesReply{}
	return &this
}

// NewValidateAddressesReplyWithDefaults instantiates a new ValidateAddressesReply object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewValidateAddressesReplyWithDefaults() *ValidateAddressesReply {
	this := ValidateAddressesReply{}
	return &this
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *ValidateAddressesReply) GetItems() []AddressValidityItem {
	if o == nil || IsNil(o.Items) {
		var ret []AddressValidityItem
		return ret
	}
	return o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ValidateAddressesReply) GetItemsOk() ([]AddressValidityItem, bool) {
	if o == nil || IsNil(o.Items) {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *ValidateAddressesReply) HasItems() bool {
	if o != nil && !IsNil(o.Items) {
		return true
	}

	return false
}

// SetItems gets a reference to the given []AddressValidityItem and assigns it to the Items field.
func (o *ValidateAddressesReply) SetItems(v []AddressValidityItem) {
	o.Items = v
}

func (o ValidateAddressesReply) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ValidateAddressesReply) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Items) {
		toSerialize["items"] = o.Items
	}
	return toSerialize, nil
}

type NullableValidateAddressesReply struct {
	value *ValidateAddressesReply
	isSet bool
}

func (v NullableValidateAddressesReply) Get() *ValidateAddressesReply {
	return v.value
}

func (v *NullableValidateAddressesReply) Set(val *ValidateAddressesReply) {
	v.value = val
	v.isSet = true
}

func (v NullableValidateAddressesReply) IsSet() bool {
	return v.isSet
}

func (v *NullableValidateAddressesReply) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableValidateAddressesReply(val *ValidateAddressesReply) *NullableValidateAddressesReply {
	return &NullableValidateAddressesReply{value: val, isSet: true}
}

func (v NullableValidateAddressesReply) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableValidateAddressesReply) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


