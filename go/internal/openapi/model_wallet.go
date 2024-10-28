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

// checks if the Wallet type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Wallet{}

// Wallet struct for Wallet
type Wallet struct {
	// Created time
	CreatedAt *string `json:"created_at,omitempty"`
	// Wallet ID
	Id string `json:"id"`
	// Wallet name
	Name string `json:"name"`
	// External unique ID
	Uid string `json:"uid"`
	// Updated time
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

type _Wallet Wallet

// NewWallet instantiates a new Wallet object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWallet(id string, name string, uid string) *Wallet {
	this := Wallet{}
	this.Id = id
	this.Name = name
	this.Uid = uid
	return &this
}

// NewWalletWithDefaults instantiates a new Wallet object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWalletWithDefaults() *Wallet {
	this := Wallet{}
	return &this
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *Wallet) GetCreatedAt() string {
	if o == nil || IsNil(o.CreatedAt) {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Wallet) GetCreatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *Wallet) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *Wallet) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetId returns the Id field value
func (o *Wallet) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *Wallet) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *Wallet) SetId(v string) {
	o.Id = v
}

// GetName returns the Name field value
func (o *Wallet) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *Wallet) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *Wallet) SetName(v string) {
	o.Name = v
}

// GetUid returns the Uid field value
func (o *Wallet) GetUid() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Uid
}

// GetUidOk returns a tuple with the Uid field value
// and a boolean to check if the value has been set.
func (o *Wallet) GetUidOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Uid, true
}

// SetUid sets field value
func (o *Wallet) SetUid(v string) {
	o.Uid = v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *Wallet) GetUpdatedAt() string {
	if o == nil || IsNil(o.UpdatedAt) {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Wallet) GetUpdatedAtOk() (*string, bool) {
	if o == nil || IsNil(o.UpdatedAt) {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *Wallet) HasUpdatedAt() bool {
	if o != nil && !IsNil(o.UpdatedAt) {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *Wallet) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

func (o Wallet) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Wallet) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreatedAt) {
		toSerialize["created_at"] = o.CreatedAt
	}
	toSerialize["id"] = o.Id
	toSerialize["name"] = o.Name
	toSerialize["uid"] = o.Uid
	if !IsNil(o.UpdatedAt) {
		toSerialize["updatedAt"] = o.UpdatedAt
	}
	return toSerialize, nil
}

func (o *Wallet) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"id",
		"name",
		"uid",
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

	varWallet := _Wallet{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varWallet)

	if err != nil {
		return err
	}

	*o = Wallet(varWallet)

	return err
}

type NullableWallet struct {
	value *Wallet
	isSet bool
}

func (v NullableWallet) Get() *Wallet {
	return v.value
}

func (v *NullableWallet) Set(val *Wallet) {
	v.value = val
	v.isSet = true
}

func (v NullableWallet) IsSet() bool {
	return v.isSet
}

func (v *NullableWallet) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWallet(val *Wallet) *NullableWallet {
	return &NullableWallet{value: val, isSet: true}
}

func (v NullableWallet) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWallet) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


