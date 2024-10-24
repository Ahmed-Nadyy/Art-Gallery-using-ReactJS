import { useState } from 'react'
import { topProducts } from "../../../../assets/data/data"
import Heading from "../../Heading"
import ProductItem from "../product/ProductItem"

export default function TopProduct() {

    const [data, setData] = useState(topProducts)

    const allCategories = ["all", ...new Set(data.map((item) => item.category))]

    const [category, setCategory] = useState(allCategories)

    const handleFillter = (category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setData(newItem)

        if (category === "all") {
            setData(topProducts)
            return
        }
    }

    return (
        <>
            <section className="topproduct">
                <div className="container">
                    <div className="head">
                        <Heading title="Top Selling Arts" desc="Meet our newbies! The latest atrs uploaded to the marketplace. " />
                        <div className="category">
                            {category.map((category, i) => (
                                <button key={i} className="button" onClick={() => handleFillter(category)}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ProductItem data={data} />
                </div>
            </section>
        </>
    )
}