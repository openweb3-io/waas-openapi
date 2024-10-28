package signature

import (
	"crypto/ed25519"
	"crypto/sha256"
)

const SigningMethodEd25519 SigningMethodType = "ed25519"

func init() {
	defaultSignatureManager.register(SigningMethodEd25519, &ed25519Signer{})
}

type ed25519Signer struct {
}

func (*ed25519Signer) Verify(publicKey []byte, data []byte, signatureBytes []byte) (err error) {
	contentHash := sha256.Sum256(data)

	// 验证签名
	valid := ed25519.Verify(publicKey, contentHash[:], signatureBytes)
	if !valid {
		return ErrSignatureNotVerified
	}

	return nil
}

func (*ed25519Signer) Sign(privateKey []byte, data []byte) (sign []byte, err error) {
	// 生成 Ed25519 签名密钥
	sk := ed25519.NewKeyFromSeed(privateKey[:32])

	contentHash := sha256.Sum256(data)
	// 签名哈希消息
	signature := ed25519.Sign(sk, contentHash[:])
	return signature, nil
}
