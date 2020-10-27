import React, { Fragment, useContext } from 'react'
import { ThemeContext } from '../../context/theme.context'

export function Paginator(props) {

    const {theme, setTheme } = useContext(ThemeContext);

    const changePage = (newPage) => {
        props.setPage(props.page + newPage)
    }

    return (
        <Fragment>
            <div>
                <ul className={`pagination justify-content-center`}>
                    <li className={props.page == 1 ? 'page-item disabled' : 'page-item '}>
                        <a className={`page-link ${theme == "lightTheme" ?  'lightButton' : 'darkButton' }`} href="#" onClick={() => changePage(-1)} >Previous</a>
                    </li>
                    <li className={props.totalResults == 30 ? "page-item" : "page-item disabled"}>
                        <a className={`page-link ${theme == "lightTheme" ?  'lightButton' : 'darkButton' }`} href="#" onClick={() => changePage(1)}>Next</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}