# SweepAddressRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeeAddress** | **string** | address to pay the fee | 
**MaxFeeLimit** | Pointer to **string** | max fee limit | [optional] 
**MinCollectAmount** | Pointer to **string** | min collect amount | [optional] 
**ToAddress** | **string** | address to sweep to | 
**TokenId** | **string** | token id to sweep | 

## Methods

### NewSweepAddressRequest

`func NewSweepAddressRequest(feeAddress string, toAddress string, tokenId string, ) *SweepAddressRequest`

NewSweepAddressRequest instantiates a new SweepAddressRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSweepAddressRequestWithDefaults

`func NewSweepAddressRequestWithDefaults() *SweepAddressRequest`

NewSweepAddressRequestWithDefaults instantiates a new SweepAddressRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFeeAddress

`func (o *SweepAddressRequest) GetFeeAddress() string`

GetFeeAddress returns the FeeAddress field if non-nil, zero value otherwise.

### GetFeeAddressOk

`func (o *SweepAddressRequest) GetFeeAddressOk() (*string, bool)`

GetFeeAddressOk returns a tuple with the FeeAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeAddress

`func (o *SweepAddressRequest) SetFeeAddress(v string)`

SetFeeAddress sets FeeAddress field to given value.


### GetMaxFeeLimit

`func (o *SweepAddressRequest) GetMaxFeeLimit() string`

GetMaxFeeLimit returns the MaxFeeLimit field if non-nil, zero value otherwise.

### GetMaxFeeLimitOk

`func (o *SweepAddressRequest) GetMaxFeeLimitOk() (*string, bool)`

GetMaxFeeLimitOk returns a tuple with the MaxFeeLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFeeLimit

`func (o *SweepAddressRequest) SetMaxFeeLimit(v string)`

SetMaxFeeLimit sets MaxFeeLimit field to given value.

### HasMaxFeeLimit

`func (o *SweepAddressRequest) HasMaxFeeLimit() bool`

HasMaxFeeLimit returns a boolean if a field has been set.

### GetMinCollectAmount

`func (o *SweepAddressRequest) GetMinCollectAmount() string`

GetMinCollectAmount returns the MinCollectAmount field if non-nil, zero value otherwise.

### GetMinCollectAmountOk

`func (o *SweepAddressRequest) GetMinCollectAmountOk() (*string, bool)`

GetMinCollectAmountOk returns a tuple with the MinCollectAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinCollectAmount

`func (o *SweepAddressRequest) SetMinCollectAmount(v string)`

SetMinCollectAmount sets MinCollectAmount field to given value.

### HasMinCollectAmount

`func (o *SweepAddressRequest) HasMinCollectAmount() bool`

HasMinCollectAmount returns a boolean if a field has been set.

### GetToAddress

`func (o *SweepAddressRequest) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *SweepAddressRequest) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *SweepAddressRequest) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.


### GetTokenId

`func (o *SweepAddressRequest) GetTokenId() string`

GetTokenId returns the TokenId field if non-nil, zero value otherwise.

### GetTokenIdOk

`func (o *SweepAddressRequest) GetTokenIdOk() (*string, bool)`

GetTokenIdOk returns a tuple with the TokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenId

`func (o *SweepAddressRequest) SetTokenId(v string)`

SetTokenId sets TokenId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


