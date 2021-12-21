import {FC, useCallback} from "react";
import {debounce} from "../../utils";
import "./style.scss";

interface IProps {
    fetchUsers: (url: string) => void;
}

export const Search: FC<IProps> = ({fetchUsers}) => {
    const debounceOnChange = useCallback(debounce(fetchUsers, 1000), []);

    return (
        <input onChange={e => debounceOnChange(e.target.value)} placeholder='Search...' className='search'/>
    )
}