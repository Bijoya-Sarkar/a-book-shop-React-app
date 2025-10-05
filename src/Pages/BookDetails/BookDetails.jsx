import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook;
const handleMarkAsRead = id =>{
    MySwal.fire({
  
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
})
    addStoreDB(id);

}    

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} class="btn btn-info m-2">Mark as Read</button>
<button class="btn btn-success m-2">Add to WishList</button>
        </div>
    );
};

export default BookDetails;