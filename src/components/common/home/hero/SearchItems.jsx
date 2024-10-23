import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

export default function SearchItems({ products, value, onSearch }) {
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const item of products) {
                try {
                    const imageModule = await import(`../../../../${item.cover}`);
                    images[item.id] = imageModule.default;
                } catch (error) {
                    console.error(`Error loading image for product ${item.title}:`, error);
                }
            }
            setLoadedImages(images);
        };

        loadImages();
    }, [products]);

    return (
        <>
            <div className="searchItems">
                <div className="product_items">
                    {products
                        .filter((items) => {
                            const searchkey = value.toLowerCase();
                            const title = items.title.toLowerCase();

                            return searchkey && title.startsWith(searchkey) && title !== searchkey;
                        })
                        .slice(0, 10).map((items) => (
                            <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
                                <div className='img'>
                                    {loadedImages[items.id] ? (
                                        <img src={loadedImages[items.id]} alt={items.title} />
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                    <div className='overlay'>
                                        <button className='button' onClick={() => addToCart(items)}>
                                            <FiShoppingBag />
                                        </button>
                                        <button className='button'>
                                            <AiOutlineHeart />
                                        </button>
                                        <button className='button'>
                                            <FiSearch />
                                        </button>
                                    </div>
                                </div>
                                <div className='details'>
                                    <h3>{items.title}</h3>
                                    <p>{items.author}</p>
                                    <h4>${items.price}</h4>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
