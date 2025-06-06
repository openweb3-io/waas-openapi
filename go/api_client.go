package waas

import (
	"bytes"
	"encoding/hex"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/openweb3-io/waas-openapi/go/internal/signature"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
	"github.com/openweb3-io/waas-openapi/go/internal/version"
)

type (
	ApiClientOptions struct {
		Debug bool

		ApiKey string
		Secret string

		// Overrides the base URL (protocol + hostname) used for all requests sent by this waas client. (Useful for testing)
		ServerUrl  *url.URL
		HTTPClient *http.Client
	}
	ApiClient struct {
		Address         *Address
		Chain           *Chain
		Token           *Token
		Transaction     *Transaction
		Wallet          *Wallet
		WebhookEndpoint *WebhookEndpoint
		WebhookEvent    *WebhookEvent
		Sweep           *Sweep
		GasStation      *GasStation
	}
)

var defaultHTTPClient = &http.Client{
	Timeout: 60 * time.Second,
}

func New(options *ApiClientOptions) *ApiClient {
	if options == nil {
		panic("options is required")
	}

	if len(options.ApiKey) == 0 {
		panic("apiKey is required")
	}
	if len(options.Secret) == 0 {
		panic("secret is required")
	}

	conf := openapi.NewConfiguration()
	conf.Scheme = "https"
	conf.Host = "api.waas.openweb3.io"
	conf.HTTPClient = defaultHTTPClient
	conf.Middleware = func(req *http.Request) {
		requestTime := fmt.Sprintf("%d", time.Now().UnixMilli())
		req.Header.Set("X-Request-Time", requestTime)

		var dataToBeSignature string
		if strings.ToUpper(req.Method) == "POST" || strings.ToUpper(req.Method) == "PUT" {
			body, err := io.ReadAll(req.Body)
			if err != nil {
				log.Printf("Error reading body: %v", err)
			}
			saveBody := body
			savecl := req.ContentLength
			defer func() {
				// set body back to the original value when the middleware is done
				req.Body = io.NopCloser(bytes.NewBuffer(saveBody))
				req.ContentLength = savecl
			}()

			dataToBeSignature = string(body)
		}
		dataToBeSignature = dataToBeSignature + req.URL.RequestURI() + requestTime

		signer := signature.Get(signature.SigningMethodEd25519)
		privateKeyBytes, err := hex.DecodeString(options.Secret)
		if err != nil {
			log.Printf("Error private key format: %v", err)
		}

		signBytes, err := signer.Sign(privateKeyBytes, []byte(dataToBeSignature))
		if err != nil {
			log.Printf("Error generating signature: %v", err)
		}
		signData := hex.EncodeToString(signBytes)

		req.Header.Set("X-Signature", signData)
	}

	conf.Debug = options.Debug
	if options.ServerUrl != nil {
		conf.Scheme = options.ServerUrl.Scheme
		conf.Host = options.ServerUrl.Host
	}
	if options.HTTPClient != nil {
		conf.HTTPClient = options.HTTPClient
	}
	conf.AddDefaultHeader("X-Api-Key", options.ApiKey)
	conf.UserAgent = fmt.Sprintf("waas-openapi/%s/go", version.Version)
	apiClient := openapi.NewAPIClient(conf)

	return &ApiClient{
		Address: &Address{
			api: apiClient,
		},
		Chain: &Chain{
			api: apiClient,
		},
		Token: &Token{
			api: apiClient,
		},
		Transaction: &Transaction{
			api: apiClient,
		},
		Wallet: &Wallet{
			api: apiClient,
		},
		WebhookEndpoint: &WebhookEndpoint{
			api: apiClient,
		},
		WebhookEvent: &WebhookEvent{
			api: apiClient,
		},
		Sweep: &Sweep{
			api: apiClient,
		},
		GasStation: &GasStation{
			api: apiClient,
		},
	}
}
