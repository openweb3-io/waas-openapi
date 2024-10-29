# Chain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmNum** | Pointer to **int32** | Confirmation number | [optional] 
**CreatedAt** | Pointer to **string** | Created time | [optional] 
**ExplorerAddressUrl** | Pointer to **string** | Explorer address URL | [optional] 
**ExplorerBlockUrl** | Pointer to **string** | Explorer block URL | [optional] 
**ExplorerTxUrl** | Pointer to **string** | Explorer transaction URL | [optional] 
**IconUrl** | Pointer to **string** | Icon URL | [optional] 
**Id** | Pointer to **string** | Chain ID | [optional] 
**Name** | Pointer to **string** | Chain name | [optional] 
**NeedMemo** | Pointer to **bool** | Need memo | [optional] 
**Symbol** | Pointer to **string** | Chain symbol | [optional] 
**UpdatedAt** | Pointer to **string** | Updated time | [optional] 

## Methods

### NewChain

`func NewChain() *Chain`

NewChain instantiates a new Chain object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChainWithDefaults

`func NewChainWithDefaults() *Chain`

NewChainWithDefaults instantiates a new Chain object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmNum

`func (o *Chain) GetConfirmNum() int32`

GetConfirmNum returns the ConfirmNum field if non-nil, zero value otherwise.

### GetConfirmNumOk

`func (o *Chain) GetConfirmNumOk() (*int32, bool)`

GetConfirmNumOk returns a tuple with the ConfirmNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmNum

`func (o *Chain) SetConfirmNum(v int32)`

SetConfirmNum sets ConfirmNum field to given value.

### HasConfirmNum

`func (o *Chain) HasConfirmNum() bool`

HasConfirmNum returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Chain) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Chain) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Chain) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Chain) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetExplorerAddressUrl

`func (o *Chain) GetExplorerAddressUrl() string`

GetExplorerAddressUrl returns the ExplorerAddressUrl field if non-nil, zero value otherwise.

### GetExplorerAddressUrlOk

`func (o *Chain) GetExplorerAddressUrlOk() (*string, bool)`

GetExplorerAddressUrlOk returns a tuple with the ExplorerAddressUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplorerAddressUrl

`func (o *Chain) SetExplorerAddressUrl(v string)`

SetExplorerAddressUrl sets ExplorerAddressUrl field to given value.

### HasExplorerAddressUrl

`func (o *Chain) HasExplorerAddressUrl() bool`

HasExplorerAddressUrl returns a boolean if a field has been set.

### GetExplorerBlockUrl

`func (o *Chain) GetExplorerBlockUrl() string`

GetExplorerBlockUrl returns the ExplorerBlockUrl field if non-nil, zero value otherwise.

### GetExplorerBlockUrlOk

`func (o *Chain) GetExplorerBlockUrlOk() (*string, bool)`

GetExplorerBlockUrlOk returns a tuple with the ExplorerBlockUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplorerBlockUrl

`func (o *Chain) SetExplorerBlockUrl(v string)`

SetExplorerBlockUrl sets ExplorerBlockUrl field to given value.

### HasExplorerBlockUrl

`func (o *Chain) HasExplorerBlockUrl() bool`

HasExplorerBlockUrl returns a boolean if a field has been set.

### GetExplorerTxUrl

`func (o *Chain) GetExplorerTxUrl() string`

GetExplorerTxUrl returns the ExplorerTxUrl field if non-nil, zero value otherwise.

### GetExplorerTxUrlOk

`func (o *Chain) GetExplorerTxUrlOk() (*string, bool)`

GetExplorerTxUrlOk returns a tuple with the ExplorerTxUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplorerTxUrl

`func (o *Chain) SetExplorerTxUrl(v string)`

SetExplorerTxUrl sets ExplorerTxUrl field to given value.

### HasExplorerTxUrl

`func (o *Chain) HasExplorerTxUrl() bool`

HasExplorerTxUrl returns a boolean if a field has been set.

### GetIconUrl

`func (o *Chain) GetIconUrl() string`

GetIconUrl returns the IconUrl field if non-nil, zero value otherwise.

### GetIconUrlOk

`func (o *Chain) GetIconUrlOk() (*string, bool)`

GetIconUrlOk returns a tuple with the IconUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconUrl

`func (o *Chain) SetIconUrl(v string)`

SetIconUrl sets IconUrl field to given value.

### HasIconUrl

`func (o *Chain) HasIconUrl() bool`

HasIconUrl returns a boolean if a field has been set.

### GetId

`func (o *Chain) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Chain) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Chain) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Chain) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Chain) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Chain) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Chain) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Chain) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNeedMemo

`func (o *Chain) GetNeedMemo() bool`

GetNeedMemo returns the NeedMemo field if non-nil, zero value otherwise.

### GetNeedMemoOk

`func (o *Chain) GetNeedMemoOk() (*bool, bool)`

GetNeedMemoOk returns a tuple with the NeedMemo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedMemo

`func (o *Chain) SetNeedMemo(v bool)`

SetNeedMemo sets NeedMemo field to given value.

### HasNeedMemo

`func (o *Chain) HasNeedMemo() bool`

HasNeedMemo returns a boolean if a field has been set.

### GetSymbol

`func (o *Chain) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *Chain) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *Chain) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.

### HasSymbol

`func (o *Chain) HasSymbol() bool`

HasSymbol returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Chain) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Chain) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Chain) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Chain) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


