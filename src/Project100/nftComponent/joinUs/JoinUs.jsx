import React from 'react'
import './joinUs.css'
import flagguy from '../../../assestNft/flagguy.svg'
import {FaDiscord} from  'react-icons/fa'


export default function JoinUs() {
    return (
        <div className='join-con'>
            <div className='container'>
                <div className='join-us-main'>
                    <div className='join-us-image'>
                        <img src={flagguy} alt="flagguy" />

                    </div>
                    <div className='join-right-con'>
                        <div className='join-right'>
                            <span className='join-text1'>
                                <h1>Join our community</h1>
                            </span>
                            <span className='join-text2'>
                                <h4>Meet game creators, designers, Artist</h4>
                                <h4>for platform updates and more!</h4>
                            </span>
                            <span className="btn"><span className='lunch-btn'> <FaDiscord/> Launch discord</span> </span>

                        </div>



                    </div>

                </div>

            </div>

        </div>
    )
}