// import React, { useEffect, useState } from 'react';
// import Book from '../../components/BookList/Book';
// import Loading from '../../components/Loader/Loader';
// import coverImg from "../../images/cover_not_found.jpg";
// import "../../components/BookList/BookList.css";
// import axios from 'axios';
// const URL = "http://openlibrary.org/search.json?title=";

// const Library = (book) => {

//   const booksWithCovers = book.map((singleBook) => {
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//     }
//   });


//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>Tolkien</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {
//             booksWithCovers.slice(0, 30).map((item, index) => {
//               return (
//                 <Book key = {index} {...item} />
//               )
//             })
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Library