# CreateWalletRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Wallet name | 
**SubType** | [**WalletSubType**](WalletSubType.md) |  | 
**Type** | [**WalletType**](WalletType.md) |  | 
**Uid** | Pointer to **string** | Custom ID | [optional] 

## Methods

### NewCreateWalletRequest

`func NewCreateWalletRequest(name string, subType WalletSubType, type_ WalletType, ) *CreateWalletRequest`

NewCreateWalletRequest instantiates a new CreateWalletRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWalletRequestWithDefaults

`func NewCreateWalletRequestWithDefaults() *CreateWalletRequest`

NewCreateWalletRequestWithDefaults instantiates a new CreateWalletRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateWalletRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateWalletRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateWalletRequest) SetName(v string)`

SetName sets Name field to given value.


### GetSubType

`func (o *CreateWalletRequest) GetSubType() WalletSubType`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *CreateWalletRequest) GetSubTypeOk() (*WalletSubType, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *CreateWalletRequest) SetSubType(v WalletSubType)`

SetSubType sets SubType field to given value.


### GetType

`func (o *CreateWalletRequest) GetType() WalletType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateWalletRequest) GetTypeOk() (*WalletType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateWalletRequest) SetType(v WalletType)`

SetType sets Type field to given value.


### GetUid

`func (o *CreateWalletRequest) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateWalletRequest) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateWalletRequest) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateWalletRequest) HasUid() bool`

HasUid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


