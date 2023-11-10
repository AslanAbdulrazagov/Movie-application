import React from 'react'
import {Link } from 'react-router-dom';

class Search extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='form-row row mb-5'>
                        <div className='col-10'>
                            <input type='text' onChange={this.props.filterFunc} className='form-control' placeholder='Search a movie' />
                        </div> 
                        <div className="col-2">
<Link to="/add" type="button"
className="btn btn-md btn-danger"
style={{float: 'right'}}>Add Movie
</Link>
</div>                       
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;