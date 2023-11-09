import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'

import heroImg from '../assets/images/tour-img11.jpg'
import heroImg02 from '../assets/images/tour-img08.jpg'
import heroImg03 from '../assets/images/tour-img10.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'

import ServicesList from '../services/ServicesList'

import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import ImagesGallery from '../components/Image-gallery/ImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'


const Home = () => {
  return (
    <>

    {/* feader section end */}

      <section>
        <Container>
          <Row>
            <Col lg='4'>
              <div className='hero__content'>
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt='world' />
                </div>
                <h1>Travel to Kyrgyzstan <span className='highlight'>the beauty of nature and culture</span> </h1>
                <p>
                The charm of art and culture permeates every corner of this amazing country.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='hero01' />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box hero__video-box mt-4'>
                <video src={heroVideo} alt='heroVideo' controls />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg02} alt='hero02' />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <img src={heroImg03} alt='hero01' />
              </div>
            </Col>

            <SearchBar />

          </Row>
        </Container>
      </section>

      {/* feader section end */}

      {/* hero section start */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'> What we serve </h5>
              <h2 className='services__title'>favorable conditions </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* hero section end */}

      {/* featured tour section start */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'> Our featured tours </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* featured tour section end */}

      {/* experience section start */}

      <section>
        <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>Whit our all experience <br /> we will serve you </h2>
              <p>Information about our tour on the website</p>
            </div>

            <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className="counter__box">
                <span>12+</span>
                <h6>Successful Trip</h6>
              </div>

              <div className="counter__box">
                <span>2+</span>
                <h6>Regular clients</h6>
              </div>

              <div className="counter__box">
                <span>17</span>
                <h6>Years experience</h6>
              </div>
            </div>

          </Col>

          <Col lg='6'>
            <div className='experience__img'>
              <img src={experienceImg} alt='experianceImg' />
            </div>
          </Col>
        </Row>
        </Container>
      </section>

      {/* experience section end */}

      {/* gallery section start */}

            <section>
        <Container>
        <Row>
          <Col lg='12'>

            <Subtitle subtitle={'Gallery'}/>
            <h2 className='gallery__title'>
            Visit our customers gallery
            </h2>
          </Col>
          <Col lg='12'>

            <ImagesGallery/>

          </Col>
        </Row>
        </Container>
      </section>

      {/* gallery section end */}

      {/* testimonial section start */}

      <section>
        <Container>
        <Row>
          <Col lg='12'>

            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial__title'>
              What our fans say about us
            </h2>
          </Col>

          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
        </Container>
      </section>

      {/* testimonial section end */}

      <Newsletter/>
    </>
  )
}

export default Home