import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// css
import '../styles/HoverClicks.css'
import 'swiper/css/pagination';
import 'swiper/css'

// images
import fleeceImg from '../assets/fleece.png'
import knitwearImg from '../assets/knitwear.png'
import overshirtsImg from '../assets/overshirts.png'

import add from '../assets/addlight.png'
import exitBtn from '../assets/reject.png'


function HoverClicks() {

  return (
    <>
      <Swiper className="mySwiper swiper-desktop"  
        spaceBetween={0}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true,}}
        modules={[Pagination]}
      >
        <SwiperSlide><HoverClick itemData={overshirtsData} /></SwiperSlide>
        <SwiperSlide><HoverClick itemData={knitwearData} /></SwiperSlide>
        <SwiperSlide><HoverClick itemData={fleeceData} /></SwiperSlide>

      </Swiper>

      <Swiper className="mySwiper swiper-mobile"  
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true,}}
        modules={[Pagination]}
      >
        <SwiperSlide><HoverClick itemData={overshirtsData} /></SwiperSlide>
        <SwiperSlide><HoverClick itemData={knitwearData} /></SwiperSlide>
        <SwiperSlide><HoverClick itemData={fleeceData} /></SwiperSlide>

      </Swiper>
    </>
  );
}


function HoverClick({itemData}) {

  const {imgSrc, items} = itemData
  
  const [hoverClickState, setHoverClickState] = useState(false)
  const [floaterState, setFloaterState] = useState(false)

  const onHover = () => {
    setFloaterState(true)
  }

  const offHover = () => {
    if (hoverClickState === true) {
      return
    } else {
      setFloaterState(false)
    }
  }

  const HcChangeState = () => {
    setHoverClickState(!hoverClickState)
  }


  return (
    <>
      <div className='hoverClick-wrapper' onMouseOver={onHover} onMouseOut={offHover}>
          <div className='hoverClick-img-wrapper'>
            <img src={imgSrc} alt="" />
          </div>
          {
            items.map((item, idx) => {
              return <Floater key={idx} hoverState={floaterState} title={item.title} description={item.description} link={item.link} coordinates={item.coordinates} HcFunc={HcChangeState}/>
            }) 
          }
      </div>
    </>
  )
}


function Floater({hoverState, title, description, link, coordinates, HcFunc}) {


  const [clickedState, setClickedState] = useState(false)
  const [popUpState, setPopupState] = useState(false)
  const [dimState, setDimState] = useState(false)

  const changePopUpState = () => {
    setPopupState(!popUpState)
    setDimState(!dimState)
    setClickedState(!clickedState)
    HcFunc()
  }

  const changeDimState = () => {
    setDimState(!dimState)
    setPopupState(!popUpState)
    setClickedState(!clickedState)
    HcFunc()
  }

  return (
    <>
    <div className='floater-wrapper'>
      <div className={`floater-img-wrapper ${hoverState ? 'active' : ''} ${clickedState ? 'rotate' : ''}`} style={coordinates} onClick={changePopUpState}><img className='floater-img' src={add} alt="" /></div>
    </div>
    <div className={`hoverClick-dim ${dimState ? 'active' : ''}`} onClick={changeDimState}></div>
    <PopUp state={popUpState} popUpTitle={title} popUpDescription={description} popUpLink={link} exitClicked={changePopUpState}/>
    </>

  )
}


function PopUp({state, popUpTitle, popUpDescription, popUpLink, exitClicked}) {
  return (
      <div className={`popUp-wrapper ${state ? 'active' : ''}`}>
        <h1 className='popUp-title'>{popUpTitle}</h1>
        <h2 className='popUp-description'>{popUpDescription}</h2>
        <a href={popUpLink}>View</a>
        <div className='popUp-exit' onClick={exitClicked}><img src={exitBtn} alt="" /></div>
      </div>
  )
}


// data

const fleeceData = {
  imgSrc: fleeceImg,
  items: [
            {title: 'Works Cricket Cap',
            description: 'We have been perfecting this cap for a few seasons now, our own version of a vintage cricket cap.',
            link: '#',
            coordinates: {top: '15%',
                            left: '30%'}},

            {title: 'Lumber Jacket Fleece',
            description: 'Italian-made knitted fleece with an amazing camo pattern. Soft, comfortable, warm and hard to see!',
            link: '#',
            coordinates: {top: '35%',
                            left: '25%'}},

            {title: 'Yogi Finn Shoe Brown',
            description: 'Twill is a winter-ready version of our bestselling twill fabric. It has a soft, dry handle.',
            link: '#',
            coordinates: {top: '75%',
                            left: '65%'}}
          ]
}

const knitwearData = {
  imgSrc: knitwearImg,
  items: [  
            {title: 'Short Watch Cap',
            description: 'A humble yet sophisticated British wool yarn, with a simple knit structure.',
            link: '#',
            coordinates: {top: '15%',
                            left: '35%'}},

            {title: 'Jacquard Knit Cardigan',
            description: 'A soft and warm yarn for a high-quality look and feel, expertly made in Italy.',
            link: '#',
            coordinates: {top: '40%',
                            left: '70%'}},

            {title: 'Yogi Finn Shoe',
            description: 'Twill is a winter-ready version of our bestselling twill fabric. It has a soft, dry handle.',
            link: '#',
            coordinates: {top: '80%',
                            left: '25%'}}
          ]
}

const overshirtsData = {
  imgSrc: overshirtsImg,
  items: [
            {title: 'Easy Over Jacket',
            description: 'The new Jacket version of our popular \'Easy Overshirt.\' Soft and unstructured, with a simple design and square cut.',
            link: '#',
            coordinates: {top: '30%',
                            left: '65%'}},

            {title: 'Workers Twill Trouser',
            description: 'Twill is a winter-ready version of our bestselling twill fabric. It has a soft, dry handle.',
            link: '#',
            coordinates: {top: '65%',
                            left: '28%'}}
          ]
}

export default HoverClicks
