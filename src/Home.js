import React from 'react'
import './Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">

    <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt="" />

    <div className="home_row">
                    <Product
                        id="12578912"
                        title="The $100 Startup: Fire Your Boss, Do What You Love and Work Better To Live More"
                        price={10.00}
                        image="https://m.media-amazon.com/images/P/023076651X.01._SCLZZZZZZZ_SX500_.jpg"
                        rating={3}
                    />
                    <Product
                        id="12578612"
                        title="Dell Vostro 3400 Intel i3-1115G4 14 inches(35.5cm) FHD Display Laptop (4GB / 1TB HDD + 256GB SSD / Integrated Graphics / Windows 10 + MSO / Dune Color) D552164WIN9DE, 1.59kg"
                        price={3500.00}
                        image="https://m.media-amazon.com/images/I/61HCEPIeOmL._SL1080_.jpg"
                        rating={3}
                    />
   </div>

    <div className="home_row">
                    <Product
                        id="12578911"
                        title="boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation(Maroon Maverick)"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/61IUz4cSa7L._SL1500_.jpg"
                        rating={2}
                    />
                    <Product
                        id="12558912"
                        title="Apple iPhone 13 (256 GB) - Green"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
                        rating={1}
                    />
                    <Product
                        id="12578902"
                        title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Gray (5th Generation)"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/61XZQXFQeVL._SX679_.jpg"
                        rating={5}

                    />
</div>
<div className="home_row">
                    <Product
                        id="12578910"
                        title=" MEERA FAB Women's Cotton Printed Kurta with Palazzo & Dupatta Set"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/71vcPGvsBvL._UX522_.jpg"
                        rating={4}
                    />
                    <Product
                        id="10578912"
                        title="Nike Men's Air Vapormax 2019 Running Shoes"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/71EXt2Qhp5L._UX500_.jpg"
                        rating={3}
                    />
                    <Product
                        id="02578912"
                        title="Safari Pentagon 3 Pcs Set Polypropylene Cyan Hardsided Luggage, 4 Wheel Trolley Bag Set of Cabin, Medium, Large"
                        price={10.00}
                        image="https://m.media-amazon.com/images/I/61-SNkMcaqL._UX679_.jpg"
                        rating={5}
                    />
 </div>
                
            </div>
        </div>
    )
}

export default Home







