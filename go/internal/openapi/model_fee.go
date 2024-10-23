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

// Fee struct for Fee
type Fee struct {
	// Max fee amount
	MaxFeeAmount *string `json:"maxFeeAmount,omitempty"`
	// Token ID
	TokenId *string `json:"tokenId,omitempty"`
	// Fee type
	Type *FeeType `json:"type,omitempty"`
}

// NewFee instantiates a new Fee object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFee() *Fee {
	this := Fee{}
	return &this
}

// NewFeeWithDefaults instantiates a new Fee object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFeeWithDefaults() *Fee {
	this := Fee{}
	return &this
}

// GetMaxFeeAmount returns the MaxFeeAmount field value if set, zero value otherwise.
func (o *Fee) GetMaxFeeAmount() string {
	if o == nil || o.MaxFeeAmount == nil {
		var ret string
		return ret
	}
	return *o.MaxFeeAmount
}

// GetMaxFeeAmountOk returns a tuple with the MaxFeeAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Fee) GetMaxFeeAmountOk() (*string, bool) {
	if o == nil || o.MaxFeeAmount == nil {
		return nil, false
	}
	return o.MaxFeeAmount, true
}

// HasMaxFeeAmount returns a boolean if a field has been set.
func (o *Fee) HasMaxFeeAmount() bool {
	if o != nil && o.MaxFeeAmount != nil {
		return true
	}

	return false
}

// SetMaxFeeAmount gets a reference to the given string and assigns it to the MaxFeeAmount field.
func (o *Fee) SetMaxFeeAmount(v string) {
	o.MaxFeeAmount = &v
}

// GetTokenId returns the TokenId field value if set, zero value otherwise.
func (o *Fee) GetTokenId() string {
	if o == nil || o.TokenId == nil {
		var ret string
		return ret
	}
	return *o.TokenId
}

// GetTokenIdOk returns a tuple with the TokenId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Fee) GetTokenIdOk() (*string, bool) {
	if o == nil || o.TokenId == nil {
		return nil, false
	}
	return o.TokenId, true
}

// HasTokenId returns a boolean if a field has been set.
func (o *Fee) HasTokenId() bool {
	if o != nil && o.TokenId != nil {
		return true
	}

	return false
}

// SetTokenId gets a reference to the given string and assigns it to the TokenId field.
func (o *Fee) SetTokenId(v string) {
	o.TokenId = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *Fee) GetType() FeeType {
	if o == nil || o.Type == nil {
		var ret FeeType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Fee) GetTypeOk() (*FeeType, bool) {
	if o == nil || o.Type == nil {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *Fee) HasType() bool {
	if o != nil && o.Type != nil {
		return true
	}

	return false
}

// SetType gets a reference to the given FeeType and assigns it to the Type field.
func (o *Fee) SetType(v FeeType) {
	o.Type = &v
}

func (o Fee) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.MaxFeeAmount != nil {
		toSerialize["maxFeeAmount"] = o.MaxFeeAmount
	}
	if o.TokenId != nil {
		toSerialize["tokenId"] = o.TokenId
	}
	if o.Type != nil {
		toSerialize["type"] = o.Type
	}
	return json.Marshal(toSerialize)
}

type NullableFee struct {
	value *Fee
	isSet bool
}

func (v NullableFee) Get() *Fee {
	return v.value
}

func (v *NullableFee) Set(val *Fee) {
	v.value = val
	v.isSet = true
}

func (v NullableFee) IsSet() bool {
	return v.isSet
}

func (v *NullableFee) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFee(val *Fee) *NullableFee {
	return &NullableFee{value: val, isSet: true}
}

func (v NullableFee) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFee) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


