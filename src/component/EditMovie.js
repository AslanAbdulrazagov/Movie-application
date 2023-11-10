import React from 'react';
import serialize from 'form-serialize';

class EditMovie extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const updatedMovie = serialize(e.target, { hash: true });
        this.props.updateFunc(updatedMovie);
      };
    render() {
    const { movie } = this.props;

    return (
      <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
          <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Movie
              </h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='editName'>Name</label>
                  <input type='text' className='form-control' id='editName' name='name' defaultValue={movie?.name} autoComplete='off' />
                </div>
                <div className='form-group'>
                  <label htmlFor='editRating'>Rating</label>
                  <input type='text' className='form-control' id='editRating' name='rating' defaultValue={movie?.rating} autoComplete='off' />
                </div>
                <div className='form-group'>
                  <label htmlFor='editImageURL'>Image URL</label>
                  <input type='text' className='form-control' id='editImageURL' name='imageURL' defaultValue={movie?.imageURL} autoComplete='off' />
                </div>
                <div className='form-group'>
                  <label htmlFor='editOverview'>Overview</label>
                  <textarea className='form-control' id='editOverview' name='overview' rows='5' defaultValue={movie?.overview}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMovie;
