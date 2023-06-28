import React from 'react';
import { useState, useEffect } from "react"

import MovieList from './MovieList';

function Movie() {
	let [movies, setMovies] = useState([])

	useEffect(() => {
		fetch("/api/movies").then(res => res.json()).then(result => {
			console.log(result.data)
			setMovies(result.data)
		})
	}, [])
	return (
		<React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Titulo</th>
									<th>Calificación</th>
									<th>Premios</th>
									<th>Duración</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Id</th>
									<th>Titulo</th>
									<th>Calificación</th>
									<th>Premios</th>
									<th>Duración</th>
								</tr>
							</tfoot>
							<tbody>
								{movies.map((movie, index) => {
									return <MovieList {...movie} key={index} />
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default Movie;