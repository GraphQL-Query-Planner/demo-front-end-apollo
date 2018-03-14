## Summary
This is a client for the [Webscale](https://github.com/GraphQL-Query-Planner/webscale) demo application. Webscale is a Ruby on Rails app that uses the [graphql-analyzer](https://github.com/GraphQL-Query-Planner/graphql-analyzer) gem to analyze the backend queries it makes when resolving GraphQL queries.

## Setup

### Server
Set up [Webscale](https://github.com/GraphQL-Query-Planner/webscale). See instructions in that repository.
Run the Webscale rails server on port 3001:
```
webscale $ rails s -p 3001
```

### Client
Clone this project
```
$ git clone ...
```
Install dependencies
```
demo-front-end-apollo $ yarn install
```
Run the client on port 3000 (the default):
```
demo-front-end-apollo $ yarn start
```
