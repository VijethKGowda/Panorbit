import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chat from '../Components/chat/chat'
import Check from '../Components/svg/check'

const Profile = () => {
  let tabUrl = window.location.pathname
  const [id, setId] = useState(tabUrl.replace('/profile/', ''))
  const [useDetail, setUserDetail] = useState([])
  const [addr, setAddr] = useState([])
  const [comp, setComp] = useState([])
  // const [geo, setGeo] = useState([]) lat given value is wrong
  const [profile, setProfile] = useState(true)
  const [post, setPost] = useState(false)
  const [gallery, setGallery] = useState(false)
  const [todo, setTodo] = useState(false)

  const [sideMenu, setSideMenu] = useState(false)

  const [showModel, setShowModel] = useState(false)
  const [addUser, setAddUser] = useState([id])
  const [id1, setId1] = useState()

  const [users, setUsers] = useState([])

  // fetch user
  let url = 'https://panorbit.in/api/users.json';

  const userList = () => {
    fetch(url)
      .then(response => response.json())
      .then((res) => {
        console.log(res.users)
        setUsers(res.users)
      })
      .catch(err => { console.log(err) });
  }


  useEffect(() => {
    userList()
  }, [])

  // add user model
  const Model = () => {
    return (
      <>
        <div className="absolute grid place-items-center top-0 bg-gray-600 w-full h-screen bg-opacity-50 p-56">
          <div className="absolute w-1/2 h-auto bg-white">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="text-gray-700 text-lg font-semibold w-full text-right px-4 py-3"
              onClick={e => { setShowModel(false) }}
            >X</button>

            <form className='grid place-items-center w-full h-full'>
              <label className="py-1 text-gray-600">ID is number from 1-10</label>
              <input
                className="border-gray-600 border h-full w-4/5 mx-auto focus:border-a focus:outline-none rounded-md px-3 py-1"
                type='text'
                placeholder="Enter your ID"
                value={id1}
                onChange={e => setId1(e.target.value)}
              ></input>
              <button
                style={{ 'border': 'none', 'outline': 'none', 'background': '#d55151' }}
                className="text-white py-2 px-2 my-3 w-32 mx-auto rounded-rd font-semibold text-center"
                onClick={
                  e => {
                    e.preventDefault()
                    setAddUser([
                      ...addUser, parseInt(id1)
                    ]),
                      setShowModel(false),
                      setId1('')
                  }
                }
              >ADD</button>
            </form>
          </div>

        </div>
      </>
    )
  }



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
    <div className="px-12 py-4">
      <div className="w-full flex flex-row justify-between">

        {/* sideMenu */}
        <div className="flex content-center flex-wrap rounded-rd w-20 md:w-48 lg:w-64 bg-gradient-to-b from-a to-c text-base md:text-lg lg:text-xl">

          <div className="flex flex-row w-full ml-2 md:ml-6 lg:ml-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(true), setTodo(false), setPost(false), setGallery(false) }}
            >
              Profile
            </button>
            {profile ? <Check /> : null}
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border-t border-gray-500" />

          <div className="flex flex-row w-full ml-2 md:ml-6 lg:ml-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false), setTodo(false), setPost(true), setGallery(false) }}
            >
              Post
            </button>
            {post ? <Check /> : null}
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border-t border-gray-500" />

          <div className="flex flex-row w-full ml-2 md:ml-6 lg:ml-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false), setTodo(false), setPost(false), setGallery(true) }}
            >
              Gallery
            </button>
            {gallery ? <Check /> : null}
          </div>

          <span className="w-full mx-2 md:mx-6 lg:mx-10 border-t border-gray-500" />

          <div className="flex flex-row w-full ml-2 md:ml-6 lg:ml-10 my-3 text-gray-500">
            <button
              style={{ 'border': 'none', 'outline': 'none' }}
              className="active:text-white hover:text-white focus:text-white w-full text-center md:text-left"
              onClick={e => { setProfile(false), setTodo(true), setPost(false), setGallery(false) }}
            >
              ToDo
            </button>
            {todo ? <Check /> : null}
          </div>

        </div>

        <div className="w-3/4">

          <div className="flex flex-row justify-between py-3 px-3 font-semibold text-gray-700 border-b border-gray-500">
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
                    users.map((userSide, index) => {
                      return (
                        <div key={index}>
                          {
                            addUser.map((adder, index) => {
                              if (adder == userSide.id) return (
                                <div key={index}>
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
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }

                  <button
                    className="text-white py-2 px-2 my-3 w-32 mx-auto rounded-rd font-semibold text-center bg-gray-600"
                    onClick={e => { setShowModel(true) }}
                  >
                    + Add user
                  </button>

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
              <div className="flex flex-col md:flex-col lg:flex-row justify-center sm:justify-center lg:justify-between text-lg">

                <div className="w-72 flex flex-col justify-items-center text-center py-6 mx-auto sm:mx-auto md:mx-auto lg:mx-0">
                  <p className="py-2">
                    <img src={useDetail.profilepicture} className="w-48 h-48 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="pic"></img>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Name</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{useDetail.name}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Username</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{useDetail.username}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">email</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{useDetail.email}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Phone</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{useDetail.phone}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Website</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{useDetail.website}</span>
                  </p>

                  <span className="border-b border-gray-500 pt-1"></span>
                  <span className="text-gray-600 py-1">Company</span>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Name</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{comp.name}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">Catchphrase</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{comp.catchPhrase}</span>
                  </p>

                  <p className="pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-5">bs</span>
                    <span> : </span>
                    <span className="text-gray-800 col-span-6">{comp.bs}</span>
                  </p>

                </div>

                <div className="border-r my-10 hidden lg:block border-gray-500"></div>

                <div className="w-1/2 pt-10  mx-auto sm:mx-auto md:mx-auto lg:mx-0">
                  <p className="-mr-6 text-gray-600 py-2">Address :</p>


                  <p className="-mr-6 text-gray-600 pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-3">Street</span>
                    <span>:</span>
                    <span className="text-gray-800 col-span-6">{addr.street}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-3">Suite</span>
                    <span>:</span>
                    <span className="text-gray-800 col-span-6">{addr.suite}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-3">City</span>
                    <span>:</span>
                    <span className="text-gray-800 col-span-6">{addr.city}</span>
                  </p>

                  <p className="-mr-6 text-gray-600 pt-1 grid grid-cols-12 gap-0">
                    <span className="text-gray-600 col-span-3">ZipCode</span>
                    <span>:</span>
                    <span className="text-gray-800 col-span-6">{addr.zipcode}</span>
                  </p>

                  <div className="w-128 pt-5 rounded-rd mx-auto">
                    <iframe 
                    className="w-full h-72" 
                    frameborder="0" 
                    marginHeight="0" marginWidth="0" 
                    title="map" scrolling="no" 
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>

                  </div>
                </div>

              </div>
              :

              <div className='text-6xl font-black text-gray-300 text-center w-full h-screen'>
                Coming Soon
              </div>

          }

        </div>
      </div>
      <Chat />

      {
        showModel ?
          <Model /> : null
      }

    </div>
  )
}

export default Profile
