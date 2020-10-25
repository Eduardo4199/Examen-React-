import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export function ImageDetail(props) {

    return (
        <Fragment>
            <div>

                {props.location.data &&
                    <Fragment>
                        {props.location.data.author}
                        < img src={props.location.data.download_url} />
                    </Fragment>
                }
                {!props.location.data &&
                    <Fragment>
                        <h2>Oops! La imagen que buscas no se encuentra disponible</h2>
                        <Link to="/Home"> Volver al inicio </Link>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}