import React, { useState, useEffect } from 'react'
import { users } from '../data/users.json'
import { Link } from 'react-router-dom'
import Chat from '../Components/chat/chat'

const Profile = () => {
  let url = window.location.pathname
  const [id, setId] = useState(url.replace('/profile/', ''))
  const [useDetail, setUserDetail] = useState([])
  const [addr, setAddr] = useState([])
  const [comp, setComp] = useState([])
  // const [geo, setGeo] = useState([]) lat given value is wrong
  const [profile, setProfile] = useState(true)
  const [sideMenu, setSideMenu] = useState(false)

  const id1 = Math.floor(Math.random() * users.length)
  const id2 = Math.floor(Math.random() * users.length)

  useEffect(() => {
    users.map((user) => {
      if (id == user.id) {
        setUserDetail(user)
        setAddr(user.address)
        setComp(user.company)
        // setGeo(addr.geo) 
      }
    })

  })


  return (
    <div className="p-12">
      <div className="w-full flex flex-row justify-between">
        <div className="flex content-center flex-wrap h-screen rounded-rd w-20 md:w-48 lg:w-64 bg-gradient-to-b from-a to-c text-base md:text-lg lg:text-xl">

          <div className="w-full mx-2 md:mx-6 lg:mx-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(true) }}
            >
              Profile
            </button>
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border border-gray-500" />

          <div className="w-full mx-2 md:mx-6 lg:mx-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false) }}
            >
              Post
            </button>
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border border-gray-500" />

          <div className="w-full mx-2 md:mx-6 lg:mx-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false) }}
            >
              Gallery
            </button>
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border border-gray-500" />

          <div className="w-full mx-2 md:mx-6 lg:mx-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false) }}
            >
              ToDo
            </button>
          </div>

        </div>

        <div className="w-3/4">

          <div className="flex flex-row justify-between py-3 px-3 font-semibold text-gray-700 border-b-2 border-gray-500">
            <div className="text-xl">
              Profile
            </div>

            <button
              className="text-lg font-semibold"
              style={{ 'border': 'none', 'outline': 'none' }}
              onClick={e => { setSideMenu(!sideMenu) }}
            >
              <img src={useDetail.profilepicture} className="w-10 h-10 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="pic"></img>
              <span className="px-3">{useDetail.name}</span>
            </button>

          </div>

          {
            sideMenu ?

              <div className="absolute right-0 flex flex-row justify-center w-80 mx-4 h-auto bg-gray-100 shadow-xl rounded-rd py-10">
                <div className="flex flex-col justify-center">
                  <img src={useDetail.profilepicture} className="w-24 h-24 mx-auto object-cover object-center rounded-full inline-block" alt="pic" />

                  <div className="flex flex-col text-center py-2">
                    <span className="text-lg text-gray-800 py-1">
                      {useDetail.name}
                    </span>
                    <span className="text-lg text-gray-500">
                      {useDetail.email}
                    </span>
                  </div>

                  {
                    users.map(userSide => {
                      if (id1 == userSide.id) return (
                        <>
                          <span className='border-t border-gray-500 '></span>
                          <button
                            style={{ 'border': 'none', 'outline': 'none' }}
                            className="flex flex-row justify-center text-centerpt-3 my-3"
                            onClick={e => {
                              setId(userSide.id),
                                window.history.pushState("", "", `/profile/${userSide.id}`)
                            }}
                          >
                            <img src={userSide.profilepicture} className="w-10 h-10 object-cover object-center rounded-full inline-block" alt="pic" />
                            <span className="font-medium text-gray-700 py-2 px-2">{userSide.name}</span>
                          </button>
                        </>
                      )
                      if (id2 == userSide.id) return (
                        <>
                          <span className='border-t border-gray-500 '></span>
                          <button
                            style={{ 'border': 'none', 'outline': 'none' }}
                            className="flex flex-row justify-center text-centerpt-3 my-3"
                            onClick={e => {
                              setId(userSide.id),
                                window.history.pushState("", "", `/profile/${userSide.id}`)
                            }}
                          >
                            <img src={userSide.profilepicture} className="w-10 h-10 object-cover object-center rounded-full inline-block" alt="pic" />
                            <span className="font-medium text-gray-700 py-2 px-2">{userSide.name}</span>
                          </button>
                        </>
                      )
                    })
                  }

                  <Link to='/'
                    style={{ 'border': 'none', 'outline': 'none', 'background': '#d55151' }}
                    className="text-white py-2 px-2 my-3 w-32 mx-auto rounded-rd font-semibold text-center">
                    Sign out
              </Link>

                </div>
              </div>
              : null
          }

          {
            profile ?
              <div className="flex flex-col md:flex-col lg:flex-row justify-center sm:justify-center lg:justify-between text-lg font-medium">

                <div className="w-72 flex flex-col justify-items-center text-center py-6 mx-auto sm:mx-auto md:mx-auto lg:mx-0">
                  <p className="py-2">
                    <img src={useDetail.profilepicture} className="w-48 h-48 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="pic"></img>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Name</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{useDetail.name}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Username</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{useDetail.username}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">email</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{useDetail.email}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Phone</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{useDetail.phone}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Website</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{useDetail.website}</span>
                  </p>

                  <span className="border-b-2"></span>
                  <span className="text-gray-600">Company</span>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Name</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{comp.name}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">Catchphrase</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{comp.catchPhrase}</span>
                  </p>

                  <p className="py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-5">bs</span>
                    <span> : </span>
                    <span className="text-gray-700 col-span-6">{comp.bs}</span>
                  </p>

                </div>

                <div className="border-r my-10 hidden lg:block border-gray-500"></div>

                <div className="w-1/2 pt-10  mx-auto sm:mx-auto md:mx-auto lg:mx-0">
                  <p className="-mr-6 text-gray-600 py-2">Address :</p>


                  <p className="-mr-6 text-gray-600 py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-3">Street</span>
                    <span>:</span>
                    <span className="text-gray-700 col-span-6">{addr.street}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-3">Suite</span>
                    <span>:</span>
                    <span className="text-gray-700 col-span-6">{addr.suite}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-3">City</span>
                    <span>:</span>
                    <span className="text-gray-700 col-span-6">{addr.city}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 py-2 grid grid-cols-12 gap-2">
                    <span className="text-gray-600 col-span-3">ZipCode</span>
                    <span>:</span>
                    <span className="text-gray-700 col-span-6">{addr.zipcode}</span>
                  </p>

                  <div className="w-128 pt-5 rounded-rd mx-auto">
                    <iframe className="w-full h-80 rounded-rd"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31128.357252322105!2d75.37257292628105!3d12.77561193416516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1599593904087!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false" tabIndex="0"></iframe>
                  </div>
                </div>

              </div>
              :

              <div className='text-6xl font-black text-gray-300 text-center w-full'>
                Coming Soon
              </div>

          }

        </div>
      </div>
      <Chat />
    </div>
  )
}

export default Profile