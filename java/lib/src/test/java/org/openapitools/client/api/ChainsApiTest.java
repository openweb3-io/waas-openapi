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
import org.openapitools.client.model.CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain;
import org.openapitools.client.model.Error;
import org.openapitools.client.model.Openweb3IoWaasAppWaasOpenapiServerApiDtosChain;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ChainsApi
 */
@Ignore
public class ChainsApiTest {

    private final ChainsApi api = new ChainsApi();

    
    /**
     * List all chains
     *
     * List of all available chains.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1ChainsListTest() throws ApiException {
        String cursor = null;
        Integer limit = null;
        CursorPageOpenweb3IoWaasAppWaasOpenapiServerApiDtosChain response = api.v1ChainsList(cursor, limit);

        // TODO: test validations
    }
    
    /**
     * Retrieve chain
     *
     * Retrieve chain information.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1ChainsRetrieveTest() throws ApiException {
        String id = null;
        Openweb3IoWaasAppWaasOpenapiServerApiDtosChain response = api.v1ChainsRetrieve(id);

        // TODO: test validations
    }
    
}
