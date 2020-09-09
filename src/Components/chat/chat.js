import React, { useState } from 'react'
import { users } from '../../data/users.json'
import { motion, AnimatePresence } from "framer-motion";
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = () => {
  let url = window.location.pathname
  const [id, setId] = useState(url.replace('/profile/', ''))
  const [showChat, setShowChat] = useState(false)
  const [chatUser, setChatUser] = useState(null)
  const [text, setText] = useState('')
  const [send, setSend] = useState([])

  function clearArray() {
    while (send.length) {
      send.pop();
    }
  }


  return (
    <>
      <div className='bottom-0 fixed right-0 mr-16 bg-a rounded-lg w-64'>

        <button
          className="w-full flex flex-row justify-between px-3 py-2"
          style={{ 'border': 'none', 'outline': 'none' }}
          onClick={e => { setShowChat(!showChat), clearArray }}
        >
          <div className={`flex flex-row px-2 py-2`}>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-square text-white">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
              </path>
            </svg>
            <span className="text-white px-2">
              Chats
              </span>
          </div>

          <div className={`text-white px-2 py-2 ${showChat ? 'transition ease-in-out duration-700 transform rotate-180' : 'transition ease-in-out duration-700'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-up">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {
            showChat && (
              <motion.div
                className="flex flex-col bg-gray-200"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className='h-72 overflow-y-auto'>
                  {
                    users.map(user => {
                      if (id != user.id) {
                        return (
                          <button
                            key={user.id}
                            className="flex flex-row px-3 w-full"
                            onClick={e => { setChatUser(user.id), clearArray }}
                          >
                            <img src={user.profilepicture} className="w-8 h-8 my-1 object-cover object-center rounded-full inline-block" alt="pic"></img>
                            <div className="mx-2 my-1 py-1 text-base text-gray-700">
                              {user.name}
                            </div>
                          </button>
                        )
                      }
                    })
                  }
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>


      </div>


      <div className='bottom-0 fixed right-0 mr-96 bg-a rounded-lg w-64'>

        <AnimatePresence initial={false}>
          {
            chatUser && (

              <motion.form
                className="flex flex-col bg-white w-64 rounded-lg"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {
                  users.map(user => {

                    if (chatUser == user.id) {
                      return (
                        <button
                          key={user.id}
                          className="w-full flex flex-row justify-between px-3 bg-a text-center rounded-t-lg"
                          style={{ 'border': 'none', 'outline': 'none' }}
                          onClick={e => { setChatUser(null), e.preventDefault(), clearArray }}
                        >
                          <div className={`flex flex-row px-2 py-2 text-center`}>
                            <img src={user.profilepicture} className="w-8 h-8 my-1 object-cover object-center rounded-full inline-block" alt="pic"></img>
                            <span className="text-white px-2 py-2">
                              {user.name}
                            </span>
                          </div>

                          <div className={`text-white px-2 py-3 text-center transition ease-in-out duration-700 transform rotate-180`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-chevron-up">
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </div>
                        </button>
                      )
                    }
                  })
                }

                {/*Display message */}
                <ScrollToBottom className='h-56 w-64 overflow-y-auto bg-gray-200' style={{ 'scrollSnapAlign': 'end' }}>

                  <div className='grid grid-cols-1 gap-1 place-items-start text-left'>
                    <div className="py-1 w-4/5 px-2 bg-gray-400 my-1 rounded-md">
                      hi,
                    </div>
                    <div className="py-1 w-4/5 px-2 bg-gray-400 my-1 rounded-md">
                      Hello world
                    </div>
                  </div>

                  <div className='grid grid-cols-1 gap-1 place-items-end text-right'>
                    <div className="py-1 w-4/5 px-2 bg-gray-400 my-1 rounded-md">
                      hi,
                    </div>
                    <div className="py-1 w-4/5 px-2 bg-gray-400 my-1 rounded-md">
                      Hello world
                    </div>
                    {
                      send.map((sent, index) => {
                        return (
                          <div key={index} className="py-1 w-4/5 px-2 bg-gray-400 my-1 rounded-md">
                            {sent}
                          </div>
                        )
                      })
                    }
                  </div>

                </ScrollToBottom>

                {/* typing */}
                <div className='h-10 w-64 p-1 flex flex-row justify-between'>
                  <input
                    className="border-gray-600 border h-full w-4/5 focus:border-a focus:outline-none rounded-md px-3 py-1"
                    type='text'
                    placeholder="Text"
                    onChange={e => setText(e.target.value)}
                    value={text}
                  ></input>
                  <button
                    className="py-1 px-3 text-a focus:outline-none"
                    type='submit'
                    onClick={e => { setSend([...send, text]), e.preventDefault(), setText('') }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-send">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>

              </motion.form>
            )
          }
        </AnimatePresence>


      </div>


    </>
  )
}

export default Chat