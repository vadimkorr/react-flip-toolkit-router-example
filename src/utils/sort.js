export const sortByIconCount = (icons, iconKeys, sort) => {
  if (sort === 'ascending') {
    return [...iconKeys].sort((a, b) => {
      if (icons[a].length < icons[b].length) return -1
      else if (icons[b].length < icons[a].length) return 1
      else return 0
    })
  } else {
    return [...iconKeys].sort((a, b) => {
      if (icons[a].length > icons[b].length) return -1
      else if (icons[b].length > icons[a].length) return 1
      else return 0
    })
  }
}
