# Openweb3IoWaasAppWaasOpenapiServerApiDtosToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanDeposit** | Pointer to **bool** | 是否可充值 | [optional] 
**CanWithdraw** | Pointer to **bool** | 是否可提款 | [optional] 
**ContractAddress** | Pointer to **string** | 合约地址 | [optional] 
**CreatedAt** | Pointer to **string** | 创建时间 | [optional] 
**Decimals** | Pointer to **int32** | decimals | [optional] 
**IconUrl** | Pointer to **string** | icon | [optional] 
**Id** | Pointer to **string** | tokenId | [optional] 
**MaxWithdrawAmount** | Pointer to **map[string]interface{}** | max withdraw amount | [optional] 
**Metadata** | Pointer to **map[string]string** | 扩展元数据 | [optional] 
**MinDepositAmount** | Pointer to **map[string]interface{}** | min deposit amount | [optional] 
**MinWithdrawAmount** | Pointer to **map[string]interface{}** | min withdraw amount | [optional] 
**Name** | Pointer to **string** | name | [optional] 
**NeedMemo** | Pointer to **bool** | 是否需要提供 memo | [optional] 
**Precision** | Pointer to **int32** | precision | [optional] 
**Symbol** | Pointer to **string** | symbol . e.g.: BTC / ETH | [optional] 
**TotalSupply** | Pointer to **map[string]interface{}** | 总供应量 | [optional] 
**UpdatedAt** | Pointer to **string** | 最后更新时间 | [optional] 

## Methods

### NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosToken

`func NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosToken() *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken`

NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosToken instantiates a new Openweb3IoWaasAppWaasOpenapiServerApiDtosToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosTokenWithDefaults

`func NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosTokenWithDefaults() *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken`

NewOpenweb3IoWaasAppWaasOpenapiServerApiDtosTokenWithDefaults instantiates a new Openweb3IoWaasAppWaasOpenapiServerApiDtosToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanDeposit

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCanDeposit() bool`

GetCanDeposit returns the CanDeposit field if non-nil, zero value otherwise.

### GetCanDepositOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCanDepositOk() (*bool, bool)`

GetCanDepositOk returns a tuple with the CanDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDeposit

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetCanDeposit(v bool)`

SetCanDeposit sets CanDeposit field to given value.

### HasCanDeposit

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasCanDeposit() bool`

HasCanDeposit returns a boolean if a field has been set.

### GetCanWithdraw

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCanWithdraw() bool`

GetCanWithdraw returns the CanWithdraw field if non-nil, zero value otherwise.

### GetCanWithdrawOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCanWithdrawOk() (*bool, bool)`

GetCanWithdrawOk returns a tuple with the CanWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanWithdraw

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetCanWithdraw(v bool)`

SetCanWithdraw sets CanWithdraw field to given value.

### HasCanWithdraw

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasCanWithdraw() bool`

HasCanWithdraw returns a boolean if a field has been set.

### GetContractAddress

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetContractAddress() string`

GetContractAddress returns the ContractAddress field if non-nil, zero value otherwise.

### GetContractAddressOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetContractAddressOk() (*string, bool)`

GetContractAddressOk returns a tuple with the ContractAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAddress

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetContractAddress(v string)`

SetContractAddress sets ContractAddress field to given value.

### HasContractAddress

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasContractAddress() bool`

HasContractAddress returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDecimals

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.

### HasDecimals

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasDecimals() bool`

HasDecimals returns a boolean if a field has been set.

### GetIconUrl

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetIconUrl() string`

GetIconUrl returns the IconUrl field if non-nil, zero value otherwise.

### GetIconUrlOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetIconUrlOk() (*string, bool)`

GetIconUrlOk returns a tuple with the IconUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconUrl

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetIconUrl(v string)`

SetIconUrl sets IconUrl field to given value.

### HasIconUrl

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasIconUrl() bool`

HasIconUrl returns a boolean if a field has been set.

### GetId

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMaxWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMaxWithdrawAmount() map[string]interface{}`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMaxWithdrawAmountOk() (*map[string]interface{}, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetMaxWithdrawAmount(v map[string]interface{})`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.

### HasMaxWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasMaxWithdrawAmount() bool`

HasMaxWithdrawAmount returns a boolean if a field has been set.

### GetMetadata

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetMinDepositAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMinDepositAmount() map[string]interface{}`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMinDepositAmountOk() (*map[string]interface{}, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetMinDepositAmount(v map[string]interface{})`

SetMinDepositAmount sets MinDepositAmount field to given value.

### HasMinDepositAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasMinDepositAmount() bool`

HasMinDepositAmount returns a boolean if a field has been set.

### GetMinWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMinWithdrawAmount() map[string]interface{}`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetMinWithdrawAmountOk() (*map[string]interface{}, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetMinWithdrawAmount(v map[string]interface{})`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.

### HasMinWithdrawAmount

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasMinWithdrawAmount() bool`

HasMinWithdrawAmount returns a boolean if a field has been set.

### GetName

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNeedMemo

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetNeedMemo() bool`

GetNeedMemo returns the NeedMemo field if non-nil, zero value otherwise.

### GetNeedMemoOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetNeedMemoOk() (*bool, bool)`

GetNeedMemoOk returns a tuple with the NeedMemo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedMemo

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetNeedMemo(v bool)`

SetNeedMemo sets NeedMemo field to given value.

### HasNeedMemo

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasNeedMemo() bool`

HasNeedMemo returns a boolean if a field has been set.

### GetPrecision

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetPrecision() int32`

GetPrecision returns the Precision field if non-nil, zero value otherwise.

### GetPrecisionOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetPrecisionOk() (*int32, bool)`

GetPrecisionOk returns a tuple with the Precision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecision

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetPrecision(v int32)`

SetPrecision sets Precision field to given value.

### HasPrecision

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasPrecision() bool`

HasPrecision returns a boolean if a field has been set.

### GetSymbol

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.

### HasSymbol

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasSymbol() bool`

HasSymbol returns a boolean if a field has been set.

### GetTotalSupply

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetTotalSupply() map[string]interface{}`

GetTotalSupply returns the TotalSupply field if non-nil, zero value otherwise.

### GetTotalSupplyOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetTotalSupplyOk() (*map[string]interface{}, bool)`

GetTotalSupplyOk returns a tuple with the TotalSupply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSupply

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetTotalSupply(v map[string]interface{})`

SetTotalSupply sets TotalSupply field to given value.

### HasTotalSupply

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasTotalSupply() bool`

HasTotalSupply returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Openweb3IoWaasAppWaasOpenapiServerApiDtosToken) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


