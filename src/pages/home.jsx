import React, { Fragment, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Image } from '../components/home/image'
import { Paginator } from '../components/home/paginator'


export function Home() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState();


    useEffect(() => {
        imagesService.getImages(page).then((data) => {
            setImages(data);
            setTotalResults(data.length)
        })
    }, [page])

    return (
        <Fragment>
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