/*
 * WaaS OpenAPI Documentation
 * This is a WaaS OpenAPI Server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.waas.internal.api;

import io.openweb3.waas.internal.ApiCallback;
import io.openweb3.waas.internal.ApiClient;
import io.openweb3.waas.internal.ApiException;
import io.openweb3.waas.internal.ApiResponse;
import io.openweb3.waas.internal.Configuration;
import io.openweb3.waas.internal.Pair;
import io.openweb3.waas.internal.ProgressRequestBody;
import io.openweb3.waas.internal.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.openweb3.waas.models.CreateTokenRequest;
import io.openweb3.waas.models.CursorPageToken;
import io.openweb3.waas.models.Error;
import io.openweb3.waas.models.Token;
import io.openweb3.waas.models.UpdateTokenRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TokensApi {
    private ApiClient localVarApiClient;

    public TokensApi() {
        this(Configuration.getDefaultApiClient());
    }

    public TokensApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for v1TokensCreate
     * @param createTokenRequest Request Body (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensCreateCall(CreateTokenRequest createTokenRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = createTokenRequest;

        // create path and map variables
        String localVarPath = "/api/v1/tokens";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "SignatureAuth" };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TokensCreateValidateBeforeCall(CreateTokenRequest createTokenRequest, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'createTokenRequest' is set
        if (createTokenRequest == null) {
            throw new ApiException("Missing the required parameter 'createTokenRequest' when calling v1TokensCreate(Async)");
        }
        

        okhttp3.Call localVarCall = v1TokensCreateCall(createTokenRequest, _callback);
        return localVarCall;

    }

    /**
     * Create token
     * Create a tokens.
     * @param createTokenRequest Request Body (required)
     * @return Token
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public Token v1TokensCreate(CreateTokenRequest createTokenRequest) throws ApiException {
        ApiResponse<Token> localVarResp = v1TokensCreateWithHttpInfo(createTokenRequest);
        return localVarResp.getData();
    }

    /**
     * Create token
     * Create a tokens.
     * @param createTokenRequest Request Body (required)
     * @return ApiResponse&lt;Token&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Token> v1TokensCreateWithHttpInfo(CreateTokenRequest createTokenRequest) throws ApiException {
        okhttp3.Call localVarCall = v1TokensCreateValidateBeforeCall(createTokenRequest, null);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create token (asynchronously)
     * Create a tokens.
     * @param createTokenRequest Request Body (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensCreateAsync(CreateTokenRequest createTokenRequest, final ApiCallback<Token> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TokensCreateValidateBeforeCall(createTokenRequest, _callback);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1TokensList
     * @param cursor Cursor (optional)
     * @param limit The number of records to return default: 20 (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensListCall(String cursor, Integer limit, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/tokens";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (cursor != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("cursor", cursor));
        }

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "SignatureAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TokensListValidateBeforeCall(String cursor, Integer limit, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = v1TokensListCall(cursor, limit, _callback);
        return localVarCall;

    }

    /**
     * List tokens
     * Retrieve a list of all tokens.
     * @param cursor Cursor (optional)
     * @param limit The number of records to return default: 20 (optional)
     * @return CursorPageToken
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public CursorPageToken v1TokensList(String cursor, Integer limit) throws ApiException {
        ApiResponse<CursorPageToken> localVarResp = v1TokensListWithHttpInfo(cursor, limit);
        return localVarResp.getData();
    }

    /**
     * List tokens
     * Retrieve a list of all tokens.
     * @param cursor Cursor (optional)
     * @param limit The number of records to return default: 20 (optional)
     * @return ApiResponse&lt;CursorPageToken&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<CursorPageToken> v1TokensListWithHttpInfo(String cursor, Integer limit) throws ApiException {
        okhttp3.Call localVarCall = v1TokensListValidateBeforeCall(cursor, limit, null);
        Type localVarReturnType = new TypeToken<CursorPageToken>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * List tokens (asynchronously)
     * Retrieve a list of all tokens.
     * @param cursor Cursor (optional)
     * @param limit The number of records to return default: 20 (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensListAsync(String cursor, Integer limit, final ApiCallback<CursorPageToken> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TokensListValidateBeforeCall(cursor, limit, _callback);
        Type localVarReturnType = new TypeToken<CursorPageToken>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1TokensRetrieve
     * @param tokenId Token ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensRetrieveCall(String tokenId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/tokens/{tokenId}"
            .replaceAll("\\{" + "tokenId" + "\\}", localVarApiClient.escapeString(tokenId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "SignatureAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TokensRetrieveValidateBeforeCall(String tokenId, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'tokenId' is set
        if (tokenId == null) {
            throw new ApiException("Missing the required parameter 'tokenId' when calling v1TokensRetrieve(Async)");
        }
        

        okhttp3.Call localVarCall = v1TokensRetrieveCall(tokenId, _callback);
        return localVarCall;

    }

    /**
     * Get Token
     * Get token info by ID
     * @param tokenId Token ID (required)
     * @return Token
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public Token v1TokensRetrieve(String tokenId) throws ApiException {
        ApiResponse<Token> localVarResp = v1TokensRetrieveWithHttpInfo(tokenId);
        return localVarResp.getData();
    }

    /**
     * Get Token
     * Get token info by ID
     * @param tokenId Token ID (required)
     * @return ApiResponse&lt;Token&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Token> v1TokensRetrieveWithHttpInfo(String tokenId) throws ApiException {
        okhttp3.Call localVarCall = v1TokensRetrieveValidateBeforeCall(tokenId, null);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get Token (asynchronously)
     * Get token info by ID
     * @param tokenId Token ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensRetrieveAsync(String tokenId, final ApiCallback<Token> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TokensRetrieveValidateBeforeCall(tokenId, _callback);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1TokensUpdate
     * @param tokenId Token ID (required)
     * @param updateTokenRequest Request Body (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensUpdateCall(String tokenId, UpdateTokenRequest updateTokenRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = updateTokenRequest;

        // create path and map variables
        String localVarPath = "/api/v1/tokens/{tokenId}"
            .replaceAll("\\{" + "tokenId" + "\\}", localVarApiClient.escapeString(tokenId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth", "SignatureAuth" };
        return localVarApiClient.buildCall(localVarPath, "PATCH", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1TokensUpdateValidateBeforeCall(String tokenId, UpdateTokenRequest updateTokenRequest, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'tokenId' is set
        if (tokenId == null) {
            throw new ApiException("Missing the required parameter 'tokenId' when calling v1TokensUpdate(Async)");
        }
        
        // verify the required parameter 'updateTokenRequest' is set
        if (updateTokenRequest == null) {
            throw new ApiException("Missing the required parameter 'updateTokenRequest' when calling v1TokensUpdate(Async)");
        }
        

        okhttp3.Call localVarCall = v1TokensUpdateCall(tokenId, updateTokenRequest, _callback);
        return localVarCall;

    }

    /**
     * Update token
     * Update a tokens.
     * @param tokenId Token ID (required)
     * @param updateTokenRequest Request Body (required)
     * @return Token
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public Token v1TokensUpdate(String tokenId, UpdateTokenRequest updateTokenRequest) throws ApiException {
        ApiResponse<Token> localVarResp = v1TokensUpdateWithHttpInfo(tokenId, updateTokenRequest);
        return localVarResp.getData();
    }

    /**
     * Update token
     * Update a tokens.
     * @param tokenId Token ID (required)
     * @param updateTokenRequest Request Body (required)
     * @return ApiResponse&lt;Token&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Token> v1TokensUpdateWithHttpInfo(String tokenId, UpdateTokenRequest updateTokenRequest) throws ApiException {
        okhttp3.Call localVarCall = v1TokensUpdateValidateBeforeCall(tokenId, updateTokenRequest, null);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Update token (asynchronously)
     * Update a tokens.
     * @param tokenId Token ID (required)
     * @param updateTokenRequest Request Body (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1TokensUpdateAsync(String tokenId, UpdateTokenRequest updateTokenRequest, final ApiCallback<Token> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1TokensUpdateValidateBeforeCall(tokenId, updateTokenRequest, _callback);
        Type localVarReturnType = new TypeToken<Token>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
