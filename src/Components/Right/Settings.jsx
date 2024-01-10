import "./Settings.css";
const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings-row'>
        <div className='settings-left'>
          <h3>Password</h3>
          <p>Change or update your password</p>
        </div>
        <div className='settings-btns'>
          <a href='#'>Change</a>
          <a className='right-settings-btn' href='#'>
            Update
          </a>
        </div>
      </div>
      <div className='settings-row'>
        <div className='settings-left'>
          <h3>Security question</h3>
          <p>Create or update your security question</p>
        </div>
        <div className='settings-btns'>
          <a href='#'>Create</a>
          <a className='right-settings-btn' href='#'>
            Update
          </a>
        </div>
      </div>
      <div className='settings-row'>
        <div className='settings-left'>
          <h3>Reset Networks</h3>
          <p>Reset your Networks</p>
        </div>
        <div className='settings-btns'>
          <a className='right-settings-btn' href='#'>
            Reset
          </a>
        </div>
      </div>
      <div className='settings-row'>
        <div className='settings-left'>
          <h3>Policy Security</h3>
          <p>Change or read your policy securities</p>
        </div>
        <div className='settings-btns'>
          <a href='#'>Change</a>
          <a className='right-settings-btn' href='#'>
            Read
          </a>
        </div>
      </div>
      <div className='settings-row'>
        <div className='settings-left'>
          <h3>Data Breach</h3>
          <p>Change or Monitor your data</p>
        </div>
        <div className='settings-btns'>
          <a href='#'>Change</a>
          <a className='right-settings-btn' href='#'>
            Monitor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
