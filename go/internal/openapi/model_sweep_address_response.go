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

// checks if the SweepAddressResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SweepAddressResponse{}

// SweepAddressResponse struct for SweepAddressResponse
type SweepAddressResponse struct {
	TxId string `json:"tx_id"`
}

type _SweepAddressResponse SweepAddressResponse

// NewSweepAddressResponse instantiates a new SweepAddressResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSweepAddressResponse(txId string) *SweepAddressResponse {
	this := SweepAddressResponse{}
	this.TxId = txId
	return &this
}

// NewSweepAddressResponseWithDefaults instantiates a new SweepAddressResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSweepAddressResponseWithDefaults() *SweepAddressResponse {
	this := SweepAddressResponse{}
	return &this
}

// GetTxId returns the TxId field value
func (o *SweepAddressResponse) GetTxId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.TxId
}

// GetTxIdOk returns a tuple with the TxId field value
// and a boolean to check if the value has been set.
func (o *SweepAddressResponse) GetTxIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TxId, true
}

// SetTxId sets field value
func (o *SweepAddressResponse) SetTxId(v string) {
	o.TxId = v
}

func (o SweepAddressResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SweepAddressResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["tx_id"] = o.TxId
	return toSerialize, nil
}

func (o *SweepAddressResponse) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"tx_id",
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

	varSweepAddressResponse := _SweepAddressResponse{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varSweepAddressResponse)

	if err != nil {
		return err
	}

	*o = SweepAddressResponse(varSweepAddressResponse)

	return err
}

type NullableSweepAddressResponse struct {
	value *SweepAddressResponse
	isSet bool
}

func (v NullableSweepAddressResponse) Get() *SweepAddressResponse {
	return v.value
}

func (v *NullableSweepAddressResponse) Set(val *SweepAddressResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableSweepAddressResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableSweepAddressResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSweepAddressResponse(val *SweepAddressResponse) *NullableSweepAddressResponse {
	return &NullableSweepAddressResponse{value: val, isSet: true}
}

func (v NullableSweepAddressResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSweepAddressResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


