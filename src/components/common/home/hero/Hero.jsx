import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchItems from './SearchItems';
import { products } from '../../../../assets/data/data'
import back from '../../../../assets/images/99.png';

export default function Hero() {

    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onSearch = (value) => {
        setValue(value)
    }

    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h1>
                        <img src={back} style={{
                            position:'absolute',
                            width:'75vh',
                            zIndex:"-1",
                            top:'-10vh',
                        }} />
                        <label>
                        Discover Over <span>12,500</span>  Curated Artworks <br />
                        </label>
                        <label>
                        Paintings, <span>Sculptures, </span> Photography & More
                        </label>
                    </h1>
                    <p>
                    Our gallery features 6k+ exceptional pieces across 100 categories, perfect for collectors and art enthusiasts alike.
                    </p>
                    <div className="search">
                        <span>All Categories</span>
                        <hr />
                        <input type="text" placeholder='Search atrs...' onChange={onChange} value={value} />
                        <button onClick={() => onSearch(value)}>
                            <BiSearch className="searchIcon heIcon" />
                        </button>
                    </div>
                    <SearchItems products={products} value={value} onSearch={onSearch} />
                    <p>
                    Examples: Paintings, Sculptures, Photography, Digital Art...
                    </p>
                </div>
            </section>
        </>
    )
}
