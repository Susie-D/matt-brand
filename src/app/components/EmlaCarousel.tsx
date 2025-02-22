"use client"

import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import '../../app/embla.css';

type ImageType = {
    src: string;
    alt: string;
};

type PropType = {
    images?: ImageType[];
    options?: EmblaOptionsType;
    duration?: number;
};

const EmblaCarousel: React.FC<PropType> = ({ images = [], options, duration = 3000 }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: duration })]);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: '50%',
                                    height: '50%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
