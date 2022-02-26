import { createAction } from 'redux-actions'


export const getSheltersRequest = createAction('GET_SHELTERS_REQUEST')
export const getSheltersSuccess = createAction('GET_SHELTERS_SUCCESS')

export const getFirstStep = createAction('GET_FIRST_STEP')
export const getSecondStep = createAction('GET_SECOND_STEP')
export const getThirdStep = createAction('GET_THIRD_STEP')
export const getNextStep = createAction('GET_NEXT_STEP')
export const getBackStep = createAction('GET_BACK_STEP')
export const postSendForm = createAction('POST_SEND_FORM')
