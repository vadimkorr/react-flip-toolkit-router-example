import React from 'react'
import { Router } from 'react-router'
import { Route } from 'react-router-dom'
import IndexPage from './IndexPage'
import { Flipper } from 'react-flip-toolkit'
import { getHistory } from './utils/history'

const history = getHistory()

const App = () => (
  <Router history={history}>
    <Route
      render={({ location, search }) => {
        return (
          <Flipper
            flipKey={`${location.pathname}-${location.search}`}
            decisionData={{
              location,
              search,
            }}
          >
            <IndexPage />
          </Flipper>
        )
      }}
    />
  </Router>
)

export default App
