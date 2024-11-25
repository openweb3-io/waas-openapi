/*
WaaS OpenAPI Documentation

This is a WaaS OpenAPI Server.

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the TransferDestinationAddress type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransferDestinationAddress{}

// TransferDestinationAddress struct for TransferDestinationAddress
type TransferDestinationAddress struct {
	// Address
	Address string `json:"address"`
	// destination type
	DestinationType string `json:"destination_type"`
}

type _TransferDestinationAddress TransferDestinationAddress

// NewTransferDestinationAddress instantiates a new TransferDestinationAddress object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferDestinationAddress(address string, destinationType string) *TransferDestinationAddress {
	this := TransferDestinationAddress{}
	this.Address = address
	this.DestinationType = destinationType
	return &this
}

// NewTransferDestinationAddressWithDefaults instantiates a new TransferDestinationAddress object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferDestinationAddressWithDefaults() *TransferDestinationAddress {
	this := TransferDestinationAddress{}
	return &this
}

// GetAddress returns the Address field value
func (o *TransferDestinationAddress) GetAddress() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Address
}

// GetAddressOk returns a tuple with the Address field value
// and a boolean to check if the value has been set.
func (o *TransferDestinationAddress) GetAddressOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Address, true
}

// SetAddress sets field value
func (o *TransferDestinationAddress) SetAddress(v string) {
	o.Address = v
}

// GetDestinationType returns the DestinationType field value
func (o *TransferDestinationAddress) GetDestinationType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.DestinationType
}

// GetDestinationTypeOk returns a tuple with the DestinationType field value
// and a boolean to check if the value has been set.
func (o *TransferDestinationAddress) GetDestinationTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.DestinationType, true
}

// SetDestinationType sets field value
func (o *TransferDestinationAddress) SetDestinationType(v string) {
	o.DestinationType = v
}

func (o TransferDestinationAddress) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransferDestinationAddress) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["address"] = o.Address
	toSerialize["destination_type"] = o.DestinationType
	return toSerialize, nil
}

func (o *TransferDestinationAddress) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"address",
		"destination_type",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varTransferDestinationAddress := _TransferDestinationAddress{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varTransferDestinationAddress)

	if err != nil {
		return err
	}

	*o = TransferDestinationAddress(varTransferDestinationAddress)

	return err
}

type NullableTransferDestinationAddress struct {
	value *TransferDestinationAddress
	isSet bool
}

func (v NullableTransferDestinationAddress) Get() *TransferDestinationAddress {
	return v.value
}

func (v *NullableTransferDestinationAddress) Set(val *TransferDestinationAddress) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferDestinationAddress) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferDestinationAddress) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferDestinationAddress(val *TransferDestinationAddress) *NullableTransferDestinationAddress {
	return &NullableTransferDestinationAddress{value: val, isSet: true}
}

func (v NullableTransferDestinationAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferDestinationAddress) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


