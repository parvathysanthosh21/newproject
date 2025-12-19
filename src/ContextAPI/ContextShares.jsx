import React, { createContext, useState } from 'react'
export const addProjectResponseContext=createContext()

export const editProjectResponseContext = createContext()
function ContextShares({ children }) {
    const [addProjectResponse,setAddProjectResponce]=useState("")
    const [editProjectResponce,setEditProjectResponce] = useState("")
    return (
        <>
           <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponce}}> 
          <editProjectResponseContext.Provider value={{editProjectResponce,setEditProjectResponce}}>   
            {children}
            </editProjectResponseContext.Provider>
            </addProjectResponseContext.Provider>
        </>
    )
}

export default ContextShares