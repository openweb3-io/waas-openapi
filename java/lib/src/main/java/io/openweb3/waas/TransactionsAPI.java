package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.TransactionsApi;
import io.openweb3.waas.models.*;

import java.util.Arrays;

public final class TransactionsAPI {
    private final TransactionsApi api;

    TransactionsAPI() {
        api = new TransactionsApi();
    }

    // list transactions
    public CursorPageTransaction list(final ListTransactionOptions options) throws ApiException {
        try {
            return api.v1TransactionsList(
                    Arrays.asList(options.getWalletIds() == null ? new String[0] : options.getWalletIds()),
                    Arrays.asList(options.getChainIds() == null ? new String[0] : options.getChainIds()),
                    Arrays.asList(options.getTokenIds() == null ? new String[0] : options.getTokenIds()),
                    Arrays.asList(options.getAssetIds() == null ? new String[0] : options.getAssetIds()),
                    options.getHash(),
                    options.getStatus(),
                    options.getCursor(),
                    options.getLimit()
            );
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // get transaction
    public Transaction retrieve(final String transactionId) throws ApiException {
        try {
            return api.v1TransactionsRetrieve(transactionId);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // transfer
    public CreateTransferResponse transfer(final CreateTransferRequest req) throws ApiException {
        try {
            return api.v1TransactionsTransfer(req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // withdraw
    public EstimateFeeResponse estimateFee(final EstimateFeeRequest req) throws ApiException {
        try {
            return api.v1TransactionsEstimateFee(req);
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}
