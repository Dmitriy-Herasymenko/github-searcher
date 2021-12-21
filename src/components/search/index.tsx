import "./style.scss";

interface IProps {
    fetchUsers: (url: string) => void;
}

export const Search = () => {

    return (
        <input onChange={e => console.log("value", e.target.value)} placeholder='Search...' className='search'/>
    )
}