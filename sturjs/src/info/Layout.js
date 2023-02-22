import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
      <>
        <ul>
            <Link to="/table"><button className="btn btn-primary">Table</button></Link>
        </ul>         
        <Outlet />
      </>
    )
  };
  

export default Layout