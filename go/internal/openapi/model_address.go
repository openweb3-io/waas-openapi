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

// Address struct for Address
type Address struct {
	// Blockchain address
	Address string `json:"address"`
	// Chain name
	Chain *string `json:"chain,omitempty"`
	// Chain ID
	ChainId *string `json:"chain_id,omitempty"`
	// Created time
	CreatedAt *string `json:"created_at,omitempty"`
	// The memo
	Memo *string `json:"memo,omitempty"`
	// Derivation path
	Path *string `json:"path,omitempty"`
	// Updated time
	UpdatedAt *string `json:"updated_at,omitempty"`
	// Chain ID
	WalletId *string `json:"wallet_id,omitempty"`
}

// NewAddress instantiates a new Address object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAddress(address string) *Address {
	this := Address{}
	this.Address = address
	return &this
}

// NewAddressWithDefaults instantiates a new Address object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAddressWithDefaults() *Address {
	this := Address{}
	return &this
}

// GetAddress returns the Address field value
func (o *Address) GetAddress() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Address
}

// GetAddressOk returns a tuple with the Address field value
// and a boolean to check if the value has been set.
func (o *Address) GetAddressOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Address, true
}

// SetAddress sets field value
func (o *Address) SetAddress(v string) {
	o.Address = v
}

// GetChain returns the Chain field value if set, zero value otherwise.
func (o *Address) GetChain() string {
	if o == nil || o.Chain == nil {
		var ret string
		return ret
	}
	return *o.Chain
}

// GetChainOk returns a tuple with the Chain field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetChainOk() (*string, bool) {
	if o == nil || o.Chain == nil {
		return nil, false
	}
	return o.Chain, true
}

// HasChain returns a boolean if a field has been set.
func (o *Address) HasChain() bool {
	if o != nil && o.Chain != nil {
		return true
	}

	return false
}

// SetChain gets a reference to the given string and assigns it to the Chain field.
func (o *Address) SetChain(v string) {
	o.Chain = &v
}

// GetChainId returns the ChainId field value if set, zero value otherwise.
func (o *Address) GetChainId() string {
	if o == nil || o.ChainId == nil {
		var ret string
		return ret
	}
	return *o.ChainId
}

// GetChainIdOk returns a tuple with the ChainId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetChainIdOk() (*string, bool) {
	if o == nil || o.ChainId == nil {
		return nil, false
	}
	return o.ChainId, true
}

// HasChainId returns a boolean if a field has been set.
func (o *Address) HasChainId() bool {
	if o != nil && o.ChainId != nil {
		return true
	}

	return false
}

// SetChainId gets a reference to the given string and assigns it to the ChainId field.
func (o *Address) SetChainId(v string) {
	o.ChainId = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *Address) GetCreatedAt() string {
	if o == nil || o.CreatedAt == nil {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetCreatedAtOk() (*string, bool) {
	if o == nil || o.CreatedAt == nil {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *Address) HasCreatedAt() bool {
	if o != nil && o.CreatedAt != nil {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *Address) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetMemo returns the Memo field value if set, zero value otherwise.
func (o *Address) GetMemo() string {
	if o == nil || o.Memo == nil {
		var ret string
		return ret
	}
	return *o.Memo
}

// GetMemoOk returns a tuple with the Memo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetMemoOk() (*string, bool) {
	if o == nil || o.Memo == nil {
		return nil, false
	}
	return o.Memo, true
}

// HasMemo returns a boolean if a field has been set.
func (o *Address) HasMemo() bool {
	if o != nil && o.Memo != nil {
		return true
	}

	return false
}

// SetMemo gets a reference to the given string and assigns it to the Memo field.
func (o *Address) SetMemo(v string) {
	o.Memo = &v
}

// GetPath returns the Path field value if set, zero value otherwise.
func (o *Address) GetPath() string {
	if o == nil || o.Path == nil {
		var ret string
		return ret
	}
	return *o.Path
}

// GetPathOk returns a tuple with the Path field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetPathOk() (*string, bool) {
	if o == nil || o.Path == nil {
		return nil, false
	}
	return o.Path, true
}

// HasPath returns a boolean if a field has been set.
func (o *Address) HasPath() bool {
	if o != nil && o.Path != nil {
		return true
	}

	return false
}

// SetPath gets a reference to the given string and assigns it to the Path field.
func (o *Address) SetPath(v string) {
	o.Path = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *Address) GetUpdatedAt() string {
	if o == nil || o.UpdatedAt == nil {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetUpdatedAtOk() (*string, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *Address) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *Address) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

// GetWalletId returns the WalletId field value if set, zero value otherwise.
func (o *Address) GetWalletId() string {
	if o == nil || o.WalletId == nil {
		var ret string
		return ret
	}
	return *o.WalletId
}

// GetWalletIdOk returns a tuple with the WalletId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Address) GetWalletIdOk() (*string, bool) {
	if o == nil || o.WalletId == nil {
		return nil, false
	}
	return o.WalletId, true
}

// HasWalletId returns a boolean if a field has been set.
func (o *Address) HasWalletId() bool {
	if o != nil && o.WalletId != nil {
		return true
	}

	return false
}

// SetWalletId gets a reference to the given string and assigns it to the WalletId field.
func (o *Address) SetWalletId(v string) {
	o.WalletId = &v
}

func (o Address) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["address"] = o.Address
	}
	if o.Chain != nil {
		toSerialize["chain"] = o.Chain
	}
	if o.ChainId != nil {
		toSerialize["chain_id"] = o.ChainId
	}
	if o.CreatedAt != nil {
		toSerialize["created_at"] = o.CreatedAt
	}
	if o.Memo != nil {
		toSerialize["memo"] = o.Memo
	}
	if o.Path != nil {
		toSerialize["path"] = o.Path
	}
	if o.UpdatedAt != nil {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	if o.WalletId != nil {
		toSerialize["wallet_id"] = o.WalletId
	}
	return json.Marshal(toSerialize)
}

type NullableAddress struct {
	value *Address
	isSet bool
}

func (v NullableAddress) Get() *Address {
	return v.value
}

func (v *NullableAddress) Set(val *Address) {
	v.value = val
	v.isSet = true
}

func (v NullableAddress) IsSet() bool {
	return v.isSet
}

func (v *NullableAddress) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAddress(val *Address) *NullableAddress {
	return &NullableAddress{value: val, isSet: true}
}

func (v NullableAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAddress) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


