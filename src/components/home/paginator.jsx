import React, { Fragment } from 'react'

export function Paginator(props) {

    const changePage = (newPage) => {
        props.setPage(props.page + newPage)
    }

    return (
        <Fragment>
            <div className="">
                <ul className="pagination justify-content-center">
                    <li className={props.page == 1 ? 'page-item disabled' : 'page-item '}>
                        <a class="page-link" href="#" onClick={() => changePage(-1)}>Previous</a>
                    </li>
                    <li className={props.totalResults == 30 ? "page-item" : "page-item disabled"}>
                        <a class="page-link" href="#" onClick={() => changePage(1)}>Next</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}