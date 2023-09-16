# test-admin

## 日本語の解説
https://qiita.com/dashogo/items/1ab1edeb64a06f7d74c6

## Installation

Install the application dependencies by running:
アプリケーションの依存関係をインストールしてください：

```sh
npm install
```

## Development

Start the application in development mode by running:
開発モードでアプリケーションを起動します：

```sh
npm run dev
```

## Production

Build the application in production mode by running:
本番モードでアプリケーションをビルドします：

```sh
npm run build
```

## DataProvider

付属のデータプロバイダは、[ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server) を使用します。JSONPlaceholder](https://jsonplaceholder.typicode.com/)のような、[JSON Server](https://github.com/typicode/json-server)を利用したREST APIに適合します。

プロジェクトのルートに `.env` ファイルがあり、その中に `VITE_JSON_SERVER_URL` 変数が含まれています。これをバックエンドのURLに設定します。デフォルトでは、ターゲット[JSONPlaceholder](https://jsonplaceholder.typicode.com/)に設定します。

## Authentication

同梱の認証プロバイダは、開発およびテスト目的でのみ使用してください。
srcディレクトリに `users.json` ファイルがあり、その中に使用できるユーザーが含まれています。

以下のユーザ名とパスワードでアプリケーションにサインインできます：
- janedoe / password
- johndoe / password

