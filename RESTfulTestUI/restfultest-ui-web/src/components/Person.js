import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePersonAction, deletePersonErrorAction, selectPersonAction, updatePersonErrorAction } from '../actions/personActions'

export function Person(props) {
    return (<tr>
                <td>
                    { props.lastName + ", " + props.firstName }
                </td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.deletePerson(props._links.self.href, props.index)}>Delete</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.updatePerson(props.index, props.history)}>Update</button>
                </td>
            </tr>)
}

function mapDispatch(dispatch) {
    return {
        deletePerson: (id, key) => { 
            if(id == null || id === "")
            {
                dispatch(deletePersonErrorAction("No Person ID was Provided"));;
                return;
            }
            if(key == null || key === "")
            {
                dispatch(deletePersonErrorAction("No Person Key was Provided"));;
                return;
            }
            dispatch(deletePersonAction(id, key))
        },
        updatePerson: (key, history) => { 
            if(key == null || key === "")
            {
                dispatch(updatePersonErrorAction("No Person Key was Provided"));;
                return;
            }
            dispatch(selectPersonAction(key));
            history.push("/update");
        },
    }
}

export default withRouter(connect(null, mapDispatch)(Person));