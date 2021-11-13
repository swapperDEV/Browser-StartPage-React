import React  from 'react';
import '../styles/App.css';
import '../styles/Loader.css';


const Loader = () => {
  return (
    <React.Fragment>
        <div className='spinner'>
            <i className="fas fa-spinner"></i>
        </div>
    </React.Fragment>
  );
}

export default Loader;
