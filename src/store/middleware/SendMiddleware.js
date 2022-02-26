import {getNextStep, postSendForm} from "../actions";
import {serverSendForm} from "../../api/api";

export const SendMiddleware = (store) => (next) => async (action) => {
    if (action.type === postSendForm.toString()) {
        const dataSend = action.payload
        const messages = await serverSendForm(dataSend)
        if (messages) {
            console.log(messages)
            store.dispatch(getNextStep(0))
        }
    } else {
        next(action)
    }
}