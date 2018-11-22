# Hemios Investing API

## Description
API for the value investing analysis tool Hemios. The data is originally from Yahoo Finance.

## Endpoints:
__For the annual financial data (last four year):__

https://polar-springs-21656.herokuapp.com/api/financial_data

https://polar-springs-21656.herokuapp.com/api/financial_data/:id

https://polar-springs-21656.herokuapp.com/api/financial_data/:id/incomeStatement

https://polar-springs-21656.herokuapp.com/api/financial_data/:id/cashflowStatement

https://polar-springs-21656.herokuapp.com/api/financial_data/:id/balanceSheet

__For the quarterly financial data (last four quarters):__

https://polar-springs-21656.herokuapp.com/api/financial_data_quarterly

https://polar-springs-21656.herokuapp.com/api/financial_data_quarterly/:id

https://polar-springs-21656.herokuapp.com/api/financial_data_quarterly/:id/incomeStatement

https://polar-springs-21656.herokuapp.com/api/financial_data_quarterly/:id/cashflowStatement

https://polar-springs-21656.herokuapp.com/api/financial_data_quarterly/:id/balanceSheet

__For the industries:__

https://polar-springs-21656.herokuapp.com/api/industries

_Where the :id is the company id, such as AAPL or GOOGL, make sure to use uppercase letters when making requests._
