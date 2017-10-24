import { SEARCH_PERSON, SEARCH_PERSON_COMPLETED, SEARCH_PERSON_ERROR, 
    CREATE_RANDOM_PERSON, CREATE_RANDOM_PERSON_COMPLETED, CREATE_RANDOM_PERSON_ERROR,
    DELETE_PERSON, DELETE_PERSON_COMPLETED, DELETE_PERSON_ERROR,
    CREATE_PERSON, CREATE_PERSON_COMPLETED, CREATE_PERSON_ERROR,
    UPDATE_PERSON, UPDATE_PERSON_COMPLETED, UPDATE_PERSON_ERROR,
    SELECT_PERSON, SELECT_PERSON_CLEAR,
    MESSAGE_CLEAR } from '../actions/personActions'

const initialStat = { 
    persons: [], 
    loading: false,
    error: null,
    message: null,
    current: null
};

export function personReducer(state = initialStat, action) {
    switch(action.type) {
        case SEARCH_PERSON:
        case CREATE_RANDOM_PERSON:
        case DELETE_PERSON:
        case CREATE_PERSON:
        case UPDATE_PERSON:
            return { 
                ...state,
                error: null,
                loading: true,
                message: null,
                current: null
            }
        case SELECT_PERSON:
            return { 
                ...state,
                error: null,
                loading: false,
                message: null,
                current: action.payload
            }
        case SEARCH_PERSON_COMPLETED:
            return { 
                ...state,
                persons: action.payload,
                error: null,
                loading: false,
                message: null,
                current: null
            }
        case CREATE_RANDOM_PERSON_COMPLETED:
        case CREATE_PERSON_COMPLETED:
            return { 
                ...state,
                error: null,
                loading: false,
                current: null,
                message: action.payload
            }
        case DELETE_PERSON_COMPLETED:
            return { 
                ...state,
                persons: state.persons.slice(0, action.payload.key).concat(state.persons.slice(action.payload.key + 1)),
                error: null,
                loading: false,
                message: null,
                current: null
            }
        case UPDATE_PERSON_COMPLETED:
            return { 
                ...state,
                persons: state.persons.slice(0, action.payload.key).concat([action.payload.data]).concat(state.persons.slice(action.payload.key + 1)),
                error: null,
                loading: false,
                message: null,
                current: null,
            }
        case SELECT_PERSON_CLEAR:
            return { 
                ...state,
                current: null,
            }
        case SEARCH_PERSON_ERROR:
        case CREATE_RANDOM_PERSON_ERROR:
        case DELETE_PERSON_ERROR:
        case CREATE_PERSON_ERROR:
        case UPDATE_PERSON_ERROR:
            return { 
                ...state,
                error: action.payload,
                loading: false,
                message: null,
                current: null,
            }
        case MESSAGE_CLEAR:
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
};