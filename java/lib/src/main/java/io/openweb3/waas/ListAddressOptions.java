package io.openweb3.waas;

public final class ListAddressOptions extends ListOptions<ListAddressOptions> {
    private String walletId;
    private String type;

    public ListAddressOptions walletId(final String walletId) {
        this.walletId = walletId;
        return this;
    }

    public ListAddressOptions type(final String type) {
        this.type = type;
        return this;
    }

    public void setWalletId(final String walletId) {
        this.walletId = walletId;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public String getWalletId() {
        return walletId;
    }

    public String getType() {
        return type;
    }
}
