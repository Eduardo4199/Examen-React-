import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export function Image(props) {

    return (
        <Fragment className="container">
            <Link to={'/Image/' + props.data.id}>
                <div className="card">
                    <img className="card-img img-fluid" src={props.data.download_url} />
                    <div className="card-body card-columns card-img-overlay">
                        {props.data.author}
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}