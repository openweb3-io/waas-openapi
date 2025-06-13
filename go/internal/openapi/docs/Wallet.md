# Wallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **string** | Created time | 
**Id** | **string** | Wallet ID | 
**Name** | **string** | Wallet name | 
**SubType** | [**WalletSubType**](WalletSubType.md) |  | 
**Type** | [**WalletType**](WalletType.md) |  | 
**Uid** | **string** | External unique ID | 
**UpdatedAt** | **string** | Updated time | 

## Methods

### NewWallet

`func NewWallet(createdAt string, id string, name string, subType WalletSubType, type_ WalletType, uid string, updatedAt string, ) *Wallet`

NewWallet instantiates a new Wallet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWalletWithDefaults

`func NewWalletWithDefaults() *Wallet`

NewWalletWithDefaults instantiates a new Wallet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *Wallet) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Wallet) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Wallet) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetId

`func (o *Wallet) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Wallet) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Wallet) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Wallet) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Wallet) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Wallet) SetName(v string)`

SetName sets Name field to given value.


### GetSubType

`func (o *Wallet) GetSubType() WalletSubType`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *Wallet) GetSubTypeOk() (*WalletSubType, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *Wallet) SetSubType(v WalletSubType)`

SetSubType sets SubType field to given value.


### GetType

`func (o *Wallet) GetType() WalletType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Wallet) GetTypeOk() (*WalletType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Wallet) SetType(v WalletType)`

SetType sets Type field to given value.


### GetUid

`func (o *Wallet) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *Wallet) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *Wallet) SetUid(v string)`

SetUid sets Uid field to given value.


### GetUpdatedAt

`func (o *Wallet) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Wallet) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Wallet) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


