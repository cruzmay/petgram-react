import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
    uri: 'https://pegram-server.midudev.now.sh/graphql'
})

ReactDOM.render(<App />,
    document.getElementById('app'))