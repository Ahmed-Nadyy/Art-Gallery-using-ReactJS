import { useState, useEffect } from 'react';
import { hero } from '../../../../assets/data/data';

export default function Card() {
    const [images, setImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = {};
            for (const item of hero) {
                try {
                    const imageModule = await import(`../../../../${item.cover}`);
                    loadedImages[item.id] = imageModule.default;
                } catch (error) {
                    console.error(`Error loading image for ${item.name}:`, error);
                }
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    return (
        <section className="cards">
            {hero.map((item) => (
                <div className="card" key={item.id}>
                    <div className="left">
                        {images[item.id] && <img src={images[item.id]} alt={item.name} />}
                    </div>
                    <div className="right">
                        <h4>{item.name}</h4>
                        <p>{item.items} items</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
