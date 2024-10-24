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

// GetRatesResponse struct for GetRatesResponse
type GetRatesResponse struct {
	Rates *[]Rate `json:"rates,omitempty"`
}

// NewGetRatesResponse instantiates a new GetRatesResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetRatesResponse() *GetRatesResponse {
	this := GetRatesResponse{}
	return &this
}

// NewGetRatesResponseWithDefaults instantiates a new GetRatesResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetRatesResponseWithDefaults() *GetRatesResponse {
	this := GetRatesResponse{}
	return &this
}

// GetRates returns the Rates field value if set, zero value otherwise.
func (o *GetRatesResponse) GetRates() []Rate {
	if o == nil || o.Rates == nil {
		var ret []Rate
		return ret
	}
	return *o.Rates
}

// GetRatesOk returns a tuple with the Rates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetRatesResponse) GetRatesOk() (*[]Rate, bool) {
	if o == nil || o.Rates == nil {
		return nil, false
	}
	return o.Rates, true
}

// HasRates returns a boolean if a field has been set.
func (o *GetRatesResponse) HasRates() bool {
	if o != nil && o.Rates != nil {
		return true
	}

	return false
}

// SetRates gets a reference to the given []Rate and assigns it to the Rates field.
func (o *GetRatesResponse) SetRates(v []Rate) {
	o.Rates = &v
}

func (o GetRatesResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Rates != nil {
		toSerialize["rates"] = o.Rates
	}
	return json.Marshal(toSerialize)
}

type NullableGetRatesResponse struct {
	value *GetRatesResponse
	isSet bool
}

func (v NullableGetRatesResponse) Get() *GetRatesResponse {
	return v.value
}

func (v *NullableGetRatesResponse) Set(val *GetRatesResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGetRatesResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGetRatesResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetRatesResponse(val *GetRatesResponse) *NullableGetRatesResponse {
	return &NullableGetRatesResponse{value: val, isSet: true}
}

func (v NullableGetRatesResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetRatesResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


