/*
 * wallet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package waas

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"errors"
	"log"
	"time"

	"encoding/base64"
	"github.com/openweb3-io/waas-openapi/go/internal/openapi"
)

// PtrBool is a helper routine that returns a pointer to given boolean value.
func PtrBool(v bool) *bool { return &v }

// PtrInt is a helper routine that returns a pointer to given integer value.
func PtrInt(v int) *int { return &v }

// PtrInt32 is a helper routine that returns a pointer to given integer value.
func PtrInt32(v int32) *int32 { return &v }

// PtrInt64 is a helper routine that returns a pointer to given integer value.
func PtrInt64(v int64) *int64 { return &v }

// PtrFloat32 is a helper routine that returns a pointer to given float value.
func PtrFloat32(v float32) *float32 { return &v }

// PtrFloat64 is a helper routine that returns a pointer to given float value.
func PtrFloat64(v float64) *float64 { return &v }

// PtrString is a helper routine that returns a pointer to given string value.
func PtrString(v string) *string { return &v }

// PtrTime is helper routine that returns a pointer to given Time value.
func PtrTime(v time.Time) *time.Time { return &v }

type (
	NullableBool    = openapi.NullableBool
	NullableInt     = openapi.NullableInt
	NullableInt32   = openapi.NullableInt32
	NullableInt64   = openapi.NullableInt64
	NullableFloat32 = openapi.NullableFloat32
	NullableFloat64 = openapi.NullableFloat64
	NullableString  = openapi.NullableString
	NullableTime    = openapi.NullableTime
)

func NewNullableBool(val *bool) *NullableBool {
	return openapi.NewNullableBool(val)
}
func NewNullableInt(val *int) *NullableInt {
	return openapi.NewNullableInt(val)
}

func NewNullableInt32(val *int32) *NullableInt32 {
	return openapi.NewNullableInt32(val)
}
func NewNullableInt64(val *int64) *NullableInt64 {
	return openapi.NewNullableInt64(val)
}

func NewNullableFloat32(val *float32) *NullableFloat32 {
	return openapi.NewNullableFloat32(val)
}

func NewNullableFloat64(val *float64) *NullableFloat64 {
	return openapi.NewNullableFloat64(val)
}

func NewNullableString(val *string) *NullableString {
	return openapi.NewNullableString(val)
}

func NewNullableTime(val *time.Time) *NullableTime {
	return openapi.NewNullableTime(val)
}

/**
 * 公钥验证签名
 */
func verify(data []byte, publicKey []byte, signature string) (err error) {
	block, _ := pem.Decode(publicKey)
	if block == nil {
		return errors.New("public key error")
	}

	signBytes, err := base64.StdEncoding.DecodeString(signature)
	if err != nil {
		log.Printf("signature contain invalid charactors, %s", signature)
		return err
	}

	pub, err := x509.ParsePKCS1PublicKey(block.Bytes)
	if err != nil {
		return err
	}

	hashFunc := crypto.SHA256
	h := hashFunc.New()
	h.Write(data)
	hashed := h.Sum(nil)
	return rsa.VerifyPKCS1v15(pub, hashFunc, hashed, signBytes)
}

/**
 * 私钥去生成签名
 */
func genSign(data []byte, privateKey []byte) (sign string, err error) {
	block, _ := pem.Decode(privateKey)
	if block == nil {
		return "", errors.New("private key error")
	}
	priv, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	if err != nil {
		return "", err
	}
	hashFunc := crypto.SHA256
	h := hashFunc.New()
	h.Write(data)
	hashed := h.Sum(nil)
	signBytes, err := rsa.SignPKCS1v15(rand.Reader, priv, hashFunc, hashed)
	return base64.StdEncoding.EncodeToString(signBytes), err
}
