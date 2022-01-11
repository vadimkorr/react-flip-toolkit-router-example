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
