(() => {
  // ═══════════════════════════════════════════════════════
  //  i18n
  // ═══════════════════════════════════════════════════════
  const LANG_KEY = "ultron_lang";
  const translations = {
    en: {
      "site-title": "CoinKarma Ultron",
      "hero-badge": "Post-Crisis Response",
      "hero-title": "Turning a -5.65\u03c3 Event Into Stronger Protection",
      "hero-subtitle": 'In January 2026, Bitcoin suffered its worst drawdown since the FTX bankruptcy \u2014 a <strong>-5.65\u03c3 extreme event</strong> that has only occurred 4 times since 2010. Ultron drew down ~25%, with our team\u2019s own capital bearing the same losses alongside subscribers. We spent extensive time studying past crash patterns and indicator desensitization, and developed new long-side protection layers. Backtests show these would have <strong>nearly halved</strong> the maximum drawdown.',
      "hero-stat-roi-delta": "ROI Improvement",
      "hero-stat-mdd-delta": "MDD Improvement",
      "hero-stats-note": "Improvement from adding Long Filter (vs Short Filter only)",
      "intro-body": 'We studied past major BTC crashes in depth and discovered that before each event, the Binance BTCUSDT perpetual contract\u2019s Long-Short Ratio (LSUR) and Open Interest consistently showed detectable anomalies. We had already developed the Short Filter in 2025 Q4. After this event, we further developed the Long Filter, completing the risk protection framework. Below is a backtest comparison before and after adding the Filters.',
      "sf-title": "Short Filter",
      "sf-body": 'Monitors <strong>Cumberland OTC</strong> transfer activity on-chain. When large transfers exceed sell-side liquidity thresholds, short entries are blocked to avoid false signals during strong uptrends.',
      "lf-title": "Long Filter: Multi-Layer Protection",
      "lf-ma-title": "Layer 1 \u2014 Moving Average Filter",
      "lf-ma-body": "Gradually reduces long exposure as price falls below key moving averages, preventing catastrophic losses from black-swan events while retaining partial upside. With the default 3\u00d7 leverage, a 50% coefficient caps exposure at 1.5\u00d7, and 40% caps it at 1.2\u00d7\u2014effectively spot-level exposure\u2014dramatically reducing liquidation risk.",
      "lf-tier-normal": "Normal: 100% exposure",
      "lf-tier-120": "Below MA120: 50%",
      "lf-tier-180": "Below MA180 + Declining: 40%",
      "lf-crash-title": "Layer 2 \u2014 Crash Detection & Cooldown",
      "lf-crash-body": 'Detects crash conditions when multiple signals fire simultaneously: <strong>24h price drop \u2265 5%</strong>, combined with abnormally elevated <strong>LSUR z-score</strong> and <strong>Open Interest z-score</strong>. When triggered, all positions are <strong>immediately closed</strong>.',
      "fsm-normal": "Normal Trading",
      "fsm-trigger": "Crash Detected",
      "fsm-cooldown": "Mandatory Cooldown<br>72 hours",
      "fsm-cooldown-end": "Expires",
      "fsm-monitor": "Monitoring Phase<br>\u2264 120 hours",
      "fsm-reentry": "Conditions Met",
      "fsm-resume": "Resume Trading",
      "lf-reentry-title": 'After the 72-hour mandatory cooldown, the system enters a <strong>monitoring phase</strong>. Trading resumes when <strong>any one</strong> of the following conditions is met:',
      "lf-reentry-vol": '<strong>Volatility Normalization</strong> \u2014 Current 24h realized volatility drops below 70% of the volatility at the time of the crash trigger.',
      "lf-reentry-spike": '<strong>Price Reversal Signal</strong> \u2014 Previous day\u2019s intraday range exceeds 10%, indicating a potential reversal.',
      "lf-reentry-timeout": '<strong>Time Expiry</strong> \u2014 120-hour monitoring window expires without any condition being met, and the system resumes cautiously.',
      "comp-title": "Results Comparison",
      "comp-subtitle": 'BTC backtest from <strong>August 2022</strong> to present, starting with <strong>$100,000 USD</strong>. 3x leverage, MLD (Multi-Layer Dynamic) rolling thresholds.',
      "comp-metric": "Metric",
      "comp-no-filter": "No Filters",
      "comp-short-only": "Short Filter Only",
      "comp-full": "Full Protection (Long + Short Filter)",
      "comp-roi": "Strategy ROI",
      "comp-dd": "Max Drawdown",
      "comp-final-equity": "Final Equity",
      "comp-bh-roi": "Buy & Hold ROI",
      "comp-annual-roi": "Annualized ROI",
      "comp-calmar": "Calmar Ratio",
      "equity-title": "Equity Curve Comparison",
      "equity-desc": "Three scenarios overlaid against BTC price.",
      "dd-title": "Drawdown Comparison",
      "dd-desc": "How each configuration weathered the worst periods.",
      "legend-bh": "Buy & Hold",
      "legend-no-filter": "No Filters",
      "legend-short-only": "Short Filter",
      "legend-full": "Full Protection",
      "events-title": "Event Deep-Dive",
      "events-desc": "How each configuration handled major market crashes. Click on each event to compare the most impacted position.",
      "evt-ftx_2022-tab": "FTX 2022-11",
      "evt-boj_2024-tab": "BOJ 2024-08",
      "evt-tariff_2025-tab": "Tariff 2025-02",
      "evt-nov_2025-tab": "2025-11",
      "evt-crash_2026-tab": "Crash 2026-01",
      "evt-ftx_2022-desc": '<strong>FTX exchange collapsed</strong> in early November 2022, triggering a market-wide sell-off. BTC plunged from ~$21K to ~$15.5K within days.',
      "evt-boj_2024-desc": '<strong>Bank of Japan surprise rate hike</strong> on August 5, 2024 triggered a global risk-off event. BTC dropped ~20% in 3 days.',
      "evt-tariff_2025-desc": '<strong>Trump tariff escalation</strong> in late February 2025 drove risk assets sharply lower. BTC corrected ~15%.',
      "evt-nov_2025-desc": 'Bitcoin experienced a <strong>sudden sharp sell-off</strong> in November 2025, briefly dropping over 10% before recovering.',
      "evt-crash_2026-desc": 'The <strong>-5.65\u03c3 event</strong>. Bitcoin crashed over 20% in two weeks starting late January 2026 \u2014 the worst drawdown since FTX.',
      "evt-no-lf": "Without Long Filter",
      "evt-with-lf": "With Long Filter",
      "evt-trade-time": "Time",
      "evt-trade-action": "Action",
      "evt-trade-price": "Price",
      "evt-trade-size": "Size",
      "evt-trade-after": "After",
      "evt-pos-return": "Position Return",
      "evt-no-position": "No position in this window",
      "evt-trades-omitted": "{n} trades omitted",
      "trade-show-details": "Show trade details",
      "trade-hide-details": "Hide trade details",
      "action-entry": "Entry",
      "action-add": "Add",
      "action-reduce": "Reduce",
      "action-exit": "Exit",
      "reason-signal": "Signal",
      "reason-sign_flip": "Direction Change",
      "reason-overlay_c": "Crash Detection",
      "reason-short_filter": "Short Filter",
      "reason-liquidation": "Liquidation",
      "reason-unknown": "Other",
      "mult-tip": "MA Filter reduced entry size",
      "evo-title": "Always Evolving",
      "evo-desc": "Ultron is not a static strategy. Each market event teaches us something new, and we continuously refine our risk management framework.",
      "evo-date-1": "Feb 2025",
      "evo-title-1": "Market Pulse Index Integration",
      "evo-desc-1": "Migrated from Overall LIQ batch entry to Market Pulse Index (MPI) dynamic position sizing, enabling more precise market timing.",
      "evo-date-2": "Sep 2025",
      "evo-title-2": "Short Filter",
      "evo-desc-2": "Developed Cumberland OTC monitoring to avoid premature short entries during sustained uptrends.",
      "evo-date-3": "Oct 2025",
      "evo-title-3": "Dynamic Thresholds (MLD)",
      "evo-desc-3": "Introduced Multi-Layer Dynamic thresholds that adapt entry and exit levels based on current market conditions.",
      "evo-date-4": "Feb 2026",
      "evo-title-4": "Long Filter",
      "evo-desc-4": "Market stress analysis revealed additional protection opportunities. Developed the MA Filter and Crash Detection system with mandatory cooldown periods.",
      "evo-date-5": "Q2 2026",
      "evo-title-5": "Next: Macro Regime Detection",
      "evo-desc-5": "Researching cross-asset macro correlations and additional on-chain anomaly patterns to further expand the protection framework.",
      "faq-title": "Frequently Asked Questions",
      "faq-q1": "Why does the backtest differ from live performance?",
      "faq-a1": 'Ultron has been live-trading since <strong>May 2024</strong>, from day one of CoinKarma\u2019s launch. The strategy has gone through multiple iterations since then. This page shows backtests using the <strong>latest MLD + Filter version</strong>, which incorporates all historical improvements. Since the strategy is continuously evolving, earlier live results naturally differ from the current backtest.',
      "faq-q2": "Why wasn\u2019t the Long Filter in place before?",
      "faq-a2": 'The <strong>Short Filter</strong> was already deployed in 2025 Q4. Developing the Long Filter required sufficient crash samples for modeling. The -5.65\u03c3 event in January 2026 provided the critical data patterns that enabled us to build and validate this protection layer.',
      "faq-q3": "Does the Filter reduce returns in bull markets?",
      "faq-a3": 'Quite the opposite. Backtests show that adding Filters <strong>significantly increased ROI</strong>. The reason: avoiding deep drawdowns means the portfolio doesn\u2019t have to climb out of a deep hole, and compounding effects accelerate equity growth.',
      "faq-q4": "Is the backtest period cherry-picked?",
      "faq-a4": 'No. The backtest covers <strong>August 2022 to present</strong>, spanning a full bull-bear cycle and 5 major crisis events: FTX bankruptcy, BOJ rate hike, tariff escalation, November 2025 sell-off, and the January 2026 crash.',
      "faq-q5": "Does the team trade with their own capital?",
      "faq-a5": 'Yes. Since CoinKarma launched in <strong>May 2024</strong>, the team\u2019s own capital has been trading the exact same strategy alongside subscribers, sharing the same gains and losses.',
      "faq-q6": "Why does the backtest start from August 2022? Can\u2019t it go further back?",
      "faq-a6": 'The earliest available data from our data sources begins on <strong>August 1, 2022</strong>. This period already covers multiple distinct market phases \u2014 including bear markets, recoveries, bull runs, and several major crash events \u2014 providing a comprehensive validation of the strategy\u2019s performance.',
      "footer-note": "Data range: 2022-08-01 to present. Past performance does not guarantee future results. All backtests use 3x leverage, MLD (Multi-Layer Dynamic) rolling thresholds, 0.05% commission, and slippage assumptions.",
      "loading": "Loading...",
      "error-load": "Failed to load data. Please refresh the page.",
    },
    "zh-TW": {
      "site-title": "CoinKarma Ultron",
      "hero-badge": "\u5371\u6A5F\u61C9\u5C0D\u5831\u544A",
      "hero-title": "\u5C07 -5.65\u03c3 \u4E8B\u4EF6\u8F49\u5316\u70BA\u66F4\u5F37\u9632\u8B77",
      "hero-subtitle": '2026 \u5E74 1 \u6708\uFF0C\u6BD4\u7279\u5E63\u7D93\u6B77 FTX \u7834\u7522\u4EE5\u4F86\u6700\u56B4\u91CD\u7684\u56DE\u6A94\uFF0C\u4E00\u500B 2010 \u5E74\u4EE5\u4F86\u50C5\u767C\u751F 4 \u6B21\u7684 <strong>-5.65\u03c3 \u6975\u7AEF\u4E8B\u4EF6</strong>\u3002Ultron \u7B56\u7565\u56DE\u64A4\u7D04 25%\uFF0C\u5718\u968A\u7684\u8CC7\u7522\u4E5F\u8207\u8A02\u95B1\u6703\u54E1\u5171\u540C\u627F\u53D7\u640D\u5931\u3002\u9762\u5C0D\u6DE8\u503C\u56DE\u64A4\uFF0C\u6211\u5011\u82B1\u8CBB\u4E86\u5927\u91CF\u6642\u9593\u7814\u7A76\u904E\u5F80\u5D29\u76E4\u3001\u6307\u6A19\u920D\u5316\u7684\u6578\u64DA\u6A23\u614B\uFF0C\u958B\u767C\u51FA\u4E86\u65B0\u7684\u591A\u55AE\u9632\u8B77\u6A5F\u5236\u3002\u56DE\u6E2C\u986F\u793A\uFF0C\u9019\u4E9B\u6A5F\u5236\u80FD\u5C07\u6700\u5927\u56DE\u64A4<strong>\u964D\u4F4E\u8FD1\u4E00\u534A</strong>\u3002',
      "hero-stat-roi-delta": "ROI \u63D0\u5347",
      "hero-stat-mdd-delta": "MDD \u6539\u5584",
      "hero-stats-note": "\u52A0\u5165 Long Filter \u5F8C\u7684\u6539\u9032\uFF08\u5C0D\u6BD4\u50C5\u6709 Short Filter\uFF09",
      "intro-body": '我們深入研究過去的 BTC 重大崩盤事件，發現崩盤前，幣安 BTCUSDT 永續合約的多空比（LSUR）與持倉量（Open Interest）都會出現可偵測的異常訊號。我們已在 2025 Q4 開發了空單過濾器（Short Filter），經歷本次事件後，進一步開發多單過濾器（Long Filter），完成風險防護機制。以下為加入 Filter 前後的回測對比。',
      "sf-title": "\u7A7A\u55AE\u904E\u6FFE\u5668",
      "sf-body": '\u76E3\u63A7 <strong>Cumberland OTC</strong> \u93C8\u4E0A\u5927\u984D\u8F49\u5E33\u6D3B\u52D5\u3002\u7576\u8F49\u5E33\u91CF\u8D85\u904E\u8CE3\u65B9\u6D41\u52D5\u6027\u9580\u6ABB\u6642\uFF0C\u5C01\u9396\u7A7A\u55AE\u9032\u5834\uFF0C\u907F\u514D\u5F37\u52E2\u4E0A\u6F32\u4E2D\u7684\u5047\u4FE1\u865F\u3002',
      "lf-title": "\u591A\u55AE\u904E\u6FFE\u5668\uFF1A\u591A\u5C64\u4FDD\u8B77",
      "lf-ma-title": "\u7B2C\u4E00\u5C64 \u2014 \u5747\u7DDA\u904E\u6FFE",
      "lf-ma-body": "\u7576\u50F9\u683C\u8DCC\u7834\u95DC\u9375\u5747\u7DDA\u6642\uFF0C\u9010\u6B65\u964D\u4F4E\u591A\u55AE\u66DD\u96AA\u3002\u9019\u80FD\u5728\u718A\u5E02\u4E2D\u907F\u514D\u9ED1\u5929\u9E5D\u4E8B\u4EF6\u9020\u6210\u91CD\u5927\u640D\u5931\uFF0C\u540C\u6642\u4FDD\u7559\u90E8\u5206\u4E0A\u6F32\u66DD\u96AA\u3002\u7531\u65BC\u9810\u8A2D\u69D3\u687F\u662F 3 \u500D\uFF0C\u7576\u958B\u55AE\u4FC2\u6578\u4F86\u5230 50% \u6642\uFF0C\u76F8\u7576\u65BC\u6700\u9AD8\u53EA\u958B 1.5 \u500D\u69D3\u687F\uFF1B40% \u76F8\u7576\u65BC\u6700\u9AD8 1.2 \u500D\u69D3\u687F\uFF0C\u63A5\u8FD1\u73FE\u8CA8\u66DD\u96AA\uFF0C\u5927\u5E45\u964D\u4F4E\u7206\u5009\u98A8\u96AA\u3002",
      "lf-tier-normal": "\u6B63\u5E38\uFF1A100% \u66DD\u96AA",
      "lf-tier-120": "\u8DCC\u7834 MA120\uFF1A50%",
      "lf-tier-180": "\u8DCC\u7834 MA180 + \u659C\u7387\u4E0B\u964D\uFF1A40%",
      "lf-crash-title": "\u7B2C\u4E8C\u5C64 \u2014 \u5D29\u76E4\u5075\u6E2C\u8207\u51B7\u975C\u671F",
      "lf-crash-body": '\u7576\u591A\u91CD\u4FE1\u865F\u540C\u6642\u89F8\u767C\u6642\u5075\u6E2C\u5D29\u76E4\uFF1A<strong>24\u5C0F\u6642\u8DCC\u5E45 \u2265 5%</strong>\uFF0C\u4E14 <strong>LSUR z-score</strong> \u8207 <strong>Open Interest z-score</strong> \u7570\u5E38\u504F\u9AD8\u3002\u89F8\u767C\u5F8C\u7ACB\u5373<strong>\u5168\u90E8\u5E73\u5009</strong>\u3002',
      "fsm-normal": "\u6B63\u5E38\u4EA4\u6613",
      "fsm-trigger": "\u5D29\u76E4\u5075\u6E2C",
      "fsm-cooldown": "\u5F37\u5236\u51B7\u975C<br>72 \u5C0F\u6642",
      "fsm-cooldown-end": "\u5230\u671F",
      "fsm-monitor": "\u89C0\u5BDF\u671F<br>\u2264 120 \u5C0F\u6642",
      "fsm-reentry": "\u689D\u4EF6\u9054\u6210",
      "fsm-resume": "\u6062\u5FA9\u4EA4\u6613",
      "lf-reentry-title": '\u7D93\u904E 72 \u5C0F\u6642\u5F37\u5236\u51B7\u975C\u5F8C\uFF0C\u7CFB\u7D71\u9032\u5165<strong>\u89C0\u5BDF\u671F</strong>\u3002\u7576\u4EE5\u4E0B<strong>\u4EFB\u4E00</strong>\u689D\u4EF6\u9054\u6210\u6642\u6062\u5FA9\u4EA4\u6613\uFF1A',
      "lf-reentry-vol": '<strong>\u6CE2\u52D5\u7387\u6B63\u5E38\u5316</strong> \u2014 \u7576\u524D 24h \u5BE6\u73FE\u6CE2\u52D5\u7387\u964D\u81F3\u5D29\u76E4\u89F8\u767C\u6642\u7684 70% \u4EE5\u4E0B\u3002',
      "lf-reentry-spike": '<strong>\u50F9\u683C\u53CD\u8F49\u4FE1\u865F</strong> \u2014 \u524D\u4E00\u65E5\u65E5\u5167\u632F\u5E45\u8D85\u904E 10%\uFF0C\u986F\u793A\u53EF\u80FD\u7684\u53CD\u8F49\u3002',
      "lf-reentry-timeout": '<strong>\u6642\u9593\u5230\u671F</strong> \u2014 120 \u5C0F\u6642\u89C0\u5BDF\u7A97\u53E3\u5230\u671F\uFF0C\u7CFB\u7D71\u8B39\u614E\u6062\u5FA9\u4EA4\u6613\u3002',
      "comp-title": "\u7D50\u679C\u5C0D\u6BD4",
      "comp-subtitle": 'BTC \u56DE\u6E2C\uFF0C<strong>2022 \u5E74 8 \u6708</strong>\u81F3\u4ECA\uFF0C\u521D\u59CB\u6295\u5165 <strong>$100,000 \u7F8E\u5143</strong>\u30023 \u500D\u69D3\u687F\uFF0CMLD\uFF08\u591A\u5C64\u6B21\u52D5\u614B\uFF09\u6EFE\u52D5\u95BE\u503C\u3002',
      "comp-metric": "\u6307\u6A19",
      "comp-no-filter": "\u7121 Filter",
      "comp-short-only": "\u50C5\u7A7A\u55AE\u904E\u6FFE",
      "comp-full": "\u5B8C\u6574\u4FDD\u8B77\uFF08\u591A\u55AE+\u7A7A\u55AE\u904E\u6FFE\uFF09",
      "comp-roi": "\u7B56\u7565 ROI",
      "comp-dd": "\u6700\u5927\u56DE\u64A4",
      "comp-final-equity": "\u6700\u7D42\u6B0A\u76CA",
      "comp-bh-roi": "\u8CB7\u5165\u6301\u6709 ROI",
      "comp-annual-roi": "\u5E74\u5316 ROI",
      "comp-calmar": "\u5361\u746A\u6BD4\u7387",
      "equity-title": "\u6B0A\u76CA\u66F2\u7DDA\u5C0D\u6BD4",
      "equity-desc": "\u4E09\u7A2E\u60C5\u5883\u758A\u52A0\u8207 BTC \u50F9\u683C\u5C0D\u6BD4\u3002",
      "dd-title": "\u56DE\u64A4\u5C0D\u6BD4",
      "dd-desc": "\u5404\u914D\u7F6E\u5728\u6700\u5DEE\u6642\u671F\u7684\u8868\u73FE\u3002",
      "legend-bh": "\u8CB7\u5165\u6301\u6709",
      "legend-no-filter": "\u7121 Filter",
      "legend-short-only": "\u7A7A\u55AE\u904E\u6FFE",
      "legend-full": "\u5B8C\u6574\u4FDD\u8B77",
      "events-title": "\u4E8B\u4EF6\u6DF1\u5165\u5206\u6790",
      "events-desc": "\u5404\u914D\u7F6E\u5728\u91CD\u5927\u5E02\u5834\u5D29\u76E4\u4E2D\u7684\u8868\u73FE\u3002\u9EDE\u64CA\u5404\u4E8B\u4EF6\u67E5\u770B\u6700\u53D7\u5F71\u97FF\u7684\u6301\u5009\u5C0D\u6BD4\u3002",
      "evt-ftx_2022-tab": "FTX 2022-11",
      "evt-boj_2024-tab": "\u65E5\u592E 2024-08",
      "evt-tariff_2025-tab": "\u95DC\u7A05 2025-02",
      "evt-nov_2025-tab": "2025-11",
      "evt-crash_2026-tab": "\u5D29\u76E4 2026-01",
      "evt-ftx_2022-desc": '2022\u5E7411\u6708\u521D <strong>FTX \u4EA4\u6613\u6240\u5D29\u76E4</strong>\uFF0C\u5F15\u767C\u5168\u5E02\u5834\u62CB\u552E\u3002BTC \u5728\u6578\u65E5\u5167\u5F9E ~$21K \u66B4\u8DCC\u81F3 ~$15.5K\u3002',
      "evt-boj_2024-desc": '2024\u5E748\u67085\u65E5<strong>\u65E5\u672C\u592E\u884C\u7121\u9810\u8B66\u5347\u606F</strong>\uFF0C\u89F8\u767C\u5168\u7403\u98A8\u96AA\u8CC7\u7522\u62CB\u552E\u3002BTC \u5728 3 \u5929\u5167\u4E0B\u8DCC\u7D04 20%\u3002',
      "evt-tariff_2025-desc": '2025\u5E742\u6708\u5E95<strong>\u5DDD\u666E\u95DC\u7A05\u6230\u5347\u7D1A</strong>\uFF0C\u98A8\u96AA\u8CC7\u7522\u6025\u8DCC\u3002BTC \u4FEE\u6B63\u7D04 15%\u3002',
      "evt-nov_2025-desc": '2025\u5E7411\u6708\u6BD4\u7279\u5E63\u7D93\u6B77\u4E00\u6B21<strong>\u7A81\u767C\u6027\u6025\u8DCC</strong>\uFF0C\u77ED\u6642\u9593\u5167\u8DCC\u8D85\u904E 10% \u5F8C\u53CD\u5F48\u3002',
      "evt-crash_2026-desc": '<strong>-5.65\u03c3 \u4E8B\u4EF6</strong>\u3002\u6BD4\u7279\u5E63\u5F9E 2026 \u5E741\u6708\u5E95\u958B\u59CB\u5728\u5169\u9031\u5167\u66B4\u8DCC\u8D85\u904E 20%\uFF0C\u662F FTX \u4EE5\u4F86\u6700\u5927\u56DE\u64A4\u3002',
      "evt-no-lf": "\u7121\u591A\u55AE\u904E\u6FFE\u5668",
      "evt-with-lf": "\u6709\u591A\u55AE\u904E\u6FFE\u5668",
      "evt-trade-time": "\u6642\u9593",
      "evt-trade-action": "\u64CD\u4F5C",
      "evt-trade-price": "\u50F9\u683C",
      "evt-trade-size": "\u6578\u91CF",
      "evt-trade-after": "\u5269\u9918",
      "evt-pos-return": "\u6301\u5009\u5831\u916C",
      "evt-no-position": "\u6B64\u7A97\u53E3\u7121\u6301\u5009",
      "evt-trades-omitted": "\u4E2D\u9593\u7701\u7565 {n} \u7B46\u4EA4\u6613",
      "trade-show-details": "\u5C55\u958B\u4EA4\u6613\u660E\u7D30",
      "trade-hide-details": "\u6536\u8D77\u4EA4\u6613\u660E\u7D30",
      "action-entry": "\u958B\u5009",
      "action-add": "\u52A0\u5009",
      "action-reduce": "\u6E1B\u5009",
      "action-exit": "\u5E73\u5009",
      "reason-signal": "\u8A0A\u865F",
      "reason-sign_flip": "\u65B9\u5411\u7FFB\u8F49",
      "reason-overlay_c": "\u5D29\u76E4\u5075\u6E2C",
      "reason-short_filter": "\u7A7A\u55AE\u904E\u6FFE",
      "reason-liquidation": "\u6E05\u7B97",
      "reason-unknown": "\u5176\u4ED6",
      "mult-tip": "\u5747\u7DDA\u904E\u6FFE\u5668\u964D\u4F4E\u9032\u5834\u4FC2\u6578",
      "evo-title": "\u6301\u7E8C\u9032\u5316",
      "evo-desc": "Ultron \u4E0D\u662F\u4E00\u500B\u975C\u614B\u7684\u7B56\u7565\u3002\u6BCF\u6B21\u5E02\u5834\u4E8B\u4EF6\u90FD\u662F\u5B78\u7FD2\u7684\u6A5F\u6703\uFF0C\u6211\u5011\u6301\u7E8C\u512A\u5316\u98A8\u63A7\u6A5F\u5236\u3002",
      "evo-date-1": "2025 \u5E74 2 \u6708",
      "evo-title-1": "Market Pulse Index \u6574\u5408",
      "evo-desc-1": "\u5F9E Overall LIQ \u6D41\u52D5\u6027\u6307\u6A19\u5206\u6279\u9032\u5834\uFF0C\u6539\u70BA Market Pulse Index (MPI) \u52D5\u614B\u8ABF\u6574\u5009\u4F4D\uFF0C\u63D0\u5347\u64C7\u6642\u7CBE\u6E96\u5EA6\u3002",
      "evo-date-2": "2025 \u5E74 9 \u6708",
      "evo-title-2": "Short Filter",
      "evo-desc-2": "\u958B\u767C Cumberland OTC \u76E3\u63A7\uFF0C\u907F\u514D\u5728\u55AE\u908A\u4E0A\u6F32\u6642\u671F\u904E\u65E9\u505A\u7A7A\u3002",
      "evo-date-3": "2025 \u5E74 10 \u6708",
      "evo-title-3": "\u52D5\u614B\u95BE\u503C (MLD)",
      "evo-desc-3": "\u5F15\u5165\u591A\u5C64\u6B21\u52D5\u614B\u95BE\u503C\uFF0C\u6839\u64DA\u7576\u524D\u884C\u60C5\u81EA\u52D5\u8ABF\u6574\u505A\u591A\u8207\u505A\u7A7A\u7684\u9032\u51FA\u5834\u689D\u4EF6\u3002",
      "evo-date-4": "2026 \u5E74 2 \u6708",
      "evo-title-4": "Long Filter",
      "evo-desc-4": "\u900F\u904E\u5E02\u5834\u58D3\u529B\u6E2C\u8A66\u5206\u6790\uFF0C\u767C\u6398\u984D\u5916\u9632\u8B77\u6A5F\u6703\u3002\u958B\u767C\u5747\u7DDA\u904E\u6FFE\u8207\u5D29\u76E4\u5075\u6E2C\u7CFB\u7D71\uFF0C\u5305\u542B\u5F37\u5236\u51B7\u975C\u671F\u6A5F\u5236\u3002",
      "evo-date-5": "2026 \u5E74 Q2",
      "evo-title-5": "\u4E0B\u4E00\u6B65\uFF1A\u5B8F\u89C0\u74B0\u5883\u5075\u6E2C",
      "evo-desc-5": "\u7814\u7A76\u8DE8\u8CC7\u7522\u5B8F\u89C0\u76F8\u95DC\u6027\u8207\u66F4\u591A\u93C8\u4E0A\u7570\u5E38\u6A21\u5F0F\uFF0C\u6301\u7E8C\u64F4\u5145\u98A8\u96AA\u9632\u8B77\u6A5F\u5236\u3002",
      "faq-title": "\u5E38\u898B\u554F\u984C",
      "faq-q1": "\u70BA\u4EC0\u9EBC\u56DE\u6E2C\u6578\u64DA\u8207\u5BE6\u76E4\u7E3E\u6548\u6709\u843D\u5DEE\uFF1F",
      "faq-a1": 'Ultron \u7B56\u7565\u5F9E <strong>2024 \u5E74 5 \u6708</strong> CoinKarma \u7DB2\u7AD9\u4E0A\u7DDA\u7684\u7B2C\u4E00\u5929\u8D77\uFF0C\u5C31\u5DF2\u7D93\u540C\u6B65\u57F7\u884C\u5BE6\u76E4\u4EA4\u6613\u3002\u7B56\u7565\u81F3\u4ECA\u7D93\u6B77\u4E86\u591A\u6B21\u6539\u7248\u3002\u672C\u9801\u5C55\u793A\u7684\u662F\u6700\u65B0\u7248\u672C\uFF08<strong>MLD + Filter</strong>\uFF09\u7684\u56DE\u6E2C\u7D50\u679C\uFF0C\u6DB5\u84CB\u4E86\u6240\u6709\u6B77\u53F2\u6539\u9032\u3002\u7531\u65BC\u7B56\u7565\u6301\u7E8C\u9032\u5316\uFF0C\u65E9\u671F\u7248\u672C\u7684\u5BE6\u76E4\u7E3E\u6548\u81EA\u7136\u6703\u8207\u6700\u65B0\u56DE\u6E2C\u6709\u6240\u5DEE\u7570\u3002',
      "faq-q2": "\u70BA\u4EC0\u9EBC\u4E4B\u524D\u6C92\u6709\u591A\u55AE\u9632\u8B77\u6A5F\u5236\uFF1F",
      "faq-a2": '<strong>\u7A7A\u55AE\u904E\u6FFE\u5668</strong>\u5DF2\u5728 2025 Q4 \u4E0A\u7DDA\u904B\u4F5C\u3002\u591A\u55AE\u904E\u6FFE\u5668\u7684\u958B\u767C\u9700\u8981\u8DB3\u5920\u7684\u5D29\u76E4\u6A23\u672C\u4F86\u5EFA\u6A21\uFF0C2026 \u5E74 1 \u6708\u7684 -5.65\u03c3 \u4E8B\u4EF6\u63D0\u4F9B\u4E86\u95DC\u9375\u7684\u6578\u64DA\u6A23\u614B\uFF0C\u4F7F\u6211\u5011\u5F97\u4EE5\u5B8C\u6210\u9019\u9805\u9632\u8B77\u6A5F\u5236\u3002',
      "faq-q3": "Filter \u6703\u4E0D\u6703\u5728\u725B\u5E02\u964D\u4F4E\u6536\u76CA\uFF1F",
      "faq-a3": '\u6070\u6070\u76F8\u53CD\u3002\u56DE\u6E2C\u986F\u793A\u52A0\u5165 Filter \u5F8C <strong>ROI \u5927\u5E45\u63D0\u5347</strong>\u3002\u539F\u56E0\u662F\uFF1A\u907F\u958B\u5927\u5E45\u56DE\u64A4\u610F\u5473\u8457\u4E0D\u9700\u8981\u5F9E\u6DF1\u5751\u4E2D\u722C\u56DE\u4F86\uFF0C\u8907\u5229\u6548\u61C9\u53CD\u800C\u8B93\u6DE8\u503C\u6210\u9577\u66F4\u5FEB\u3002',
      "faq-q4": "\u56DE\u6E2C\u671F\u9593\u662F\u5426\u7D93\u904E\u7279\u5225\u6311\u9078\uFF1F",
      "faq-a4": '\u4E0D\u662F\u3002\u56DE\u6E2C\u6DB5\u84CB <strong>2022 \u5E74 8 \u6708\u81F3\u4ECA</strong>\uFF0C\u8DE8\u8D8A\u5B8C\u6574\u7684\u725B\u718A\u9031\u671F\uFF0C\u5305\u542B FTX \u7834\u7522\u3001\u65E5\u592E\u5347\u606F\u3001\u95DC\u7A05\u6230\u3001\u5341\u4E00\u6708\u6025\u8DCC\u53CA\u4E00\u6708\u5D29\u76E4\u5171 5 \u6B21\u91CD\u5927\u4E8B\u4EF6\u3002',
      "faq-q5": "\u5718\u968A\u81EA\u5DF1\u7684\u8CC7\u91D1\u4E5F\u5728\u8DD1\u9019\u500B\u7B56\u7565\u55CE\uFF1F",
      "faq-a5": '\u662F\u7684\u3002\u5F9E <strong>2024 \u5E74 5 \u6708</strong> CoinKarma \u7DB2\u7AD9\u4E0A\u7DDA\u7684\u7B2C\u4E00\u5929\u8D77\uFF0C\u5718\u968A\u7684\u81EA\u6709\u8CC7\u91D1\u5C31\u5DF2\u7D93\u540C\u6B65\u57F7\u884C\u5BE6\u76E4\u4EA4\u6613\uFF0C\u8207\u8A02\u95B1\u6703\u54E1\u5171\u540C\u627F\u64D4\u640D\u76CA\u3002',
      "faq-q6": "\u70BA\u4EC0\u9EBC\u56DE\u6E2C\u5F9E 2022/8/1 \u958B\u59CB\uFF0C\u4E0D\u80FD\u66F4\u65E9\u55CE\uFF1F",
      "faq-a6": '\u6578\u64DA\u6E90\u982D\u6700\u65E9\u53EF\u7528\u7684\u8CC7\u6599\u5F9E <strong>2022 \u5E74 8 \u6708 1 \u65E5</strong>\u958B\u59CB\u3002\u9019\u6BB5\u671F\u9593\u5DF2\u7D93\u6DB5\u84CB\u4E86\u591A\u7A2E\u4E0D\u540C\u7684\u5E02\u5834\u968E\u6BB5\u2014\u2014\u5305\u62EC\u718A\u5E02\u3001\u5FA9\u7526\u3001\u725B\u5E02\u4EE5\u53CA\u591A\u6B21\u91CD\u5927\u5D29\u76E4\u4E8B\u4EF6\u2014\u2014\u5DF2\u80FD\u5145\u5206\u9A57\u8B49\u7B56\u7565\u7684\u8868\u73FE\u3002',
      "footer-note": "\u8CC7\u6599\u7BC4\u570D\uFF1A2022-08-01 \u81F3\u4ECA\u3002\u904E\u53BB\u7E3E\u6548\u4E0D\u4EE3\u8868\u672A\u4F86\u8868\u73FE\u3002\u6240\u6709\u56DE\u6E2C\u4F7F\u7528 3 \u500D\u69D3\u687F\u3001MLD\uFF08\u591A\u5C64\u6B21\u52D5\u614B\uFF09\u6EFE\u52D5\u95BE\u503C\u30010.05% \u624B\u7E8C\u8CBB\u53CA\u6ED1\u50F9\u5047\u8A2D\u3002",
      "loading": "\u8F09\u5165\u4E2D\u2026",
      "error-load": "\u8CC7\u6599\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u6574\u7406\u9801\u9762\u3002",
    },
    "zh-CN": {
      "site-title": "CoinKarma Ultron",
      "hero-badge": "\u5371\u673A\u5E94\u5BF9\u62A5\u544A",
      "hero-title": "\u5C06 -5.65\u03c3 \u4E8B\u4EF6\u8F6C\u5316\u4E3A\u66F4\u5F3A\u9632\u62A4",
      "hero-subtitle": '2026 \u5E74 1 \u6708\uFF0C\u6BD4\u7279\u5E01\u7ECF\u5386 FTX \u7834\u4EA7\u4EE5\u6765\u6700\u4E25\u91CD\u7684\u56DE\u64A4\uFF0C\u4E00\u4E2A 2010 \u5E74\u4EE5\u6765\u4EC5\u53D1\u751F 4 \u6B21\u7684 <strong>-5.65\u03c3 \u6781\u7AEF\u4E8B\u4EF6</strong>\u3002Ultron \u7B56\u7565\u56DE\u64A4\u7EA6 25%\uFF0C\u56E2\u961F\u7684\u8D44\u4EA7\u4E5F\u4E0E\u8BA2\u9605\u4F1A\u5458\u5171\u540C\u627F\u53D7\u635F\u5931\u3002\u9762\u5BF9\u51C0\u503C\u56DE\u64A4\uFF0C\u6211\u4EEC\u82B1\u8D39\u4E86\u5927\u91CF\u65F6\u95F4\u7814\u7A76\u8FC7\u5F80\u5D29\u76D8\u3001\u6307\u6807\u949D\u5316\u7684\u6570\u636E\u6837\u6001\uFF0C\u5F00\u53D1\u51FA\u4E86\u65B0\u7684\u591A\u5355\u9632\u62A4\u673A\u5236\u3002\u56DE\u6D4B\u663E\u793A\uFF0C\u8FD9\u4E9B\u673A\u5236\u80FD\u5C06\u6700\u5927\u56DE\u64A4<strong>\u964D\u4F4E\u8FD1\u4E00\u534A</strong>\u3002',
      "hero-stat-roi-delta": "ROI \u63D0\u5347",
      "hero-stat-mdd-delta": "MDD \u6539\u5584",
      "hero-stats-note": "\u52A0\u5165 Long Filter \u540E\u7684\u6539\u8FDB\uFF08\u5BF9\u6BD4\u4EC5\u6709 Short Filter\uFF09",
      "intro-body": '我们深入研究过去的 BTC 重大崩盘事件，发现崩盘前，币安 BTCUSDT 永续合约的多空比（LSUR）与持仓量（Open Interest）都会出现可侦测的异常信号。我们已在 2025 Q4 开发了空单过滤器（Short Filter），经历本次事件后，进一步开发多单过滤器（Long Filter），完成风险防护机制。以下为加入 Filter 前后的回测对比。',
      "sf-title": "\u7A7A\u5355\u8FC7\u6EE4\u5668",
      "sf-body": '\u76D1\u63A7 <strong>Cumberland OTC</strong> \u94FE\u4E0A\u5927\u989D\u8F6C\u8D26\u6D3B\u52A8\u3002\u5F53\u8F6C\u8D26\u91CF\u8D85\u8FC7\u5356\u65B9\u6D41\u52A8\u6027\u9608\u503C\u65F6\uFF0C\u5C01\u9501\u7A7A\u5355\u8FDB\u573A\uFF0C\u907F\u514D\u5F3A\u52BF\u4E0A\u6DA8\u4E2D\u7684\u5047\u4FE1\u53F7\u3002',
      "lf-title": "\u591A\u5355\u8FC7\u6EE4\u5668\uFF1A\u591A\u5C42\u4FDD\u62A4",
      "lf-ma-title": "\u7B2C\u4E00\u5C42 \u2014 \u5747\u7EBF\u8FC7\u6EE4",
      "lf-ma-body": "\u5F53\u4EF7\u683C\u8DCC\u7834\u5173\u952E\u5747\u7EBF\u65F6\uFF0C\u9010\u6B65\u964D\u4F4E\u591A\u5355\u66B4\u9732\u3002\u8FD9\u80FD\u5728\u718A\u5E02\u4E2D\u907F\u514D\u9ED1\u5929\u9E45\u4E8B\u4EF6\u9020\u6210\u91CD\u5927\u635F\u5931\uFF0C\u540C\u65F6\u4FDD\u7559\u90E8\u5206\u4E0A\u6DA8\u66B4\u9732\u3002\u7531\u4E8E\u9ED8\u8BA4\u6760\u6746\u662F 3 \u500D\uFF0C\u5F53\u5F00\u5355\u7CFB\u6570\u6765\u5230 50% \u65F6\uFF0C\u76F8\u5F53\u4E8E\u6700\u9AD8\u53EA\u5F00 1.5 \u500D\u6760\u6746\uFF1B40% \u76F8\u5F53\u4E8E\u6700\u9AD8 1.2 \u500D\u6760\u6746\uFF0C\u63A5\u8FD1\u73B0\u8D27\u66B4\u9732\uFF0C\u5927\u5E45\u964D\u4F4E\u7206\u4ED3\u98CE\u9669\u3002",
      "lf-tier-normal": "\u6B63\u5E38\uFF1A100% \u66B4\u9732",
      "lf-tier-120": "\u8DCC\u7834 MA120\uFF1A50%",
      "lf-tier-180": "\u8DCC\u7834 MA180 + \u659C\u7387\u4E0B\u964D\uFF1A40%",
      "lf-crash-title": "\u7B2C\u4E8C\u5C42 \u2014 \u5D29\u76D8\u4FA6\u6D4B\u4E0E\u51B7\u9759\u671F",
      "lf-crash-body": '\u5F53\u591A\u91CD\u4FE1\u53F7\u540C\u65F6\u89E6\u53D1\u65F6\u4FA6\u6D4B\u5D29\u76D8\uFF1A<strong>24\u5C0F\u65F6\u8DCC\u5E45 \u2265 5%</strong>\uFF0C\u4E14 <strong>LSUR z-score</strong> \u4E0E <strong>Open Interest z-score</strong> \u5F02\u5E38\u504F\u9AD8\u3002\u89E6\u53D1\u540E\u7ACB\u5373<strong>\u5168\u90E8\u5E73\u4ED3</strong>\u3002',
      "fsm-normal": "\u6B63\u5E38\u4EA4\u6613",
      "fsm-trigger": "\u5D29\u76D8\u4FA6\u6D4B",
      "fsm-cooldown": "\u5F3A\u5236\u51B7\u9759<br>72 \u5C0F\u65F6",
      "fsm-cooldown-end": "\u5230\u671F",
      "fsm-monitor": "\u89C2\u5BDF\u671F<br>\u2264 120 \u5C0F\u65F6",
      "fsm-reentry": "\u6761\u4EF6\u8FBE\u6210",
      "fsm-resume": "\u6062\u590D\u4EA4\u6613",
      "lf-reentry-title": '\u7ECF\u8FC7 72 \u5C0F\u65F6\u5F3A\u5236\u51B7\u9759\u540E\uFF0C\u7CFB\u7EDF\u8FDB\u5165<strong>\u89C2\u5BDF\u671F</strong>\u3002\u5F53\u4EE5\u4E0B<strong>\u4EFB\u4E00</strong>\u6761\u4EF6\u8FBE\u6210\u65F6\u6062\u590D\u4EA4\u6613\uFF1A',
      "lf-reentry-vol": '<strong>\u6CE2\u52A8\u7387\u6B63\u5E38\u5316</strong> \u2014 \u5F53\u524D 24h \u5B9E\u73B0\u6CE2\u52A8\u7387\u964D\u81F3\u5D29\u76D8\u89E6\u53D1\u65F6\u7684 70% \u4EE5\u4E0B\u3002',
      "lf-reentry-spike": '<strong>\u4EF7\u683C\u53CD\u8F6C\u4FE1\u53F7</strong> \u2014 \u524D\u4E00\u65E5\u65E5\u5185\u632F\u5E45\u8D85\u8FC7 10%\uFF0C\u663E\u793A\u53EF\u80FD\u7684\u53CD\u8F6C\u3002',
      "lf-reentry-timeout": '<strong>\u65F6\u95F4\u5230\u671F</strong> \u2014 120 \u5C0F\u65F6\u89C2\u5BDF\u7A97\u53E3\u5230\u671F\uFF0C\u7CFB\u7EDF\u8C28\u614E\u6062\u590D\u4EA4\u6613\u3002',
      "comp-title": "\u7ED3\u679C\u5BF9\u6BD4",
      "comp-subtitle": 'BTC \u56DE\u6D4B\uFF0C<strong>2022 \u5E74 8 \u6708</strong>\u81F3\u4ECA\uFF0C\u521D\u59CB\u6295\u5165 <strong>$100,000 \u7F8E\u5143</strong>\u30023 \u500D\u6760\u6746\uFF0CMLD\uFF08\u591A\u5C42\u6B21\u52A8\u6001\uFF09\u6EDA\u52A8\u9608\u503C\u3002',
      "comp-metric": "\u6307\u6807",
      "comp-no-filter": "\u65E0 Filter",
      "comp-short-only": "\u4EC5\u7A7A\u5355\u8FC7\u6EE4",
      "comp-full": "\u5B8C\u6574\u4FDD\u62A4\uFF08\u591A\u5355+\u7A7A\u5355\u8FC7\u6EE4\uFF09",
      "comp-roi": "\u7B56\u7565 ROI",
      "comp-dd": "\u6700\u5927\u56DE\u64A4",
      "comp-final-equity": "\u6700\u7EC8\u6743\u76CA",
      "comp-bh-roi": "\u4E70\u5165\u6301\u6709 ROI",
      "comp-annual-roi": "\u5E74\u5316 ROI",
      "comp-calmar": "\u5361\u739B\u6BD4\u7387",
      "equity-title": "\u6743\u76CA\u66F2\u7EBF\u5BF9\u6BD4",
      "equity-desc": "\u4E09\u79CD\u60C5\u5883\u53E0\u52A0\u4E0E BTC \u4EF7\u683C\u5BF9\u6BD4\u3002",
      "dd-title": "\u56DE\u64A4\u5BF9\u6BD4",
      "dd-desc": "\u5404\u914D\u7F6E\u5728\u6700\u5DEE\u65F6\u671F\u7684\u8868\u73B0\u3002",
      "legend-bh": "\u4E70\u5165\u6301\u6709",
      "legend-no-filter": "\u65E0 Filter",
      "legend-short-only": "\u7A7A\u5355\u8FC7\u6EE4",
      "legend-full": "\u5B8C\u6574\u4FDD\u62A4",
      "events-title": "\u4E8B\u4EF6\u6DF1\u5165\u5206\u6790",
      "events-desc": "\u5404\u914D\u7F6E\u5728\u91CD\u5927\u5E02\u573A\u5D29\u76D8\u4E2D\u7684\u8868\u73B0\u3002\u70B9\u51FB\u5404\u4E8B\u4EF6\u67E5\u770B\u6700\u53D7\u5F71\u54CD\u7684\u6301\u4ED3\u5BF9\u6BD4\u3002",
      "evt-ftx_2022-tab": "FTX 2022-11",
      "evt-boj_2024-tab": "\u65E5\u592E 2024-08",
      "evt-tariff_2025-tab": "\u5173\u7A0E 2025-02",
      "evt-nov_2025-tab": "2025-11",
      "evt-crash_2026-tab": "\u5D29\u76D8 2026-01",
      "evt-ftx_2022-desc": '2022\u5E7411\u6708\u521D <strong>FTX \u4EA4\u6613\u6240\u5D29\u76D8</strong>\uFF0C\u5F15\u53D1\u5168\u5E02\u573A\u629B\u552E\u3002BTC \u5728\u6570\u65E5\u5185\u4ECE ~$21K \u66B4\u8DCC\u81F3 ~$15.5K\u3002',
      "evt-boj_2024-desc": '2024\u5E748\u67085\u65E5<strong>\u65E5\u672C\u592E\u884C\u65E0\u9884\u8B66\u52A0\u606F</strong>\uFF0C\u89E6\u53D1\u5168\u7403\u98CE\u9669\u8D44\u4EA7\u629B\u552E\u3002BTC \u5728 3 \u5929\u5185\u4E0B\u8DCC\u7EA6 20%\u3002',
      "evt-tariff_2025-desc": '2025\u5E742\u6708\u5E95<strong>\u5DDD\u666E\u5173\u7A0E\u6218\u5347\u7EA7</strong>\uFF0C\u98CE\u9669\u8D44\u4EA7\u6025\u8DCC\u3002BTC \u4FEE\u6B63\u7EA6 15%\u3002',
      "evt-nov_2025-desc": '2025\u5E7411\u6708\u6BD4\u7279\u5E01\u7ECF\u5386\u4E00\u6B21<strong>\u7A81\u53D1\u6027\u6025\u8DCC</strong>\uFF0C\u77ED\u65F6\u95F4\u5185\u8DCC\u8D85\u8FC7 10% \u540E\u53CD\u5F39\u3002',
      "evt-crash_2026-desc": '<strong>-5.65\u03c3 \u4E8B\u4EF6</strong>\u3002\u6BD4\u7279\u5E01\u4ECE 2026 \u5E741\u6708\u5E95\u5F00\u59CB\u5728\u4E24\u5468\u5185\u66B4\u8DCC\u8D85\u8FC7 20%\uFF0C\u662F FTX \u4EE5\u6765\u6700\u5927\u56DE\u64A4\u3002',
      "evt-no-lf": "\u65E0\u591A\u5355\u8FC7\u6EE4\u5668",
      "evt-with-lf": "\u6709\u591A\u5355\u8FC7\u6EE4\u5668",
      "evt-trade-time": "\u65F6\u95F4",
      "evt-trade-action": "\u64CD\u4F5C",
      "evt-trade-price": "\u4EF7\u683C",
      "evt-trade-size": "\u6570\u91CF",
      "evt-trade-after": "\u5269\u4F59",
      "evt-pos-return": "\u6301\u4ED3\u56DE\u62A5",
      "evt-no-position": "\u6B64\u7A97\u53E3\u65E0\u6301\u4ED3",
      "evt-trades-omitted": "\u4E2D\u95F4\u7701\u7565 {n} \u7B14\u4EA4\u6613",
      "trade-show-details": "\u5C55\u5F00\u4EA4\u6613\u660E\u7EC6",
      "trade-hide-details": "\u6536\u8D77\u4EA4\u6613\u660E\u7EC6",
      "action-entry": "\u5F00\u4ED3",
      "action-add": "\u52A0\u4ED3",
      "action-reduce": "\u51CF\u4ED3",
      "action-exit": "\u5E73\u4ED3",
      "reason-signal": "\u4FE1\u53F7",
      "reason-sign_flip": "\u65B9\u5411\u7FFB\u8F6C",
      "reason-overlay_c": "\u5D29\u76D8\u4FA6\u6D4B",
      "reason-short_filter": "\u7A7A\u5355\u8FC7\u6EE4",
      "reason-liquidation": "\u6E05\u7B97",
      "reason-unknown": "\u5176\u4ED6",
      "mult-tip": "\u5747\u7EBF\u8FC7\u6EE4\u5668\u964D\u4F4E\u8FDB\u573A\u7CFB\u6570",
      "evo-title": "\u6301\u7EED\u8FDB\u5316",
      "evo-desc": "Ultron \u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u7684\u7B56\u7565\u3002\u6BCF\u6B21\u5E02\u573A\u4E8B\u4EF6\u90FD\u662F\u5B66\u4E60\u7684\u673A\u4F1A\uFF0C\u6211\u4EEC\u6301\u7EED\u4F18\u5316\u98CE\u63A7\u673A\u5236\u3002",
      "evo-date-1": "2025 \u5E74 2 \u6708",
      "evo-title-1": "Market Pulse Index \u6574\u5408",
      "evo-desc-1": "\u4ECE Overall LIQ \u6D41\u52A8\u6027\u6307\u6807\u5206\u6279\u8FDB\u573A\uFF0C\u6539\u4E3A Market Pulse Index (MPI) \u52A8\u6001\u8C03\u6574\u4ED3\u4F4D\uFF0C\u63D0\u5347\u62E9\u65F6\u7CBE\u51C6\u5EA6\u3002",
      "evo-date-2": "2025 \u5E74 9 \u6708",
      "evo-title-2": "Short Filter",
      "evo-desc-2": "\u5F00\u53D1 Cumberland OTC \u76D1\u63A7\uFF0C\u907F\u514D\u5728\u5355\u8FB9\u4E0A\u6DA8\u65F6\u671F\u8FC7\u65E9\u505A\u7A7A\u3002",
      "evo-date-3": "2025 \u5E74 10 \u6708",
      "evo-title-3": "\u52A8\u6001\u9608\u503C (MLD)",
      "evo-desc-3": "\u5F15\u5165\u591A\u5C42\u6B21\u52A8\u6001\u9608\u503C\uFF0C\u6839\u636E\u5F53\u524D\u884C\u60C5\u81EA\u52A8\u8C03\u6574\u505A\u591A\u4E0E\u505A\u7A7A\u7684\u8FDB\u51FA\u573A\u6761\u4EF6\u3002",
      "evo-date-4": "2026 \u5E74 2 \u6708",
      "evo-title-4": "Long Filter",
      "evo-desc-4": "\u901A\u8FC7\u5E02\u573A\u538B\u529B\u6D4B\u8BD5\u5206\u6790\uFF0C\u53D1\u6398\u989D\u5916\u9632\u62A4\u673A\u4F1A\u3002\u5F00\u53D1\u5747\u7EBF\u8FC7\u6EE4\u4E0E\u5D29\u76D8\u4FA6\u6D4B\u7CFB\u7EDF\uFF0C\u5305\u542B\u5F3A\u5236\u51B7\u9759\u671F\u673A\u5236\u3002",
      "evo-date-5": "2026 \u5E74 Q2",
      "evo-title-5": "\u4E0B\u4E00\u6B65\uFF1A\u5B8F\u89C2\u73AF\u5883\u4FA6\u6D4B",
      "evo-desc-5": "\u7814\u7A76\u8DE8\u8D44\u4EA7\u5B8F\u89C2\u76F8\u5173\u6027\u4E0E\u66F4\u591A\u94FE\u4E0A\u5F02\u5E38\u6A21\u5F0F\uFF0C\u6301\u7EED\u6269\u5145\u98CE\u9669\u9632\u62A4\u673A\u5236\u3002",
      "faq-title": "\u5E38\u89C1\u95EE\u9898",
      "faq-q1": "\u4E3A\u4EC0\u4E48\u56DE\u6D4B\u6570\u636E\u4E0E\u5B9E\u76D8\u7EE9\u6548\u6709\u843D\u5DEE\uFF1F",
      "faq-a1": 'Ultron \u7B56\u7565\u4ECE <strong>2024 \u5E74 5 \u6708</strong> CoinKarma \u7F51\u7AD9\u4E0A\u7EBF\u7684\u7B2C\u4E00\u5929\u8D77\uFF0C\u5C31\u5DF2\u7ECF\u540C\u6B65\u6267\u884C\u5B9E\u76D8\u4EA4\u6613\u3002\u7B56\u7565\u81F3\u4ECA\u7ECF\u5386\u4E86\u591A\u6B21\u6539\u7248\u3002\u672C\u9875\u5C55\u793A\u7684\u662F\u6700\u65B0\u7248\u672C\uFF08<strong>MLD + Filter</strong>\uFF09\u7684\u56DE\u6D4B\u7ED3\u679C\uFF0C\u6DB5\u76D6\u4E86\u6240\u6709\u5386\u53F2\u6539\u8FDB\u3002\u7531\u4E8E\u7B56\u7565\u6301\u7EED\u8FDB\u5316\uFF0C\u65E9\u671F\u7248\u672C\u7684\u5B9E\u76D8\u7EE9\u6548\u81EA\u7136\u4F1A\u4E0E\u6700\u65B0\u56DE\u6D4B\u6709\u6240\u5DEE\u5F02\u3002',
      "faq-q2": "\u4E3A\u4EC0\u4E48\u4E4B\u524D\u6CA1\u6709\u591A\u5355\u9632\u62A4\u673A\u5236\uFF1F",
      "faq-a2": '<strong>\u7A7A\u5355\u8FC7\u6EE4\u5668</strong>\u5DF2\u5728 2025 Q4 \u4E0A\u7EBF\u8FD0\u4F5C\u3002\u591A\u5355\u8FC7\u6EE4\u5668\u7684\u5F00\u53D1\u9700\u8981\u8DB3\u591F\u7684\u5D29\u76D8\u6837\u672C\u6765\u5EFA\u6A21\uFF0C2026 \u5E74 1 \u6708\u7684 -5.65\u03c3 \u4E8B\u4EF6\u63D0\u4F9B\u4E86\u5173\u952E\u7684\u6570\u636E\u6837\u6001\uFF0C\u4F7F\u6211\u4EEC\u5F97\u4EE5\u5B8C\u6210\u8FD9\u9879\u9632\u62A4\u673A\u5236\u3002',
      "faq-q3": "Filter \u4F1A\u4E0D\u4F1A\u5728\u725B\u5E02\u964D\u4F4E\u6536\u76CA\uFF1F",
      "faq-a3": '\u6070\u6070\u76F8\u53CD\u3002\u56DE\u6D4B\u663E\u793A\u52A0\u5165 Filter \u540E <strong>ROI \u5927\u5E45\u63D0\u5347</strong>\u3002\u539F\u56E0\u662F\uFF1A\u907F\u5F00\u5927\u5E45\u56DE\u64A4\u610F\u5473\u7740\u4E0D\u9700\u8981\u4ECE\u6DF1\u5751\u4E2D\u722C\u56DE\u6765\uFF0C\u590D\u5229\u6548\u5E94\u53CD\u800C\u8BA9\u51C0\u503C\u589E\u957F\u66F4\u5FEB\u3002',
      "faq-q4": "\u56DE\u6D4B\u671F\u95F4\u662F\u5426\u7ECF\u8FC7\u7279\u522B\u6311\u9009\uFF1F",
      "faq-a4": '\u4E0D\u662F\u3002\u56DE\u6D4B\u6DB5\u76D6 <strong>2022 \u5E74 8 \u6708\u81F3\u4ECA</strong>\uFF0C\u8DE8\u8D8A\u5B8C\u6574\u7684\u725B\u718A\u5468\u671F\uFF0C\u5305\u542B FTX \u7834\u4EA7\u3001\u65E5\u592E\u52A0\u606F\u3001\u5173\u7A0E\u6218\u3001\u5341\u4E00\u6708\u6025\u8DCC\u53CA\u4E00\u6708\u5D29\u76D8\u5171 5 \u6B21\u91CD\u5927\u4E8B\u4EF6\u3002',
      "faq-q5": "\u56E2\u961F\u81EA\u5DF1\u7684\u8D44\u91D1\u4E5F\u5728\u8DD1\u8FD9\u4E2A\u7B56\u7565\u5417\uFF1F",
      "faq-a5": '\u662F\u7684\u3002\u4ECE <strong>2024 \u5E74 5 \u6708</strong> CoinKarma \u7F51\u7AD9\u4E0A\u7EBF\u7684\u7B2C\u4E00\u5929\u8D77\uFF0C\u56E2\u961F\u7684\u81EA\u6709\u8D44\u91D1\u5C31\u5DF2\u7ECF\u540C\u6B65\u6267\u884C\u5B9E\u76D8\u4EA4\u6613\uFF0C\u4E0E\u8BA2\u9605\u4F1A\u5458\u5171\u540C\u627F\u62C5\u635F\u76CA\u3002',
      "faq-q6": "\u4E3A\u4EC0\u4E48\u56DE\u6D4B\u4ECE 2022/8/1 \u5F00\u59CB\uFF0C\u4E0D\u80FD\u66F4\u65E9\u5417\uFF1F",
      "faq-a6": '\u6570\u636E\u6E90\u5934\u6700\u65E9\u53EF\u7528\u7684\u6570\u636E\u4ECE <strong>2022 \u5E74 8 \u6708 1 \u65E5</strong>\u5F00\u59CB\u3002\u8FD9\u6BB5\u671F\u95F4\u5DF2\u7ECF\u6DB5\u76D6\u4E86\u591A\u79CD\u4E0D\u540C\u7684\u5E02\u573A\u9636\u6BB5\u2014\u2014\u5305\u62EC\u718A\u5E02\u3001\u590D\u82CF\u3001\u725B\u5E02\u4EE5\u53CA\u591A\u6B21\u91CD\u5927\u5D29\u76D8\u4E8B\u4EF6\u2014\u2014\u5DF2\u80FD\u5145\u5206\u9A8C\u8BC1\u7B56\u7565\u7684\u8868\u73B0\u3002',
      "footer-note": "\u6570\u636E\u8303\u56F4\uFF1A2022-08-01 \u81F3\u4ECA\u3002\u8FC7\u53BB\u7EE9\u6548\u4E0D\u4EE3\u8868\u672A\u6765\u8868\u73B0\u3002\u6240\u6709\u56DE\u6D4B\u4F7F\u7528 3 \u500D\u6760\u6746\u3001MLD\uFF08\u591A\u5C42\u6B21\u52A8\u6001\uFF09\u6EDA\u52A8\u9608\u503C\u30010.05% \u624B\u7EED\u8D39\u53CA\u6ED1\u70B9\u5047\u8BBE\u3002",
      "loading": "\u52A0\u8F7D\u4E2D\u2026",
      "error-load": "\u6570\u636E\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002",
    },
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "en";

  const t = (key) => {
    const dict = translations[currentLang] || translations.en;
    return dict[key] ?? translations.en[key] ?? key;
  };

  const applyTranslations = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.documentElement.lang =
      currentLang === "zh-TW" ? "zh-Hant" : currentLang === "zh-CN" ? "zh-Hans" : "en";
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
  };

  const setLang = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    // Re-render data-driven content if data is cached
    if (_cachedData) renderAllData(_cachedData);
  };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // ═══════════════════════════════════════════════════════
  //  Helpers
  // ═══════════════════════════════════════════════════════

  const formatPct = (v) => {
    if (v === null || v === undefined || Number.isNaN(v)) return "--";
    return `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
  };

  const formatUsd = (v) => {
    if (v === null || v === undefined || Number.isNaN(v)) return "--";
    return "$" + new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(v);
  };

  // ═══════════════════════════════════════════════════════
  //  Plotly dark theme
  // ═══════════════════════════════════════════════════════

  const C = {
    price: "rgba(255,255,255,0.45)",
    noFilter: "rgba(255,255,255,0.28)",
    shortOnly: "#f0b429",
    full: "#39d3ae",
    grid: "rgba(255,255,255,0.04)",
    text: "rgba(255,255,255,0.4)",
    textBright: "rgba(255,255,255,0.8)",
    plotBg: "hsl(210,3%,12%)",
    ddFill: "rgba(238,96,88,0.08)",
    ddLine: "#ee6058",
  };

  const darkAxis = {
    gridcolor: C.grid,
    gridwidth: 1,
    showgrid: true,
    zeroline: false,
    showline: false,
    tickcolor: "rgba(0,0,0,0)",
    tickfont: { color: C.text, size: 11 },
    title: { font: { color: C.text, size: 12 } },
  };

  // ═══════════════════════════════════════════════════════
  //  Renderers
  // ═══════════════════════════════════════════════════════

  const renderHero = (metrics) => {
    const fp = metrics.full_protection;
    const so = metrics.short_only;

    // ROI improvement vs Short Filter Only
    const soROI = so.strategy_roi_pct;
    const fpROI = fp.strategy_roi_pct;
    const roiDelta = fpROI - soROI;
    const roiEl = document.getElementById("hero-roi-delta");
    if (roiEl) roiEl.textContent = `+${roiDelta.toFixed(0)}%`;
    const roiLabel = document.getElementById("hero-roi-delta-label");
    if (roiLabel) roiLabel.innerHTML = `${t("hero-stat-roi-delta")} <span style="opacity:0.7;font-size:10px">（${soROI.toFixed(0)}% \u2192 ${fpROI.toFixed(0)}%）</span>`;

    // MDD improvement vs Short Filter Only
    const soDD = Math.abs(so.strategy_max_drawdown_pct);
    const fpDD = Math.abs(fp.strategy_max_drawdown_pct);
    const mddDelta = soDD - fpDD;
    const mddEl = document.getElementById("hero-mdd-delta");
    if (mddEl) mddEl.textContent = `${mddDelta.toFixed(1)}%`;
    const mddLabel = document.getElementById("hero-mdd-delta-label");
    if (mddLabel) mddLabel.innerHTML = `${t("hero-stat-mdd-delta")} <span style="opacity:0.7;font-size:10px">（-${soDD.toFixed(0)}% \u2192 -${fpDD.toFixed(0)}%）</span>`;
  };

  // Helpers for annualized ROI and Calmar
  let _backtestYears = null;
  const getBacktestYears = (data) => {
    if (_backtestYears) return _backtestYears;
    const ts = data.equity_charts.full_protection.timestamps;
    const start = new Date(ts[0]);
    const end = new Date(ts[ts.length - 1]);
    _backtestYears = (end - start) / (365.25 * 24 * 3600 * 1000);
    return _backtestYears;
  };
  const annualizedReturn = (roiPct, years) =>
    (Math.pow(1 + roiPct / 100, 1 / years) - 1) * 100;

  const renderComparison = (metrics, data) => {
    const tbody = document.getElementById("comparison-tbody");
    if (!tbody) return;

    const years = getBacktestYears(data);
    const annualize = (m) => annualizedReturn(m.strategy_roi_pct, years);
    const calmar = (m) => {
      const mdd = Math.abs(m.strategy_max_drawdown_pct);
      if (mdd === 0) return Infinity;
      const ann = annualize(m);
      return Number.isFinite(ann) ? ann / mdd : NaN;
    };

    const rows = [
      { label: t("comp-roi"), get: (m) => m.strategy_roi_pct, fmt: formatPct },
      { label: t("comp-annual-roi"), get: annualize, fmt: formatPct },
      { label: t("comp-dd"), get: (m) => -Math.abs(m.strategy_max_drawdown_pct), fmt: formatPct, invert: true },
      { label: t("comp-calmar"), get: calmar, fmt: (v) => Number.isFinite(v) ? v.toFixed(2) : "--" },
      { label: t("comp-final-equity"), get: (m) => m.final_equity, fmt: formatUsd },
      { label: t("comp-bh-roi"), get: (m) => m.buy_hold_roi_pct, fmt: formatPct },
    ];

    const valClass = (v, row) => {
      if (row.invert) return v < 0 ? "val-neg" : "";
      return v >= 0 ? "val-pos" : "val-neg";
    };

    tbody.innerHTML = rows
      .map((row) => {
        const nf = row.get(metrics.no_filter);
        const so = row.get(metrics.short_only);
        const fp = row.get(metrics.full_protection);
        return `<tr>
          <td>${row.label}</td>
          <td class="${valClass(nf, row)}">${row.fmt(nf)}</td>
          <td class="${valClass(so, row)}">${row.fmt(so)}</td>
          <td class="col-highlight ${valClass(fp, row)}"><strong>${row.fmt(fp)}</strong></td>
        </tr>`;
      })
      .join("");
  };

  const renderEquityChart = (data) => {
    // Compute Buy & Hold equity from BTC prices (same $100K starting capital)
    const startPrice = data.btc_price.values[0];
    const bhEquity = data.btc_price.values.map((p) => 100000 * (p / startPrice));

    const traces = [
      {
        x: data.btc_price.timestamps,
        y: bhEquity,
        name: t("legend-bh"),
        line: { color: C.price, width: 1.2 },
        hovertemplate: "%{x|%Y-%m-%d}<br>$%{y:,.0f}<extra>" + t("legend-bh") + "</extra>",
      },
      {
        x: data.equity_charts.no_filter.timestamps,
        y: data.equity_charts.no_filter.equity,
        name: t("legend-no-filter"),
        line: { color: C.noFilter, width: 1.2, dash: "dot" },
        hovertemplate: "%{x|%Y-%m-%d}<br>$%{y:,.0f}<extra>" + t("legend-no-filter") + "</extra>",
      },
      {
        x: data.equity_charts.short_only.timestamps,
        y: data.equity_charts.short_only.equity,
        name: t("legend-short-only"),
        line: { color: C.shortOnly, width: 1.5 },
        hovertemplate: "%{x|%Y-%m-%d}<br>$%{y:,.0f}<extra>" + t("legend-short-only") + "</extra>",
      },
      {
        x: data.equity_charts.full_protection.timestamps,
        y: data.equity_charts.full_protection.equity,
        name: t("legend-full"),
        line: { color: C.full, width: 2 },
        hovertemplate: "%{x|%Y-%m-%d}<br>$%{y:,.0f}<extra>" + t("legend-full") + "</extra>",
      },
    ];

    // Event annotation markers
    const eventMarkers = [
      { date: "2022-11-08", label: "FTX" },
      { date: "2024-08-05", label: "BOJ" },
      { date: "2025-02-25", label: "Tariff" },
      { date: "2025-11-15", label: "Nov '25" },
      { date: "2026-01-20", label: "Jan '26" },
    ];
    const evtShapes = eventMarkers.map((m) => ({
      type: "line",
      x0: m.date, x1: m.date,
      y0: 0, y1: 1, yref: "paper",
      line: { color: "rgba(255,255,255,0.12)", width: 1, dash: "dot" },
    }));
    const evtAnnotations = eventMarkers.map((m) => ({
      x: m.date, y: 1.02, yref: "paper",
      text: m.label, showarrow: false,
      font: { size: 10, color: "rgba(255,255,255,0.4)" },
    }));

    const layout = {
      paper_bgcolor: "transparent",
      plot_bgcolor: C.plotBg,
      font: { color: C.text, family: "Inter, -apple-system, sans-serif", size: 11 },
      margin: { l: 65, r: 40, t: 40, b: 40 },
      height: 480,
      showlegend: true,
      legend: {
        bgcolor: "rgba(30,30,38,0.85)",
        bordercolor: "rgba(255,255,255,0.08)",
        borderwidth: 1,
        font: { color: C.textBright, size: 11 },
      },
      hovermode: "x unified",
      hoverlabel: {
        bgcolor: "rgba(30,30,38,0.95)",
        bordercolor: "rgba(255,255,255,0.12)",
        font: { color: "#fff", size: 12, family: "Inter, -apple-system, sans-serif" },
      },
      shapes: evtShapes,
      annotations: evtAnnotations,
      xaxis: {
        ...darkAxis,
        rangeslider: {
          visible: true,
          bgcolor: "hsl(210,3%,10%)",
          bordercolor: "rgba(255,255,255,0.06)",
          thickness: 0.06,
        },
        rangeselector: {
          buttons: [
            { count: 6, label: "6M", step: "month", stepmode: "backward" },
            { count: 1, label: "1Y", step: "year", stepmode: "backward" },
            { step: "all", label: "All" },
          ],
          bgcolor: "rgba(255,255,255,0.05)",
          bordercolor: "rgba(255,255,255,0.08)",
          activecolor: "rgba(57,211,174,0.15)",
          font: { color: C.textBright, size: 11 },
        },
      },
      yaxis: { ...darkAxis, type: "log", tickformat: "$~s", dtick: "D2" },
    };

    Plotly.newPlot("equity-plot", traces, layout, {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    });
  };

  const renderDrawdownChart = (data) => {
    const scenarios = [
      { key: "no_filter", color: C.noFilter, width: 1.2, dash: "dot" },
      { key: "short_only", color: C.shortOnly, width: 1.5 },
      { key: "full_protection", color: C.full, width: 2, fill: "tozeroy", fillcolor: "rgba(57,211,174,0.08)" },
    ];
    const legendKeys = {
      no_filter: "legend-no-filter",
      short_only: "legend-short-only",
      full_protection: "legend-full",
    };

    const traces = scenarios
      .filter((sc) => data.drawdown_charts[sc.key])
      .map((sc) => {
        const dd = data.drawdown_charts[sc.key];
        const name = t(legendKeys[sc.key]);
        return {
          x: dd.timestamps,
          y: dd.drawdown_pct,
          name,
          line: { color: sc.color, width: sc.width, dash: sc.dash },
          fill: sc.fill,
          fillcolor: sc.fillcolor,
          hovertemplate: "%{x|%Y-%m-%d}<br>%{y:.2f}%<extra>" + name + "</extra>",
        };
      });

    const layout = {
      paper_bgcolor: "transparent",
      plot_bgcolor: C.plotBg,
      font: { color: C.text, family: "Inter, -apple-system, sans-serif", size: 11 },
      margin: { l: 55, r: 40, t: 24, b: 40 },
      height: 340,
      showlegend: true,
      legend: {
        bgcolor: "rgba(30,30,38,0.85)",
        bordercolor: "rgba(255,255,255,0.08)",
        borderwidth: 1,
        font: { color: C.textBright, size: 11 },
      },
      hovermode: "x unified",
      hoverlabel: {
        bgcolor: "rgba(30,30,38,0.95)",
        bordercolor: "rgba(255,255,255,0.12)",
        font: { color: "#fff", size: 12, family: "Inter, -apple-system, sans-serif" },
      },
      xaxis: { ...darkAxis },
      yaxis: { ...darkAxis, ticksuffix: "%" },
    };

    Plotly.newPlot("drawdown-plot", traces, layout, {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    });
  };

  // ── Event order: reverse chronological (newest first) ──
  const EVENT_ORDER = ["crash_2026", "nov_2025", "tariff_2025", "boj_2024", "ftx_2022"];

  const formatExitReason = (reason) => {
    const key = `reason-${reason || "unknown"}`;
    const label = t(key);
    return `<span class="event-reason-tag reason-${reason || "unknown"}">${label}</span>`;
  };

  const formatDate = (dt) => {
    if (!dt) return "--";
    // "YYYY-MM-DD HH:MM:SS" → "MM/DD HH:MM"
    const d = new Date(dt.replace(" ", "T"));
    if (isNaN(d)) return dt.slice(0, 10);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    return `${mm}/${dd} ${hh}:${min}`;
  };

  const formatAction = (action) => t(`action-${action}`) || action;

  const formatMultiplierTag = (tr) => {
    if (!tr.long_multiplier || tr.long_multiplier >= 1.0) return "";
    const v = tr.long_multiplier;
    // Determine which MA level: 0.4 = MA180, 0.5 = MA120
    const level = v <= 0.4 ? "MA180" : "MA120";
    return ` <span class="event-reason-tag reason-ma-filter" title="${t("mult-tip")}">×${v} ${level}</span>`;
  };

  const formatSize = (v) => {
    if (v === null || v === undefined || Number.isNaN(v)) return "--";
    return v.toFixed(4);
  };

  const buildTradeTable = (scenario) => {
    if (!scenario || !scenario.trades || !scenario.trades.length) {
      return `<p style="color:var(--muted);font-size:13px;padding:16px 0">${t("evt-no-position")}</p>`;
    }
    const hdrs = [t("evt-trade-time"), t("evt-trade-action"), t("evt-trade-price"), t("evt-trade-size"), t("evt-trade-after")];
    const rows = scenario.trades
      .filter((tr) => tr.action !== "open") // skip "open" marker
      .map((tr) => {
        if (tr.action === "omitted") {
          const msg = t("evt-trades-omitted").replace("{n}", tr.count || 0);
          return `<tr class="trade-omitted-row"><td colspan="5">\u2026 ${msg} \u2026</td></tr>`;
        }
        const actionCls = `trade-action-${tr.action}`;
        const reasonTag = tr.exit_reason ? ` ${formatExitReason(tr.exit_reason)}` : "";
        const multTag = tr.action === "entry" ? formatMultiplierTag(tr) : "";
        return `<tr>
          <td>${formatDate(tr.time)}</td>
          <td class="${actionCls}">${formatAction(tr.action)}${reasonTag}${multTag}</td>
          <td>${formatUsd(tr.price)}</td>
          <td>${formatSize(tr.size)}</td>
          <td>${formatSize(tr.position_after)}</td>
        </tr>`;
      })
      .join("");

    return `<div class="table-wrap"><table class="trade-table">
      <thead><tr>${hdrs.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  };

  const buildScenarioCard = (label, scenario, highlight) => {
    const cls = highlight ? " event-scenario-highlight" : "";
    const table = buildTradeTable(scenario);
    const hasTradeData = scenario && scenario.trades && scenario.trades.length > 0;

    // Summary always visible at top
    const summary = scenario
      ? `<div class="trade-summary" style="margin-top:0;padding-top:0;border-top:none">
          <span>${formatExitReason(scenario.exit_reason)}</span>
          <span class="${scenario.return_pct >= 0 ? "val-pos" : "val-neg"}" style="font-weight:600">
            ${t("evt-pos-return")}: ${formatPct(scenario.return_pct)}
          </span>
        </div>`
      : "";

    // Collapsible trade details
    const tradeBlock = hasTradeData
      ? `<button class="trade-toggle">${t("trade-show-details")} \u25BE</button><div class="trade-details">${table}</div>`
      : table;

    return `<div class="event-scenario${cls}">
      <div class="event-scenario-title">${label}</div>
      ${summary}${tradeBlock}
    </div>`;
  };

  // Build event summary banner comparing two scenarios
  const buildEventSummaryBanner = (evt) => {
    const nf = evt.scenarios.no_filter;
    const fp = evt.scenarios.full_protection;
    if (!nf && !fp) return "";
    const nfRet = nf ? formatPct(nf.return_pct) : "--";
    const fpRet = fp ? formatPct(fp.return_pct) : "--";
    const nfCls = nf ? (nf.return_pct >= 0 ? "val-pos" : "val-neg") : "";
    const fpCls = fp ? (fp.return_pct >= 0 ? "val-pos" : "val-neg") : "";
    const diff = (nf && fp) ? (fp.return_pct - nf.return_pct) : null;
    const diffStr = diff !== null ? `${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%` : "--";
    const diffCls = diff !== null && diff >= 0 ? "val-pos" : "val-neg";
    return `<div class="event-summary-banner">
      <div class="event-summary-item">
        <span class="event-summary-label">${t("evt-no-lf")}</span>
        <span class="event-summary-value ${nfCls}">${nfRet}</span>
      </div>
      <div class="event-summary-item">
        <span class="event-summary-label">${t("evt-with-lf")}</span>
        <span class="event-summary-value ${fpCls}">${fpRet}</span>
      </div>
      <div class="event-summary-item">
        <span class="event-summary-label">\u0394</span>
        <span class="event-summary-value ${diffCls}">${diffStr}</span>
      </div>
    </div>`;
  };

  const renderEventDeepDive = (events) => {
    const tabsEl = document.getElementById("event-tabs");
    const panelsEl = document.getElementById("event-panels");
    if (!tabsEl || !panelsEl || !events || !events.length) return;

    const evtMap = {};
    events.forEach((e) => (evtMap[e.id] = e));

    // Render tabs
    tabsEl.innerHTML = EVENT_ORDER.filter((id) => evtMap[id])
      .map(
        (id, i) =>
          `<button class="event-tab${i === 0 ? " active" : ""}" data-event="${id}">${t("evt-" + id + "-tab")}</button>`
      )
      .join("");

    // Render panels — summary banner + 2-column: no_filter vs full_protection
    panelsEl.innerHTML = EVENT_ORDER.filter((id) => evtMap[id])
      .map((id, i) => {
        const evt = evtMap[id];
        const banner = buildEventSummaryBanner(evt);
        const left = buildScenarioCard(t("evt-no-lf"), evt.scenarios.no_filter, false);
        const right = buildScenarioCard(t("evt-with-lf"), evt.scenarios.full_protection, true);
        return `<div class="event-panel${i === 0 ? " active" : ""}" data-event="${id}">
          <p class="event-panel-desc">${t("evt-" + id + "-desc")}</p>
          ${banner}
          <div class="event-compare">${left}${right}</div>
        </div>`;
      })
      .join("");

    // Tab switching
    tabsEl.querySelectorAll(".event-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        tabsEl.querySelectorAll(".event-tab").forEach((b) => b.classList.remove("active"));
        panelsEl.querySelectorAll(".event-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const panel = panelsEl.querySelector(`.event-panel[data-event="${btn.dataset.event}"]`);
        if (panel) panel.classList.add("active");
      });
    });

    // Trade details toggle (event delegation, attach once)
    if (!panelsEl._toggleAttached) {
      panelsEl._toggleAttached = true;
      panelsEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".trade-toggle");
        if (!btn) return;
        const details = btn.nextElementSibling;
        if (!details) return;
        const isExpanded = details.classList.contains("expanded");
        details.classList.toggle("expanded");
        btn.textContent = isExpanded
          ? `${t("trade-show-details")} \u25BE`
          : `${t("trade-hide-details")} \u25B4`;
      });
    }
  };

  const renderAllData = (data) => {
    renderHero(data.metrics);
    renderComparison(data.metrics, data);
    renderEquityChart(data);
    renderDrawdownChart(data);
    if (data.event_deep_dives) renderEventDeepDive(data.event_deep_dives);
  };

  // ═══════════════════════════════════════════════════════
  //  Load showcase data
  // ═══════════════════════════════════════════════════════

  let _cachedData = null;

  const loadShowcase = async () => {
    const MAX_RETRIES = 6;
    const RETRY_DELAY = 5000;

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        const resp = await fetch("./showcase.json");
        if (resp.status === 503) {
          // Data still being computed at startup
          await new Promise((r) => setTimeout(r, RETRY_DELAY));
          continue;
        }
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const payload = await resp.json();
        if (!payload.ok) throw new Error("Invalid response");

        _cachedData = payload;
        renderAllData(payload);

        // Footer timestamp
        const footerEl = document.getElementById("footer-computed");
        if (footerEl && payload.computed_at) {
          footerEl.textContent = `Data computed: ${new Date(payload.computed_at).toLocaleString()}`;
        }
        return;
      } catch (err) {
        if (attempt < MAX_RETRIES - 1) {
          await new Promise((r) => setTimeout(r, RETRY_DELAY));
          continue;
        }
        console.error("Showcase load error:", err);
        const el = document.getElementById("equity-plot");
        if (el)
          el.innerHTML = `<div class="loading-overlay" style="color:var(--red)">${t("error-load")}</div>`;
      }
    }
  };

  // ═══════════════════════════════════════════════════════
  //  Scale toggle (Log / Linear)
  // ═══════════════════════════════════════════════════════
  document.querySelectorAll(".scale-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scale-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      Plotly.relayout("equity-plot", { "yaxis.type": btn.dataset.scale });
    });
  });

  // ═══════════════════════════════════════════════════════
  //  Init
  // ═══════════════════════════════════════════════════════
  applyTranslations();
  loadShowcase();
})();
