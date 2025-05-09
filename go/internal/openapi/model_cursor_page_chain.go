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

// checks if the CursorPageChain type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CursorPageChain{}

// CursorPageChain struct for CursorPageChain
type CursorPageChain struct {
	HasNext bool `json:"has_next"`
	HasPrev bool `json:"has_prev"`
	Items []Chain `json:"items"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	Total int32 `json:"total"`
}

type _CursorPageChain CursorPageChain

// NewCursorPageChain instantiates a new CursorPageChain object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCursorPageChain(hasNext bool, hasPrev bool, items []Chain, total int32) *CursorPageChain {
	this := CursorPageChain{}
	this.HasNext = hasNext
	this.HasPrev = hasPrev
	this.Items = items
	this.Total = total
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
	if o == nil {
		return nil, false
	}
	return &o.HasNext, true
}

// SetHasNext sets field value
func (o *CursorPageChain) SetHasNext(v bool) {
	o.HasNext = v
}

// GetHasPrev returns the HasPrev field value
func (o *CursorPageChain) GetHasPrev() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasPrev
}

// GetHasPrevOk returns a tuple with the HasPrev field value
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetHasPrevOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.HasPrev, true
}

// SetHasPrev sets field value
func (o *CursorPageChain) SetHasPrev(v bool) {
	o.HasPrev = v
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
func (o *CursorPageChain) GetItemsOk() ([]Chain, bool) {
	if o == nil {
		return nil, false
	}
	return o.Items, true
}

// SetItems sets field value
func (o *CursorPageChain) SetItems(v []Chain) {
	o.Items = v
}

// GetNextCursor returns the NextCursor field value if set, zero value otherwise.
func (o *CursorPageChain) GetNextCursor() string {
	if o == nil || IsNil(o.NextCursor) {
		var ret string
		return ret
	}
	return *o.NextCursor
}

// GetNextCursorOk returns a tuple with the NextCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetNextCursorOk() (*string, bool) {
	if o == nil || IsNil(o.NextCursor) {
		return nil, false
	}
	return o.NextCursor, true
}

// HasNextCursor returns a boolean if a field has been set.
func (o *CursorPageChain) HasNextCursor() bool {
	if o != nil && !IsNil(o.NextCursor) {
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
	if o == nil || IsNil(o.PrevCursor) {
		var ret string
		return ret
	}
	return *o.PrevCursor
}

// GetPrevCursorOk returns a tuple with the PrevCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetPrevCursorOk() (*string, bool) {
	if o == nil || IsNil(o.PrevCursor) {
		return nil, false
	}
	return o.PrevCursor, true
}

// HasPrevCursor returns a boolean if a field has been set.
func (o *CursorPageChain) HasPrevCursor() bool {
	if o != nil && !IsNil(o.PrevCursor) {
		return true
	}

	return false
}

// SetPrevCursor gets a reference to the given string and assigns it to the PrevCursor field.
func (o *CursorPageChain) SetPrevCursor(v string) {
	o.PrevCursor = &v
}

// GetTotal returns the Total field value
func (o *CursorPageChain) GetTotal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *CursorPageChain) GetTotalOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *CursorPageChain) SetTotal(v int32) {
	o.Total = v
}

func (o CursorPageChain) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CursorPageChain) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["has_next"] = o.HasNext
	toSerialize["has_prev"] = o.HasPrev
	toSerialize["items"] = o.Items
	if !IsNil(o.NextCursor) {
		toSerialize["next_cursor"] = o.NextCursor
	}
	if !IsNil(o.PrevCursor) {
		toSerialize["prev_cursor"] = o.PrevCursor
	}
	toSerialize["total"] = o.Total
	return toSerialize, nil
}

func (o *CursorPageChain) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"has_next",
		"has_prev",
		"items",
		"total",
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

	varCursorPageChain := _CursorPageChain{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varCursorPageChain)

	if err != nil {
		return err
	}

	*o = CursorPageChain(varCursorPageChain)

	return err
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


