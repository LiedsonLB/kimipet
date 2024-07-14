import { useEffect, useState } from 'react';

const slidesData = [
    { id: 1, src: '/img/dog-image-1.png', alt: 'Patrocinador 1' },
    { id: 2, src: '/img/dog-image-2.png', alt: 'Patrocinador 2' },
    { id: 3, src: '/img/dog-image-3.png', alt: 'Patrocinador 3' },
    { id: 1, src: '/img/dog-image-1.png', alt: 'Patrocinador 1' },
    { id: 2, src: '/img/dog-image-2.png', alt: 'Patrocinador 2' },
    { id: 3, src: '/img/dog-image-3.png', alt: 'Patrocinador 3' },
    { id: 1, src: '/img/dog-image-1.png', alt: 'Patrocinador 1' },
    { id: 2, src: '/img/dog-image-2.png', alt: 'Patrocinador 2' },
    { id: 3, src: '/img/dog-image-3.png', alt: 'Patrocinador 3' },
    { id: 1, src: '/img/dog-image-1.png', alt: 'Patrocinador 1' },
    { id: 2, src: '/img/dog-image-2.png', alt: 'Patrocinador 2' },
    { id: 3, src: '/img/dog-image-3.png', alt: 'Patrocinador 3' },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideWidth = 400; // largura fixa das imagens em pixels

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
        }, 1000); // tempo que começa a girar

        return () => clearInterval(interval);
    }, []);

    const totalWidth = slidesData.length * slideWidth;
    const translateValue = -currentSlide * slideWidth;

    return (
        <div className="absolute overflow-hidden" style={{ width: `${slideWidth * 10}px`, height: '200px' }}>
            <div className="flex transition-transform ease" style={{ transform: `translateX(${translateValue}px)`, transitionDuration: '2s', width: `${totalWidth}px` }}>
                {slidesData.map((slide, index) => (
                    <div key={slide.id} className="w-full" style={{ width: `${slideWidth}px` }}>
                        <img src={slide.src} alt={slide.alt} className="w-full h-[200px]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;