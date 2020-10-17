import React from 'react'
import '../styles/home.css'
import Product from '../containers/productContainer'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser3/GW/3-Desktop-Hero1x_english_._CB418878420_.jpg"
                 alt="home logo"
                />
                <div className="home_row">
                    <Product id={1} title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                        rating={5}
                    />
                    <Product id={2}  title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product id={3}  title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                            rating={5}
                    />
                    <Product id={4}  title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                        rating={5}
                    />
                    <Product id={5}  title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product id={6}  title="some product" price={20} image="https://m.media-amazon.com/images/I/31Za9ooooCL.__AC_SY200_.jpg"
                        rating={5}
                    />  
                </div>
            </div>
            
        </div>
    )
}

export default Home
