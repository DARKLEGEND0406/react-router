import React from 'react';
import '../components/Modal.css'


const About = () => {
    return(

        <div>
            <div className='wrapper'>
                <div className='modal'>
                    <div className='modal-content'>
                        <h3>I am modal</h3>
                    </div>
                </div>
            </div>
            <div
                className='ui raised very padded text container segment'
                style={{marginTop: '80px'}}
            >
                <h3 className='ui header'>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos. Quisquam, voluptas. Quisquam, repellendus. Quisquam, voluptas. Quisquam, repellendus.</p>
            </div>
        </div>

    )
}

export default About;