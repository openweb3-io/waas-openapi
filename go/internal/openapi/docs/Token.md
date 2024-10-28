# Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanDeposit** | Pointer to **bool** | Whether deposits are allowed | [optional] 
**CanWithdraw** | Pointer to **bool** | Whether withdrawals are allowed | [optional] 
**ContractAddress** | Pointer to **string** | Contract address | [optional] 
**CreatedAt** | Pointer to **string** | Creation time | [optional] 
**Decimals** | Pointer to **int32** | Decimals | [optional] 
**IconUrl** | Pointer to **string** | Icon | [optional] 
**Id** | Pointer to **string** | Token ID | [optional] 
**MaxWithdrawAmount** | Pointer to **string** | Max withdraw amount | [optional] 
**Metadata** | Pointer to **map[string]string** | Extended metadata | [optional] 
**MinDepositAmount** | Pointer to **string** | Min deposit amount | [optional] 
**MinWithdrawAmount** | Pointer to **string** | Min withdraw amount | [optional] 
**Name** | Pointer to **string** | Name | [optional] 
**NeedMemo** | Pointer to **bool** | Whether a memo is required | [optional] 
**Precision** | Pointer to **int32** | Precision | [optional] 
**Symbol** | Pointer to **string** | Symbol . e.g.: BTC / ETH | [optional] 
**TotalSupply** | Pointer to **string** | Total supply | [optional] 
**UpdatedAt** | Pointer to **string** | Last updated time | [optional] 

## Methods

### NewToken

`func NewToken() *Token`

NewToken instantiates a new Token object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenWithDefaults

`func NewTokenWithDefaults() *Token`

NewTokenWithDefaults instantiates a new Token object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanDeposit

`func (o *Token) GetCanDeposit() bool`

GetCanDeposit returns the CanDeposit field if non-nil, zero value otherwise.

### GetCanDepositOk

`func (o *Token) GetCanDepositOk() (*bool, bool)`

GetCanDepositOk returns a tuple with the CanDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDeposit

`func (o *Token) SetCanDeposit(v bool)`

SetCanDeposit sets CanDeposit field to given value.

### HasCanDeposit

`func (o *Token) HasCanDeposit() bool`

HasCanDeposit returns a boolean if a field has been set.

### GetCanWithdraw

`func (o *Token) GetCanWithdraw() bool`

GetCanWithdraw returns the CanWithdraw field if non-nil, zero value otherwise.

### GetCanWithdrawOk

`func (o *Token) GetCanWithdrawOk() (*bool, bool)`

GetCanWithdrawOk returns a tuple with the CanWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanWithdraw

`func (o *Token) SetCanWithdraw(v bool)`

SetCanWithdraw sets CanWithdraw field to given value.

### HasCanWithdraw

`func (o *Token) HasCanWithdraw() bool`

HasCanWithdraw returns a boolean if a field has been set.

### GetContractAddress

`func (o *Token) GetContractAddress() string`

GetContractAddress returns the ContractAddress field if non-nil, zero value otherwise.

### GetContractAddressOk

`func (o *Token) GetContractAddressOk() (*string, bool)`

GetContractAddressOk returns a tuple with the ContractAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAddress

`func (o *Token) SetContractAddress(v string)`

SetContractAddress sets ContractAddress field to given value.

### HasContractAddress

`func (o *Token) HasContractAddress() bool`

HasContractAddress returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Token) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Token) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Token) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Token) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDecimals

`func (o *Token) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *Token) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *Token) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.

### HasDecimals

`func (o *Token) HasDecimals() bool`

HasDecimals returns a boolean if a field has been set.

### GetIconUrl

`func (o *Token) GetIconUrl() string`

GetIconUrl returns the IconUrl field if non-nil, zero value otherwise.

### GetIconUrlOk

`func (o *Token) GetIconUrlOk() (*string, bool)`

GetIconUrlOk returns a tuple with the IconUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconUrl

`func (o *Token) SetIconUrl(v string)`

SetIconUrl sets IconUrl field to given value.

### HasIconUrl

`func (o *Token) HasIconUrl() bool`

HasIconUrl returns a boolean if a field has been set.

### GetId

`func (o *Token) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Token) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Token) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Token) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMaxWithdrawAmount

`func (o *Token) GetMaxWithdrawAmount() string`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *Token) GetMaxWithdrawAmountOk() (*string, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *Token) SetMaxWithdrawAmount(v string)`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.

### HasMaxWithdrawAmount

`func (o *Token) HasMaxWithdrawAmount() bool`

HasMaxWithdrawAmount returns a boolean if a field has been set.

### GetMetadata

`func (o *Token) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Token) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Token) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Token) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetMinDepositAmount

`func (o *Token) GetMinDepositAmount() string`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *Token) GetMinDepositAmountOk() (*string, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *Token) SetMinDepositAmount(v string)`

SetMinDepositAmount sets MinDepositAmount field to given value.

### HasMinDepositAmount

`func (o *Token) HasMinDepositAmount() bool`

HasMinDepositAmount returns a boolean if a field has been set.

### GetMinWithdrawAmount

`func (o *Token) GetMinWithdrawAmount() string`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *Token) GetMinWithdrawAmountOk() (*string, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *Token) SetMinWithdrawAmount(v string)`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.

### HasMinWithdrawAmount

`func (o *Token) HasMinWithdrawAmount() bool`

HasMinWithdrawAmount returns a boolean if a field has been set.

### GetName

`func (o *Token) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Token) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Token) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Token) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNeedMemo

`func (o *Token) GetNeedMemo() bool`

GetNeedMemo returns the NeedMemo field if non-nil, zero value otherwise.

### GetNeedMemoOk

`func (o *Token) GetNeedMemoOk() (*bool, bool)`

GetNeedMemoOk returns a tuple with the NeedMemo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedMemo

`func (o *Token) SetNeedMemo(v bool)`

SetNeedMemo sets NeedMemo field to given value.

### HasNeedMemo

`func (o *Token) HasNeedMemo() bool`

HasNeedMemo returns a boolean if a field has been set.

### GetPrecision

`func (o *Token) GetPrecision() int32`

GetPrecision returns the Precision field if non-nil, zero value otherwise.

### GetPrecisionOk

`func (o *Token) GetPrecisionOk() (*int32, bool)`

GetPrecisionOk returns a tuple with the Precision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecision

`func (o *Token) SetPrecision(v int32)`

SetPrecision sets Precision field to given value.

### HasPrecision

`func (o *Token) HasPrecision() bool`

HasPrecision returns a boolean if a field has been set.

### GetSymbol

`func (o *Token) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *Token) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *Token) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.

### HasSymbol

`func (o *Token) HasSymbol() bool`

HasSymbol returns a boolean if a field has been set.

### GetTotalSupply

`func (o *Token) GetTotalSupply() string`

GetTotalSupply returns the TotalSupply field if non-nil, zero value otherwise.

### GetTotalSupplyOk

`func (o *Token) GetTotalSupplyOk() (*string, bool)`

GetTotalSupplyOk returns a tuple with the TotalSupply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSupply

`func (o *Token) SetTotalSupply(v string)`

SetTotalSupply sets TotalSupply field to given value.

### HasTotalSupply

`func (o *Token) HasTotalSupply() bool`

HasTotalSupply returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Token) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Token) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Token) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Token) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


