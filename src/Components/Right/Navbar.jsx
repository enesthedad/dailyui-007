import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <a href=''>Account</a>
        <a className='active' href=''>
          Privacy & Security
        </a>
        <a href=''>Notification</a>
        <a href=''>Usage & Static</a>
        <a href=''>Policy Security</a>
      </div>
      <div className='navigation'>
        <a href=''>
          <div className='message'>
            <i class='fa-regular fa-envelope'></i>
            <div className='notification'></div>
          </div>
        </a>
        <a href=''>
          <div className='message'>
            <i class='fa-regular fa-bell'></i>
            <div className='notification'></div>
          </div>
        </a>
        <a href=''>
          <i class='logout fa-solid fa-arrow-right-from-bracket'></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
