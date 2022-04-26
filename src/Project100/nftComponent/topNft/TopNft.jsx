import React from 'react'
import Nftcard from './Nftcard'
import './topNft.css'
import ape1 from '../../../assestNft/ape1.svg'
import ape2 from '../../../assestNft/ape2.svg'
import capeman from '../../../assestNft/capeman.svg'
import femaleape from '../../../assestNft/femaleape.svg'
import eth from '../../../assestNft/eth.svg'

export default function TopNft (){
    return(
        <div className='topNft-con'>
            <div className='container'>
                <div className='topNft-heading'>
                    <h1>Top NFTs</h1>
                </div>
                <div className='nft-cards'>
                    <Nftcard 
                    cardImage={ape1}
                    cardlist1={"Angry Ape"}
                    cardlist2={"39.20ETH"}
                    crypto={eth}
                    />
                    <Nftcard
                     cardImage={ape2}
                     cardlist1={"Zombie run"}
                     cardlist2={"20.399ETH"}
                     crypto={eth}
                    />
                     <Nftcard
                     cardImage={femaleape}
                     cardlist1={"Ape Princess"}
                     cardlist2={"1.2ETH"}
                     crypto={eth}
                    />
                    <Nftcard 
                    cardImage={capeman}
                    cardlist1={"Zombie run"}
                    cardlist2={"20.399ETH"}
                    cardlist3={"Highest earning"}
                    crypto={eth}
                    />


                </div>
                <div className='explore-btn'>
                    <span className='btn'>Explore</span>

                </div>

            </div>
        
        </div>
    )
}