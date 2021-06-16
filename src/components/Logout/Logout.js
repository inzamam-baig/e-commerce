import React from 'react'

const Logout = ({setIsRegistered, setUserLoggedIn}) => {
    return (
        <div>
            <button class="my-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { setIsRegistered(false); setUserLoggedIn(false) }} >Logout</button>
        </div>
    )
}

export default Logout
