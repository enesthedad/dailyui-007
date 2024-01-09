import "./Links.css";

const Links = () => {
  return (
    <div className='links'>
      <div className='top-links'>
        <a href=''>
          <i class='fa-solid fa-chart-line'></i>
          <p>Dashboard</p>
        </a>
        <a href=''>
          <i class='fa-solid fa-ticket'></i> <p>Tickets</p>
        </a>
        <a href=''>
          <i class='fa-solid fa-bug'></i>
          <p>Bugs</p>
        </a>
        <a href=''>
          <i class='fa-solid fa-flag'></i>
          <p>Reports</p>
        </a>
      </div>
      <div className='bottom-links'>
        <a href=''>
          <i class='fa-solid fa-question'></i>
          <p>Help</p>
        </a>
        <a href=''>
          <i class='fa-solid fa-gears'></i>
          <p>Settings</p>
        </a>
        <a href=''>
          <i class='fa-solid fa-user'></i>
          <p>Account</p>
        </a>
      </div>
    </div>
  );
};

export default Links;
