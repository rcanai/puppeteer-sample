# README

## Set up

```
$ cp ./dockerfiles/env.example ./dockerfiles/.env
```

## Install

```
$ dcf build
$ dcf run app yarn install
```

## Run

```
$ dcf up -d
$ dcf exec app yarn run n sample.js 
```

or 

```
$ dcf run app yarn run n sample.js  
```

## Samples

### Image downloader

`IMAGE_DOWNLOADER_URL` に指定したサイト内の画像を一括取得します。

```
$ dcf run app yarn run n samples/imageDownloader.js
$ ls -l ./downloadedImages | grep ^d | xargs rm -rf
```

### Twitter Login

ツイッターにログインして、ホーム画面のスクリーンショットを撮影します。  
ログイン情報は `.env` を修正してください

```
$ dcf run app yarn run n samples/twitterLogin.js
```

### iPhoneView

iPhoneで `https://github.co.jp` を閲覧した際のスクリーンショットを撮影します。 

```
$ dcf run app yarn run n samples/iPhoneView.js
```

## Other samples

- samples/getInnerHtml.js

