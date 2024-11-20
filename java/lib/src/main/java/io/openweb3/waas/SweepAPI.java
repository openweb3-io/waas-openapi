package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.SweepsApi;
import io.openweb3.waas.models.SweepAddressRequest;
import io.openweb3.waas.models.SweepAddressResponse;


public final class SweepAPI {
    private final SweepsApi api;

    SweepAPI() {
        api = new SweepsApi();
    }

    public SweepAddressResponse sweepAddress(final String address, final SweepAddressRequest in) throws ApiException {
        try {
            SweepAddressResponse out = api.v1SweepsAddress(address, in);
            return out;
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
