import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ login, avatar }) {
  return (
    <div className='card shadow-md compact bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar} alt={login} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link to={`/user/${login}`} className="text-base-content text-opacity-40">Visit Profile</Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default UserItem