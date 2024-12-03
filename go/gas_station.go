package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	CursorPageGasStationOut       = openapi.CursorPageGasStation
	GasStationOut                 = openapi.GasStation
	CreateGasStationIn            = openapi.CreateGasStationRequest
	UpdateGasStationIn            = openapi.UpdateGasStationRequest
	DeleteGasStationIn            = openapi.ApiV1GasStationsDeleteRequest
	GetGasStationDepositAddressIn = openapi.GetGasStationDepositAddressRequest
)

type GasStation struct {
	api *openapi.APIClient
}

type ListGasStationOptions struct {
	Cursor *string
	Limit  int
}

func (e *GasStation) List(ctx context.Context, options *ListGasStationOptions) (*CursorPageGasStationOut, error) {
	req := e.api.GasStationsAPI.V1GasStationsList(ctx)
	if options.Cursor != nil {
		req = req.Cursor(*options.Cursor)
	}
	req = req.Limit(int32(options.Limit))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *GasStation) Retrieve(ctx context.Context, gasStationId string) (*GasStationOut, error) {
	req := e.api.GasStationsAPI.V1GasStationsRetrieve(ctx, gasStationId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *GasStation) Create(ctx context.Context, createGasStationIn *CreateGasStationIn) (*GasStationOut, error) {
	req := e.api.GasStationsAPI.V1GasStationsCreate(ctx)
	req = req.CreateGasStationRequest(*createGasStationIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *GasStation) Update(ctx context.Context, gasStationId string, updateGasStationIn *UpdateGasStationIn) (*GasStationOut, error) {
	req := e.api.GasStationsAPI.V1GasStationsUpdate(ctx, gasStationId)
	req = req.UpdateGasStationRequest(*updateGasStationIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *GasStation) Delete(ctx context.Context, gasStationId string) (*GasStationOut, error) {
	req := e.api.GasStationsAPI.V1GasStationsDelete(ctx, gasStationId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *GasStation) GetOrCreateDepositAddress(ctx context.Context, getGasStationDepositAddressIn *GetGasStationDepositAddressIn) (*string, error) {
	req := e.api.GasStationsAPI.V1GasStationsGetOrCreateDepositAddress(ctx)
	req = req.GetGasStationDepositAddressRequest(*getGasStationDepositAddressIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}
