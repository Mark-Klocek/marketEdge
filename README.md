# MarketEdge

MarketEdge is an app being built to compare vig-free sportsbook odds with live prediction and futures market prices and flag and execute positive expected-value (+EV) trades.

## How it works

The planned workflow removes the sportsbook margin (vig) from betting odds to estimate fair probabilities. It compares those estimates with live exchange prices to identify +EV trades. Kalshi is the first planned exchange. Automated execution would use a configurable minimum edge.

## Tech stack

- Laravel (PHP) with Laravel authentication
- React with Inertia.js and Tailwind CSS
- SQLite for local development, with PostgreSQL planned


## Roadmap

- Integrate the Kalshi API for market data.
- Ingest de-vigged sportsbook odds and calculate expected value.
- Build a dashboard showing edges across markets.
- Stream live data via WebSockets.
- Add paper trading to test strategies before committing real capital.
- Automate trade execution when a configurable edge threshold is met.
- Add support for more exchanges.
