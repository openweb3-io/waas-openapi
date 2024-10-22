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

// CursorPageEndpoint struct for CursorPageEndpoint
type CursorPageEndpoint struct {
	HasNext bool `json:"has_next"`
	Items []Endpoint `json:"items"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
}

// NewCursorPageEndpoint instantiates a new CursorPageEndpoint object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCursorPageEndpoint(hasNext bool, items []Endpoint) *CursorPageEndpoint {
	this := CursorPageEndpoint{}
	this.HasNext = hasNext
	this.Items = items
	return &this
}

// NewCursorPageEndpointWithDefaults instantiates a new CursorPageEndpoint object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCursorPageEndpointWithDefaults() *CursorPageEndpoint {
	this := CursorPageEndpoint{}
	return &this
}

// GetHasNext returns the HasNext field value
func (o *CursorPageEndpoint) GetHasNext() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.HasNext
}

// GetHasNextOk returns a tuple with the HasNext field value
// and a boolean to check if the value has been set.
func (o *CursorPageEndpoint) GetHasNextOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.HasNext, true
}

// SetHasNext sets field value
func (o *CursorPageEndpoint) SetHasNext(v bool) {
	o.HasNext = v
}

// GetItems returns the Items field value
func (o *CursorPageEndpoint) GetItems() []Endpoint {
	if o == nil {
		var ret []Endpoint
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *CursorPageEndpoint) GetItemsOk() (*[]Endpoint, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *CursorPageEndpoint) SetItems(v []Endpoint) {
	o.Items = v
}

// GetNextCursor returns the NextCursor field value if set, zero value otherwise.
func (o *CursorPageEndpoint) GetNextCursor() string {
	if o == nil || o.NextCursor == nil {
		var ret string
		return ret
	}
	return *o.NextCursor
}

// GetNextCursorOk returns a tuple with the NextCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageEndpoint) GetNextCursorOk() (*string, bool) {
	if o == nil || o.NextCursor == nil {
		return nil, false
	}
	return o.NextCursor, true
}

// HasNextCursor returns a boolean if a field has been set.
func (o *CursorPageEndpoint) HasNextCursor() bool {
	if o != nil && o.NextCursor != nil {
		return true
	}

	return false
}

// SetNextCursor gets a reference to the given string and assigns it to the NextCursor field.
func (o *CursorPageEndpoint) SetNextCursor(v string) {
	o.NextCursor = &v
}

// GetPrevCursor returns the PrevCursor field value if set, zero value otherwise.
func (o *CursorPageEndpoint) GetPrevCursor() string {
	if o == nil || o.PrevCursor == nil {
		var ret string
		return ret
	}
	return *o.PrevCursor
}

// GetPrevCursorOk returns a tuple with the PrevCursor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CursorPageEndpoint) GetPrevCursorOk() (*string, bool) {
	if o == nil || o.PrevCursor == nil {
		return nil, false
	}
	return o.PrevCursor, true
}

// HasPrevCursor returns a boolean if a field has been set.
func (o *CursorPageEndpoint) HasPrevCursor() bool {
	if o != nil && o.PrevCursor != nil {
		return true
	}

	return false
}

// SetPrevCursor gets a reference to the given string and assigns it to the PrevCursor field.
func (o *CursorPageEndpoint) SetPrevCursor(v string) {
	o.PrevCursor = &v
}

func (o CursorPageEndpoint) MarshalJSON() ([]byte, error) {
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

type NullableCursorPageEndpoint struct {
	value *CursorPageEndpoint
	isSet bool
}

func (v NullableCursorPageEndpoint) Get() *CursorPageEndpoint {
	return v.value
}

func (v *NullableCursorPageEndpoint) Set(val *CursorPageEndpoint) {
	v.value = val
	v.isSet = true
}

func (v NullableCursorPageEndpoint) IsSet() bool {
	return v.isSet
}

func (v *NullableCursorPageEndpoint) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCursorPageEndpoint(val *CursorPageEndpoint) *NullableCursorPageEndpoint {
	return &NullableCursorPageEndpoint{value: val, isSet: true}
}

func (v NullableCursorPageEndpoint) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCursorPageEndpoint) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


