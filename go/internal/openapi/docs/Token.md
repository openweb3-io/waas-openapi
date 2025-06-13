# Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetId** | **string** | Asset ID | 
**CanDeposit** | **bool** | Whether deposits are allowed | 
**CanWithdraw** | **bool** | Whether withdrawals are allowed | 
**ChainId** | **string** | Chain ID | 
**ContractAddress** | **string** | Contract address | 
**CreatedAt** | **string** | Creation time | 
**Decimals** | **int32** | Decimals | 
**FeeTokenId** | **string** | Fee token ID | 
**IconUrl** | **string** | Icon | 
**Id** | **string** | Token ID | 
**MaxWithdrawAmount** | **string** | Max withdraw amount | 
**MinDepositAmount** | **string** | Min deposit amount | 
**MinWithdrawAmount** | **string** | Min withdraw amount | 
**Name** | **string** | Name | 
**Precision** | **int32** | Precision | 
**Symbol** | **string** | Symbol . e.g.: BTC / ETH | 
**UpdatedAt** | **string** | Last updated time | 

## Methods

### NewToken

`func NewToken(assetId string, canDeposit bool, canWithdraw bool, chainId string, contractAddress string, createdAt string, decimals int32, feeTokenId string, iconUrl string, id string, maxWithdrawAmount string, minDepositAmount string, minWithdrawAmount string, name string, precision int32, symbol string, updatedAt string, ) *Token`

NewToken instantiates a new Token object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenWithDefaults

`func NewTokenWithDefaults() *Token`

NewTokenWithDefaults instantiates a new Token object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetId

`func (o *Token) GetAssetId() string`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *Token) GetAssetIdOk() (*string, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *Token) SetAssetId(v string)`

SetAssetId sets AssetId field to given value.


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


### GetChainId

`func (o *Token) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *Token) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *Token) SetChainId(v string)`

SetChainId sets ChainId field to given value.


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


### GetFeeTokenId

`func (o *Token) GetFeeTokenId() string`

GetFeeTokenId returns the FeeTokenId field if non-nil, zero value otherwise.

### GetFeeTokenIdOk

`func (o *Token) GetFeeTokenIdOk() (*string, bool)`

GetFeeTokenIdOk returns a tuple with the FeeTokenId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeTokenId

`func (o *Token) SetFeeTokenId(v string)`

SetFeeTokenId sets FeeTokenId field to given value.


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



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


