import React, { useState, useEffect} from 'react';

const CatCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make API call when the component mounts
        fetch('api/rescue-groups/available')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.imgur.com/Jvh1OQm.jpeg" alt="Cat" /></figure>
            <div className="card-body">
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            {/* Render each node data here */}
                            {item.name} - {item.description}
                        </li>
                    ))}
                </ul>
                <h2 className="card-title">Jezabel</h2>
                <p>Cat description</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Adopt me</button>
                </div>
            </div>
        </div>
    );
    
}

export default CatCard;