package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.AddressesApi;
import io.openweb3.waas.models.Address;
import io.openweb3.waas.models.CursorPageAddress;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public final class AddressesAPI {
    private final AddressesApi api;

    AddressesAPI() {
        api = new AddressesApi();
    }

    // get deposit address
    public Address getDepositAddress(final String walletId, final String address, final String tokenId) throws ApiException {
        try {
            return api.v1WalletsGetDepositAddress(walletId, address, tokenId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // list deposit addresses
    public CursorPageAddress listDepositAddresses(final String walletId, final String[] chainIds, final ListDepositAddressOptions options) throws ApiException {
        try {
            return api.v1WalletsListDepositAddresses(walletId, Arrays.asList(chainIds), options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // list all addresses
    public CursorPageAddress listAddresses(final String[] chainIds, final String[] walletIds, final ListAddressOptions options) throws ApiException {
        try {
            return api.v1AddressesList(Arrays.asList(chainIds), options.getCursor(), options.getLimit(), Arrays.asList(chainIds));
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
