# Go API client for openapi

This is a custody wallet service openapi server.

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/oauth2
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import sw "./openapi"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `sw.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), sw.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `sw.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), sw.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identifield by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `sw.ContextOperationServerIndices` and `sw.ContextOperationServerVariables` context maps.

```
ctx := context.WithValue(context.Background(), sw.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), sw.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressesApi* | [**V1AddressesList**](docs/AddressesApi.md#v1addresseslist) | **Get** /api/v1/addresses | List all addresses
*AddressesApi* | [**V1WalletsCreateAddress**](docs/AddressesApi.md#v1walletscreateaddress) | **Post** /api/v1/wallets/{walletId}/addresses | Create deposit address
*AddressesApi* | [**V1WalletsGetDepositAddress**](docs/AddressesApi.md#v1walletsgetdepositaddress) | **Get** /api/v1/wallets/{walletId}/addresses/{address} | Get deposit address
*AddressesApi* | [**V1WalletsListDepositAddresses**](docs/AddressesApi.md#v1walletslistdepositaddresses) | **Get** /api/v1/wallets/{walletId}/addresses | List deposit addresses
*ChainsApi* | [**V1ChainsList**](docs/ChainsApi.md#v1chainslist) | **Get** /api/v1/chains | List all chains
*ChainsApi* | [**V1ChainsRetrieve**](docs/ChainsApi.md#v1chainsretrieve) | **Get** /api/v1/chains/{id} | Retrieve chain
*TokensApi* | [**V1TokensCreate**](docs/TokensApi.md#v1tokenscreate) | **Post** /api/v1/tokens | Create token
*TokensApi* | [**V1TokensList**](docs/TokensApi.md#v1tokenslist) | **Get** /api/v1/tokens | List tokens
*TokensApi* | [**V1TokensRetrieve**](docs/TokensApi.md#v1tokensretrieve) | **Get** /api/v1/tokens/{id} | Get Token
*TokensApi* | [**V1TokensUpdate**](docs/TokensApi.md#v1tokensupdate) | **Patch** /api/v1/tokens/{tokenId} | Update token
*TransactionsApi* | [**V1TransactionsList**](docs/TransactionsApi.md#v1transactionslist) | **Get** /api/v1/transactions | List transactions
*TransactionsApi* | [**V1TransactionsRetrieve**](docs/TransactionsApi.md#v1transactionsretrieve) | **Get** /api/v1/transactions/{transactionId} | Get transaction
*TransactionsApi* | [**V1TransactionsTransfer**](docs/TransactionsApi.md#v1transactionstransfer) | **Post** /api/v1/transactions/transfer | Transfer token
*WalletsApi* | [**V1WalletsCreate**](docs/WalletsApi.md#v1walletscreate) | **Post** /api/v1/wallets | Create wallet
*WalletsApi* | [**V1WalletsDelete**](docs/WalletsApi.md#v1walletsdelete) | **Delete** /api/v1/wallets/{walletId} | Delete wallet
*WalletsApi* | [**V1WalletsList**](docs/WalletsApi.md#v1walletslist) | **Get** /api/v1/wallets | List wallets
*WalletsApi* | [**V1WalletsRetrieve**](docs/WalletsApi.md#v1walletsretrieve) | **Get** /api/v1/wallets/{walletId} | Get wallet
*WalletsApi* | [**V1WalletsUpdate**](docs/WalletsApi.md#v1walletsupdate) | **Patch** /api/v1/wallets/{walletId} | Update wallet
*WebhookEndpointsApi* | [**V1WebhooksCreate**](docs/WebhookEndpointsApi.md#v1webhookscreate) | **Post** /api/v1/webhooks/endpoints | Create webhook endpoint
*WebhookEndpointsApi* | [**V1WebhooksDelete**](docs/WebhookEndpointsApi.md#v1webhooksdelete) | **Delete** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
*WebhookEndpointsApi* | [**V1WebhooksList**](docs/WebhookEndpointsApi.md#v1webhookslist) | **Get** /api/v1/endpoints | List webhook endpoints
*WebhookEndpointsApi* | [**V1WebhooksRetrieve**](docs/WebhookEndpointsApi.md#v1webhooksretrieve) | **Get** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
*WebhookEndpointsApi* | [**V1WebhooksUpdate**](docs/WebhookEndpointsApi.md#v1webhooksupdate) | **Patch** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint


## Documentation For Models

 - [Address](docs/Address.md)
 - [Chain](docs/Chain.md)
 - [CreateAddressRequest](docs/CreateAddressRequest.md)
 - [CreateEndpoint](docs/CreateEndpoint.md)
 - [CreateTokenRequest](docs/CreateTokenRequest.md)
 - [CreateTransferRequest](docs/CreateTransferRequest.md)
 - [CreateTransferResponse](docs/CreateTransferResponse.md)
 - [CreateWalletRequest](docs/CreateWalletRequest.md)
 - [CursorPageAddress](docs/CursorPageAddress.md)
 - [CursorPageChain](docs/CursorPageChain.md)
 - [CursorPageEndpoint](docs/CursorPageEndpoint.md)
 - [CursorPageToken](docs/CursorPageToken.md)
 - [CursorPageWallet](docs/CursorPageWallet.md)
 - [Endpoint](docs/Endpoint.md)
 - [Error](docs/Error.md)
 - [Fee](docs/Fee.md)
 - [FeeType](docs/FeeType.md)
 - [PageTransaction](docs/PageTransaction.md)
 - [Token](docs/Token.md)
 - [Transaction](docs/Transaction.md)
 - [TransactionEndpoint](docs/TransactionEndpoint.md)
 - [TransactionType](docs/TransactionType.md)
 - [UpdateEndpoint](docs/UpdateEndpoint.md)
 - [UpdateTokenRequest](docs/UpdateTokenRequest.md)
 - [UpdateWalletRequest](docs/UpdateWalletRequest.md)
 - [Wallet](docs/Wallet.md)


## Documentation For Authorization



### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

Note, each API key must be added to a map of `map[string]APIKey` where the key is: X-Api-Key and passed in as the auth context for each request.


### SignatureAuth

- **Type**: API key
- **API key parameter name**: X-Signature
- **Location**: HTTP header

Note, each API key must be added to a map of `map[string]APIKey` where the key is: X-Signature and passed in as the auth context for each request.


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author



