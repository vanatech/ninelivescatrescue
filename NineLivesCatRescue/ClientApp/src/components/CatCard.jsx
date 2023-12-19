import React, {useEffect, useState} from 'react';

const CatCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make API call when the component mounts
        fetch('https://localhost:7048/api/rescue-groups/available')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="carousel carousel-end rounded-box gap-6 mb-10 shadow-xl">
            {data.map((item) =>

                <div className="carousel-item">
                    <div className="card w-96 bg-base-100">
                        <div>
                            <figure className="px-10 pt-10"><img src={item.PrimaryPictureUrl} alt="Cat"
                                                                 className="max-h-[350px] rounded-xl"/></figure>
                            <div className="card-body">
                                <ul>
                                    <h2 className="card-title">{item.Data.Attributes.Name}</h2>
                                    {/* Render each node data here */}
                                    {item.Data.Attributes.AgeGroup}
                                </ul>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Playful</div>
                                    <div className="badge badge-outline">Affectionate</div>
                                </div>
                                <p className="line-clamp-3">{item.Data.Attributes.DescriptionText}</p>
                                <div className="card-actions justify-end mt-2">
                                    <button className="btn btn-ghost" href="">Read More</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );

}

export default CatCard;