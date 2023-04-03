import React, { useContext } from 'react'
import { myContext } from '../App';

const UserDetails = () => {

    const data =useContext(myContext);

  return (
    <div>my name is: {data.name}</div>
  )
}

export default UserDetails;