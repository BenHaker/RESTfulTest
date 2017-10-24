import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { SEARCH_PERSON, searchPersonCompletedAction, searchPersonErrorAction, 
    CREATE_RANDOM_PERSON, CREATE_RANDOM_PERSON_COMPLETED, createRandomPersonCompletedAction, createRandomPersonErrorAction,
    DELETE_PERSON, deletePersonCompletedAction, deletePersonErrorAction,
    CREATE_PERSON, CREATE_PERSON_COMPLETED, createPersonCompletedAction, createPersonErrorAction,
    UPDATE_PERSON, updatePersonCompletedAction, updatePersonErrorAction,
    messageClearAction } from '../actions/personActions';
import { url, port } from '../url'

function searchPersonEpic(action$) {
    return action$.ofType(SEARCH_PERSON)
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(({ payload }) => Observable.ajax.getJSON(`http://${ url }:${ port }/people/search/findByLastName?name=${ payload }`)
                .map(response => searchPersonCompletedAction(response._embedded.people))
                .catch(error => Observable.of(searchPersonErrorAction(error.message)))
            );
}

function createRandomPersonEpic(action$) {
    return action$.ofType(CREATE_RANDOM_PERSON)
        .switchMap(({ payload }) =>  
            Observable.ajax.getJSON(`http://${ url }:${ port }/people/actions/createRandom?number=${ payload }`)
                .map(response => createRandomPersonCompletedAction(`Created ${ response.created } New Persons`))
                .catch(error => Observable.of(createRandomPersonErrorAction(error.message)))
            );
}

function deletePersonEpic(action$) {
    return action$.ofType(DELETE_PERSON)
        .switchMap(({ payload }) =>  
            Observable.ajax.delete(payload.id)
                .map(response => deletePersonCompletedAction(response, payload.key))
                .catch(error => Observable.of(deletePersonErrorAction(error.message)))
            );
}

function createPersonEpic(action$) {
    return action$.ofType(CREATE_PERSON)
        .switchMap(({ payload }) =>  
            Observable.ajax.post(`http://${ url }:${ port }/people/`, payload, { 'Content-Type': 'application/json' })
                .map(response => createPersonCompletedAction("New Person Created"))
                .catch(error => Observable.of(createPersonErrorAction(error.message)))
            );
}

function updatePersonEpic(action$) {
    return action$.ofType(UPDATE_PERSON)
        .switchMap(({ payload }) =>  
            Observable.ajax.patch(payload.id, payload.data, { 'Content-Type': 'application/json' })
                .map(response => updatePersonCompletedAction(response.response, payload.key))
                .catch(error => Observable.of(updatePersonErrorAction(error.message)))
            );
}

function messageClearEpic(action$) {
    return action$.filter((action) => action.type === CREATE_RANDOM_PERSON_COMPLETED || action.type === CREATE_PERSON_COMPLETED)
        .delay(2000)
        .map(() => messageClearAction());
}

export const rootEpic = combineEpics(searchPersonEpic, createRandomPersonEpic, deletePersonEpic, createPersonEpic, updatePersonEpic, messageClearEpic);