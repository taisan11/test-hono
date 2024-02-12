# 色々なブラウザの初期ヘッダーとか
## Windows
### chrome
#### ヘッダー
Headers(15) {
  'accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-encoding' => 'gzip, deflate, br',
  'accept-language' => 'ja,en-US;q=0.9,en;q=0.8',
  'cache-control' => 'max-age=0',
  'cookie' => '_ga=GA1.1.975353803.1707124782; _ga_R1FN4KJKJH=GS1.1.1707180544.2.1.1707180902.0.0.0',
  'host' => '127.0.0.1:8787',
  'sec-ch-ua' => '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  'sec-ch-ua-mobile' => '?0',
  'sec-ch-ua-platform' => '"Windows"',
  'sec-fetch-dest' => 'document',
  'sec-fetch-mode' => 'navigate',
  'sec-fetch-site' => 'none',
  'sec-fetch-user' => '?1',
  'upgrade-insecure-requests' => '1',
  'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  [immutable]: true
}
### edge(クロミウム版)
#### ヘッダー
Headers(14) {
  'accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-encoding' => 'gzip, deflate, br',
  'accept-language' => 'ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
  'host' => 'localhost:8787',
  'prefer' => 'safe',
  'sec-ch-ua' => '"Not A(Brand";v="99", "Microsoft Edge";v="121", "Chromium";v="121"',
  'sec-ch-ua-mobile' => '?0',
  'sec-ch-ua-platform' => '"Windows"',
  'sec-fetch-dest' => 'document',
  'sec-fetch-mode' => 'navigate',
  'sec-fetch-site' => 'none',
  'sec-fetch-user' => '?1',
  'upgrade-insecure-requests' => '1',
  'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
  [immutable]: true
}
### IE
#### ヘッダー
Headers(6) {
  'accept' => 'text/html, application/xhtml+xml, image/jxr, */*',
  'accept-encoding' => 'gzip, deflate',
  'accept-language' => 'ja-JP,ja;q=0.9',
  'host' => '127.0.0.1:8787',
  'prefer' => 'safe',
  'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
  [immutable]: true
}
## iOS
### Safari(WebKit)(Secure Share Net経由)
Secure Share Net経由なので余計なものが入ってたり一部のヘッダーが消えている可能性があります
WebKitは多分全部一緒なので別ブラウザでの測定はやっていません
#### ヘッダー
Headers(6) {
  'accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'accept-encoding' => 'gzip, deflate',
  'accept-language' => 'ja',
  'host' => 'ts.ssnetwork.io:32112',
  'upgrade-insecure-requests' => '1',
  'user-agent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1',
  [immutable]: true
}