import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import './MenuCard.scss'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function MenuCard() {

  const [dishCategory, setDishCategory] = useState("wszystkie")

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, [])

  const data = useStaticQuery(
    graphql`
      query {
        allMenuJson {
          nodes {
            description
            name
            price
            quantity
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }


        HWGraphQL {
        posts {
      nodes {
        featuredImage {
          node {
            sourceUrlSharp {
              childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    gatsbyImageData
                  }
            }
            title
            sourceUrl
          }
        }
      }
    }
    dishes {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
            sourceUrlSharp {
              childImageSharp {
                gatsbyImageData
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        dishes {
          category
          description
          fieldGroupName
          name
          price
          quantity
        }
      }
    }
  }
      }
      
    `
  )
  const allProducts = data.allMenuJson.nodes


  const wordpressDishes = data.HWGraphQL.dishes.nodes

  const wordpressDishesCat = data.HWGraphQL.dishes.nodes.dishes

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))].filter(function (el) {
      return el !== "";
    });

  };





/*       filterDishes = () => {

        let currentDishes = [...wordpressDishes];
        // transform values
    
        // filtruj category
        if (category !== "wszystkie") {
          currentDishes = currentDishes.filter(product => product.category === category);
        }

        this.setState({
          sortedDishes: currentDishes
        });
      }; */



  const nodeDish = wordpressDishes.map(item => item.dishes)


/*   const filteredNodeDish = wordpressDishes.map(item => item.dishes).filter(item => item.category == dishCategory) */

let filteredNodeDish = wordpressDishes

if(dishCategory == "wszystkie"){
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category == item.dishes.category)
}else{
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category == dishCategory)
}



  console.log(filteredNodeDish)

/*   console.log(dishCategory) */

  let dishCat = getUnique(nodeDish, "category")

  console.log(wordpressDishes)

  let currentDishes = [...wordpressDishes];

  let categories = getUnique(nodeDish, "category");

  categories = ["wszystkie", ...categories];

  categories = categories.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

    return (
        <>

<select>
  {categories}
</select>

<button value="zupy" onClick={ e => setDishCategory(e.target.value)}>zupy</button>
<button value="wszystkie" onClick={ e => setDishCategory(e.target.value)}>wszystkie</button>
<button value="pierogi" onClick={ e => setDishCategory(e.target.value)}>pierogi</button>
{filteredNodeDish.map((item, i) => (
              <MenuBox
              data-aos="fade-in"   
              data-aos-offset="200"
              data-aos-delay="0"
              key={i}
              >
              <DishImg
                  className="image-hover-capition__img"
                  key={i}
                  image={item.featuredImage.node.sourceUrlSharp.childImageSharp.gatsbyImageData}
                  alt="cos"
               />

               <DishContent>
               <DishName>{item.dishes.name} <DishQ>{item.dishes.quantity}</DishQ></DishName>
               <DishDesc>{item.dishes.description}</DishDesc>
               </DishContent>

               <DishPrice>
                {item.dishes.price} pln
              </DishPrice>


              </MenuBox>
            ))}
          

          
           
          
        </>
    )
}


export default MenuCard;

const MenuBox = styled.div`
  background: var(--menu-box-bg);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  border-bottom: solid #808080 1px;
  transition: 1s;
  padding: 10px;

  &:hover {
    background: var(--menu-box-bg-hover);
  }


  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const DishName = styled.h4`
  color: var(--menu-dish-name-color);
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-transform: uppercase;
`

const DishQ = styled.span`
    color: var(--menu-dish-q-color);
    font-size: clamp(1.6rem,5vw, 1rem);
    text-transform: lowercase;
`

const DishImg = styled(GatsbyImage)`

`

const DishContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 0 10px;


`

const DishDesc = styled.p`
  color: var(--menu-dish-desc-color);
  font-size: clamp(1rem, 2vw, 2rem);
  padding-top: 20px;
`

const DishPrice = styled.span`
  color: var(--menu-dish-price-color);
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  font-size: clamp(1.5rem, 5vw, 2rem);
  align-items: center;
  white-space: nowrap;


`
