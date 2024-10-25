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

// CreateTransferRequest struct for CreateTransferRequest
type CreateTransferRequest struct {
	// The amount to be transferred
	Amount string `json:"amount"`
	// The ID of the wallet to which the transfer will be made
	Destination TransferDestination `json:"destination"`
	// Extra
	Extra *string `json:"extra,omitempty"`
	// Fee
	Fee *Fee `json:"fee,omitempty"`
	// Memo
	Memo *string `json:"memo,omitempty"`
	// The ID of the wallet from which the transfer will be made
	Source TransferSource `json:"source"`
	// The tokenId to be transferred
	TokenId string `json:"token_id"`
}

// NewCreateTransferRequest instantiates a new CreateTransferRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTransferRequest(amount string, destination TransferDestination, source TransferSource, tokenId string) *CreateTransferRequest {
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
func (o *CreateTransferRequest) GetDestination() TransferDestination {
	if o == nil {
		var ret TransferDestination
		return ret
	}

	return o.Destination
}

// GetDestinationOk returns a tuple with the Destination field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetDestinationOk() (*TransferDestination, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Destination, true
}

// SetDestination sets field value
func (o *CreateTransferRequest) SetDestination(v TransferDestination) {
	o.Destination = v
}

// GetExtra returns the Extra field value if set, zero value otherwise.
func (o *CreateTransferRequest) GetExtra() string {
	if o == nil || o.Extra == nil {
		var ret string
		return ret
	}
	return *o.Extra
}

// GetExtraOk returns a tuple with the Extra field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetExtraOk() (*string, bool) {
	if o == nil || o.Extra == nil {
		return nil, false
	}
	return o.Extra, true
}

// HasExtra returns a boolean if a field has been set.
func (o *CreateTransferRequest) HasExtra() bool {
	if o != nil && o.Extra != nil {
		return true
	}

	return false
}

// SetExtra gets a reference to the given string and assigns it to the Extra field.
func (o *CreateTransferRequest) SetExtra(v string) {
	o.Extra = &v
}

// GetFee returns the Fee field value if set, zero value otherwise.
func (o *CreateTransferRequest) GetFee() Fee {
	if o == nil || o.Fee == nil {
		var ret Fee
		return ret
	}
	return *o.Fee
}

// GetFeeOk returns a tuple with the Fee field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetFeeOk() (*Fee, bool) {
	if o == nil || o.Fee == nil {
		return nil, false
	}
	return o.Fee, true
}

// HasFee returns a boolean if a field has been set.
func (o *CreateTransferRequest) HasFee() bool {
	if o != nil && o.Fee != nil {
		return true
	}

	return false
}

// SetFee gets a reference to the given Fee and assigns it to the Fee field.
func (o *CreateTransferRequest) SetFee(v Fee) {
	o.Fee = &v
}

// GetMemo returns the Memo field value if set, zero value otherwise.
func (o *CreateTransferRequest) GetMemo() string {
	if o == nil || o.Memo == nil {
		var ret string
		return ret
	}
	return *o.Memo
}

// GetMemoOk returns a tuple with the Memo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetMemoOk() (*string, bool) {
	if o == nil || o.Memo == nil {
		return nil, false
	}
	return o.Memo, true
}

// HasMemo returns a boolean if a field has been set.
func (o *CreateTransferRequest) HasMemo() bool {
	if o != nil && o.Memo != nil {
		return true
	}

	return false
}

// SetMemo gets a reference to the given string and assigns it to the Memo field.
func (o *CreateTransferRequest) SetMemo(v string) {
	o.Memo = &v
}

// GetSource returns the Source field value
func (o *CreateTransferRequest) GetSource() TransferSource {
	if o == nil {
		var ret TransferSource
		return ret
	}

	return o.Source
}

// GetSourceOk returns a tuple with the Source field value
// and a boolean to check if the value has been set.
func (o *CreateTransferRequest) GetSourceOk() (*TransferSource, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Source, true
}

// SetSource sets field value
func (o *CreateTransferRequest) SetSource(v TransferSource) {
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
	if o.Extra != nil {
		toSerialize["extra"] = o.Extra
	}
	if o.Fee != nil {
		toSerialize["fee"] = o.Fee
	}
	if o.Memo != nil {
		toSerialize["memo"] = o.Memo
	}
	if true {
		toSerialize["source"] = o.Source
	}
	if true {
		toSerialize["token_id"] = o.TokenId
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


