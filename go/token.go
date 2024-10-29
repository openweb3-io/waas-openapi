package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	TokenOut           = openapi.Token
	CursorPageTokenOut = openapi.CursorPageToken
)

type Token struct {
	api *openapi.APIClient
}

type ListTokenOptions struct {
	Cursor *string
	Limit  int
}

func (e *Token) List(ctx context.Context, options *ListTokenOptions) (*CursorPageTokenOut, error) {
	req := e.api.TokensAPI.V1TokensList(ctx)
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

func (e *Token) Retrieve(ctx context.Context, tokenId string) (*TokenOut, error) {
	req := e.api.TokensAPI.V1TokensRetrieve(ctx, tokenId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}
