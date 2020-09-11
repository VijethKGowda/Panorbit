import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Wave from '../Components/waves/wave'

import './scroll.css'

const Landing = () => {
  const [users, setUsers] = useState([])

  let url = 'https://panorbit.in/api/users.json';

  const userList = () => {
    fetch(url)
      .then(response => response.json())
      .then((res) => {
        setUsers(res.users)
      })
      .catch(err => { console.log(err) });
  }

  useEffect(() => {
    userList()
  },[])


  return (
    <>
      {
        users ? <>
          <Wave />
          <div className='flex h-screen justify-center item-center'>
            <div className="mt-20 shadow-lg bg-gray-100 rounded-rd absolute">
              <h1 className="px-32 py-12 text-xl text-gray-700 font-semibold">Select an Account</h1>

              <div className="h-96 overflow-y-auto">
                {
                  users.map(user => { 
                    return(
                    <Link to={`/profile/${user.id}`} key={user.id} className="border-b-2 mx-4 flex flex-row">
                      <div>
                        <img src={user.profilepicture} className="w-10 h-10 my-3 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="pic"></img>
                      </div>
                      <div className="my-5 mx-5 text-lg text-gray-700 font-medium">
                        {user.name}
                      </div>
                    </Link>
                  )})
                }
              </div>

            </div>
          </div>
        </> : <></>
      }

    </>
  )
}

export default Landing