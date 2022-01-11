import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const NewMovie = ({add}) => {
    const [name, setName] = useState('')
    const [rating, setRating] = useState(1)
    const [image, setImage] = useState('')
    const [date, setDate] = useState('')
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const newMovie ={
          id:Math.random(),
          name,
          rating,
          image,
          date
      }
      add(newMovie)
      closeModal()
  }

 const handleRating = (x) => setRating(x)
    return (

        <div>
            <button className="btn add-movie-btn" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        
      >
          <form   onSubmit={handleSubmit}>
              <label>Movie title</label>
              <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
              <label>Poster</label>
              <input type="url" required value={image} onChange={(e)=>setImage(e.target.value)} />
             <label> Rating </label>
             <StarRating rating={rating} handleRating={handleRating}  />
              <label>Date</label>
              <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
              <div>
                  <button type="submit" className="btn btn-danger" >Confirm</button>
                  <button onClick={closeModal}  className="btn btn-danger"  >Cancel</button>
              </div>
          </form>
          
      </Modal>
      
        </div>
    )
  }
  
export default NewMovie