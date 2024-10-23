# CreateEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description of the endpoint | [optional] 
**Disabled** | Pointer to **bool** | The disabled of the endpoint | [optional] 
**EventTypes** | **[]string** | The event types of the endpoint | 
**Uid** | Pointer to **string** | The uid of the endpoint | [optional] 
**Url** | **string** | The url of the endpoint | 

## Methods

### NewCreateEndpoint

`func NewCreateEndpoint(eventTypes []string, url string, ) *CreateEndpoint`

NewCreateEndpoint instantiates a new CreateEndpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateEndpointWithDefaults

`func NewCreateEndpointWithDefaults() *CreateEndpoint`

NewCreateEndpointWithDefaults instantiates a new CreateEndpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreateEndpoint) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateEndpoint) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateEndpoint) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateEndpoint) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *CreateEndpoint) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *CreateEndpoint) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *CreateEndpoint) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *CreateEndpoint) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetEventTypes

`func (o *CreateEndpoint) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CreateEndpoint) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CreateEndpoint) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.


### GetUid

`func (o *CreateEndpoint) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateEndpoint) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateEndpoint) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateEndpoint) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUrl

`func (o *CreateEndpoint) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CreateEndpoint) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CreateEndpoint) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


