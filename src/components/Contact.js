import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'

const Contact = () => {
    return(
        <div>
            <Modal/>
            <div 
            className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
            >
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Lorem</p>
            </div>
            <div>
                <Link to='/gloria' className='ui header'>Gloria</Link>
                <p>Lorem</p>
            </div>

        </div>
        
    )
}

export default Contact;