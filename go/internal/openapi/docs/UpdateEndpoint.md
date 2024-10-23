# UpdateEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**EventTypes** | **[]string** |  | 
**Uid** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 

## Methods

### NewUpdateEndpoint

`func NewUpdateEndpoint(eventTypes []string, ) *UpdateEndpoint`

NewUpdateEndpoint instantiates a new UpdateEndpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateEndpointWithDefaults

`func NewUpdateEndpointWithDefaults() *UpdateEndpoint`

NewUpdateEndpointWithDefaults instantiates a new UpdateEndpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *UpdateEndpoint) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateEndpoint) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateEndpoint) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateEndpoint) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *UpdateEndpoint) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *UpdateEndpoint) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *UpdateEndpoint) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *UpdateEndpoint) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetEventTypes

`func (o *UpdateEndpoint) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *UpdateEndpoint) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *UpdateEndpoint) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.


### GetUid

`func (o *UpdateEndpoint) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *UpdateEndpoint) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *UpdateEndpoint) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *UpdateEndpoint) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUrl

`func (o *UpdateEndpoint) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *UpdateEndpoint) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *UpdateEndpoint) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *UpdateEndpoint) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


