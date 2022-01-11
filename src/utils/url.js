import qs from 'qs'

export const updateQueryParam = (history, location, obj) => {
  history.push({
    search: `?${qs.stringify({
      ...qs.parse(location.search.replace('?', '')),
      ...obj,
    })}`,
  })
}

export const navigate = (history, location, set) => {
  history.push({
    pathname: `/${set.replace(/\s/g, '-')}`,
    search: location.search,
  })
}

const defaultState = {
  filter: '',
  display: 'grid',
  sort: 'ascending',
}

export const getQueryParamState = (location) => {
  return {
    ...defaultState,
    ...qs.parse(location.search.replace('?', '')),
  }
}
