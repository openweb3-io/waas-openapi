# \WebhookEndpointsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1WebhooksEndpointCreate**](WebhookEndpointsAPI.md#V1WebhooksEndpointCreate) | **Post** /api/v1/webhooks/endpoints | Create webhook endpoint
[**V1WebhooksEndpointDelete**](WebhookEndpointsAPI.md#V1WebhooksEndpointDelete) | **Delete** /api/v1/webhooks/endpoints/{endpointId} | Delete webhook endpoint
[**V1WebhooksEndpointList**](WebhookEndpointsAPI.md#V1WebhooksEndpointList) | **Get** /api/v1/webhooks/endpoints | List webhook endpoints
[**V1WebhooksEndpointRetrieve**](WebhookEndpointsAPI.md#V1WebhooksEndpointRetrieve) | **Get** /api/v1/webhooks/endpoints/{endpointId} | Get webhook endpoint
[**V1WebhooksEndpointUpdate**](WebhookEndpointsAPI.md#V1WebhooksEndpointUpdate) | **Patch** /api/v1/webhooks/endpoints/{endpointId} | Update webhook endpoint



## V1WebhooksEndpointCreate

> Endpoint V1WebhooksEndpointCreate(ctx).CreateEndpoint(createEndpoint).Execute()

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
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksEndpointCreate(context.Background()).CreateEndpoint(createEndpoint).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksEndpointCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEndpointCreate`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksEndpointCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEndpointCreateRequest struct via the builder pattern


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


## V1WebhooksEndpointDelete

> Endpoint V1WebhooksEndpointDelete(ctx, endpointId).Execute()

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksEndpointDelete(context.Background(), endpointId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksEndpointDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEndpointDelete`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksEndpointDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEndpointDeleteRequest struct via the builder pattern


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


## V1WebhooksEndpointList

> CursorIteratorEndpoint V1WebhooksEndpointList(ctx).Cursor(cursor).Limit(limit).Execute()

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
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksEndpointList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksEndpointList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEndpointList`: CursorIteratorEndpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksEndpointList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEndpointListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** |  | 
 **limit** | **int32** | The number of records to return default: 20 | 

### Return type

[**CursorIteratorEndpoint**](CursorIteratorEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhooksEndpointRetrieve

> Endpoint V1WebhooksEndpointRetrieve(ctx, endpointId).Execute()

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
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksEndpointRetrieve(context.Background(), endpointId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksEndpointRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEndpointRetrieve`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksEndpointRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEndpointRetrieveRequest struct via the builder pattern


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


## V1WebhooksEndpointUpdate

> Endpoint V1WebhooksEndpointUpdate(ctx, endpointId).UpdateEndpoint(updateEndpoint).Execute()

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
	updateEndpoint := *openapiclient.NewUpdateEndpoint() // UpdateEndpoint | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEndpointsAPI.V1WebhooksEndpointUpdate(context.Background(), endpointId).UpdateEndpoint(updateEndpoint).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsAPI.V1WebhooksEndpointUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEndpointUpdate`: Endpoint
	fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsAPI.V1WebhooksEndpointUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEndpointUpdateRequest struct via the builder pattern


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

