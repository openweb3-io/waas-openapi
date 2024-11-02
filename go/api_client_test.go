package waas

import (
	"context"
	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
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

	testSourceAddress      string
	testDestinationAddress string
	testWalletId           string
	testAmount             string
	testChain              string
	testToken              string
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	apiHost = os.Getenv("API_HOST")
	apiKey = os.Getenv("API_KEY")
	privateKey = os.Getenv("PRIVATE_KEY")

	testSourceAddress = os.Getenv("TEST_SOURCE_ADDRESS")
	testDestinationAddress = os.Getenv("TEST_DESTINATION_ADDRESS")
	testWalletId = os.Getenv("TEST_WALLET_ID")
	testAmount = os.Getenv("TEST_AMOUNT")
	testChain = os.Getenv("TEST_CHAIN")
	testToken = os.Getenv("TEST_TOKEN")
}

type apiClientTestSuite struct {
	suite.Suite
	client *ApiClient

	lastWallet  string
	lastAddress string
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

func (s *apiClientTestSuite) TestChain_Retrieve() {
	reply, err := s.client.Chain.Retrieve(context.Background(), testChain)
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Id)
	s.NotEmpty(reply.Name)
	s.NotEmpty(reply.Symbol)
	s.NotEmpty(reply.IconUrl)
	s.NotEmpty(reply.ExplorerTxUrl)
	s.NotEmpty(reply.ExplorerBlockUrl)
	s.NotEmpty(reply.ExplorerAddressUrl)
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

func (s *apiClientTestSuite) TestToken_Retrieve() {
	reply, err := s.client.Token.Retrieve(context.Background(), testToken)
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Id)
	s.NotEmpty(reply.Name)
	s.NotEmpty(reply.Symbol)
	s.NotEmpty(reply.IconUrl)
	s.NotEmpty(reply.MinDepositAmount)
	s.NotEmpty(reply.MinWithdrawAmount)
	s.NotEmpty(reply.MaxWithdrawAmount)
	s.NotEmpty(reply.Decimals)
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

func (s *apiClientTestSuite) TestTransaction_EstimateFee() {
	reply, err := s.client.Transaction.EstimateFee(context.Background(), &EstimateFeeIn{
		Source: openapi.CreateTransferRequestSource{
			TransferSourceAddress: &openapi.TransferSourceAddress{
				Address:  testSourceAddress,
				WalletId: testWalletId,
			},
		},
		Destination: openapi.CreateTransferRequestDestination{
			TransferDestinationAddress: &openapi.TransferDestinationAddress{
				Address: testDestinationAddress,
			},
		},
		Amount:  testAmount,
		TokenId: testChain,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Amount)
	s.NotNil(reply.TokenId)
}

func (s *apiClientTestSuite) TestTransaction_Transfer() {
	source := TransferSourceAddress{
		Address:  testSourceAddress,
		WalletId: testWalletId,
	}
	destination := TransferDestinationAddress{
		Address: testDestinationAddress,
	}
	reply, err := s.client.Transaction.Transfer(context.Background(), &TransferIn{
		Source:      source,
		Destination: destination,
		Amount:      testAmount,
		TokenId:     testChain,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.TransactionId)
}

func (s *apiClientTestSuite) TestWallet_1_Create() {
	reply, err := s.client.Wallet.Create(context.Background(), &CreateWalletIn{
		Name: uuid.NewString(),
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Id)
	s.NotEmpty(reply.Name)
	s.NotEmpty(reply.CreatedAt)

	s.lastWallet = reply.Id
}

func (s *apiClientTestSuite) TestWallet_2_Retrieve() {
	reply, err := s.client.Wallet.Retrieve(context.Background(), s.lastWallet)
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Id)
	s.NotEmpty(reply.Name)
	s.NotEmpty(reply.CreatedAt)
}

func (s *apiClientTestSuite) TestWallet_3_List() {
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

func (s *apiClientTestSuite) TestWallet_4_CreateAddress() {
	reply, err := s.client.Wallet.CreateAddress(context.Background(), s.lastWallet, &CreateAddressIn{
		ChainId: testChain,
		Type:    "DEPOSIT",
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Address)

	s.lastAddress = reply.Address
}

func (s *apiClientTestSuite) TestWallet_5_GetAddress() {
	reply, err := s.client.Wallet.GetAddress(context.Background(), s.lastWallet, s.lastAddress)
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Address)
}

func (s *apiClientTestSuite) TestWallet_6_ListAddress() {
	reply, err := s.client.Wallet.ListAddresses(context.Background(), s.lastWallet, &ListAddressOptions{
		Limit: 10,
	})
	if err != nil {
		s.T().Error(err)
	}

	s.NotNil(reply.Items)
	s.NotNil(reply.Total)
	s.GreaterOrEqual(int(reply.Total), len(reply.Items))
	if len(reply.Items) > 0 {
		s.NotEmpty(reply.Items[0].Address)
		s.NotEmpty(reply.Items[0].CreatedAt)
	}
}

func (s *apiClientTestSuite) TestWallet_7_Delete() {
	reply, err := s.client.Wallet.Delete(context.Background(), s.lastWallet)
	if err != nil {
		s.T().Error(err)
	}

	s.NotEmpty(reply.Id)
	s.NotEmpty(reply.Name)
	s.NotEmpty(reply.CreatedAt)
}

func TestApiClientSuite(t *testing.T) {
	suite.Run(t, new(apiClientTestSuite))
}
