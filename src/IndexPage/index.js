import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { CardGrid, NoResults } from './Components'
import Card from './Card'
import IconSetPage from '../IconSetPage'
import { Contents } from '../BaseComponents'
import icons from '../IconComponents'
import { ControlsView } from './ControlsView'

import { sortByIconCount } from '../utils/sort'
import { navigate, getQueryParamState } from '../utils/url'

class IndexPage extends Component {
  _navigate = (set) => navigate(this.props.history, this.props.location, set)

  render() {
    const focusedSet = this.props.location.pathname.split(/\//g)[1]
    const queryParamState = getQueryParamState(this.props.location)

    const visibleIconSets = sortByIconCount(
      icons,
      Object.keys(icons),
      queryParamState.sort
    ).filter((set) =>
      queryParamState.filter
        ? set.match(new RegExp('^' + queryParamState.filter))
        : true
    )

    return (
      <>
        <Contents>
          <ControlsView
            history={this.props.history}
            location={this.props.location}
            queryParam={queryParamState}
          />

          {visibleIconSets.length === 0 ? (
            <NoResults>No Results Found</NoResults>
          ) : (
            <CardGrid display={queryParamState.display}>
              {visibleIconSets.map((set) => {
                if (set === focusedSet) return <li key={set} />
                return (
                  <Card
                    key={set}
                    setKey={set}
                    icons={icons[set]}
                    iconCount={icons[set].length}
                    navigate={this._navigate}
                  />
                )
              })}
            </CardGrid>
          )}
        </Contents>
        <Route path="/:set/:focusedIcon?" component={IconSetPage} />
      </>
    )
  }
}

export default withRouter(IndexPage)
