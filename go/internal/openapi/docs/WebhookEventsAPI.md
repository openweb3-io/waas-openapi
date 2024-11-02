# \WebhookEventsAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1WebhooksEventsList**](WebhookEventsAPI.md#V1WebhooksEventsList) | **Get** /api/v1/webhooks/events | List webhook event types



## V1WebhooksEventsList

> CursorIteratorEventType V1WebhooksEventsList(ctx).Cursor(cursor).Limit(limit).Execute()

List webhook event types



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
	limit := int32(56) // int32 | The number of records to return default: 100 (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhookEventsAPI.V1WebhooksEventsList(context.Background()).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhookEventsAPI.V1WebhooksEventsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1WebhooksEventsList`: CursorIteratorEventType
	fmt.Fprintf(os.Stdout, "Response from `WebhookEventsAPI.V1WebhooksEventsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhooksEventsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **string** |  | 
 **limit** | **int32** | The number of records to return default: 100 | 

### Return type

[**CursorIteratorEventType**](CursorIteratorEventType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

