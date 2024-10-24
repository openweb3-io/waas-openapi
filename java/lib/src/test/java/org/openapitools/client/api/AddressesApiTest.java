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
import org.openapitools.client.model.Address;
import org.openapitools.client.model.CursorPageAddress;
import org.openapitools.client.model.Error;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AddressesApi
 */
@Ignore
public class AddressesApiTest {

    private final AddressesApi api = new AddressesApi();

    
    /**
     * List all addresses
     *
     * List of all available addresses.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1AddressesListTest() throws ApiException {
        String cursor = null;
        Integer limit = null;
        String tokenId = null;
        String type = null;
        String walletId = null;
        CursorPageAddress response = api.v1AddressesList(cursor, limit, tokenId, type, walletId);

        // TODO: test validations
    }
    
    /**
     * Get deposit address
     *
     * Get wallet&#39;s deposit address
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WalletsGetDepositAddressTest() throws ApiException {
        String walletId = null;
        String address = null;
        String tokenId = null;
        Address response = api.v1WalletsGetDepositAddress(walletId, address, tokenId);

        // TODO: test validations
    }
    
    /**
     * List deposit addresses
     *
     * List wallet&#39;s deposit addresses
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WalletsListDepositAddressesTest() throws ApiException {
        String appId = null;
        String walletId = null;
        List<String> chainIds = null;
        String cursor = null;
        Integer limit = null;
        CursorPageAddress response = api.v1WalletsListDepositAddresses(appId, walletId, chainIds, cursor, limit);

        // TODO: test validations
    }
    
}
