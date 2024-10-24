/*
 * WaaS OpenAPI Documentation
 * This is a custody wallet service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.CreateTransferRequest;
import org.openapitools.client.model.CreateTransferResponse;
import org.openapitools.client.model.Error;
import org.openapitools.client.model.PageTransaction;
import org.openapitools.client.model.Transaction;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TransactionsApi
 */
@Ignore
public class TransactionsApiTest {

    private final TransactionsApi api = new TransactionsApi();

    
    /**
     * List transactions
     *
     * List transactions
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1TransactionsListTest() throws ApiException {
        String appId = null;
        List<String> assetIds = null;
        List<String> chainIds = null;
        String cursor = null;
        Integer limit = null;
        String status = null;
        List<String> tokenIds = null;
        String txhash = null;
        List<String> walletIds = null;
        PageTransaction response = api.v1TransactionsList(appId, assetIds, chainIds, cursor, limit, status, tokenIds, txhash, walletIds);

        // TODO: test validations
    }
    
    /**
     * Get transaction
     *
     * Get a transaction by ID
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1TransactionsRetrieveTest() throws ApiException {
        String appId = null;
        String transactionId = null;
        Transaction response = api.v1TransactionsRetrieve(appId, transactionId);

        // TODO: test validations
    }
    
    /**
     * Transfer token
     *
     * Create a transfer transaction
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1TransactionsTransferTest() throws ApiException {
        String appId = null;
        CreateTransferRequest createTransferRequest = null;
        CreateTransferResponse response = api.v1TransactionsTransfer(appId, createTransferRequest);

        // TODO: test validations
    }
    
}
