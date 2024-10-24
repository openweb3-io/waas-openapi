/*
 * Wallet OpenAPI Documentation
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

// WithdrawReply struct for WithdrawReply
type WithdrawReply struct {
	TransactionId *string `json:"transaction_id,omitempty"`
}

// NewWithdrawReply instantiates a new WithdrawReply object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWithdrawReply() *WithdrawReply {
	this := WithdrawReply{}
	return &this
}

// NewWithdrawReplyWithDefaults instantiates a new WithdrawReply object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWithdrawReplyWithDefaults() *WithdrawReply {
	this := WithdrawReply{}
	return &this
}

// GetTransactionId returns the TransactionId field value if set, zero value otherwise.
func (o *WithdrawReply) GetTransactionId() string {
	if o == nil || o.TransactionId == nil {
		var ret string
		return ret
	}
	return *o.TransactionId
}

// GetTransactionIdOk returns a tuple with the TransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WithdrawReply) GetTransactionIdOk() (*string, bool) {
	if o == nil || o.TransactionId == nil {
		return nil, false
	}
	return o.TransactionId, true
}

// HasTransactionId returns a boolean if a field has been set.
func (o *WithdrawReply) HasTransactionId() bool {
	if o != nil && o.TransactionId != nil {
		return true
	}

	return false
}

// SetTransactionId gets a reference to the given string and assigns it to the TransactionId field.
func (o *WithdrawReply) SetTransactionId(v string) {
	o.TransactionId = &v
}

func (o WithdrawReply) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.TransactionId != nil {
		toSerialize["transaction_id"] = o.TransactionId
	}
	return json.Marshal(toSerialize)
}

type NullableWithdrawReply struct {
	value *WithdrawReply
	isSet bool
}

func (v NullableWithdrawReply) Get() *WithdrawReply {
	return v.value
}

func (v *NullableWithdrawReply) Set(val *WithdrawReply) {
	v.value = val
	v.isSet = true
}

func (v NullableWithdrawReply) IsSet() bool {
	return v.isSet
}

func (v *NullableWithdrawReply) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWithdrawReply(val *WithdrawReply) *NullableWithdrawReply {
	return &NullableWithdrawReply{value: val, isSet: true}
}

func (v NullableWithdrawReply) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWithdrawReply) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


