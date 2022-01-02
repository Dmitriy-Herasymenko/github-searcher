import axios, {AxiosError} from "axios";
import {IRepo, IUser, IUserCard, IUserList} from "../types";

export const fetchUsers = async (value: string, setUsers:( data:IUser[]) => void) => {
    try {
        const {data} = await axios.get<IUserList>(`https://api.github.com/search/users?q=${value}`)
        setUsers(data.items)
    } catch (e) {
        const err = e as AxiosError
        console.log(err.response?.data)
    }
};
export const fetchDataUser = async (url: string, setUser:(data:IUserCard) => void) => {
    try {
        const {data} = await axios.get<IUserCard>(url)
        setUser(data)
    } catch (e) {
        const err = e as AxiosError
        console.log(err.response?.data)
    }
};
export const fetchRepos = async (value: string, setRepos:(data:IRepo[]) => void) => {
    try {
        const {data} = await axios.get<IRepo[]>(`https://api.github.com/users/${value}/repos`)
        if(value !== 'allRepos') {
            const filteredData = data.filter(rep => rep.name.toLowerCase().includes(value))
            return setRepos(filteredData)
        }
       setRepos(data)
    } catch (e) {
        const err = e as AxiosError
        console.log(err.response?.data)
    }
};
