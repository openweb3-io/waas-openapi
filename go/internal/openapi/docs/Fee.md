# Fee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxFeeAmount** | **string** | Max fee amount | 
**TokenId** | **string** | Token ID | 
**Type** | [**FeeType**](FeeType.md) | Fee type | 

## Methods

### NewFee

`func NewFee(maxFeeAmount string, tokenId string, type_ FeeType, ) *Fee`

NewFee instantiates a new Fee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFeeWithDefaults

`func NewFeeWithDefaults() *Fee`

NewFeeWithDefaults instantiates a new Fee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxFeeAmount

`func (o *Fee) GetMaxFeeAmount() string`

GetMaxFeeAmount returns the MaxFeeAmount field if non-nil, zero value otherwise.

### GetMaxFeeAmountOk

`func (o *Fee) GetMaxFeeAmountOk() (*string, bool)`

GetMaxFeeAmountOk returns a tuple with the MaxFeeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFeeAmount

`func (o *Fee) SetMaxFeeAmount(v string)`

SetMaxFeeAmount sets MaxFeeAmount field to given value.


### GetTokenId

`func (o *Fee) GetTokenId() string`

GetTokenId returns the TokenId field if non-nil, zero value otherwise.

### GetTokenIdOk

`func (o *Fee) GetTokenIdOk() (*string, bool)`

GetTokenIdOk returns a tuple with the TokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenId

`func (o *Fee) SetTokenId(v string)`

SetTokenId sets TokenId field to given value.


### GetType

`func (o *Fee) GetType() FeeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Fee) GetTypeOk() (*FeeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Fee) SetType(v FeeType)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


