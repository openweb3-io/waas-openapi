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

// checks if the CreateTokenRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateTokenRequest{}

// CreateTokenRequest struct for CreateTokenRequest
type CreateTokenRequest struct {
	// Token name
	Name *string `json:"name,omitempty"`
	// Unique ID
	Uid *string `json:"uid,omitempty"`
}

// NewCreateTokenRequest instantiates a new CreateTokenRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTokenRequest() *CreateTokenRequest {
	this := CreateTokenRequest{}
	return &this
}

// NewCreateTokenRequestWithDefaults instantiates a new CreateTokenRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateTokenRequestWithDefaults() *CreateTokenRequest {
	this := CreateTokenRequest{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *CreateTokenRequest) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTokenRequest) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *CreateTokenRequest) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *CreateTokenRequest) SetName(v string) {
	o.Name = &v
}

// GetUid returns the Uid field value if set, zero value otherwise.
func (o *CreateTokenRequest) GetUid() string {
	if o == nil || IsNil(o.Uid) {
		var ret string
		return ret
	}
	return *o.Uid
}

// GetUidOk returns a tuple with the Uid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTokenRequest) GetUidOk() (*string, bool) {
	if o == nil || IsNil(o.Uid) {
		return nil, false
	}
	return o.Uid, true
}

// HasUid returns a boolean if a field has been set.
func (o *CreateTokenRequest) HasUid() bool {
	if o != nil && !IsNil(o.Uid) {
		return true
	}

	return false
}

// SetUid gets a reference to the given string and assigns it to the Uid field.
func (o *CreateTokenRequest) SetUid(v string) {
	o.Uid = &v
}

func (o CreateTokenRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateTokenRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Uid) {
		toSerialize["uid"] = o.Uid
	}
	return toSerialize, nil
}

type NullableCreateTokenRequest struct {
	value *CreateTokenRequest
	isSet bool
}

func (v NullableCreateTokenRequest) Get() *CreateTokenRequest {
	return v.value
}

func (v *NullableCreateTokenRequest) Set(val *CreateTokenRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateTokenRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateTokenRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateTokenRequest(val *CreateTokenRequest) *NullableCreateTokenRequest {
	return &NullableCreateTokenRequest{value: val, isSet: true}
}

func (v NullableCreateTokenRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateTokenRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


