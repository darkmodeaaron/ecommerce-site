import React, { useState } from 'react'

import '../styles/Head.css'

import whiteCartImg from '../assets/cart-white.png'

function Head() {

    const [headerState, setHeaderState] = useState(false)
    const [clothingState, setClothingState] = useState(false)
    const [accessoriesState, setAccessoriesState] = useState(false)

    const headerOver = () => {
        if (headerState == true) {
            return
        } else {
            setHeaderState(!headerState)
        }
        
    }

    const headerOut = () => {
        if (clothingState || accessoriesState == true) {
            return
        } else {
            setHeaderState(!headerState)
        }
    }

    const clothingClicked = () => {
        if (accessoriesState == true) {
            setAccessoriesState(false)
        }
        setHeaderState(true)
        setClothingState(!clothingState)
    }

    const accessoriesClicked = () => {
        if (clothingState == true) {
            setClothingState(false)
        }
        setHeaderState(true)
        setAccessoriesState(!accessoriesState)
    }

  return (
    <>
        <header>
            <section className={`desktop-header ${headerState ? 'active' : ''}`} onMouseEnter={headerOver} onMouseLeave={headerOut}>
                <div className='desktop-header-left'>
                    <NavSection dropdownState={clothingState} dropdownClick={clothingClicked} data={clothingData}/>
                    <NavSection dropdownState={accessoriesState} dropdownClick={accessoriesClicked} data={accessoriesData}/>
                </div>
                <div className='desktop-header-center'>aclothesstore</div>
                <div className='desktop-header-right'>
                    <div className="cart-img-wrapper"><img src={whiteCartImg} alt="" /></div>
                </div>
            </section>
        </header>
    </>
  )
}

function NavSection({dropdownState, dropdownClick, data}) {

    const dataTitle = data.title
    const dataSubs = data.subs

    return (
        <>
            <div className='nav-section'>
                <h3 className='section-title' onClick={dropdownClick}>{dataTitle}</h3>
                <div className={`dropdown-section ${dropdownState ? 'active' : ''}`}>
                    {
                        dataSubs.map((item, idx) => {
                            return <SubSection key={idx} data={item}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

function SubSection({data}) {

    const subTitle = data.subTitle
    const subs = data.subs

    return (
        <>
            <div>
                <h1>{subTitle}</h1>
                {
                    subs.map((item, idx) => {
                        return <h3 key={idx}>{item}</h3>
                    })
                }
            </div>
        </>
    )
}

const clothingData = {
    title: 'Clothing',
    subs: [
        {
            subTitle: 'Outerwear',
            subs: ['Jackets', 'Fleece']
        },
        {
            subTitle: 'Tops',
            subs: ['T-shirts', 'Shirts', 'Sweatshirts', 'Jumpers', 'Knits']
        },
        {
            subTitle: 'Bottoms',
            subs: ['Trousers', 'Chinos', 'Jeans', 'Shorts']
        },
        {
            subTitle: 'Footwear',
            subs: ['Trainers', 'Boots', 'Shoes']
        },
    ]
}

const accessoriesData = {
    title: 'Accessories',
    subs: [
        {
            subTitle: 'Hats',
            subs: ['Beanies', 'Caps']
        },
        {
            subTitle: 'Bags',
            subs: ['Backpacks', 'Duffel bags', 'Shoulder bags', 'Tote bags']
        },
        {
            subTitle: 'Else',
            subs: ['Belts', 'Scarfs', 'Wallets', 'Gloves']
        }
    ]
}

export default Head