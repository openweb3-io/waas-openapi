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

// CursorPageChain struct for CursorPageChain
type CursorPageChain struct {
	HasNext bool `json:"has_next"`
	Items []Chain `json:"items"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
}

// NewCursorPageChain instantiates a new CursorPageChain object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCursorPageChain(hasNext bool, items []Chain) *CursorPageChain {
	this := CursorPageChain{}
	this.HasNext = hasNext
	this.Items = items
	return &this
}

// NewCursorPageChainWithDefaults instantiates a new CursorPageChain object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCursorPageChainWithDefaults() *CursorPageChain {
	this := CursorPageChain{}
	return &this
}

// GetHasNext returns the HasNext field value
func (o *CursorPageChain) GetHasNext() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasNext
}

// GetHasNextOk returns a tuple with the HasNext field value
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetHasNextOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.HasNext, true
}

// SetHasNext sets field value
func (o *CursorPageChain) SetHasNext(v bool) {
	o.HasNext = v
}

// GetItems returns the Items field value
func (o *CursorPageChain) GetItems() []Chain {
	if o == nil {
		var ret []Chain
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetItemsOk() (*[]Chain, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *CursorPageChain) SetItems(v []Chain) {
	o.Items = v
}

// GetNextCursor returns the NextCursor field value if set, zero value otherwise.
func (o *CursorPageChain) GetNextCursor() string {
	if o == nil || o.NextCursor == nil {
		var ret string
		return ret
	}
	return *o.NextCursor
}

// GetNextCursorOk returns a tuple with the NextCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetNextCursorOk() (*string, bool) {
	if o == nil || o.NextCursor == nil {
		return nil, false
	}
	return o.NextCursor, true
}

// HasNextCursor returns a boolean if a field has been set.
func (o *CursorPageChain) HasNextCursor() bool {
	if o != nil && o.NextCursor != nil {
		return true
	}

	return false
}

// SetNextCursor gets a reference to the given string and assigns it to the NextCursor field.
func (o *CursorPageChain) SetNextCursor(v string) {
	o.NextCursor = &v
}

// GetPrevCursor returns the PrevCursor field value if set, zero value otherwise.
func (o *CursorPageChain) GetPrevCursor() string {
	if o == nil || o.PrevCursor == nil {
		var ret string
		return ret
	}
	return *o.PrevCursor
}

// GetPrevCursorOk returns a tuple with the PrevCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetPrevCursorOk() (*string, bool) {
	if o == nil || o.PrevCursor == nil {
		return nil, false
	}
	return o.PrevCursor, true
}

// HasPrevCursor returns a boolean if a field has been set.
func (o *CursorPageChain) HasPrevCursor() bool {
	if o != nil && o.PrevCursor != nil {
		return true
	}

	return false
}

// SetPrevCursor gets a reference to the given string and assigns it to the PrevCursor field.
func (o *CursorPageChain) SetPrevCursor(v string) {
	o.PrevCursor = &v
}

func (o CursorPageChain) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["has_next"] = o.HasNext
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
	return json.Marshal(toSerialize)
}

type NullableCursorPageChain struct {
	value *CursorPageChain
	isSet bool
}

func (v NullableCursorPageChain) Get() *CursorPageChain {
	return v.value
}

func (v *NullableCursorPageChain) Set(val *CursorPageChain) {
	v.value = val
	v.isSet = true
}

func (v NullableCursorPageChain) IsSet() bool {
	return v.isSet
}

func (v *NullableCursorPageChain) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCursorPageChain(val *CursorPageChain) *NullableCursorPageChain {
	return &NullableCursorPageChain{value: val, isSet: true}
}

func (v NullableCursorPageChain) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCursorPageChain) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


