package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.WebhookEndpointsApi;
import io.openweb3.waas.internal.api.WebhookEventsApi;
import io.openweb3.waas.models.*;

public final class WebhookEventsAPI {
    private final WebhookEventsApi api;

    WebhookEventsAPI() {
        api = new WebhookEventsApi();
    }

    public CursorPageEventType list(final ListWebhookEventOptions options) throws ApiException {
        try {
            return api.v1WebhooksEventsList(options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
