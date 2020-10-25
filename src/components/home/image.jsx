import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export function Image(props) {

    return (
        <Fragment className="container">
            <div className="card row">
                <div className="card-body card-columns">
                    {props.data.author}
                    <img className="card-img-top img-fluid" src={props.data.download_url} />
                    <Link to={ '/Image/' + props.data.id}>
                        Ver mas detalle
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}