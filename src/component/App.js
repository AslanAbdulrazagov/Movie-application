import React from 'react'
import Search from '../component/Search'
import MovieList from '../component/MovieList'
import AddMovie from '../component/AddMovie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import EditMovie from './EditMovie';

class App extends React.Component {
    state = {
        movies: [],
        searchMovie: "",
        selectedMovie: null
    };
   
    async getMovies() {
        const response = await axios.get("http://localhost:3003/movies");
        this.setState({ movies: response.data })
    }

    editMovie = (movie) => {
        console.log(movie)
        this.setState({ selectedMovie: movie });
      };
    
      updateMovie = async (updatedMovie) => {
        console.log(updatedMovie)
        const url = `http://localhost:3003/movies/${this.state.selectedMovie.id}`;
        await axios.put(url, updatedMovie);
    
        this.getMovies()
      };
    // async componentDidMount(){
    //     var url="http://localhost:3003/movies";
    //     var response = await fetch(url);
    //     var data=await response.json();
    //     this.setState({movies:data})
    // }
    componentDidMount() {
        this.getMovies()

    }

    // deleteMovie= async (movie)=>{
    //     var url=`http://localhost:3003/movies/${movie.id}`;
    //     await fetch(url,{
    //         method:"DELETE"
    //     })
    //     const newMovies=this.state.movies.filter(
    //         m=>m.id!==movie.id
    //     )
    //     this.setState({movies:newMovies})
    // }

    deleteMovie = async (movie) => {
        var url = `http://localhost:3003/movies/${movie.id}`;
        await axios.delete(url);
        // const newMovies = this.state.movies.filter(
        //     m => m.id !== movie.id
        // )
        // this.setState({ movies: newMovies })
        this.getMovies()

    }  
    addMovie = async (movie) => {
        var url = `http://localhost:3003/movies/`;
        await axios.post(url,movie);
        // this.setState({ movies: this.state.movies.concat(movie) })
        this.getMovies()

    }  
  
    movieFilter = (event) => {
        console.log(event.target.value)
        this.setState({ searchMovie: event.target.value })
    }
    render() {
        let filteredMovie = this.state.movies.filter(movie => {
            return movie.name.toLowerCase().indexOf(this.state.searchMovie.toLowerCase()) !== -1
        })
        return (
            <Router>
            <div className='container'>
                <Routes>
                    <Route path='/' element={
                         <div className='row'>
                         <div className='col-lg-12'>
                             <Search filterFunc={this.movieFilter} />
                         </div>
                         <MovieList
                             movies={ filteredMovie}
                             deleteFunc={this.deleteMovie} 
                             editFunc={(movie)=>this.editMovie(movie)} // Pass the edit function
                             />
                              <EditMovie
                  movie={this.state.selectedMovie} // Pass the selected movie for editing
                  updateFunc={(movie)=>{this.updateMovie(movie)}} // Pass the update function
                  onCloseModal={this.handleCloseModal} // Pass the handleCloseModal method

                />
                     </div>
                    }/>
                    <Route path='/add' element={<AddMovie onAddMovie={(movie)=>{this.addMovie(movie)}} />}/>
                </Routes>
                
            </div>
            </Router>
           
        )
    }
}
export default App;