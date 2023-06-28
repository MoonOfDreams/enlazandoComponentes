import React from 'react';
import Genre from './Genre';
import { useState, useEffect } from "react"

function GenresInDb() {
    let [genres, setGenres] = useState([])

    function handleMouseOver () {
        document.querySelector(".card-body.genres-body").classList.add("bg-secondary")
    }

    useEffect(() => {
        fetch("/api/genres").then(res => res.json()).then(result => setGenres(result.data))
    }, [])

    return (
        <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={handleMouseOver}>Genres in Data Base</h6>
                    </div>
                    <div className="card-body genres-body">
                        <div className="row">
                            {
                                genres.map((genre, index) => {
                                    return <Genre  {...genre} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}
export default GenresInDb;