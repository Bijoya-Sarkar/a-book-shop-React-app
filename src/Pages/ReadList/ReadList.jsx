import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
const ReadList = () => {
  const [readList,setReadList]=useState([])
  const data = useLoaderData();
  console.log(data)
  useEffect(() =>{
    const storedBookData=getStoredBook();
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
    
  },[])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Book</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read {readList.length}</h2>
     {
      readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
     }


    </TabPanel>
    <TabPanel>
      <h2>My wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;