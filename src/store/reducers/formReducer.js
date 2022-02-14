import {
	getFirstStep,
	getSecondStep,
	getNextStep,
	getBackStep
} from '../actions'

const initialState = {
	first: [],
	second: [],
	currStep: 0
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch (action.type) {
		case getFirstStep.toString(): {
			return {
					first: action.payload,
			}
		}
		case getSecondStep.toString(): {
			return {
				...state,
				second: action.payload,
			}
		}
		case getNextStep.toString(): {
			return {
				...state,
				currStep: action.payload
			}
		}
		case getBackStep.toString(): {
			return {
				...state,
				currStep: action.payload
			}
		}
		default:
			return state
	}
}
