import React from 'react';
import { withRouter } from 'react-router-dom';

export function PersonDetails(props) {
    let firstName = null;
    let lastName = null;

    return (
        <div>
            <div className="form-group">
                <input className="form-control" placeholder="Insert First Name" ref={input => { firstName = input; }} defaultValue={ props.firstName }/>
                <input className="form-control" placeholder="Insert Last Name" ref={input => { lastName = input; }} defaultValue={ props.lastName }/>
                <button className="btn btn-primary" onClick={ () => { props.onClick(firstName.value, lastName.value, props.personId, props.index, props.history) }}>{ props.buttonText }</button>
                { props.onCancel && <button className="btn btn-primary" onClick={ () => { props.onCancel(props.history) }}>Cancel</button> }
            </div>
            { props.loading && <div className="alert alert-info">Loading, please wait</div> }
            { props.error && <div className="alert alert-danger">{ props.error }</div> }
            { props.message && <div className="alert alert-success">{ props.message }</div> }
        </div>
        )
}

export default withRouter(PersonDetails);