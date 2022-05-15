import { useContext } from 'react'
import Spinner from '../../layout/Spinner/Spinner';
import UserItem from '../UserItem/UserItem';
import GithubContext from '../../../context/github/GithubContext';

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) return <Spinner />

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} login={user.login} avatar={user.avatar_url} />
      ))}
    </div>
  )
}

export default UserResults