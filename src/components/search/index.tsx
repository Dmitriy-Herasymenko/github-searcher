import {FC} from "react";
import "./style.scss";

interface IProps {
    fetchUsers: (url: string) => void;
}

export const Search: FC<IProps> = ({fetchUsers}) => {

    return (
        <input onChange={e => fetchUsers(e.target.value)} placeholder='Search...' className='search'/>
    )
}