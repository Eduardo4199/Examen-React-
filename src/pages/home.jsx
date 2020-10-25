import React, { Fragment, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Image } from '../components/home/image'

export function Home() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        imagesService.getImages().then((data) => {
            setImages(data);
        })
      }, [])

    return (
        <Fragment>
            {images.map((image, index) =>
                <Fragment key={index}>
                    {console.log(image)}
                    <Image data={image}/>
                </Fragment>
            )}
        </Fragment>
    )
}