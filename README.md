# Ultron Evolution

BTC 量化交易系統的風險防護機制回測展示頁面。

## 簡介

我們深入研究過去的 BTC 重大崩盤事件，發現崩盤前，幣安 BTCUSDT 永續合約的多空比（LSUR）與持倉量（Open Interest）都會出現可偵測的異常訊號。

基於這些發現，我們開發了兩道風險過濾機制：

- **Short Filter** — 監控鏈上大額轉帳活動，封鎖強勢上漲中的假空單信號
- **Long Filter** — 偵測 LSUR 與 OI 異常，在崩盤前自動封鎖多單進場

本頁面展示加入 Filter 前後的回測績效對比。

## Live Demo

[https://bensonsun.github.io/ultron-evolution/](https://bensonsun.github.io/ultron-evolution/)
