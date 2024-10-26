package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.TokensApi;
import io.openweb3.waas.models.CursorPageToken;
import io.openweb3.waas.models.Token;


public final class TokensAPI {
    private final TokensApi api;

    TokensAPI() {
        api = new TokensApi();
    }

    public CursorPageToken list(final ListTokenOptions options) throws ApiException {
        try {
            return api.v1TokensList(options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    public Token retrieve(final String tokenId) throws ApiException {
        try {
            return api.v1TokensRetrieve(tokenId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
