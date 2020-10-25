import React, { Fragment, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Link } from 'react-router-dom';

export function ImageDetail(props) {

    const [image, setImage] = useState({})


    useEffect(() => {
        imagesService.getImageById(props.match.params.id).then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [])

    return (
        <Fragment>
            {console.log(image)}
            <div>
                {image &&
                    <Fragment>
                        {image.author}
                        < img src={image.download_url} />
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}