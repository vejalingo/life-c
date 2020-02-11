import { formatDate } from 'shared/lib/dates'

export const toClient = item => ({
  ...item,
  cover_start_date: formatDate(item.cover_start_date),
  total_premium: `R${item.total_premium || 0}`
})
