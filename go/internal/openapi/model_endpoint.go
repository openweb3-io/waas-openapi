/*
 * WaaS OpenAPI Documentation
 *
 * This is a WaaS OpenAPI Server.
 *
 * API version: 1.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// Endpoint struct for Endpoint
type Endpoint struct {
	CreatedAt string `json:"createdAt"`
	Description string `json:"description"`
	Disabled bool `json:"disabled"`
	EventTypes []string `json:"eventTypes"`
	Filter string `json:"filter"`
	Id string `json:"id"`
	Uid *string `json:"uid,omitempty"`
	Url string `json:"url"`
}

// NewEndpoint instantiates a new Endpoint object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEndpoint(createdAt string, description string, disabled bool, eventTypes []string, filter string, id string, url string) *Endpoint {
	this := Endpoint{}
	this.CreatedAt = createdAt
	this.Description = description
	this.Disabled = disabled
	this.EventTypes = eventTypes
	this.Filter = filter
	this.Id = id
	this.Url = url
	return &this
}

// NewEndpointWithDefaults instantiates a new Endpoint object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEndpointWithDefaults() *Endpoint {
	this := Endpoint{}
	return &this
}

// GetCreatedAt returns the CreatedAt field value
func (o *Endpoint) GetCreatedAt() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetCreatedAtOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CreatedAt, true
}

// SetCreatedAt sets field value
func (o *Endpoint) SetCreatedAt(v string) {
	o.CreatedAt = v
}

// GetDescription returns the Description field value
func (o *Endpoint) GetDescription() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Description
}

// GetDescriptionOk returns a tuple with the Description field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetDescriptionOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Description, true
}

// SetDescription sets field value
func (o *Endpoint) SetDescription(v string) {
	o.Description = v
}

// GetDisabled returns the Disabled field value
func (o *Endpoint) GetDisabled() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Disabled
}

// GetDisabledOk returns a tuple with the Disabled field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetDisabledOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Disabled, true
}

// SetDisabled sets field value
func (o *Endpoint) SetDisabled(v bool) {
	o.Disabled = v
}

// GetEventTypes returns the EventTypes field value
func (o *Endpoint) GetEventTypes() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.EventTypes
}

// GetEventTypesOk returns a tuple with the EventTypes field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetEventTypesOk() (*[]string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EventTypes, true
}

// SetEventTypes sets field value
func (o *Endpoint) SetEventTypes(v []string) {
	o.EventTypes = v
}

// GetFilter returns the Filter field value
func (o *Endpoint) GetFilter() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Filter
}

// GetFilterOk returns a tuple with the Filter field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetFilterOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Filter, true
}

// SetFilter sets field value
func (o *Endpoint) SetFilter(v string) {
	o.Filter = v
}

// GetId returns the Id field value
func (o *Endpoint) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *Endpoint) SetId(v string) {
	o.Id = v
}

// GetUid returns the Uid field value if set, zero value otherwise.
func (o *Endpoint) GetUid() string {
	if o == nil || o.Uid == nil {
		var ret string
		return ret
	}
	return *o.Uid
}

// GetUidOk returns a tuple with the Uid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Endpoint) GetUidOk() (*string, bool) {
	if o == nil || o.Uid == nil {
		return nil, false
	}
	return o.Uid, true
}

// HasUid returns a boolean if a field has been set.
func (o *Endpoint) HasUid() bool {
	if o != nil && o.Uid != nil {
		return true
	}

	return false
}

// SetUid gets a reference to the given string and assigns it to the Uid field.
func (o *Endpoint) SetUid(v string) {
	o.Uid = &v
}

// GetUrl returns the Url field value
func (o *Endpoint) GetUrl() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Url
}

// GetUrlOk returns a tuple with the Url field value
// and a boolean to check if the value has been set.
func (o *Endpoint) GetUrlOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Url, true
}

// SetUrl sets field value
func (o *Endpoint) SetUrl(v string) {
	o.Url = v
}

func (o Endpoint) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["createdAt"] = o.CreatedAt
	}
	if true {
		toSerialize["description"] = o.Description
	}
	if true {
		toSerialize["disabled"] = o.Disabled
	}
	if true {
		toSerialize["eventTypes"] = o.EventTypes
	}
	if true {
		toSerialize["filter"] = o.Filter
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if o.Uid != nil {
		toSerialize["uid"] = o.Uid
	}
	if true {
		toSerialize["url"] = o.Url
	}
	return json.Marshal(toSerialize)
}

type NullableEndpoint struct {
	value *Endpoint
	isSet bool
}

func (v NullableEndpoint) Get() *Endpoint {
	return v.value
}

func (v *NullableEndpoint) Set(val *Endpoint) {
	v.value = val
	v.isSet = true
}

func (v NullableEndpoint) IsSet() bool {
	return v.isSet
}

func (v *NullableEndpoint) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEndpoint(val *Endpoint) *NullableEndpoint {
	return &NullableEndpoint{value: val, isSet: true}
}

func (v NullableEndpoint) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEndpoint) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


