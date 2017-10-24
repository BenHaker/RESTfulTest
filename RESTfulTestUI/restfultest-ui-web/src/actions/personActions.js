export const SEARCH_PERSON = "SEARCH_PERSON";
export const SEARCH_PERSON_COMPLETED = "SEARCH_PERSON_COMPLETED";
export const SEARCH_PERSON_ERROR = "SEARCH_PERSON_ERROR";
export const CREATE_RANDOM_PERSON = "CREATE_RANDOM_PERSON";
export const CREATE_RANDOM_PERSON_COMPLETED = "CREATE_RANDOM_PERSON_COMPLETED";
export const CREATE_RANDOM_PERSON_ERROR = "CREATE_RANDOM_PERSON_ERROR";
export const DELETE_PERSON = "DELETE_PERSON";
export const DELETE_PERSON_COMPLETED = "DELETE_PERSON_COMPLETED";
export const DELETE_PERSON_ERROR = "DELETE_PERSON_ERROR";
export const CREATE_PERSON = "CREATE_PERSON";
export const CREATE_PERSON_COMPLETED = "CREATE_PERSON_COMPLETED";
export const CREATE_PERSON_ERROR = "CREATE_PERSON_ERROR";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const UPDATE_PERSON_COMPLETED = "UPDATE_PERSON_COMPLETED";
export const UPDATE_PERSON_ERROR = "UPDATE_PERSON_ERROR";
export const SELECT_PERSON = "SELECT_PERSON";
export const SELECT_PERSON_CLEAR = "SELECT_PERSON_CLEAR";
export const MESSAGE_CLEAR = "MESSAGE_CLEAR";

export function searchPersonAction(search) {
    return {
        type: SEARCH_PERSON,
        payload: search
    }
}

export function searchPersonCompletedAction(data) {
    return {
        type: SEARCH_PERSON_COMPLETED,
        payload: data
    }
}

export function searchPersonErrorAction(error) {
    return {
        type: SEARCH_PERSON_ERROR,
        payload: error
    }
}

export function createRandomPersonAction(number) {
    return {
        type: CREATE_RANDOM_PERSON,
        payload: number
    }
}

export function createRandomPersonCompletedAction(data) {
    return {
        type: CREATE_RANDOM_PERSON_COMPLETED,
        payload: data
    }
}

export function createRandomPersonErrorAction(error) {
    return {
        type: CREATE_RANDOM_PERSON_ERROR,
        payload: error
    }
}

export function deletePersonAction(id, key) {
    return {
        type: DELETE_PERSON,
        payload: { id: id, key: key }
    }
}

export function deletePersonCompletedAction(id ,key) {
    return {
        type: DELETE_PERSON_COMPLETED,
        payload: { id: id, key: key }
    }
}

export function deletePersonErrorAction(error) {
    return {
        type: DELETE_PERSON_ERROR,
        payload: error
    }
}

export function createPersonAction(data) {
    return {
        type: CREATE_PERSON,
        payload: data
    }
}

export function createPersonCompletedAction(data) {
    return {
        type: CREATE_PERSON_COMPLETED,
        payload: data
    }
}

export function createPersonErrorAction(error) {
    return {
        type: CREATE_PERSON_ERROR,
        payload: error
    }
}

export function updatePersonAction(id, data, key) {
    return {
        type: UPDATE_PERSON,
        payload: { id: id, data: data, key: key }
    }
}

export function updatePersonCompletedAction(person ,key) {
    return {
        type: UPDATE_PERSON_COMPLETED,
        payload: { data: person, key: key }
    }
}

export function updatePersonErrorAction(error) {
    return {
        type: UPDATE_PERSON_ERROR,
        payload: error
    }
}

export function selectPersonAction(index) {
    return {
        type: SELECT_PERSON,
        payload: index
    }
}

export function selectPersonClearAction() {
    return {
        type: SELECT_PERSON_CLEAR,
    }
}

export function messageClearAction() {
    return {
        type: MESSAGE_CLEAR,
    }
}