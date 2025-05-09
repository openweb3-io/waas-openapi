package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.AddressesApi;
import io.openweb3.waas.models.Address;
import io.openweb3.waas.models.CursorPageAddress;
import io.openweb3.waas.models.ValidateAddressesReply;

import java.util.Arrays;


public final class AddressesAPI {
    private final AddressesApi api;

    AddressesAPI() {
        api = new AddressesApi();
    }

    // list all addresses
    public CursorPageAddress list(final String[] chainIds, final String[] walletIds, final ListAddressOptions options) throws ApiException {
        try {
            return api.v1AddressesList(Arrays.asList(walletIds), Arrays.asList(chainIds), options.getCursor(), options.getLimit());
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // validate addresses
    public ValidateAddressesReply validateAddresses(final String chainId, final String[] addresses) throws ApiException {
        try {
            return api.v1AddressesValidate(chainId, Arrays.asList(addresses));
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
