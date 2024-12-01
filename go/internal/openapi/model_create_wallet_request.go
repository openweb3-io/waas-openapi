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

// checks if the CreateWalletRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateWalletRequest{}

// CreateWalletRequest struct for CreateWalletRequest
type CreateWalletRequest struct {
	// Wallet name
	Name string `json:"name"`
	// Wallet sub type
	SubType string `json:"sub_type"`
	// Wallet type
	Type string `json:"type"`
	// Custom ID
	Uid *string `json:"uid,omitempty"`
}

type _CreateWalletRequest CreateWalletRequest

// NewCreateWalletRequest instantiates a new CreateWalletRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateWalletRequest(name string, subType string, type_ string) *CreateWalletRequest {
	this := CreateWalletRequest{}
	this.Name = name
	this.SubType = subType
	this.Type = type_
	return &this
}

// NewCreateWalletRequestWithDefaults instantiates a new CreateWalletRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateWalletRequestWithDefaults() *CreateWalletRequest {
	this := CreateWalletRequest{}
	return &this
}

// GetName returns the Name field value
func (o *CreateWalletRequest) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CreateWalletRequest) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CreateWalletRequest) SetName(v string) {
	o.Name = v
}

// GetSubType returns the SubType field value
func (o *CreateWalletRequest) GetSubType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SubType
}

// GetSubTypeOk returns a tuple with the SubType field value
// and a boolean to check if the value has been set.
func (o *CreateWalletRequest) GetSubTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SubType, true
}

// SetSubType sets field value
func (o *CreateWalletRequest) SetSubType(v string) {
	o.SubType = v
}

// GetType returns the Type field value
func (o *CreateWalletRequest) GetType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Type
}

// GetTypeOk returns a tuple with the Type field value
// and a boolean to check if the value has been set.
func (o *CreateWalletRequest) GetTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Type, true
}

// SetType sets field value
func (o *CreateWalletRequest) SetType(v string) {
	o.Type = v
}

// GetUid returns the Uid field value if set, zero value otherwise.
func (o *CreateWalletRequest) GetUid() string {
	if o == nil || IsNil(o.Uid) {
		var ret string
		return ret
	}
	return *o.Uid
}

// GetUidOk returns a tuple with the Uid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateWalletRequest) GetUidOk() (*string, bool) {
	if o == nil || IsNil(o.Uid) {
		return nil, false
	}
	return o.Uid, true
}

// HasUid returns a boolean if a field has been set.
func (o *CreateWalletRequest) HasUid() bool {
	if o != nil && !IsNil(o.Uid) {
		return true
	}

	return false
}

// SetUid gets a reference to the given string and assigns it to the Uid field.
func (o *CreateWalletRequest) SetUid(v string) {
	o.Uid = &v
}

func (o CreateWalletRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateWalletRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["name"] = o.Name
	toSerialize["sub_type"] = o.SubType
	toSerialize["type"] = o.Type
	if !IsNil(o.Uid) {
		toSerialize["uid"] = o.Uid
	}
	return toSerialize, nil
}

func (o *CreateWalletRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"name",
		"sub_type",
		"type",
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

	varCreateWalletRequest := _CreateWalletRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varCreateWalletRequest)

	if err != nil {
		return err
	}

	*o = CreateWalletRequest(varCreateWalletRequest)

	return err
}

type NullableCreateWalletRequest struct {
	value *CreateWalletRequest
	isSet bool
}

func (v NullableCreateWalletRequest) Get() *CreateWalletRequest {
	return v.value
}

func (v *NullableCreateWalletRequest) Set(val *CreateWalletRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateWalletRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateWalletRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateWalletRequest(val *CreateWalletRequest) *NullableCreateWalletRequest {
	return &NullableCreateWalletRequest{value: val, isSet: true}
}

func (v NullableCreateWalletRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateWalletRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


