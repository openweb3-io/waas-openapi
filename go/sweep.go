package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	SweepAddressIn  = openapi.SweepAddressRequest
	SweepAddressOut = openapi.SweepAddressResponse
)

type Sweep struct {
	api *openapi.APIClient
}

func (e *Sweep) SweepAddress(ctx context.Context, address string, in SweepAddressIn) (*SweepAddressOut, error) {
	req := e.api.SweepsAPI.V1SweepsAddress(ctx, address)
	req = req.SweepAddressRequest(in)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}
