# \WebhookEndpointsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1WebhooksCreate**](WebhookEndpointsAPI.md#V1WebhooksCreate) | **Post** /api/v1/webhooks/endpoints | Create webhook endpoint
[**V1WebhooksDelete**](WebhookEndpointsAPI.md#V1WebhooksDelete) | **Delete** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
[**V1WebhooksList**](WebhookEndpointsAPI.md#V1WebhooksList) | **Get** /api/v1/endpoints | List webhook endpoints
[**V1WebhooksRetrieve**](WebhookEndpointsAPI.md#V1WebhooksRetrieve) | **Get** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
[**V1WebhooksUpdate**](WebhookEndpointsAPI.md#V1WebhooksUpdate) | **Patch** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint



## V1WebhooksCreate

> Endpoint V1WebhooksCreate(ctx).CreateEndpoint(createEndpoint).Execute()

Create webhook endpoint



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	createEndpoint := *openapiclient.NewCreateEndpoint([]string{"EventTypes_example"}, "Url_example") // CreateEndpoint | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksCreate(context.Background()).CreateEndpoint(createEndpoint).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksCreate`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEndpoint** | [**CreateEndpoint**](CreateEndpoint.md) | Request body | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhooksDelete

> Endpoint V1WebhooksDelete(ctx, endpointId).Body(body).Execute()

Delete webhook endpoint



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	endpointId := "endpointId_example" // string | Endpoint ID
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksDelete(context.Background(), endpointId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksDelete`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhooksList

> CursorPageEndpoint V1WebhooksList(ctx).Cursor(cursor).Limit(limit).Execute()

List webhook endpoints



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	cursor := "cursor_example" // string |  (optional)
	limit := int32(56) // int32 | The number of records to return default: 20 (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksList`: CursorPageEndpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** |  | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorPageEndpoint**](CursorPageEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhooksRetrieve

> Endpoint V1WebhooksRetrieve(ctx, endpointId).Execute()

Get webhook endpoint



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	endpointId := "endpointId_example" // string | Endpoint ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksRetrieve(context.Background(), endpointId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksRetrieve`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhooksUpdate

> Endpoint V1WebhooksUpdate(ctx, endpointId).UpdateEndpoint(updateEndpoint).Execute()

Update webhook endpoint



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/openapi"
)

func main() {
	endpointId := "endpointId_example" // string | Endpoint ID
	updateEndpoint := *openapiclient.NewUpdateEndpoint([]string{"EventTypes_example"}) // UpdateEndpoint | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksUpdate(context.Background(), endpointId).UpdateEndpoint(updateEndpoint).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksUpdate`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateEndpoint** | [**UpdateEndpoint**](UpdateEndpoint.md) | Request body | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

