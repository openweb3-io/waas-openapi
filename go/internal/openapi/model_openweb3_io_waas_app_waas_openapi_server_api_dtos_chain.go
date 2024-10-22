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

// Openweb3IoWaasAppWaasOpenapiServerApiDtosChain struct for Openweb3IoWaasAppWaasOpenapiServerApiDtosChain
type Openweb3IoWaasAppWaasOpenapiServerApiDtosChain struct {
	ConfirmNum *int32 `json:"confirm_num,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExplorerAddressUrl *string `json:"explorer_address_url,omitempty"`
	ExplorerTxUrl *string `json:"explorer_tx_url,omitempty"`
	IconUrl *string `json:"icon_url,omitempty"`
	Id *string `json:"id,omitempty"`
	Metadata *map[string]interface{} `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	NeedMemo *bool `json:"need_memo,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain instantiates a new Openweb3IoWaasAppWaasOpenapiServerApiDtosChain object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain() *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain {
	this := Openweb3IoWaasAppWaasOpenapiServerApiDtosChain{}
	return &this
}

// NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosChainWithDefaults instantiates a new Openweb3IoWaasAppWaasOpenapiServerApiDtosChain object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosChainWithDefaults() *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain {
	this := Openweb3IoWaasAppWaasOpenapiServerApiDtosChain{}
	return &this
}

// GetConfirmNum returns the ConfirmNum field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetConfirmNum() int32 {
	if o == nil || o.ConfirmNum == nil {
		var ret int32
		return ret
	}
	return *o.ConfirmNum
}

// GetConfirmNumOk returns a tuple with the ConfirmNum field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetConfirmNumOk() (*int32, bool) {
	if o == nil || o.ConfirmNum == nil {
		return nil, false
	}
	return o.ConfirmNum, true
}

// HasConfirmNum returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasConfirmNum() bool {
	if o != nil && o.ConfirmNum != nil {
		return true
	}

	return false
}

// SetConfirmNum gets a reference to the given int32 and assigns it to the ConfirmNum field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetConfirmNum(v int32) {
	o.ConfirmNum = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetCreatedAt() string {
	if o == nil || o.CreatedAt == nil {
		var ret string
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetCreatedAtOk() (*string, bool) {
	if o == nil || o.CreatedAt == nil {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasCreatedAt() bool {
	if o != nil && o.CreatedAt != nil {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given string and assigns it to the CreatedAt field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetCreatedAt(v string) {
	o.CreatedAt = &v
}

// GetExplorerAddressUrl returns the ExplorerAddressUrl field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetExplorerAddressUrl() string {
	if o == nil || o.ExplorerAddressUrl == nil {
		var ret string
		return ret
	}
	return *o.ExplorerAddressUrl
}

// GetExplorerAddressUrlOk returns a tuple with the ExplorerAddressUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetExplorerAddressUrlOk() (*string, bool) {
	if o == nil || o.ExplorerAddressUrl == nil {
		return nil, false
	}
	return o.ExplorerAddressUrl, true
}

// HasExplorerAddressUrl returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasExplorerAddressUrl() bool {
	if o != nil && o.ExplorerAddressUrl != nil {
		return true
	}

	return false
}

// SetExplorerAddressUrl gets a reference to the given string and assigns it to the ExplorerAddressUrl field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetExplorerAddressUrl(v string) {
	o.ExplorerAddressUrl = &v
}

// GetExplorerTxUrl returns the ExplorerTxUrl field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetExplorerTxUrl() string {
	if o == nil || o.ExplorerTxUrl == nil {
		var ret string
		return ret
	}
	return *o.ExplorerTxUrl
}

// GetExplorerTxUrlOk returns a tuple with the ExplorerTxUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetExplorerTxUrlOk() (*string, bool) {
	if o == nil || o.ExplorerTxUrl == nil {
		return nil, false
	}
	return o.ExplorerTxUrl, true
}

// HasExplorerTxUrl returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasExplorerTxUrl() bool {
	if o != nil && o.ExplorerTxUrl != nil {
		return true
	}

	return false
}

// SetExplorerTxUrl gets a reference to the given string and assigns it to the ExplorerTxUrl field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetExplorerTxUrl(v string) {
	o.ExplorerTxUrl = &v
}

// GetIconUrl returns the IconUrl field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetIconUrl() string {
	if o == nil || o.IconUrl == nil {
		var ret string
		return ret
	}
	return *o.IconUrl
}

// GetIconUrlOk returns a tuple with the IconUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetIconUrlOk() (*string, bool) {
	if o == nil || o.IconUrl == nil {
		return nil, false
	}
	return o.IconUrl, true
}

// HasIconUrl returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasIconUrl() bool {
	if o != nil && o.IconUrl != nil {
		return true
	}

	return false
}

// SetIconUrl gets a reference to the given string and assigns it to the IconUrl field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetIconUrl(v string) {
	o.IconUrl = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetId() string {
	if o == nil || o.Id == nil {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetIdOk() (*string, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetId(v string) {
	o.Id = &v
}

// GetMetadata returns the Metadata field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetMetadata() map[string]interface{} {
	if o == nil || o.Metadata == nil {
		var ret map[string]interface{}
		return ret
	}
	return *o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetMetadataOk() (*map[string]interface{}, bool) {
	if o == nil || o.Metadata == nil {
		return nil, false
	}
	return o.Metadata, true
}

// HasMetadata returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasMetadata() bool {
	if o != nil && o.Metadata != nil {
		return true
	}

	return false
}

// SetMetadata gets a reference to the given map[string]interface{} and assigns it to the Metadata field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetMetadata(v map[string]interface{}) {
	o.Metadata = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetName() string {
	if o == nil || o.Name == nil {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetNameOk() (*string, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetName(v string) {
	o.Name = &v
}

// GetNeedMemo returns the NeedMemo field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetNeedMemo() bool {
	if o == nil || o.NeedMemo == nil {
		var ret bool
		return ret
	}
	return *o.NeedMemo
}

// GetNeedMemoOk returns a tuple with the NeedMemo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetNeedMemoOk() (*bool, bool) {
	if o == nil || o.NeedMemo == nil {
		return nil, false
	}
	return o.NeedMemo, true
}

// HasNeedMemo returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasNeedMemo() bool {
	if o != nil && o.NeedMemo != nil {
		return true
	}

	return false
}

// SetNeedMemo gets a reference to the given bool and assigns it to the NeedMemo field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetNeedMemo(v bool) {
	o.NeedMemo = &v
}

// GetSymbol returns the Symbol field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetSymbol() string {
	if o == nil || o.Symbol == nil {
		var ret string
		return ret
	}
	return *o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetSymbolOk() (*string, bool) {
	if o == nil || o.Symbol == nil {
		return nil, false
	}
	return o.Symbol, true
}

// HasSymbol returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasSymbol() bool {
	if o != nil && o.Symbol != nil {
		return true
	}

	return false
}

// SetSymbol gets a reference to the given string and assigns it to the Symbol field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetSymbol(v string) {
	o.Symbol = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetUpdatedAt() string {
	if o == nil || o.UpdatedAt == nil {
		var ret string
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) GetUpdatedAtOk() (*string, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given string and assigns it to the UpdatedAt field.
func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) SetUpdatedAt(v string) {
	o.UpdatedAt = &v
}

func (o Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) MarshalJSON() ([]byte, error) {
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
	if o.Metadata != nil {
		toSerialize["metadata"] = o.Metadata
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

type NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain struct {
	value *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain
	isSet bool
}

func (v NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) Get() *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain {
	return v.value
}

func (v *NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) Set(val *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) {
	v.value = val
	v.isSet = true
}

func (v NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) IsSet() bool {
	return v.isSet
}

func (v *NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain(val *Openweb3IoWaasAppWaasOpenapiServerApiDtosChain) *NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain {
	return &NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain{value: val, isSet: true}
}

func (v NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


