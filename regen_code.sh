#!/bin/sh

set -ex

rm -fr go/internal/openapi
yarn openapi-generator-cli generate -i openapi.json -g go -o go/internal/openapi -c go/openapi-generator-config.json -t go/templates
rm -rf go/internal/openapi/go.mod
rm -rf go/internal/openapi/go.sum

rm -fr java/lib/src/main/java/io/openweb3/waas/internal
rm -fr java/lib/src/main/java/io/openweb3/waas/models
yarn openapi-generator-cli generate -i openapi.json -g java -o java/lib -c java/openapi-generator-config.json -t java/templates

rm -fr javascript/src/openapi/src
rm -fr javascript/src/openapi/test
rm -fr javascript/src/openapi/docs
yarn openapi-generator-cli generate -i openapi.json -g javascript -o javascript/src/openapi -c javascript/openapi-generator-config.json -t javascript/templates --type-mappings=set=Array

# yarn openapi-generator-cli generate -i openapi.json -g kotlin -o kotlin/lib/generated/openapi -c kotlin/openapi-generator-config.json -t kotlin/templates

# yarn openapi-generator-cli generate -i openapi.json -g ruby -o ruby -c ruby/openapi-generator-config.json -t ruby/templates

# yarn openapi-generator-cli generate -i openapi.json -g csharp-netcore -o csharp/ -c csharp/openapi-generator-config.json --global-property apis,models,supportingFiles,apiTests=false,apiDocs=false,modelTests=false,modelDocs=false

# yarn openapi-generator-cli generate -i openapi.json -g rust -o rust/ -c rust/openapi-generator-config.json -t rust/templates
