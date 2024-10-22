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

// UpdateWalletRequest struct for UpdateWalletRequest
type UpdateWalletRequest struct {
	// Wallet Name
	Name *string `json:"name,omitempty"`
	// Custom ID
	Uid *string `json:"uid,omitempty"`
}

// NewUpdateWalletRequest instantiates a new UpdateWalletRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpdateWalletRequest() *UpdateWalletRequest {
	this := UpdateWalletRequest{}
	return &this
}

// NewUpdateWalletRequestWithDefaults instantiates a new UpdateWalletRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpdateWalletRequestWithDefaults() *UpdateWalletRequest {
	this := UpdateWalletRequest{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *UpdateWalletRequest) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateWalletRequest) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *UpdateWalletRequest) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *UpdateWalletRequest) SetName(v string) {
	o.Name = &v
}

// GetUid returns the Uid field value if set, zero value otherwise.
func (o *UpdateWalletRequest) GetUid() string {
	if o == nil || o.Uid == nil {
		var ret string
		return ret
	}
	return *o.Uid
}

// GetUidOk returns a tuple with the Uid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateWalletRequest) GetUidOk() (*string, bool) {
	if o == nil || o.Uid == nil {
		return nil, false
	}
	return o.Uid, true
}

// HasUid returns a boolean if a field has been set.
func (o *UpdateWalletRequest) HasUid() bool {
	if o != nil && o.Uid != nil {
		return true
	}

	return false
}

// SetUid gets a reference to the given string and assigns it to the Uid field.
func (o *UpdateWalletRequest) SetUid(v string) {
	o.Uid = &v
}

func (o UpdateWalletRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.Uid != nil {
		toSerialize["uid"] = o.Uid
	}
	return json.Marshal(toSerialize)
}

type NullableUpdateWalletRequest struct {
	value *UpdateWalletRequest
	isSet bool
}

func (v NullableUpdateWalletRequest) Get() *UpdateWalletRequest {
	return v.value
}

func (v *NullableUpdateWalletRequest) Set(val *UpdateWalletRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableUpdateWalletRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableUpdateWalletRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpdateWalletRequest(val *UpdateWalletRequest) *NullableUpdateWalletRequest {
	return &NullableUpdateWalletRequest{value: val, isSet: true}
}

func (v NullableUpdateWalletRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpdateWalletRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


