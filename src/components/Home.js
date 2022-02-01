import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-S.webp"
            leftBtnText="Custom Order"
            rightBtnText="existing Inventory"
            />
            <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-Y.jpeg"
            leftBtnText="Custom Order"
            rightBtnText="existing Inventory"
            />
            <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="existing Inventory"
            /> 
            <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-X.jpg"
            leftBtnText="Custom Order"
            rightBtnText="existing Inventory"
            />
            <Section
            title="Lowest Cost Solar Panel in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Oreder Now"
            rightBtnText="Learn More"
            />
            <Section
            title="Solar Panel for New Roofs "
            description="Solar roof cost Less then anNew Roof plus solar panel"
            backgroundImg="solar-roof.jpeg"
            leftBtnText="Oreder Now"
            rightBtnText="Learn More"
            />
            <Section
            title="Accessories"
            description=""
            backgroundImg="solar-accessories.jpeg"
            leftBtnText="Shop Now"
            
            />

        </Container>
    )
}

export default Home
const Container=styled.div`
height:100vh
`