package waas

import (
	"context"

	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

type (
	TransactionOut             = openapi.Transaction
	CursorPageTransactionOut   = openapi.CursorPageTransaction
	TransferSource             = openapi.CreateTransferRequestSource
	TransferDestination        = openapi.CreateTransferRequestDestination
	TransferSourceAddress      = openapi.TransferSourceAddress
	TransferDestinationAddress = openapi.TransferDestinationAddress
	TransferFee                = openapi.Fee
	TransferOut                = openapi.CreateTransferResponse
	EstimateFeeOut             = openapi.EstimateFeeResponse
)

type Transaction struct {
	api *openapi.APIClient
}

type EstimateFeeIn struct {
	Source      TransferSource
	Destination TransferDestination
	Amount      string
	TokenId     string
	Extra       *string
	Memo        *string
}

type TransferIn struct {
	Source      TransferSource
	Destination TransferDestination
	Amount      string
	TokenId     string
	Fee         *TransferFee
	Extra       *string
	Memo        *string
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

func TransferSourceAddressAsTransferSource(v *TransferSourceAddress) TransferSource {
	return TransferSource{
		TransferSourceAddress: v,
	}
}

func TransferDestinationAddressAsTransferDestination(v *TransferDestinationAddress) TransferDestination {
	return TransferDestination{
		TransferDestinationAddress: v,
	}
}

func (e *Transaction) List(ctx context.Context, options *ListTransactionOptions) (*CursorPageTransactionOut, error) {
	req := e.api.TransactionsAPI.V1TransactionsList(ctx)
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
	return out, nil
}

func (e *Transaction) Retrieve(ctx context.Context, transactionId string) (*TransactionOut, error) {
	req := e.api.TransactionsAPI.V1TransactionsRetrieve(ctx, transactionId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *Transaction) Transfer(ctx context.Context, transferIn *TransferIn) (*TransferOut, error) {
	req := e.api.TransactionsAPI.V1TransactionsTransfer(ctx)
	req = req.CreateTransferRequest(
		openapi.CreateTransferRequest{
			Source:      transferIn.Source,
			Destination: transferIn.Destination,
			Amount:      transferIn.Amount,
			TokenId:     transferIn.TokenId,
			Extra:       transferIn.Extra,
			Fee:         transferIn.Fee,
			Memo:        transferIn.Memo,
		},
	)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}

func (e *Transaction) EstimateFee(
	ctx context.Context,
	estimateFeeIn *EstimateFeeIn,
) (*EstimateFeeOut, error) {
	req := e.api.TransactionsAPI.V1TransactionsEstimateFee(ctx)
	req = req.EstimateFeeRequest(openapi.EstimateFeeRequest{
		Source:      estimateFeeIn.Source,
		Destination: estimateFeeIn.Destination,
		Amount:      estimateFeeIn.Amount,
		TokenId:     estimateFeeIn.TokenId,
		Extra:       estimateFeeIn.Extra,
		Memo:        estimateFeeIn.Memo,
	})

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	return out, nil
}
