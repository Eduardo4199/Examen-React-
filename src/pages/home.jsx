import React, { Fragment, useContext, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Image } from '../components/home/image'
import { Paginator } from '../components/home/paginator'
import { UserContext } from '../context/user.context'
import { Navbar } from '../components/navbar/navbar'


export function Home() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState();
    const { user } = useContext(UserContext)

    console.log("Context")
    console.log(user)

    useEffect(() => {
        imagesService.getImages(page).then((data) => {
            setImages(data);
            setTotalResults(data.length)
        })
    }, [page])

    return (
        <Fragment>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
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