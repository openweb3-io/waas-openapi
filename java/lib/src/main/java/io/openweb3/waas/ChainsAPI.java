package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.ChainsApi;
import io.openweb3.waas.models.Chain;
import io.openweb3.waas.models.CursorPageChain;

public final class ChainsAPI {
    private final ChainsApi api;

    ChainsAPI() {
        api = new ChainsApi();
    }

    public CursorPageChain list(final ListChainOptions options) throws ApiException {
        try {
            return api.v1ChainsList(options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // find by code
    public Chain retrieve(final String chainId) throws ApiException {
        try {
            return api.v1ChainsRetrieve(chainId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
