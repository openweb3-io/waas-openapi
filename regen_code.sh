#!/bin/sh

set -ex

rm -fr go/internal/openapi
yarn openapi-generator-cli generate -i openapi.json -g go -o go/internal/openapi -c go/openapi-generator-config.json -t go/templates --openapi-normalizer SIMPLIFY_ONEOF_ANYOF=false
rm -rf go/internal/openapi/go.mod
rm -rf go/internal/openapi/go.sum
rm -rf go/internal/openapi/test

rm -fr java/lib/src/main/java/io/openweb3/waas/internal
rm -fr java/lib/src/main/java/io/openweb3/waas/models
yarn openapi-generator-cli generate -i openapi.json -g java -o java/lib -c java/openapi-generator-config.json -t java/templates --openapi-normalizer SIMPLIFY_ONEOF_ANYOF=false
rm -rf java/lib/src/test/java/io/openweb3/waas/internal
rm -rf java/lib/src/test/java/io/openweb3/waas/models
cp -f java/templates/pom.xml java/lib/
cp -f java/templates/build.gradle java/lib/

rm -fr javascript/src/openapi/src
rm -fr javascript/src/openapi/test
rm -fr javascript/src/openapi/docs
yarn openapi-generator-cli generate -i openapi.json -g typescript -o javascript/src/openapi -c javascript/openapi-generator-config.json -t javascript/templates --type-mappings=set=Array  --openapi-normalizer SIMPLIFY_ONEOF_ANYOF=false
sed -i '' 's/type //g' ./javascript/src/openapi/index.ts
echo "export * from '../models/GetGasStationDepositAddressRequest'" >> javascript/src/openapi/models/all.ts

# yarn openapi-generator-cli generate -i openapi.json -g kotlin -o kotlin/lib/generated/openapi -c kotlin/openapi-generator-config.json -t kotlin/templates

# yarn openapi-generator-cli generate -i openapi.json -g ruby -o ruby -c ruby/openapi-generator-config.json -t ruby/templates

# yarn openapi-generator-cli generate -i openapi.json -g csharp-netcore -o csharp/ -c csharp/openapi-generator-config.json --global-property apis,models,supportingFiles,apiTests=false,apiDocs=false,modelTests=false,modelDocs=false

# yarn openapi-generator-cli generate -i openapi.json -g rust -o rust/ -c rust/openapi-generator-config.json -t rust/templates
