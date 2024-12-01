package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	CursorPageEndpointOut = openapi.CursorPageEndpoint
	EndpointOut           = openapi.Endpoint
	CreateEndpointIn      = openapi.CreateEndpoint
	UpdateEndpointIn      = openapi.UpdateEndpoint
	DeleteEndpointIn      = openapi.ApiV1WebhooksEndpointDeleteRequest
)

type WebhookEndpoint struct {
	api *openapi.APIClient
}

type ListEndpointOptions struct {
	Cursor *string
	Limit  int
}

func (e *WebhookEndpoint) List(ctx context.Context, options *ListEndpointOptions) (*CursorPageEndpointOut, error) {
	req := e.api.WebhookEndpointsAPI.V1WebhooksEndpointList(ctx)
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

func (e *WebhookEndpoint) Retrieve(ctx context.Context, endpointId string) (*EndpointOut, error) {
	req := e.api.WebhookEndpointsAPI.V1WebhooksEndpointRetrieve(ctx, endpointId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *WebhookEndpoint) Create(ctx context.Context, createEndpointIn *CreateEndpointIn) (*EndpointOut, error) {
	req := e.api.WebhookEndpointsAPI.V1WebhooksEndpointCreate(ctx)
	req = req.CreateEndpoint(*createEndpointIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *WebhookEndpoint) Update(ctx context.Context, endpointId string, updateEndpointIn *UpdateEndpointIn) (*EndpointOut, error) {
	req := e.api.WebhookEndpointsAPI.V1WebhooksEndpointUpdate(ctx, endpointId)
	req = req.UpdateEndpoint(*updateEndpointIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *WebhookEndpoint) Delete(ctx context.Context, endpointId string) error {
	req := e.api.WebhookEndpointsAPI.V1WebhooksEndpointDelete(ctx, endpointId)
	_, res, err := req.Execute()
	if err != nil {
		return wrapError(err, res)
	}
	return nil
}
