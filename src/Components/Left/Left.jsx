import Avatar from "./Avatar";
import Info from "./Info";
import Links from "./Links";

const Left = () => {
  return (
    <div className='left-part'>
      <Avatar />
      <Info />
      <div className='seperator'></div>
      <Links />
    </div>
  );
};

export default Left;
