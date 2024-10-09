import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NewReleaseCart from './NewReleaseCart';

const NewRelease = ({ data, sectionName }) => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 }
    };
    
    const [activeIndex, setActiveIndex] = useState(0);
    const syncActiveIndex = (e) => {
        setActiveIndex(e.item);
    };

    const items = data.map((item, index) => (
        <NewReleaseCart key={index} image={item.image} />
    ));
    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />
            </div>
        </div>
    )
}

export default NewRelease
