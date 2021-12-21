import {FC, useCallback} from "react";
import {IUserCardAdvance} from "../../types/User";
import {IRepo} from "../../types/Repo";
import {debounce} from "../../decorator";
import './style.scss';

interface IProps {
    user: IUserCardAdvance;
    fetchRepos: (url: string) => void;
    repos: IRepo[];
}

export const UserCard: FC<IProps> = ({user, fetchRepos, repos}) => {
    const debounceOnChange = useCallback(debounce(fetchRepos, 1000), []);

    return (
        <div className='container'>
            <div className='user-card'>
                <img className='user-card__img' src={user.avatar_url} alt=""/>
                <ul className='user-card__list'>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.location}</li>
                    <li>{user.updated_at}</li>
                    <li>{user.followers} followers</li>
                    <li>{user.following} following</li>
                    <li className='user-card__description'>{user.bio}</li>
                </ul>
            </div>
            <input placeholder='Search repo...' className='user-card__search'
                   onChange={(e) => debounceOnChange(e.target.value)}/>

            {repos.map((repo) => {
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
    )
}