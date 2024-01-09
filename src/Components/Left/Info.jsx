import "./Info.css";
const Info = () => {
  return (
    <div className='info'>
      <div className='info-top-part'>
        <button>Edit Profile</button>
      </div>
      <div className='info-bottom-part'>
        <div className='bottom-left'>
          <h5>Last Visit</h5>
          <p>2 days ago</p>
        </div>
        <div className='bottom-right'>
          <h5>Location</h5>
          <p>Seoul</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
