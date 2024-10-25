package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	ChainOut           = openapi.Chain
	CursorPageChainOut = openapi.CursorPageChain
)

type Chain struct {
	api *openapi.APIClient
}

type ListChainOptions struct {
	Cursor string
	Limit  int
}

func (e *Chain) List(ctx context.Context, options *ListChainOptions) (*CursorPageChainOut, error) {
	req := e.api.ChainsApi.V1ChainsList(ctx)
	req = req.Cursor(options.Cursor)
	req = req.Limit(int32(options.Limit))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Chain) Retrieve(ctx context.Context, chainId string) (*ChainOut, error) {
	req := e.api.ChainsApi.V1ChainsRetrieve(ctx, chainId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}
