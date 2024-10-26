package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.internal.api.TransactionsApi;
import io.openweb3.waas.models.*;

import java.util.Arrays;
import java.util.List;

public final class TransactionsAPI {
    private final TransactionsApi api;

    TransactionsAPI() {
        api = new TransactionsApi();
    }

    // list transactions
    public PageTransaction listTransactions(final ListTransactionOptions options) throws ApiException {
        try {
            return api.v1TransactionsList(
                    Arrays.asList(options.getAssetIds()),
                    Arrays.asList(options.getChainIds()),
                    options.getCursor(),
                    options.getHash(),
                    options.getLimit(),
                    options.getStatus(),
                    Arrays.asList(options.getTokenIds()),
                    Arrays.asList(options.getWalletIds())
            );
        } catch (io.openweb3.waas.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    // get transaction
    public Transaction getTransaction(final String transactionId) throws ApiException {
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
