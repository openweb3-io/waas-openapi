package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.TokensApi;
import io.openweb3.waas.models.CursorPageToken;
import io.openweb3.waas.models.Token;


public final class SweepAPI {
    private final SweepsApi api;

    SweepAPI() {
        api = new SweepsApi();
    }

    public void sweepAddress(final String address, final SweepAddressRequest in) throws ApiException {
        try {
            api.v1SweepsAddress(address, in);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
