import "./Avatar.css";
const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='avatar-header'>
        <img
          className='avatar-img'
          src='https://avatar.iran.liara.run/public/boy?username=Ash'
        />
        <div className='badge'>
          <p>UI&Graphic Designer</p>
        </div>
      </div>
      <div className='avatar-text'>
        <p className='user-name'>Ben Adams</p>
      </div>
    </div>
  );
};

export default Avatar;
