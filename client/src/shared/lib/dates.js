import moment from 'moment'

const defaultDateFormat = 'DD/MM/YYYY'
const defaultTimeFormat = 'HH:MM A'

export const getDateFormat = () => defaultDateFormat
export const getTimeFormat = () => defaultTimeFormat

export const formatDate = value => (value ? moment(value).format(getDateFormat()) : value)
export const formatTime = value => (value ? moment(value).format(getTimeFormat()) : value)
