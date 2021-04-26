import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <FooterContainer
        data-aos="fade-in"   
        data-aos-offset="0"
        data-aos-delay="0"
        >
            <FooterLinksWrapper>
                <FooterDesc>
                    <h3>Lwowskie Smaki</h3>
                    <p>jakiś cytat</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
                    <FooterLink to="/kontakt">Kontakt</FooterLink>
                    <FooterLink to="/o-nas">O nas</FooterLink>
                    <FooterLink to="/menu">Menu</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
                    <FooterLink to="/kontakt">Kontakt</FooterLink>
                    <FooterLink to="/o-nas">O nas</FooterLink>
                    <FooterLink to="/menu">Menu</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}


const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h3 {
        margin-bottom: 3reml
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;

`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;
    transition: 0.3s ease-out;

    &:hover {
        color: #f26a2e;
    }
`