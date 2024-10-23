import { Link } from "react-router-dom";
import { BsBagCheck } from 'react-icons/bs';
import { AiFillGithub, AiOutlineClose, AiOutlineDelete, AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../controller/action";

export default function Header() {
    const [mobile, setMobile] = useState(false);
    const [cartList, setCartList] = useState(false);
    const [loadedImages, setLoadedImages] = useState({});
    const getData = useSelector((state) => state.cartReducer.carts);
    const dispatch = useDispatch();

    // Load images dynamically for the cart items
    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const item of getData) {
                try {
                    const imageModule = await import(`../../../../${item.cover}`);
                    images[item.id] = imageModule.default;
                } catch (error) {
                    console.error(`Error loading image for ${item.title}:`, error);
                }
            }
            setLoadedImages(images);
        };

        loadImages();
    }, [getData]);

    const remove = (id) => {
        dispatch(DELETE(id));
    };

    // Calculate total price
    const [price, setPrice] = useState(0);
    const totals = () => {
        let price = 0;
        getData.forEach((item) => {
            price += parseInt(item.price) * item.qty;
        });
        setPrice(price);
    };

    useEffect(() => {
        totals();
    }, [getData]);

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav>
                        <div className="toggle" style={{ margin: '7px 5px 0 0' }}>
                            <button onClick={() => setMobile(!mobile)}>
                                {mobile ? <AiOutlineClose className="close heIcon" /> : <AiOutlineMenu className="open heIcon" />}
                            </button>
                        </div>
                        <div className="left" style={{ marginTop: '-10px' }}>
                            <Link to="/">
                                <h1 style={{ fontSize: "40px" }}>Arty</h1>
                            </Link>
                        </div>
                        <div className="center">
                            <ul className={mobile ? "mobile-nav" : "menu"}>
                                <li><a href="/" style={{ textTransform: 'capitalize' }}>Home</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="right">
                        <div className="right_user"></div>
                        <div className="right_card">
                            <button className="button" onClick={() => setCartList(!cartList)}>
                                <BsBagCheck className="shop heIcon" />
                                <strong>
                                    MY CART {getData.length ? `( ${getData.length} )` : ''}
                                </strong>
                            </button>
                            <div className={cartList ? 'showCart' : 'hideCart'}>
                                {getData.length ? (
                                    <section className="details">
                                        <div className="details_title">
                                            <h3>Arts</h3>
                                            <p>Art Name</p>
                                        </div>
                                        {getData.map((item) => (
                                            <div className="details_content" key={item.id}>
                                                <div className="details_content_img">
                                                    <Link to={`/cart/${item.id}`}>
                                                        {loadedImages[item.cover] ? (
                                                            <img style={{width:"10px"}} src={loadedImages[item.cover]} alt={item.title} />
                                                        ) : (
                                                            <p style={{fontSize:"10px"}}>Loading...</p>
                                                        )}
                                                    </Link>
                                                </div>
                                                <div className="details_content_detail">
                                                    <div className="details_content_detail_price">
                                                        <p>{item.title.slice(0, 20)} ...</p>
                                                        <p>Price: ${item.price}</p>
                                                        <p>Quantity: ${item.qty}</p>
                                                    </div>
                                                </div>
                                                <div className="details_content_detail_icon">
                                                    <i onClick={() => remove(item.id)}>
                                                        <AiOutlineDelete />
                                                    </i>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="details_total">
                                            <h4>Total: ${price}</h4>
                                        </div>
                                    </section>
                                ) : (
                                    <div className="empty">
                                        <p>Your Cart is Empty</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
