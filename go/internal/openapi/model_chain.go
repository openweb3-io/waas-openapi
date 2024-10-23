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

// Chain struct for Chain
type Chain struct {
	// Confirmation number
	ConfirmNum *int32 `json:"confirm_num,omitempty"`
	// Created time
	CreatedAt *string `json:"created_at,omitempty"`
	// Explorer address URL
	ExplorerAddressUrl *string `json:"explorer_address_url,omitempty"`
	// Explorer transaction URL
	ExplorerTxUrl *string `json:"explorer_tx_url,omitempty"`
	// Icon URL
	IconUrl *string `json:"icon_url,omitempty"`
	// Chain ID
	Id *string `json:"id,omitempty"`
	// Chain name
	Name *string `json:"name,omitempty"`
	// Need memo
	NeedMemo *bool `json:"need_memo,omitempty"`
	// Chain symbol
	Symbol *string `json:"symbol,omitempty"`
	// Updated time
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// NewChain instantiates a new Chain object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChain() *Chain {
	this := Chain{}
	return &this
}

// NewChainWithDefaults instantiates a new Chain object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChainWithDefaults() *Chain {
	this := Chain{}
	return &this
}

// GetConfirmNum returns the ConfirmNum field value if set, zero value otherwise.
func (o *Chain) GetConfirmNum() int32 {
	if o == nil || o.ConfirmNum == nil {
		var ret int32
		return ret
	}
	return *o.ConfirmNum
}

// GetConfirmNumOk returns a tuple with the ConfirmNum field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetConfirmNumOk() (*int32, bool) {
	if o == nil || o.ConfirmNum == nil {
		return nil, false
	}
	return o.ConfirmNum, true
}

// HasConfirmNum returns a boolean if a field has been set.
func (o *Chain) HasConfirmNum() bool {
	if o != nil && o.ConfirmNum != nil {
		return true
	}

	return false
}

// SetConfirmNum gets a reference to the given int32 and assigns it to the ConfirmNum field.
func (o *Chain) SetConfirmNum(v int32) {
	o.ConfirmNum = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *Chain) GetCreatedAt() string {
	if o == nil || o.CreatedAt == nil {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetCreatedAtOk() (*string, bool) {
	if o == nil || o.CreatedAt == nil {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *Chain) HasCreatedAt() bool {
	if o != nil && o.CreatedAt != nil {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *Chain) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetExplorerAddressUrl returns the ExplorerAddressUrl field value if set, zero value otherwise.
func (o *Chain) GetExplorerAddressUrl() string {
	if o == nil || o.ExplorerAddressUrl == nil {
		var ret string
		return ret
	}
	return *o.ExplorerAddressUrl
}

// GetExplorerAddressUrlOk returns a tuple with the ExplorerAddressUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetExplorerAddressUrlOk() (*string, bool) {
	if o == nil || o.ExplorerAddressUrl == nil {
		return nil, false
	}
	return o.ExplorerAddressUrl, true
}

// HasExplorerAddressUrl returns a boolean if a field has been set.
func (o *Chain) HasExplorerAddressUrl() bool {
	if o != nil && o.ExplorerAddressUrl != nil {
		return true
	}

	return false
}

// SetExplorerAddressUrl gets a reference to the given string and assigns it to the ExplorerAddressUrl field.
func (o *Chain) SetExplorerAddressUrl(v string) {
	o.ExplorerAddressUrl = &v
}

// GetExplorerTxUrl returns the ExplorerTxUrl field value if set, zero value otherwise.
func (o *Chain) GetExplorerTxUrl() string {
	if o == nil || o.ExplorerTxUrl == nil {
		var ret string
		return ret
	}
	return *o.ExplorerTxUrl
}

// GetExplorerTxUrlOk returns a tuple with the ExplorerTxUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetExplorerTxUrlOk() (*string, bool) {
	if o == nil || o.ExplorerTxUrl == nil {
		return nil, false
	}
	return o.ExplorerTxUrl, true
}

// HasExplorerTxUrl returns a boolean if a field has been set.
func (o *Chain) HasExplorerTxUrl() bool {
	if o != nil && o.ExplorerTxUrl != nil {
		return true
	}

	return false
}

// SetExplorerTxUrl gets a reference to the given string and assigns it to the ExplorerTxUrl field.
func (o *Chain) SetExplorerTxUrl(v string) {
	o.ExplorerTxUrl = &v
}

// GetIconUrl returns the IconUrl field value if set, zero value otherwise.
func (o *Chain) GetIconUrl() string {
	if o == nil || o.IconUrl == nil {
		var ret string
		return ret
	}
	return *o.IconUrl
}

// GetIconUrlOk returns a tuple with the IconUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetIconUrlOk() (*string, bool) {
	if o == nil || o.IconUrl == nil {
		return nil, false
	}
	return o.IconUrl, true
}

// HasIconUrl returns a boolean if a field has been set.
func (o *Chain) HasIconUrl() bool {
	if o != nil && o.IconUrl != nil {
		return true
	}

	return false
}

// SetIconUrl gets a reference to the given string and assigns it to the IconUrl field.
func (o *Chain) SetIconUrl(v string) {
	o.IconUrl = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *Chain) GetId() string {
	if o == nil || o.Id == nil {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetIdOk() (*string, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *Chain) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *Chain) SetId(v string) {
	o.Id = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *Chain) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *Chain) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *Chain) SetName(v string) {
	o.Name = &v
}

