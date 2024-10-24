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

// CursorPageAddress struct for CursorPageAddress
type CursorPageAddress struct {
	HasNext bool `json:"has_next"`
	Items []Address `json:"items"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
}

// NewCursorPageAddress instantiates a new CursorPageAddress object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCursorPageAddress(hasNext bool, items []Address) *CursorPageAddress {
	this := CursorPageAddress{}
	this.HasNext = hasNext
	this.Items = items
	return &this
}

// NewCursorPageAddressWithDefaults instantiates a new CursorPageAddress object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCursorPageAddressWithDefaults() *CursorPageAddress {
	this := CursorPageAddress{}
	return &this
}

// GetHasNext returns the HasNext field value
func (o *CursorPageAddress) GetHasNext() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasNext
}

// GetHasNextOk returns a tuple with the HasNext field value
// and a boolean to check if the value has been set.
func (o *CursorPageAddress) GetHasNextOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.HasNext, true
}

// SetHasNext sets field value
func (o *CursorPageAddress) SetHasNext(v bool) {
	o.HasNext = v
}

// GetItems returns the Items field value
func (o *CursorPageAddress) GetItems() []Address {
	if o == nil {
		var ret []Address
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *CursorPageAddress) GetItemsOk() (*[]Address, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *CursorPageAddress) SetItems(v []Address) {
	o.Items = v
}

// GetNextCursor returns the NextCursor field value if set, zero value otherwise.
func (o *CursorPageAddress) GetNextCursor() string {
	if o == nil || o.NextCursor == nil {
		var ret string
		return ret
	}
	return *o.NextCursor
}

// GetNextCursorOk returns a tuple with the NextCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageAddress) GetNextCursorOk() (*string, bool) {
	if o == nil || o.NextCursor == nil {
		return nil, false
	}
	return o.NextCursor, true
}

// HasNextCursor returns a boolean if a field has been set.
func (o *CursorPageAddress) HasNextCursor() bool {
	if o != nil && o.NextCursor != nil {
		return true
	}

	return false
}

// SetNextCursor gets a reference to the given string and assigns it to the NextCursor field.
func (o *CursorPageAddress) SetNextCursor(v string) {
	o.NextCursor = &v
}

// GetPrevCursor returns the PrevCursor field value if set, zero value otherwise.
func (o *CursorPageAddress) GetPrevCursor() string {
	if o == nil || o.PrevCursor == nil {
		var ret string
		return ret
	}
	return *o.PrevCursor
}

// GetPrevCursorOk returns a tuple with the PrevCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageAddress) GetPrevCursorOk() (*string, bool) {
	if o == nil || o.PrevCursor == nil {
		return nil, false
	}
	return o.PrevCursor, true
}

// HasPrevCursor returns a boolean if a field has been set.
func (o *CursorPageAddress) HasPrevCursor() bool {
	if o != nil && o.PrevCursor != nil {
		return true
	}

	return false
}

// SetPrevCursor gets a reference to the given string and assigns it to the PrevCursor field.
func (o *CursorPageAddress) SetPrevCursor(v string) {
	o.PrevCursor = &v
}

func (o CursorPageAddress) MarshalJSON() ([]byte, error) {
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

type NullableCursorPageAddress struct {
	value *CursorPageAddress
	isSet bool
}

func (v NullableCursorPageAddress) Get() *CursorPageAddress {
	return v.value
}

func (v *NullableCursorPageAddress) Set(val *CursorPageAddress) {
	v.value = val
	v.isSet = true
}

func (v NullableCursorPageAddress) IsSet() bool {
	return v.isSet
}

func (v *NullableCursorPageAddress) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCursorPageAddress(val *CursorPageAddress) *NullableCursorPageAddress {
	return &NullableCursorPageAddress{value: val, isSet: true}
}

func (v NullableCursorPageAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCursorPageAddress) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


