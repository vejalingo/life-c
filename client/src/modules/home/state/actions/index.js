import api from 'shared/api/request'
import { push } from 'connected-react-router'
import { toClient } from './resource'

export const fetchAction = id => async dispatch => {
  dispatch({ type: 'shared/form/FETCHING' })

  const { data, error } = await api.get(`/actions/${id}`)

  if (data) {
    dispatch({ type: 'shared/item/FETCHED_ITEM', item: data[0] })
  } else {
    dispatch({ type: 'shared/form/FETCH_ERROR', messages: error })
  }
}

export const fetchActions = () => async dispatch => {
  dispatch({ type: 'shared/list/FETCHING' })

  const data = await api.get(`/actions`)

  if (data) {
    dispatch({ type: 'shared/list/FETCHED_ITEMS', items: data.map(d => toClient(d)) })
  } else {
    dispatch({ type: 'shared/list/FETCH_ERROR' })
  }
}

export const createAction = data => async dispatch => {
  dispatch({ type: 'shared/form/FETCHING' })

  const actionId = await api.post(`/actions`, { data })

  if (actionId) {
    dispatch(push(`/`))
  }
}

export const updateAction = (id, data) => async dispatch => {
  dispatch({ type: 'shared/form/FETCHING' })

  await api.put(`/actions/${id}`, { data })

  dispatch(push(`/`))
}

export const removeAction = id => async dispatch => {
  dispatch({ type: 'shared/form/SUBMITTING' })
  try {
    await api.delete(`/actions/${id}`)
    dispatch({ type: 'shared/form/SUBMITTED' })
    dispatch(push(`/`))
  } catch (error) {
    dispatch({ type: 'shared/form/SUBMITTED' })
  }
}
