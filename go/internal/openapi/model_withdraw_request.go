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

// WithdrawRequest struct for WithdrawRequest
type WithdrawRequest struct {
	// The recipient address where the withdrawn funds will be sent. This is usually a wallet address specific to the chosen network.
	Address string `json:"address"`
	// The amount of currency to be withdrawn
	Amount map[string]interface{} `json:"amount"`
	// The code of currency to be withdrawn.
	Currency string `json:"currency"`
	// It designates the network through which the withdrawal transaction will be processed, such as \"Bitcoin\", \"Ethereum\", etc.
	Network string `json:"network"`
}

// NewWithdrawRequest instantiates a new WithdrawRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWithdrawRequest(address string, amount map[string]interface{}, currency string, network string) *WithdrawRequest {
	this := WithdrawRequest{}
	this.Address = address
	this.Amount = amount
	this.Currency = currency
	this.Network = network
	return &this
}

// NewWithdrawRequestWithDefaults instantiates a new WithdrawRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWithdrawRequestWithDefaults() *WithdrawRequest {
	this := WithdrawRequest{}
	return &this
}

// GetAddress returns the Address field value
func (o *WithdrawRequest) GetAddress() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Address
}

// GetAddressOk returns a tuple with the Address field value
// and a boolean to check if the value has been set.
func (o *WithdrawRequest) GetAddressOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Address, true
}

// SetAddress sets field value
func (o *WithdrawRequest) SetAddress(v string) {
	o.Address = v
}

// GetAmount returns the Amount field value
func (o *WithdrawRequest) GetAmount() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *WithdrawRequest) GetAmountOk() (*map[string]interface{}, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *WithdrawRequest) SetAmount(v map[string]interface{}) {
	o.Amount = v
}

// GetCurrency returns the Currency field value
func (o *WithdrawRequest) GetCurrency() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value
// and a boolean to check if the value has been set.
func (o *WithdrawRequest) GetCurrencyOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Currency, true
}

// SetCurrency sets field value
func (o *WithdrawRequest) SetCurrency(v string) {
	o.Currency = v
}

// GetNetwork returns the Network field value
func (o *WithdrawRequest) GetNetwork() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Network
}

// GetNetworkOk returns a tuple with the Network field value
// and a boolean to check if the value has been set.
func (o *WithdrawRequest) GetNetworkOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Network, true
}

// SetNetwork sets field value
func (o *WithdrawRequest) SetNetwork(v string) {
	o.Network = v
}

func (o WithdrawRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["address"] = o.Address
	}
	if true {
		toSerialize["amount"] = o.Amount
	}
	if true {
		toSerialize["currency"] = o.Currency
	}
	if true {
		toSerialize["network"] = o.Network
	}
	return json.Marshal(toSerialize)
}

type NullableWithdrawRequest struct {
	value *WithdrawRequest
	isSet bool
}

func (v NullableWithdrawRequest) Get() *WithdrawRequest {
	return v.value
}

func (v *NullableWithdrawRequest) Set(val *WithdrawRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableWithdrawRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableWithdrawRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWithdrawRequest(val *WithdrawRequest) *NullableWithdrawRequest {
	return &NullableWithdrawRequest{value: val, isSet: true}
}

func (v NullableWithdrawRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWithdrawRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


