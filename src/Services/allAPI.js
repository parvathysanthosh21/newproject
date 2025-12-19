import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register
export const registerAPI=async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login
export const loginAPI= async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
} 


// add-project

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addproject`,reqBody,reqHeader)
}

// homeproject API

export const getHomeProjectsAPI= async ()=>{
    return await commonAPI("GET",`${BASE_URL}/home-projects`,"","")
} 


// allprojectapi

export const getAllProjectsAPI= async (searchKey, reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/all-projects?search=${searchKey}`,"",reqHeader)
} 

// getuserprojectapi


export const getUserProjectAPI= async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user-projects`,"",reqHeader)
} 

// edit project

export const editProjectAPI= async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${id}`,reqBody,reqHeader)
} 


// delete

export const deleteProjectAPI= async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${id}`,{},reqHeader)
} 

// user/edit
export const updateUserProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}