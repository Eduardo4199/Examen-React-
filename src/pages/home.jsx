import React, { Fragment, useContext, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Image } from '../components/home/image'
import { Paginator } from '../components/home/paginator'
import { UserContext } from '../context/user.context'
import { Navbar } from '../components/navbar/navbar'
import { ThemeContext } from '../context/theme.context'


export function Home() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme)

    useEffect(() => {
        imagesService.getImages(page).then((data) => {
            setImages(data);
            setTotalResults(data.length)
        })
    }, [page])

    return (
        <Fragment>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <div className={`container ${theme}`}>
                <div className="card-columns">
                    {images.map((image, index) =>
                        <Fragment key={index}>
                            <Image data={image} />
                        </Fragment>
                    )}
                </div>
                <Paginator page={page} setPage={setPage} totalResults={totalResults} />
            </div>
        </Fragment>
    )
}