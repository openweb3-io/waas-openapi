# TransactionEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to **string** | Address | [optional] 
**Amount** | Pointer to **string** | Amount | [optional] 
**Memo** | Pointer to **string** | The memo | [optional] 
**Type** | Pointer to **string** | Transaction endpoint type | [optional] 

## Methods

### NewTransactionEndpoint

`func NewTransactionEndpoint() *TransactionEndpoint`

NewTransactionEndpoint instantiates a new TransactionEndpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionEndpointWithDefaults

`func NewTransactionEndpointWithDefaults() *TransactionEndpoint`

NewTransactionEndpointWithDefaults instantiates a new TransactionEndpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *TransactionEndpoint) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *TransactionEndpoint) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *TransactionEndpoint) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *TransactionEndpoint) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAmount

`func (o *TransactionEndpoint) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionEndpoint) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionEndpoint) SetAmount(v string)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *TransactionEndpoint) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetMemo

`func (o *TransactionEndpoint) GetMemo() string`

GetMemo returns the Memo field if non-nil, zero value otherwise.

### GetMemoOk

`func (o *TransactionEndpoint) GetMemoOk() (*string, bool)`

GetMemoOk returns a tuple with the Memo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemo

`func (o *TransactionEndpoint) SetMemo(v string)`

SetMemo sets Memo field to given value.

### HasMemo

`func (o *TransactionEndpoint) HasMemo() bool`

HasMemo returns a boolean if a field has been set.

### GetType

`func (o *TransactionEndpoint) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionEndpoint) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionEndpoint) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionEndpoint) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


