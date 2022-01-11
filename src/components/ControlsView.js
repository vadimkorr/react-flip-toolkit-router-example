import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faList,
  faTh,
  faDollarSign,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons'
import { Toggle } from './Toggle'
import { Controls } from './Controls'

import { updateQueryParam } from '../utils/url'

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
