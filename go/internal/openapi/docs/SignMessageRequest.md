# SignMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | **string** | Chain ID | 
**Message** | **string** | tx message content | 
**Source** | [**SignMessageRequestSource**](SignMessageRequestSource.md) |  | 

## Methods

### NewSignMessageRequest

`func NewSignMessageRequest(chainId string, message string, source SignMessageRequestSource, ) *SignMessageRequest`

NewSignMessageRequest instantiates a new SignMessageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignMessageRequestWithDefaults

`func NewSignMessageRequestWithDefaults() *SignMessageRequest`

NewSignMessageRequestWithDefaults instantiates a new SignMessageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainId

`func (o *SignMessageRequest) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *SignMessageRequest) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *SignMessageRequest) SetChainId(v string)`

SetChainId sets ChainId field to given value.


### GetMessage

`func (o *SignMessageRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SignMessageRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SignMessageRequest) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetSource

`func (o *SignMessageRequest) GetSource() SignMessageRequestSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *SignMessageRequest) GetSourceOk() (*SignMessageRequestSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *SignMessageRequest) SetSource(v SignMessageRequestSource)`

SetSource sets Source field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


