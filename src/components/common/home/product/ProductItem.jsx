import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../../controller/action';

export default function ProductItem({ data }) {
    const [openImage, setOpenImage] = useState(false);
    const [img, setImg] = useState("");
    const [loadedImages, setLoadedImages] = useState({});

    const dispatch = useDispatch();

    // Dynamically load images based on the 'data' prop
    useEffect(() => {
        const loadImages = async () => {
            const imageMap = {};
            for (const item of data) {
                try {
                    const imageModule = await import(`../../../../${item.cover}`);
                    imageMap[item.id] = imageModule.default;
                } catch (error) {
                    console.error(`Error loading image for ${item.title}:`, error);
                }
            }
            setLoadedImages(imageMap);
        };

        loadImages();
    }, [data]);

    const onOpenImage = (src) => {
        setImg(src);
        setOpenImage(true);
    };

    const addToCart = (item) => {
        dispatch(ADD(item));
    };

    return (
        <>
            <div className="product_items">
                {data.map((items) => (
                    <div className="box" key={items.id}>
                        <div className="img">
                            {loadedImages[items.id] && <img src={loadedImages[items.id]} alt={items.title} />}
                            <div className="overlay">
                                <button className="button" onClick={() => addToCart(items)}>
                                    <FiShoppingBag />
                                </button>
                                {/* <button className="button">
                                    <AiOutlineHeart />
                                </button> */}
                                <button className="button" onClick={() => onOpenImage(loadedImages[items.id])}>
                                    <FiSearch />
                                </button>
                            </div>
                        </div>
                        <div className="details">
                            <h3>{items.title}</h3>
                            <p>{items.author}</p>
                            <h4>Price: ${items.price}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {openImage && (
                <div className="modelOpen">
                    <div className="onClickImage">
                        <img src={img} alt="Enlarged product" />
                        <button className="button" onClick={() => setOpenImage(false)}>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
