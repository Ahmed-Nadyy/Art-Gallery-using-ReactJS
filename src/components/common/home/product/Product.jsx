import {useState} from 'react';
import Heading from '../../Heading';
import ProductItem from './ProductItem';
import { products } from '../../../../assets/data/data';


export default function Product() {

    const [data, setData] = useState(products)

    return (
        <>
            <section className='product'>
                <div className="container">
                    <Heading title='Trending Arts' desc="Don't miss out on the latest rising stars in arts! Check out our hottest designs of the week." />
                    <ProductItem data={data} />
                </div>
            </section>
        </>
    )
}
