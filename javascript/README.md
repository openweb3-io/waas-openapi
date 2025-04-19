<h1 align="center">
    <a style="text-decoration: none" href="https://pay.openweb3.io">
      <img width="120" src="" />
      <p align="center">WaaS - Wallet as a Service</p>
    </a>
</h1>
<h2 align="center">
  <a href="https://waas.openweb3.io">Website</a> | <a href="https://docs.waas.openweb3.io">Documentation</a> | <a href="https://pay.openweb3.io/slack">Community Slack</a>
<h2>

Typescript/Javascript library for interacting with the WaaS API and verifying WaaS signatures

![GitHub tag](https://img.shields.io/github/tag/waas/WaaS.svg)
[![NPM version](https://img.shields.io/npm/v/waas.svg)](https://www.npmjs.com/package/waas)

[![Join our slack](https://img.shields.io/badge/Slack-join%20the%20community-blue?logo=slack&style=social)](https://waas.openweb3.io/slack/)

# Usage Documentation

You can find general usage documentation at <https://docs.waas.openweb3.io>. For complete API documentation with code examples for each endpoint in all of our official client libraries head over to our API documentation site at <https://api.waas.openweb3.io>.

# Language Support

<table style="table-layout:fixed; white-space: nowrap;">
  <th colspan="2">⚡️ Features ⚡️</th>
  <tr>
    <th>Officially Supported</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>API Support</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Signature Verification</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Caveats</th>
    <th>None! 🚀</th>
  </tr>
</table>

# Installation

```sh
npm install @openweb3-io/waas
# or
yarn add @openweb3-io/waas
```

# Usage

```js
import { ApiClient } from "@openweb3-io/waas";

const apiClient = new ApiClient("API-KEY", "PRIVATE KEY");
const chains = await apiClient.chains.list({ limit: 20 });
```

# Development

First checkout the [core README](../README.md#development) for details on how to generate our API bindings, then follow the steps below.

## Requirements

- node
- yarn

## Building the library

```sh
yarn
yarn build
```

## Contributing

Before opening a PR be sure to format your code!

```sh
yarn lint:fix
```

## Running Tests

Simply run:

```sh
yarn test
```
