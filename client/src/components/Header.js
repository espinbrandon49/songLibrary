import { Link } from 'react-router-dom';
import { MdOutlineQueueMusic } from 'react-icons/md';

const Header = () => {
  return (
    <nav className='navbar bg-light'>
      <div className='container'>
        <div className='fs-1' ><MdOutlineQueueMusic style={{ color: 'goldenrod' }} className='fs-1' /><Link to={'/'}> <span style={{ color: "	rgb(70, 130, 180)" }}>Song Library</span></Link></div>
        <Link to='/login' className='btn btn-success btn-lg'>LOGIN</Link>
      </div>
    </nav>
  )
}

export default Header
