# bookmarklet（　開発原案　）
ブックマークレットの作成を効率化するためのサービスを開発するためのリポジトリです！

## なぜ作ったのか

- 自分自身がブックマークレットを作成するときに成形する作業が手間がかかっていたため、  
効率よく作成できないかと思ったのが作成に至った経緯です！
 
### 現状利用サービス  

#### Javascript 成形
[JSきれい ～JavaScript整形ツール～](https://tools.m-bsys.com/development_tooles/jsbeautifier.php)

#### ブックマークレット変換
[ブックマークレット変換（成形）](http://websitetools.biz-box.jp/js_bookmarklet.php)

## 機能

- ブックマークレットを1行から複数行に成形
- JavaScriptをブックマークレットで利用できるように1行に成形
- よく利用するブックマークレットをテンプレート化し呼び出せるようにする。

## 開発環境

### フロントエンド

素 HTML, Javascript, CSS

### バックエンド

サーバーとのやり取りなし

### サーバー

[XSERVER](https://www.xserver.ne.jp/)

## 開発手順

### 機能拡張について

新しく機能を追加する場合は Projects に Issue を立ててください。

### ブランチについて

機能拡張をされる場合は、  
branch は master から feature を切って作業してください。  
feature ブランチの名前は基本`feature/Issue番号`でお願いします。  
作業が終わったら master に pull request をよろしくお願いします。

### 作業フォルダについて

機能拡張される場合は、機能ごとにルート直下にフォルダを切ってください。  
`bookmarklet/user`  
例）bookmarklet/cti-tl/index.html
