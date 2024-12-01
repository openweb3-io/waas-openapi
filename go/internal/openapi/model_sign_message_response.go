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

// checks if the SignMessageResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SignMessageResponse{}

// SignMessageResponse struct for SignMessageResponse
type SignMessageResponse struct {
	// Signature
	Signature string `json:"signature"`
}

type _SignMessageResponse SignMessageResponse

// NewSignMessageResponse instantiates a new SignMessageResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSignMessageResponse(signature string) *SignMessageResponse {
	this := SignMessageResponse{}
	this.Signature = signature
	return &this
}

// NewSignMessageResponseWithDefaults instantiates a new SignMessageResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSignMessageResponseWithDefaults() *SignMessageResponse {
	this := SignMessageResponse{}
	return &this
}

// GetSignature returns the Signature field value
func (o *SignMessageResponse) GetSignature() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Signature
}

// GetSignatureOk returns a tuple with the Signature field value
// and a boolean to check if the value has been set.
func (o *SignMessageResponse) GetSignatureOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Signature, true
}

// SetSignature sets field value
func (o *SignMessageResponse) SetSignature(v string) {
	o.Signature = v
}

func (o SignMessageResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SignMessageResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["signature"] = o.Signature
	return toSerialize, nil
}

func (o *SignMessageResponse) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"signature",
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

	varSignMessageResponse := _SignMessageResponse{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varSignMessageResponse)

	if err != nil {
		return err
	}

	*o = SignMessageResponse(varSignMessageResponse)

	return err
}

type NullableSignMessageResponse struct {
	value *SignMessageResponse
	isSet bool
}

func (v NullableSignMessageResponse) Get() *SignMessageResponse {
	return v.value
}

func (v *NullableSignMessageResponse) Set(val *SignMessageResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableSignMessageResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableSignMessageResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSignMessageResponse(val *SignMessageResponse) *NullableSignMessageResponse {
	return &NullableSignMessageResponse{value: val, isSet: true}
}

func (v NullableSignMessageResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSignMessageResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


