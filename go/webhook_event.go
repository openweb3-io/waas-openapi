package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	EventTypeOut           = openapi.EventType
	CursorPageEventTypeOut = openapi.CursorPageEventType
)

type WebhookEvent struct {
	api *openapi.APIClient
}

type ListEventTypeOptions struct {
	Cursor *string
	Limit  int
}

func (e *WebhookEvent) List(ctx context.Context, options *ListEventTypeOptions) (*CursorPageEventTypeOut, error) {
	req := e.api.WebhookEventsAPI.V1WebhooksEventsList(ctx)
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
