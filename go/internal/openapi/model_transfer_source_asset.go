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

// checks if the TransferSourceAsset type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransferSourceAsset{}

// TransferSourceAsset struct for TransferSourceAsset
type TransferSourceAsset struct {
	// source type
	SourceType string `json:"source_type"`
	// Wallet ID
	WalletId string `json:"wallet_id"`
}

type _TransferSourceAsset TransferSourceAsset

// NewTransferSourceAsset instantiates a new TransferSourceAsset object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransferSourceAsset(sourceType string, walletId string) *TransferSourceAsset {
	this := TransferSourceAsset{}
	this.SourceType = sourceType
	this.WalletId = walletId
	return &this
}

// NewTransferSourceAssetWithDefaults instantiates a new TransferSourceAsset object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransferSourceAssetWithDefaults() *TransferSourceAsset {
	this := TransferSourceAsset{}
	return &this
}

// GetSourceType returns the SourceType field value
func (o *TransferSourceAsset) GetSourceType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.SourceType
}

// GetSourceTypeOk returns a tuple with the SourceType field value
// and a boolean to check if the value has been set.
func (o *TransferSourceAsset) GetSourceTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.SourceType, true
}

// SetSourceType sets field value
func (o *TransferSourceAsset) SetSourceType(v string) {
	o.SourceType = v
}

// GetWalletId returns the WalletId field value
func (o *TransferSourceAsset) GetWalletId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WalletId
}

// GetWalletIdOk returns a tuple with the WalletId field value
// and a boolean to check if the value has been set.
func (o *TransferSourceAsset) GetWalletIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.WalletId, true
}

// SetWalletId sets field value
func (o *TransferSourceAsset) SetWalletId(v string) {
	o.WalletId = v
}

func (o TransferSourceAsset) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransferSourceAsset) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["source_type"] = o.SourceType
	toSerialize["wallet_id"] = o.WalletId
	return toSerialize, nil
}

func (o *TransferSourceAsset) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"source_type",
		"wallet_id",
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

	varTransferSourceAsset := _TransferSourceAsset{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varTransferSourceAsset)

	if err != nil {
		return err
	}

	*o = TransferSourceAsset(varTransferSourceAsset)

	return err
}

type NullableTransferSourceAsset struct {
	value *TransferSourceAsset
	isSet bool
}

func (v NullableTransferSourceAsset) Get() *TransferSourceAsset {
	return v.value
}

func (v *NullableTransferSourceAsset) Set(val *TransferSourceAsset) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferSourceAsset) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferSourceAsset) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferSourceAsset(val *TransferSourceAsset) *NullableTransferSourceAsset {
	return &NullableTransferSourceAsset{value: val, isSet: true}
}

func (v NullableTransferSourceAsset) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferSourceAsset) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

