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

// WalletType Wallet type
type WalletType string

// List of WalletType
const (
	WalletType_Custodial WalletType = "Custodial"
)

// All allowed values of WalletType enum
var AllowedWalletTypeEnumValues = []WalletType{
	"Custodial",
}

func (v *WalletType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := WalletType(value)
	for _, existing := range AllowedWalletTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid WalletType", value)
}

// NewWalletTypeFromValue returns a pointer to a valid WalletType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewWalletTypeFromValue(v string) (*WalletType, error) {
	ev := WalletType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for WalletType: valid values are %v", v, AllowedWalletTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v WalletType) IsValid() bool {
	for _, existing := range AllowedWalletTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to WalletType value
func (v WalletType) Ptr() *WalletType {
	return &v
}

type NullableWalletType struct {
	value *WalletType
	isSet bool
}

func (v NullableWalletType) Get() *WalletType {
	return v.value
}

func (v *NullableWalletType) Set(val *WalletType) {
	v.value = val
	v.isSet = true
}

func (v NullableWalletType) IsSet() bool {
	return v.isSet
}

func (v *NullableWalletType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWalletType(val *WalletType) *NullableWalletType {
	return &NullableWalletType{value: val, isSet: true}
}

func (v NullableWalletType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWalletType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

