import React from 'react'
import './Nftcards.css'

export default function Nftcard({cardImage,cardlist1,cardlist3,cardlist2,crypto}){
    return(
        <div className='card'>
            <span  className='cardImage-con'><img src={cardImage} alt="cardImage" /></span>
            <ul  className='cardlist-con'>
                <li className='cardlist1'>{cardlist1}</li>
                <li  className='cardlist3'>{cardlist3}</li>
                <li  className='cardlist2'><span className='crypto'><img src={crypto} alt="crypto" className='cryptoImage' /> {cardlist2}</span></li>
                
            </ul>

        </div>

    )
}