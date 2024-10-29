package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.AddressesApi;
import io.openweb3.waas.models.Address;
import io.openweb3.waas.models.CursorPageAddress;

import java.util.Arrays;


public final class AddressesAPI {
    private final AddressesApi api;

    AddressesAPI() {
        api = new AddressesApi();
    }

    // get deposit address
    public Address getDeposit(final String walletId, final String address) throws ApiException {
        try {
            return api.v1WalletsGetAddress(walletId, address);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // list deposit addresses
    public CursorPageAddress listDeposit(final String walletId, final String[] chainIds, final ListDepositAddressOptions options) throws ApiException {
        try {
            return api.v1WalletsListAddresses(walletId, Arrays.asList(chainIds), options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // list all addresses
    public CursorPageAddress list(final String[] chainIds, final String[] walletIds, final ListAddressOptions options) throws ApiException {
        try {
            return api.v1AddressesList(Arrays.asList(walletIds), Arrays.asList(chainIds), options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
