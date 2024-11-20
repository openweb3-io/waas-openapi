package io.openweb3.waas;

import io.openweb3.waas.exceptions.SigningException;
import io.openweb3.waas.internal.ApiCallback;
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.ProgressResponseBody;
import okhttp3.*;
import okio.Buffer;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

public final class APIClient {
    public static final String VERSION = "0.0.1";
    private final AddressesAPI address;
    private final ChainsAPI chain;
    private final TokensAPI token;
    private final TransactionsAPI transaction;
    private final WalletsAPI wallet;
    private final WebhookEndpointsAPI webhookEndpoint;
    private final WebhookEventsAPI webhookEvent;
    private final SweepAPI sweep;

    public APIClient(final String apikey, final String privateKeyPath) throws Exception {
        this(new APIClientOptions().apiKey(apikey).secret(privateKeyPath));
    }

    public APIClient(final APIClientOptions options) throws Exception {
        if (options.getApiKey() == null || options.getSecret() == null) {
            throw new IllegalArgumentException("ApiKey and Secret are required");
        }

        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addNetworkInterceptor(getProgressInterceptor());
        builder.addInterceptor(new Interceptor() {
            @NotNull
            @Override
            public Response intercept(@NotNull Chain chain) throws IOException {
                Request originalRequest = chain.request();
                Request.Builder builder = originalRequest.newBuilder();

                String timestamp = String.format("%d", System.currentTimeMillis());
                builder.header("x-request-time", timestamp);

                String path = originalRequest.url().encodedPath();
                String query = originalRequest.url().encodedQuery();
                String uri = path;
                if (query != null && !query.isEmpty()) {
                    uri += "?" + query;
                }

                String body = "";
                if (originalRequest.body() != null) {
                    RequestBody oldBody = originalRequest.body();
                    Buffer buffer = new Buffer();
                    oldBody.writeTo(buffer);
                    body = buffer.readUtf8();

                    // rebuild RequestBody
                    RequestBody newRequestBody = RequestBody.create(body, oldBody.contentType());
                    builder.method(originalRequest.method(), newRequestBody);
                }

                // sign
                String signature = null;
                try {
                    String content = String.format("%s%s%s", body, uri, timestamp);
                    signature = Utils.signWithEd25519(options.getSecret(), content);
                } catch (SigningException e) {
                    throw new RuntimeException(e);
                }

                builder.header("X-Api-Key", options.getApiKey());
                builder.header("X-Signature", signature);

                Request newRequest = builder.build();
                return chain.proceed(newRequest);
            }
        });

        OkHttpClient httpClient = builder.build();

        ApiClient apiClient = new ApiClient(httpClient);
        apiClient.setDebugging(options.getDebug());
        apiClient.setBasePath(options.getServerUrl());
        apiClient.setUserAgent(String.format("waas-libs/%s/java", VERSION));

        Configuration.setDefaultApiClient(apiClient);

        this.address = new AddressesAPI();
        this.chain = new ChainsAPI();
        this.token = new TokensAPI();
        this.transaction = new TransactionsAPI();
        this.wallet = new WalletsAPI();
        this.webhookEndpoint = new WebhookEndpointsAPI();
        this.webhookEvent = new WebhookEventsAPI();
        this.sweep = new SweepAPI();
    }

    private Interceptor getProgressInterceptor() {
        return new Interceptor() {
            @NotNull
            @Override
            public Response intercept(@NotNull Interceptor.Chain chain) throws IOException {
                final Request request = chain.request();
                final Response originalResponse = chain.proceed(request);
                if (request.tag() instanceof ApiCallback) {
                    final ApiCallback callback = (ApiCallback) request.tag();
                    return originalResponse.newBuilder()
                            .body(new ProgressResponseBody(originalResponse.body(), callback))
                            .build();
                }
                return originalResponse;
            }
        };
    }

    public AddressesAPI getAddress() {
        return address;
    }

    public ChainsAPI getChain() {
        return chain;
    }

    public TokensAPI getToken() {
        return token;
    }

    public TransactionsAPI getTransaction() {
        return transaction;
    }

    public WalletsAPI getWallet() {
        return wallet;
    }

    public WebhookEndpointsAPI getEndpoint() {
        return webhookEndpoint;
    }

    public WebhookEventsAPI getEvent() {
        return webhookEvent;
    }

    public SweepAPI getSweep() {
        return sweep;
    }
}
