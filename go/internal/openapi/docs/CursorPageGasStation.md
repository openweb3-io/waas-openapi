# CursorPageGasStation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasNext** | **bool** |  | 
**HasPrev** | **bool** |  | 
**Items** | [**[]GasStation**](GasStation.md) |  | 
**NextCursor** | Pointer to **string** |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 
**Total** | **int32** |  | 

## Methods

### NewCursorPageGasStation

`func NewCursorPageGasStation(hasNext bool, hasPrev bool, items []GasStation, total int32, ) *CursorPageGasStation`

NewCursorPageGasStation instantiates a new CursorPageGasStation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCursorPageGasStationWithDefaults

`func NewCursorPageGasStationWithDefaults() *CursorPageGasStation`

NewCursorPageGasStationWithDefaults instantiates a new CursorPageGasStation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasNext

`func (o *CursorPageGasStation) GetHasNext() bool`

GetHasNext returns the HasNext field if non-nil, zero value otherwise.

### GetHasNextOk

`func (o *CursorPageGasStation) GetHasNextOk() (*bool, bool)`

GetHasNextOk returns a tuple with the HasNext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNext

`func (o *CursorPageGasStation) SetHasNext(v bool)`

SetHasNext sets HasNext field to given value.


### GetHasPrev

`func (o *CursorPageGasStation) GetHasPrev() bool`

GetHasPrev returns the HasPrev field if non-nil, zero value otherwise.

### GetHasPrevOk

`func (o *CursorPageGasStation) GetHasPrevOk() (*bool, bool)`

GetHasPrevOk returns a tuple with the HasPrev field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPrev

`func (o *CursorPageGasStation) SetHasPrev(v bool)`

SetHasPrev sets HasPrev field to given value.


### GetItems

`func (o *CursorPageGasStation) GetItems() []GasStation`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *CursorPageGasStation) GetItemsOk() (*[]GasStation, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *CursorPageGasStation) SetItems(v []GasStation)`

SetItems sets Items field to given value.


### GetNextCursor

`func (o *CursorPageGasStation) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *CursorPageGasStation) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *CursorPageGasStation) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *CursorPageGasStation) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetPrevCursor

`func (o *CursorPageGasStation) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *CursorPageGasStation) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *CursorPageGasStation) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *CursorPageGasStation) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.

### GetTotal

`func (o *CursorPageGasStation) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *CursorPageGasStation) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *CursorPageGasStation) SetTotal(v int32)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


