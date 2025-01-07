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

// WalletSubType Wallet sub type
type WalletSubType string

// List of WalletSubType
const (
	WalletSubType_Custodial_Asset WalletSubType = "Asset"
	WalletSubType_Custodial_Web3 WalletSubType = "Web3"
)

// All allowed values of WalletSubType enum
var AllowedWalletSubTypeEnumValues = []WalletSubType{
	"Asset",
	"Web3",
}

func (v *WalletSubType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := WalletSubType(value)
	for _, existing := range AllowedWalletSubTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid WalletSubType", value)
}

// NewWalletSubTypeFromValue returns a pointer to a valid WalletSubType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewWalletSubTypeFromValue(v string) (*WalletSubType, error) {
	ev := WalletSubType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for WalletSubType: valid values are %v", v, AllowedWalletSubTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v WalletSubType) IsValid() bool {
	for _, existing := range AllowedWalletSubTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to WalletSubType value
func (v WalletSubType) Ptr() *WalletSubType {
	return &v
}

type NullableWalletSubType struct {
	value *WalletSubType
	isSet bool
}

func (v NullableWalletSubType) Get() *WalletSubType {
	return v.value
}

func (v *NullableWalletSubType) Set(val *WalletSubType) {
	v.value = val
	v.isSet = true
}

func (v NullableWalletSubType) IsSet() bool {
	return v.isSet
}

func (v *NullableWalletSubType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWalletSubType(val *WalletSubType) *NullableWalletSubType {
	return &NullableWalletSubType{value: val, isSet: true}
}

func (v NullableWalletSubType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWalletSubType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

