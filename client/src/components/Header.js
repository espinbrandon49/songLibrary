import { Link } from 'react-router-dom';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../helpers/AuthContext';

const Header = ({ logout }) => {
  const authState = useContext(AuthContext)

  console.log(authState.authState.status)
  return (
    <nav className='navbar bg-light'>
      <div className='container'>
        <div className='fs-1' ><MdOutlineQueueMusic style={{ color: 'goldenrod' }} className='fs-1' /><Link to={'/'}> <span style={{ color: "	rgb(70, 130, 180)" }}>{authState.authState.status && authState.authState.username + "'s"} Song Library</span></Link></div>
        {!authState.authState.status
          ? <Link to='/login' className='btn btn-success btn-lg'> Login </Link>
          : <button onClick={logout} className='btn btn-success btn-lg'> Logout </button>
        }
       
      </div>
    </nav>
  )
}

export default Header
