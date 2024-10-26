package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.WalletsApi;
import io.openweb3.waas.models.CreateWalletRequest;
import io.openweb3.waas.models.CursorPageWallet;
import io.openweb3.waas.models.UpdateWalletRequest;
import io.openweb3.waas.models.Wallet;

public final class WalletsAPI {
    private final WalletsApi api;

    WalletsAPI() {
        api = new WalletsApi();
    }

    public CursorPageWallet list(final ListWalletOptions options) throws ApiException {
        try {
            return api.v1WalletsList(options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    public Wallet create(final CreateWalletRequest req)
            throws ApiException {
        try {
            return api.v1WalletsCreate(req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // get
    public Wallet get(final String walletId) throws ApiException {
        try {
            return api.v1WalletsRetrieve(walletId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // update
    public Wallet update(final String walletId, final UpdateWalletRequest req) throws ApiException {
        try {
            return api.v1WalletsUpdate(walletId, req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // list accounts
    public Wallet delete(final String walletId) throws ApiException {
        try {
            return api.v1WalletsDelete(walletId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
