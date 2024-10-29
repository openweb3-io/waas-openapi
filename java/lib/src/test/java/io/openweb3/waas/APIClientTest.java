package io.openweb3.waas;

import io.openweb3.waas.exceptions.ApiException;
import io.openweb3.waas.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class APIClientTest {

    private String apiHost;
    private String apiKey;
    private String privateKey;
    private APIClient client;

    @BeforeEach
    void setUp() throws Exception {
        apiHost = System.getenv("API_HOST");
        apiKey = System.getenv("API_KEY");
        privateKey = System.getenv("PRIVATE_KEY");

        APIClientOptions options = new APIClientOptions()
                .serverUrl(apiHost)
                .apiKey(apiKey)
                .secret(privateKey);

        client = new APIClient(options);
    }

    @Test
    void testListAddress() throws ApiException {
        CursorPageAddress result = client.getAddress().list(new String[]{}, new String[]{}, new ListAddressOptions());

        assertTrue(result.getItems().size() <= result.getTotal());
        assertNotEquals("", result.getPrevCursor());
        assertNotEquals("", result.getNextCursor());
    }

    @Test
    void testListChain() throws ApiException {
        CursorPageChain result = client.getChain().list(new ListChainOptions());

        assertTrue(result.getItems().size() <= result.getTotal());
        assertNotEquals("", result.getPrevCursor());
        assertNotEquals("", result.getNextCursor());
    }

    @Test
    void testListToken() throws ApiException {
        CursorPageToken result = client.getToken().list(new ListTokenOptions());

        assertTrue(result.getItems().size() <= result.getTotal());
        assertNotEquals("", result.getPrevCursor());
        assertNotEquals("", result.getNextCursor());
    }

    @Test
    void testListTransaction() throws ApiException {
        CursorPageTransaction result = client.getTransaction().list(new ListTransactionOptions());

        assertTrue(result.getItems().size() <= result.getTotal());
        assertNotEquals("", result.getPrevCursor());
        assertNotEquals("", result.getNextCursor());
    }

    @Test
    void testListWallet() throws ApiException {
        CursorPageWallet result = client.getWallet().list(new ListWalletOptions());

        assertTrue(result.getItems().size() <= result.getTotal());
        assertNotEquals("", result.getPrevCursor());
        assertNotEquals("", result.getNextCursor());
    }
}