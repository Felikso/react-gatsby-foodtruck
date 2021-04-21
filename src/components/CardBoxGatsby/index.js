import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import "./CardGatsby.scss"
import CardGatsby from "./CardGatsby"
import ImageHoverCapition from './ImageHoverCapition'
import productsData from '../../dataProducts/products.json'

export default function CardBoxGatsby() {
    const data = useStaticQuery(
        graphql`
          query {
            allProductsJson {
              nodes {
                price
                name
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    gatsbyImageData
                  }
                }
              }
            }
          }
          
        `
      )
            const allProducts = data.allProductsJson.nodes

    return (
      <>

{/*   <section class="card-gatsby-box"> */}

{
    allProducts.map((item, i) => (
      <ImageHoverCapition textH2={item.name} textP={item.description} price={item.price}>
           <GatsbyImage
            className="image-hover-capition__img"
            key={i}
            image={item.image.childImageSharp.gatsbyImageData}
            alt="cos"
      />
      </ImageHoverCapition>
      

    ))
  }

{/* </section> */}
</>
    )
}
