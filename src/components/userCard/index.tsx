import {FC, useCallback, useEffect} from "react";
import {Link} from "react-router-dom";
import {IUserCard, IRepo} from "../../types/";
import {debounce} from "../../utils";
import "./style.scss";

interface IProps {
    user: IUserCard;
    repos: IRepo[];
    fetchRepos: (url: string) => void;
}

export const UserCard: FC<IProps> = ({user, fetchRepos, repos}) => {
    const debounceOnChange = useCallback(debounce(fetchRepos, 1000), []);
    return (
        <>
            <Link to='/' className='iconArrow'>&#8592;</Link>
            <div className='container'>
                <div className='user-card'>
                    <img className='user-card__img' src={user.avatar_url} alt=""/>
                    <ul className='user-card__list'>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <li>{user.location}</li>
                        <li>{user.created_at}</li>
                        <li>{user.followers} followers</li>
                        <li>{user.following} following</li>
                        <li>{user.public_repos} public repos</li>
                        <li className='user-card__description'>{user.bio}</li>
                    </ul>
                </div>
                <input placeholder='Search repo...' className='user-card__search'
                       onChange={(e) => debounceOnChange(e.target.value)}/>

                {repos && repos.map((repo) => {
                    return (
                        <div className='user-card-repo' key={repo.id}>
                            <span>{repo.name}</span>
                            <ul className='user-card-repo__list' key={repo.id.toString()}>
                                <li>forks {repo.forks_count}</li>
                                <li>stars {repo.stargazers_count}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}