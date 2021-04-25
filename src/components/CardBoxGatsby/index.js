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

            HWGraphQL {
              homeDishes {
                nodes {
                  title
                  featuredImage {
                    node {
                      sourceUrl
                      sourceUrlSharp {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          
        `
      )
            const allProducts = data.allProductsJson.nodes

            const wpPhotos = data.HWGraphQL.homeDishes.nodes

    return (
      <>


{
    wpPhotos.map((item, i) => (
      <ImageHoverCapition textH2={item.name} textP={item.description} price={item.price}>
           <GatsbyImage
            className="image-hover-capition__img"
            key={i}
            image={item.featuredImage.node.sourceUrlSharp.childImageSharp.gatsbyImageData}
            alt="cos"
      />
      </ImageHoverCapition>
      

    ))
  }
<h1>DDDDDDD</h1>
</>
    )
}
