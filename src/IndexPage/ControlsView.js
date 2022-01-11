import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import qs from 'qs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faList,
  faTh,
  faFilter,
  faDollarSign,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons'
import { CardGrid, Controls, Toggle, NoResults } from './Components'

import Card from './Card'
import IconSetPage from '../IconSetPage'
import { Contents } from '../BaseComponents'
import icons from '../IconComponents'

import { sortByIconCount } from '../utils/sort'
import { updateQueryParam } from '../utils/url'

const defaultState = {
  filter: '',
  display: 'grid',
  sort: 'ascending',
}

export const ControlsView = ({ history, location, queryParam }) => {
  return (
    <Controls>
      <div>
        <Toggle
          active={queryParam.sort === 'ascending'}
          onClick={() =>
            updateQueryParam(history, location, { sort: 'ascending' })
          }
        >
          <FontAwesomeIcon icon={faDollarSign} />
          <FontAwesomeIcon icon={faSortAmountUp} />
        </Toggle>
        <Toggle
          active={queryParam.sort === 'descending'}
          onClick={() =>
            updateQueryParam(history, location, { sort: 'descending' })
          }
        >
          <FontAwesomeIcon icon={faDollarSign} />
          <FontAwesomeIcon icon={faSortAmountDown} />
        </Toggle>
      </div>
      <div>
        <Toggle
          active={queryParam.display === 'list'}
          onClick={() =>
            updateQueryParam(history, location, { display: 'list' })
          }
        >
          <FontAwesomeIcon icon={faList} />
        </Toggle>
        <Toggle
          active={queryParam.display === 'grid'}
          onClick={() =>
            updateQueryParam(history, location, { display: 'grid' })
          }
        >
          <FontAwesomeIcon icon={faTh} />
        </Toggle>
      </div>
    </Controls>
  )
}
