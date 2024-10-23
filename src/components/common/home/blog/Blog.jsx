import { useEffect, useState } from 'react';
import Heading from '../../Heading';
import { blog } from '../../../../assets/data/data';

export default function Blog() {
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const post of blog) {
                try {
                    const imageModule = await import(`../../../../${post.cover}`);
                    images[post.id] = imageModule.default;
                } catch (error) {
                    console.error(`Error loading image for post ${post.title}:`, error);
                }
            }
            setLoadedImages(images);
        };

        loadImages();
    }, []);

    return (
        <>
            <section className="blog">
                <Heading title="LATEST BLOG POSTS" desc="Latest marketplace news, success stories and tutorials" />

                <div className="posts">
                    {blog.slice(0, 3).map((items, i) => (
                        <div className='post' key={i}>
                            <div className="content">
                                <div className="img">
                                    {loadedImages[items.id] ? (
                                        <img src={loadedImages[items.id]} alt={items.title} />
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                                <div className="text">
                                    <p>
                                        Post Date : <span>{items.date}</span>
                                    </p>
                                    <h3>
                                        {items.title.slice(0, 35)} ...
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
