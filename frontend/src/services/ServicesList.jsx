import React from 'react'
import ServicesCard from './ServicesCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: 'Weather information in Kyrgyzstan can vary greatly.'
    },
    {
        imgUrl: guideImg,
        title: 'Best guide',
        desc: 'The best guide is the one who combines several important qualities.'
    },
    {
        imgUrl: customImg,
        title: 'Customization',
        desc: 'Tour customization is the process of adapting a trip.'
    },
]

const ServicesList = () => {
    return <>
        {
            servicesData.map((item, index) =>
                <Col className='mb-4' lg='3' md='6' sm='12' key={index}>
                    <ServicesCard item={item} /> </Col>)
        }
    </>
}

export default ServicesList