package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	SweepAddressIn = openapi.SweepAddressRequest
)

type Sweep struct {
	api *openapi.APIClient
}

func (e *Sweep) SweepAddress(ctx context.Context, address string, in SweepAddressIn) error {
	req := e.api.SweepsAPI.V1SweepsAddress(ctx, address)
	req = req.SweepAddressRequest(in)

	_, res, err := req.Execute()
	if err != nil {
		return wrapError(err, res)
	}
	return nil
}
