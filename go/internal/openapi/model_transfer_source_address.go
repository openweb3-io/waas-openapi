/*
 * WaaS OpenAPI Documentation
 *
 * This is a custody wallet service openapi server.
 *
 * API version: 1.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// TransferSourceAddress struct for TransferSourceAddress
type TransferSourceAddress struct {
	// Address
	Address *string `json:"address,omitempty"`
}

// NewTransferSourceAddress instantiates a new TransferSourceAddress object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferSourceAddress() *TransferSourceAddress {
	this := TransferSourceAddress{}
	return &this
}

// NewTransferSourceAddressWithDefaults instantiates a new TransferSourceAddress object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferSourceAddressWithDefaults() *TransferSourceAddress {
	this := TransferSourceAddress{}
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *TransferSourceAddress) GetAddress() string {
	if o == nil || o.Address == nil {
		var ret string
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransferSourceAddress) GetAddressOk() (*string, bool) {
	if o == nil || o.Address == nil {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *TransferSourceAddress) HasAddress() bool {
	if o != nil && o.Address != nil {
		return true
	}

	return false
}

// SetAddress gets a reference to the given string and assigns it to the Address field.
func (o *TransferSourceAddress) SetAddress(v string) {
	o.Address = &v
}

func (o TransferSourceAddress) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Address != nil {
		toSerialize["address"] = o.Address
	}
	return json.Marshal(toSerialize)
}

type NullableTransferSourceAddress struct {
	value *TransferSourceAddress
	isSet bool
}

func (v NullableTransferSourceAddress) Get() *TransferSourceAddress {
	return v.value
}

func (v *NullableTransferSourceAddress) Set(val *TransferSourceAddress) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferSourceAddress) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferSourceAddress) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferSourceAddress(val *TransferSourceAddress) *NullableTransferSourceAddress {
	return &NullableTransferSourceAddress{value: val, isSet: true}
}

func (v NullableTransferSourceAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferSourceAddress) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


