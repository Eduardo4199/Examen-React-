import React, { Fragment } from 'react'

export function Paginator(props) {

    const changePage = (newPage) => {
        props.setPage(props.page + newPage)
    }

    console.log(props.totalResults)
    return (
        <Fragment>
            <div className="">
                <button classname="btn btn-outline-primary" onClick={() => changePage(-1)} disabled={props.page == 1 ? true : false}>Atras</button>
                <button onClick={() => changePage(1)} disabled={props.totalResults == 30 ? false : true}>Siguiente</button>
            </div>
        </Fragment>
    )
}