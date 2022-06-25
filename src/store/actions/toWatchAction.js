export const addToWatch = (toWatch) => {
  return {
    type: 'addToWatch',
    payload: toWatch
  }
}
export const delToWatch = (id) => {
  return {
    type: 'delToWatch',
    payload: id
  }
}
export const toggleToWatch = (id) => {
  return {
    type: 'toggleToWatch',
    payload: id
  }
}
