/*
WaaS OpenAPI Documentation

This is a WaaS OpenAPI Server.

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"fmt"
)

// TransferSourceType source type
type TransferSourceType string

// List of TransferSourceType
const (
	TransferSourceType_Asset TransferSourceType = "Asset"
	TransferSourceType_Web3 TransferSourceType = "Web3"
)

// All allowed values of TransferSourceType enum
var AllowedTransferSourceTypeEnumValues = []TransferSourceType{
	"Asset",
	"Web3",
}

func (v *TransferSourceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TransferSourceType(value)
	for _, existing := range AllowedTransferSourceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TransferSourceType", value)
}

// NewTransferSourceTypeFromValue returns a pointer to a valid TransferSourceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTransferSourceTypeFromValue(v string) (*TransferSourceType, error) {
	ev := TransferSourceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TransferSourceType: valid values are %v", v, AllowedTransferSourceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TransferSourceType) IsValid() bool {
	for _, existing := range AllowedTransferSourceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to TransferSourceType value
func (v TransferSourceType) Ptr() *TransferSourceType {
	return &v
}

type NullableTransferSourceType struct {
	value *TransferSourceType
	isSet bool
}

func (v NullableTransferSourceType) Get() *TransferSourceType {
	return v.value
}

func (v *NullableTransferSourceType) Set(val *TransferSourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransferSourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransferSourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransferSourceType(val *TransferSourceType) *NullableTransferSourceType {
	return &NullableTransferSourceType{value: val, isSet: true}
}

func (v NullableTransferSourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransferSourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

