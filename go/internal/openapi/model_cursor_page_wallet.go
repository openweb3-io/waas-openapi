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

// CursorPageWallet struct for CursorPageWallet
type CursorPageWallet struct {
	HasNext    bool     `json:"has_next"`
	HasPrev    bool     `json:"has_prev"`
	Items      []Wallet `json:"items"`
	NextCursor *string  `json:"next_cursor,omitempty"`
	PrevCursor *string  `json:"prev_cursor,omitempty"`
	Total      int32    `json:"total"`
}

// NewCursorPageWallet instantiates a new CursorPageWallet object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCursorPageWallet(hasNext bool, hasPrev bool, items []Wallet, total int32) *CursorPageWallet {
	this := CursorPageWallet{}
	this.HasNext = hasNext
	this.HasPrev = hasPrev
	this.Items = items
	this.Total = total
	return &this
}

// NewCursorPageWalletWithDefaults instantiates a new CursorPageWallet object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCursorPageWalletWithDefaults() *CursorPageWallet {
	this := CursorPageWallet{}
	return &this
}

// GetHasNext returns the HasNext field value
func (o *CursorPageWallet) GetHasNext() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasNext
}

// GetHasNextOk returns a tuple with the HasNext field value
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetHasNextOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.HasNext, true
}

// SetHasNext sets field value
func (o *CursorPageWallet) SetHasNext(v bool) {
	o.HasNext = v
}

// GetHasPrev returns the HasPrev field value
func (o *CursorPageWallet) GetHasPrev() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasPrev
}

// GetHasPrevOk returns a tuple with the HasPrev field value
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetHasPrevOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.HasPrev, true
}

// SetHasPrev sets field value
func (o *CursorPageWallet) SetHasPrev(v bool) {
	o.HasPrev = v
}

// GetItems returns the Items field value
func (o *CursorPageWallet) GetItems() []Wallet {
	if o == nil {
		var ret []Wallet
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetItemsOk() (*[]Wallet, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *CursorPageWallet) SetItems(v []Wallet) {
	o.Items = v
}

// GetNextCursor returns the NextCursor field value if set, zero value otherwise.
func (o *CursorPageWallet) GetNextCursor() string {
	if o == nil || o.NextCursor == nil {
		var ret string
		return ret
	}
	return *o.NextCursor
}

// GetNextCursorOk returns a tuple with the NextCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetNextCursorOk() (*string, bool) {
	if o == nil || o.NextCursor == nil {
		return nil, false
	}
	return o.NextCursor, true
}

// HasNextCursor returns a boolean if a field has been set.
func (o *CursorPageWallet) HasNextCursor() bool {
	if o != nil && o.NextCursor != nil {
		return true
	}

	return false
}

// SetNextCursor gets a reference to the given string and assigns it to the NextCursor field.
func (o *CursorPageWallet) SetNextCursor(v string) {
	o.NextCursor = &v
}

// GetPrevCursor returns the PrevCursor field value if set, zero value otherwise.
func (o *CursorPageWallet) GetPrevCursor() string {
	if o == nil || o.PrevCursor == nil {
		var ret string
		return ret
	}
	return *o.PrevCursor
}

// GetPrevCursorOk returns a tuple with the PrevCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetPrevCursorOk() (*string, bool) {
	if o == nil || o.PrevCursor == nil {
		return nil, false
	}
	return o.PrevCursor, true
}

// HasPrevCursor returns a boolean if a field has been set.
func (o *CursorPageWallet) HasPrevCursor() bool {
	if o != nil && o.PrevCursor != nil {
		return true
	}

	return false
}

// SetPrevCursor gets a reference to the given string and assigns it to the PrevCursor field.
func (o *CursorPageWallet) SetPrevCursor(v string) {
	o.PrevCursor = &v
}

// GetTotal returns the Total field value
func (o *CursorPageWallet) GetTotal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *CursorPageWallet) GetTotalOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *CursorPageWallet) SetTotal(v int32) {
	o.Total = v
}

func (o CursorPageWallet) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["has_next"] = o.HasNext
	}
	if true {
		toSerialize["has_prev"] = o.HasPrev
	}
	if true {
		toSerialize["items"] = o.Items
	}
	if o.NextCursor != nil {
		toSerialize["next_cursor"] = o.NextCursor
	}
	if o.PrevCursor != nil {
		toSerialize["prev_cursor"] = o.PrevCursor
	}
	if true {
		toSerialize["total"] = o.Total
	}
	return json.Marshal(toSerialize)
}

type NullableCursorPageWallet struct {
	value *CursorPageWallet
	isSet bool
}

func (v NullableCursorPageWallet) Get() *CursorPageWallet {
	return v.value
}

func (v *NullableCursorPageWallet) Set(val *CursorPageWallet) {
	v.value = val
	v.isSet = true
}

func (v NullableCursorPageWallet) IsSet() bool {
	return v.isSet
}

func (v *NullableCursorPageWallet) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCursorPageWallet(val *CursorPageWallet) *NullableCursorPageWallet {
	return &NullableCursorPageWallet{value: val, isSet: true}
}

func (v NullableCursorPageWallet) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCursorPageWallet) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
