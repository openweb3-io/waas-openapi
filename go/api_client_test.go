package waas

import (
	"context"
	"github.com/joho/godotenv"
	"github.com/stretchr/testify/suite"
	"log"
	"net/url"
	"os"
	"testing"
)

var (
	apiHost    string
	apiKey     string
	privateKey string
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	apiHost = os.Getenv("API_HOST")
	apiKey = os.Getenv("API_KEY")
	privateKey = os.Getenv("PRIVATE_KEY")
}

type apiClientTestSuite struct {
	suite.Suite
	client *ApiClient
}

func (s *apiClientTestSuite) SetupSuite() {
	serverUrl, _ := url.Parse(apiHost)
	s.client = New(&ApiClientOptions{
		Debug:      true,
		ApiKey:     apiKey,
		Secret:     privateKey,
		ServerUrl:  serverUrl,
		HTTPClient: defaultHTTPClient,
	})
}

func (s *apiClientTestSuite) TestAddress_List() {
	reply, err := s.client.Address.List(context.Background(), &ListAddressOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	s.NotNil(reply.NextCursor)
	s.NotNil(reply.PrevCursor)
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Address)
		s.NotEmpty(reply.Items[0].ChainId)
		s.NotEmpty(reply.Items[0].CreatedAt)
		s.NotEmpty(reply.Items[0].UpdatedAt)
	}
}

func (s *apiClientTestSuite) TestChain_List() {
	reply, err := s.client.Chain.List(context.Background(), &ListChainOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	s.NotNil(reply.NextCursor)
	s.NotNil(reply.PrevCursor)
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Id)
		s.NotEmpty(reply.Items[0].Name)
		s.NotEmpty(reply.Items[0].CreatedAt)
		s.NotEmpty(reply.Items[0].UpdatedAt)
	}
}

func (s *apiClientTestSuite) TestToken_List() {
	reply, err := s.client.Token.List(context.Background(), &ListTokenOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	s.NotNil(reply.NextCursor)
	s.NotNil(reply.PrevCursor)
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Id)
		s.NotEmpty(reply.Items[0].Name)
		s.NotEmpty(reply.Items[0].CreatedAt)
		s.NotEmpty(reply.Items[0].UpdatedAt)
	}
}

func (s *apiClientTestSuite) TestTransaction_List() {
	reply, err := s.client.Transaction.List(context.Background(), &ListTransactionOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Id)
		s.NotNil(reply.Items[0].Source)
		s.NotNil(reply.Items[0].Destination)
		s.NotEmpty(reply.Items[0].CreatedAt)
		s.NotEmpty(reply.Items[0].UpdatedAt)
	}
}

func (s *apiClientTestSuite) TestWallet_List() {
	reply, err := s.client.Wallet.List(context.Background(), &ListWalletOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Id)
		s.NotEmpty(reply.Items[0].Name)
		s.NotEmpty(reply.Items[0].CreatedAt)
		s.NotEmpty(reply.Items[0].UpdatedAt)
	}
}

func TestApiClientSuite(t *testing.T) {
	suite.Run(t, new(apiClientTestSuite))
}
