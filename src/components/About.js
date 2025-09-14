import React from 'react'
import Girlimg from '../Assesst/girl-email.png';
import '../components/About.css';

const About = () => {
    
    return (
        <>
            <div className='aboud-section d-flex align-items-center  justifycontent-center-py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        {/*left side */}
                        <div className=' about col-md-6 '>
                            <p className='small'>$30 Discoun for your first order</p>
                            <h2 className='fw-bold mb-3'>Get top deals,latest trends,and more.</h2>
                            <p>Join our email subscribtion and cupons.</p>
                            <div className='input-group mt-3 w-75'>
                                <input type='email' className='form-control'
                                    placeholder='Enter your email' />
                                <button className='btn btn-success' type='button'>Sign up</button>
                            </div>
                        </div>
                        <div className='col-md-6 text-center '>
                            <img src={Girlimg} alt='woman' className='img-fluid girl-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
