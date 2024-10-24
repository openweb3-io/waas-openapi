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

// PageTransaction struct for PageTransaction
type PageTransaction struct {
	Items []Transaction `json:"items"`
	Total int32 `json:"total"`
}

// NewPageTransaction instantiates a new PageTransaction object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPageTransaction(items []Transaction, total int32) *PageTransaction {
	this := PageTransaction{}
	this.Items = items
	this.Total = total
	return &this
}

// NewPageTransactionWithDefaults instantiates a new PageTransaction object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPageTransactionWithDefaults() *PageTransaction {
	this := PageTransaction{}
	return &this
}

// GetItems returns the Items field value
func (o *PageTransaction) GetItems() []Transaction {
	if o == nil {
		var ret []Transaction
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *PageTransaction) GetItemsOk() (*[]Transaction, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *PageTransaction) SetItems(v []Transaction) {
	o.Items = v
}

// GetTotal returns the Total field value
func (o *PageTransaction) GetTotal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *PageTransaction) GetTotalOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *PageTransaction) SetTotal(v int32) {
	o.Total = v
}

func (o PageTransaction) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["items"] = o.Items
	}
	if true {
		toSerialize["total"] = o.Total
	}
	return json.Marshal(toSerialize)
}

type NullablePageTransaction struct {
	value *PageTransaction
	isSet bool
}

func (v NullablePageTransaction) Get() *PageTransaction {
	return v.value
}

func (v *NullablePageTransaction) Set(val *PageTransaction) {
	v.value = val
	v.isSet = true
}

func (v NullablePageTransaction) IsSet() bool {
	return v.isSet
}

func (v *NullablePageTransaction) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePageTransaction(val *PageTransaction) *NullablePageTransaction {
	return &NullablePageTransaction{value: val, isSet: true}
}

func (v NullablePageTransaction) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePageTransaction) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


