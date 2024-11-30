package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.WebhookEndpointsApi;
import io.openweb3.waas.models.CreateEndpoint;
import io.openweb3.waas.models.CursorIteratorEndpoint;
import io.openweb3.waas.models.Endpoint;
import io.openweb3.waas.models.UpdateEndpoint;

public final class WebhookEndpointsAPI {
    private final WebhookEndpointsApi api;

    WebhookEndpointsAPI() {
        api = new WebhookEndpointsApi();
    }

    public CursorIteratorEndpoint list(final ListWebhookEndpointOptions options) throws ApiException {
        try {
            return api.v1WebhooksEndpointList(options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    public Endpoint create(final CreateEndpoint req)
            throws ApiException {
        try {
            return api.v1WebhooksEndpointCreate(req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // delete
    public Endpoint get(final String endpointId) throws ApiException {
        try {
            return api.v1WebhooksEndpointRetrieve(endpointId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // delete
    public Endpoint delete(final String endpointId) throws ApiException {
        try {
            return api.v1WebhooksEndpointDelete(endpointId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // update
    public Endpoint update(final String endpointId, final UpdateEndpoint req) throws ApiException {
        try {
            return api.v1WebhooksEndpointUpdate(endpointId, req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
