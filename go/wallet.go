package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	CursorPageWalletOut  = openapi.CursorPageWallet
	WalletOut            = openapi.Wallet
	CreateWalletIn       = openapi.CreateWalletRequest
	UpdateWalletIn       = openapi.UpdateWalletRequest
	DeleteWalletIn       = openapi.ApiV1WalletsDeleteRequest
	CreateAddressIn      = openapi.CreateAddressRequest
	CursorAddressPageOut = openapi.CursorPageAddress
)

type Wallet struct {
	api *openapi.APIClient
}

type ListWalletOptions struct {
	Cursor string
	Limit  int
}

func (e *Wallet) List(ctx context.Context, options *ListWalletOptions) (*CursorPageWalletOut, error) {
	req := e.api.WalletsApi.V1WalletsList(ctx)
	req = req.Cursor(options.Cursor)
	req = req.Limit(int32(options.Limit))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) Retrieve(ctx context.Context, walletId string) (*WalletOut, error) {
	req := e.api.WalletsApi.V1WalletsRetrieve(ctx, walletId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) Create(ctx context.Context, createWalletIn *CreateWalletIn) (*WalletOut, error) {
	req := e.api.WalletsApi.V1WalletsCreate(ctx)
	req = req.CreateWalletRequest(*createWalletIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) Update(ctx context.Context, walletId string, updateWalletIn *UpdateWalletIn) (*WalletOut, error) {
	req := e.api.WalletsApi.V1WalletsUpdate(ctx, walletId)
	req = req.UpdateWalletRequest(*updateWalletIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) Delete(ctx context.Context, walletId string) (*WalletOut, error) {
	req := e.api.WalletsApi.V1WalletsDelete(ctx, walletId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) ListAddresses(ctx context.Context, walletId string, options *ListAddressOptions) (*CursorAddressPageOut, error) {
	req := e.api.AddressesApi.V1WalletsListAddresses(ctx, walletId)
	req = req.Cursor(options.Cursor)
	req = req.Limit(int32(options.Limit))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) CreateAddress(ctx context.Context, walletId string, createAddressIn *CreateAddressIn) (*AddressOut, error) {
	req := e.api.AddressesApi.V1WalletsCreateAddress(ctx, walletId)
	req = req.CreateAddressRequest(*createAddressIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Wallet) GetAddress(ctx context.Context, walletId string, address string) (*AddressOut, error) {
	req := e.api.AddressesApi.V1WalletsGetAddress(ctx, walletId, address)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}
