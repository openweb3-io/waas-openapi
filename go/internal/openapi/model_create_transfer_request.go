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

// CreateTransferRequest struct for CreateTransferRequest
type CreateTransferRequest struct {
	// The amount to be transferred
	Amount string `json:"amount"`
	// The ID of the wallet to which the transfer will be made
	Destination string `json:"destination"`
	// The ID of the wallet from which the transfer will be made
	Source string `json:"source"`
	// The tokenId to be transferred
	TokenId string `json:"tokenId"`
}

// NewCreateTransferRequest instantiates a new CreateTransferRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTransferRequest(amount string, destination string, source string, tokenId string) *CreateTransferRequest {
	this := CreateTransferRequest{}
	this.Amount = amount
	this.Destination = destination
	this.Source = source
	this.TokenId = tokenId
	return &this
}

// NewCreateTransferRequestWithDefaults instantiates a new CreateTransferRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateTransferRequestWithDefaults() *CreateTransferRequest {
	this := CreateTransferRequest{}
	return &this
}

// GetAmount returns the Amount field value
func (o *CreateTransferRequest) GetAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *CreateTransferRequest) SetAmount(v string) {
	o.Amount = v
}

// GetDestination returns the Destination field value
func (o *CreateTransferRequest) GetDestination() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Destination
}

// GetDestinationOk returns a tuple with the Destination field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetDestinationOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Destination, true
}

// SetDestination sets field value
func (o *CreateTransferRequest) SetDestination(v string) {
	o.Destination = v
}

// GetSource returns the Source field value
func (o *CreateTransferRequest) GetSource() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Source
}

// GetSourceOk returns a tuple with the Source field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetSourceOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Source, true
}

// SetSource sets field value
func (o *CreateTransferRequest) SetSource(v string) {
	o.Source = v
}

// GetTokenId returns the TokenId field value
func (o *CreateTransferRequest) GetTokenId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.TokenId
}

// GetTokenIdOk returns a tuple with the TokenId field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetTokenIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TokenId, true
}

// SetTokenId sets field value
func (o *CreateTransferRequest) SetTokenId(v string) {
	o.TokenId = v
}

func (o CreateTransferRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["amount"] = o.Amount
	}
	if true {
		toSerialize["destination"] = o.Destination
	}
	if true {
		toSerialize["source"] = o.Source
	}
	if true {
		toSerialize["tokenId"] = o.TokenId
	}
	return json.Marshal(toSerialize)
}

type NullableCreateTransferRequest struct {
	value *CreateTransferRequest
	isSet bool
}

func (v NullableCreateTransferRequest) Get() *CreateTransferRequest {
	return v.value
}

func (v *NullableCreateTransferRequest) Set(val *CreateTransferRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateTransferRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateTransferRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateTransferRequest(val *CreateTransferRequest) *NullableCreateTransferRequest {
	return &NullableCreateTransferRequest{value: val, isSet: true}
}

func (v NullableCreateTransferRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateTransferRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


