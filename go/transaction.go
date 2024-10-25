package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	TransactionOut     = openapi.Transaction
	PageTransactionOut = openapi.PageTransaction
	TransferIn         = openapi.CreateTransferRequest
	TransferOut        = openapi.CreateTransferResponse
	EstimateFeeIn      = openapi.EstimateFeeRequest
	EstimateFeeOut     = openapi.EstimateFeeResponse
)

type Transaction struct {
	api *openapi.APIClient
}

type ListTransactionOptions struct {
	WalletIds *[]string
	ChainIds  *[]string
	TokenIds  *[]string
	AssetIds  *[]string
	Network   *string
	Currency  *string
	Direction *string
	Hash      *string
	Status    *string
	Cursor    *string
	Limit     int
}

func (e *Transaction) List(ctx context.Context, options *ListTransactionOptions) (*PageTransactionOut, error) {
	req := e.api.TransactionsApi.V1TransactionsList(ctx)
	if options.WalletIds != nil {
		req = req.WalletIds(*options.WalletIds)
	}
	if options.ChainIds != nil {
		req = req.ChainIds(*options.ChainIds)
	}
	if options.TokenIds != nil {
		req = req.TokenIds(*options.TokenIds)
	}
	if options.AssetIds != nil {
		req = req.TokenIds(*options.AssetIds)
	}
	if options.Hash != nil {
		req = req.Hash(*options.Hash)
	}
	if options.Status != nil {
		req = req.Status(*options.Status)
	}
	if options.Cursor != nil {
		req = req.Cursor(*options.Cursor)
	}
	req = req.Limit(int32(options.Limit))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Transaction) Retrieve(ctx context.Context, transactionId string) (*TransactionOut, error) {
	req := e.api.TransactionsApi.V1TransactionsRetrieve(ctx, transactionId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}
func (e *Transaction) Transfer(ctx context.Context, transferIn *TransferIn) (*TransferOut, error) {
	req := e.api.TransactionsApi.V1TransactionsTransfer(ctx)
	req = req.CreateTransferRequest(*transferIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}

func (e *Transaction) EstimateFee(ctx context.Context, estimateFeeIn *EstimateFeeIn) (*EstimateFeeOut, error) {
	req := e.api.TransactionsApi.V1TransactionsEstimateFee(ctx)
	req = req.EstimateFeeRequest(*estimateFeeIn)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return &out, nil
}
