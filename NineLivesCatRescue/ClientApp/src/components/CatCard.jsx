import React, { useState, useEffect} from 'react';

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
        <div className="card w-96 bg-base-100 shadow-xl">
            {data.map((item) =>
                <div>
                    <figure><img src={item.PrimaryPictureUrl} alt="Cat" /></figure>
                    <div className="card-body">
                        <ul>
                            <h2 className="card-title">{item.Data.Attributes.Name}</h2>
                            {/* Render each node data here */}
                            {item.Data.Attributes.AgeGroup}
                        </ul>
                        <p>Cat description</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Adopt me</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default CatCard;