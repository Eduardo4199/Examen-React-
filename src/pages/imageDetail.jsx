import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import { imagesService } from '../services/images.service'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar'
import { ThemeContext } from '../context/theme.context';

export function ImageDetail(props) {

    const [image, setImage] = useState({})
    const {theme} = useContext(ThemeContext)


    useEffect(() => {
        imagesService.getImageById(props.match.params.id).then((data) => {
            console.log(data)
            setImage(data)
        })
    }, [])

    return (
        <Fragment>
            {console.log(image)}
            <Navbar></Navbar>
            <div>
                {image &&
                    <Fragment>
                        <hr></hr>
                        <div className={`container ${theme}`}>
                            <div className={`card ${theme}`}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src={image.download_url} className="img-thumbnail" />
                                        </div>
                                        <div className="col">
                                            <div>
                                                <h4 className={theme}>Subida por: {image.author}</h4>
                                            </div>
                                            <div>
                                                {image.width}x{image.height}
                                            </div>
                                            <a href={image.download_url} target="_blank" >Descargar</a>
                                            <hr></hr>
                                            <a href={image.url}>
                                                Imagen original
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}