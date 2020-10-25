import React, { Fragment } from 'react'

export function Image(props){

    return(
        <Fragment>
            <div>
                {props.data.author}
                <img src={props.data.download_url}/>
            </div>
        </Fragment>
    )
}