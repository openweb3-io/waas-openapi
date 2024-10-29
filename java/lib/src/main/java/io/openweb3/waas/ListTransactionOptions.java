package io.openweb3.waas;

public final class ListTransactionOptions extends ListOptions<ListTransactionOptions> {
    private String[] walletIds;
    private String[] chainIds;
    private String[] tokenIds;
    private String[] assetIds;
    private String status;
    private String hash;


    public ListTransactionOptions status(final String status) {
        this.status = status;
        return this;
    }

    public ListTransactionOptions hash(final String hash) {
        this.hash = hash;
        return this;
    }

    public ListTransactionOptions assetIds(final String[] assetIds) {
        this.assetIds = assetIds;
        return this;
    }

    public ListTransactionOptions chainIds(final String[] chainIds) {
        this.chainIds = chainIds;
        return this;
    }

    public ListTransactionOptions tokenIds(final String[] tokenIds) {
        this.tokenIds = tokenIds;
        return this;
    }

    public ListTransactionOptions walletIds(final String[] walletIds) {
        this.walletIds = walletIds;
        return this;
    }

    public void setStatus(final String status) {
        this.status = status;
    }

    public void setHash(final String hash) {
        this.hash = hash;
    }

    public void setAssetIds(final String[] assetIds) {
        this.assetIds = assetIds;
    }

    public void setChainIds(final String[] chainIds) {
        this.chainIds = chainIds;
    }

    public void setTokenIds(final String[] tokenIds) {
        this.tokenIds = tokenIds;
    }

    public void setWalletIds(final String[] walletIds) {
        this.walletIds = walletIds;
    }

    public String getStatus() {
        return status;
    }

    public String getHash() {
        return hash;
    }

    public String[] getAssetIds() {
        return assetIds;
    }

    public String[] getChainIds() {
        return chainIds;
    }

    public String[] getTokenIds() {
        return tokenIds;
    }

    public String[] getWalletIds() {
        return walletIds;
    }
}
