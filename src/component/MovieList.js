import React from 'react'
class MovieList extends React.Component {

    render() {
        return (
            <div className="row">
                {
                    this.props.movies.map((movie,index) => {
                        return (
                            <>
                            <div className="col-lg-4" key={index}>
                                <div className="card mb-4 shadow-sm">
                                    <img src={movie.imageURL} className="card-img-top" alt="Movie" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.name}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button type="button" className="btn btn-md btn-outline-danger" onClick={()=>this.props.deleteFunc(movie)}>Delete</button>
                                            <button
                    type='button'
                    className='btn btn-md btn-outline-primary'
                    data-toggle='modal'
                    data-target='#exampleModal'
                    onClick={() => this.props.editFunc(movie)} // Call the edit function
                  >
                    Edit
                  </button>
                                            <h2><span className="badge badge-info" style={{ backgroundColor: '#17a2b8' }}>{movie.rating}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           </>
                        )
                    })
                }

            </div>
        )
    }
}
export default MovieList;