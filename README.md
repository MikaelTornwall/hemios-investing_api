# Hemios Investing

https://hemios.herokuapp.com/

## Description

Financial data analysis tool for value investors.

Currently we provide analysis for balance sheet values for most SP500 companies.

The app also provides an API for financial data. The data is originally from Yahoo Finance.

[The front-end source code can be found here](https://github.com/osguosgu/hemios-investing)

## Contributors
* [@osguosgu](https://github.com/osguosgu) (Oskari Päivinen)

* [@maimei](https://github.com/maimei) (Helena Meissner)

* [@MikaelTornwall](https://github.com/MikaelTornwall) (Mikael Törnwall)

## API

### Endpoints:

__For the annual financial data (last four years):__

https://hemios.herokuapp.com/api/financial_data

https://hemios.herokuapp.com/api/financial_data/:id

https://hemios.herokuapp.com/api/financial_data/:id/incomeStatement

https://hemios.herokuapp.com/api/financial_data/:id/cashflowStatement

https://hemios.herokuapp.com/api/financial_data/:id/balanceSheet

__For the quarterly financial data (last four quarters):__

https://hemios.herokuapp.com/api/financial_data_quarterly

https://hemios.herokuapp.com/api/financial_data_quarterly/:id

https://hemios.herokuapp.com/api/financial_data_quarterly/:id/incomeStatement

https://hemios.herokuapp.com/api/financial_data_quarterly/:id/cashflowStatement

https://hemios.herokuapp.com/api/financial_data_quarterly/:id/balanceSheet

__For the industries:__

https://hemios.herokuapp.com/api/industries

_Where the :id is the company id, such as AAPL or GOOGL, make sure to use uppercase letters when making requests._
