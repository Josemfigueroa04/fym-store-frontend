import Card from "../../components/Card/Card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Home () {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                const json = response.data;
                setItems(json);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, [])

  return (
    
    <div>

        <h1>Home</h1>
        <div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">

        { items?.map((item) => (
            <Card
            key={item.id}
            data={item}
            />
        ))}
        </div>
        
    </div>

    
    
  )
}

export default Home;