// GetNeedMemo returns the NeedMemo field value if set, zero value otherwise.
func (o *Chain) GetNeedMemo() bool {
	if o == nil || o.NeedMemo == nil {
		var ret bool
		return ret
	}
	return *o.NeedMemo
}

// GetNeedMemoOk returns a tuple with the NeedMemo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetNeedMemoOk() (*bool, bool) {
	if o == nil || o.NeedMemo == nil {
		return nil, false
	}
	return o.NeedMemo, true
}

// HasNeedMemo returns a boolean if a field has been set.
func (o *Chain) HasNeedMemo() bool {
	if o != nil && o.NeedMemo != nil {
		return true
	}

	return false
}

// SetNeedMemo gets a reference to the given bool and assigns it to the NeedMemo field.
func (o *Chain) SetNeedMemo(v bool) {
	o.NeedMemo = &v
}

// GetSymbol returns the Symbol field value if set, zero value otherwise.
func (o *Chain) GetSymbol() string {
	if o == nil || o.Symbol == nil {
		var ret string
		return ret
	}
	return *o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetSymbolOk() (*string, bool) {
	if o == nil || o.Symbol == nil {
		return nil, false
	}
	return o.Symbol, true
}

// HasSymbol returns a boolean if a field has been set.
func (o *Chain) HasSymbol() bool {
	if o != nil && o.Symbol != nil {
		return true
	}

	return false
}

// SetSymbol gets a reference to the given string and assigns it to the Symbol field.
func (o *Chain) SetSymbol(v string) {
	o.Symbol = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *Chain) GetUpdatedAt() string {
	if o == nil || o.UpdatedAt == nil {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Chain) GetUpdatedAtOk() (*string, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *Chain) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *Chain) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

func (o Chain) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.ConfirmNum != nil {
		toSerialize["confirm_num"] = o.ConfirmNum
	}
	if o.CreatedAt != nil {
		toSerialize["created_at"] = o.CreatedAt
	}
	if o.ExplorerAddressUrl != nil {
		toSerialize["explorer_address_url"] = o.ExplorerAddressUrl
	}
	if o.ExplorerTxUrl != nil {
		toSerialize["explorer_tx_url"] = o.ExplorerTxUrl
	}
	if o.IconUrl != nil {
		toSerialize["icon_url"] = o.IconUrl
	}
	if o.Id != nil {
		toSerialize["id"] = o.Id
	}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.NeedMemo != nil {
		toSerialize["need_memo"] = o.NeedMemo
	}
	if o.Symbol != nil {
		toSerialize["symbol"] = o.Symbol
	}
	if o.UpdatedAt != nil {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	return json.Marshal(toSerialize)
}

type NullableChain struct {
	value *Chain
	isSet bool
}

func (v NullableChain) Get() *Chain {
	return v.value
}

func (v *NullableChain) Set(val *Chain) {
	v.value = val
	v.isSet = true
}

func (v NullableChain) IsSet() bool {
	return v.isSet
}

func (v *NullableChain) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChain(val *Chain) *NullableChain {
	return &NullableChain{value: val, isSet: true}
}

func (v NullableChain) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChain) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


