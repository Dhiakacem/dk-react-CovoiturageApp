import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/SearchBar/SearchBar'



const List = () => {
  return (
    <div className='List'>
      <Navbar/>
      <SearchBar/>
      <Sidebar/>
    </div>
  )
}

export default List