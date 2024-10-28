package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	AddressOut           = openapi.Address
	CursorPageAddressOut = openapi.CursorPageAddress
)

type Address struct {
	api *openapi.APIClient
}

type ListAddressOptions struct {
	Cursor *string
	Limit  int
}

func (e *Address) List(ctx context.Context, options *ListAddressOptions) (*CursorPageAddressOut, error) {
	req := e.api.AddressesAPI.V1AddressesList(ctx)
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
