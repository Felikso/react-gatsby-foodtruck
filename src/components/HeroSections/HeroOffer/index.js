import React from 'react'
import styled from 'styled-components'

import { Button } from "../../Button"
import Video from '../../../assets/videos/background-menu-video.mp4'

import StyledBackgroundHeroOfferSection from '../../Backgrounds/StyledBackgroundHeroOfferSection'

function HeroOffer() {
    return (
        
        <HeroOfferContainer>
            <HeroOfferBg><StyledBackgroundHeroOfferSection />
                <VideoBg src={Video} poster="https://th.bing.com/th/id/R579b4552f248f5f3b8c22ec8de678f6d?rik=CZn5ZpmoPRhhWA&riu=http%3a%2f%2f1.s.dziennik.pl%2fpliki%2f2465000%2f2465139-lew-900-665.jpg&ehk=rOGUdngXo%2b2ZE6G%2bXYh1k730AK3lbwEv%2fptsUHZ6DK4%3d&risl=&pid=ImgRaw" type="video/mp4" autoPlay loop muted playsInline />
               </HeroOfferBg>
            <HeroOfferContent>
                <HeroOfferItems>
                    <HeroOfferH1>
                        O naszej ofercie
                    </HeroOfferH1>
                    <Button primary="true" round="true" big="true" to="/menu">
                        Sprawdź Menu
                    </Button>
                </HeroOfferItems>
            </HeroOfferContent>
        </HeroOfferContainer>
    )
}

export default HeroOffer

const HeroOfferContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;

    @media screen and (max-width: 768px) {
        height: 60vh;
    }

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, 
                rgba(0,0,0,0.2) 0%, 
                transparent 100%
                );
    }

`

const HeroOfferBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 60vh;
    }
`


const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const HeroOfferContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vh - 1300px) /2);    
`

const HeroOfferItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroOfferH1 = styled.h1`
    font-size: clamp(1.5rem, 6vh, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`


