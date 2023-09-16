import React,{useState} from 'react'
import car from '../Assets/car.png'
import bike from "../Assets/bike.png"
import newspaper from "../Assets/newspaper.png"
import "./categorylist.css"

const Category = () => {
    
  const CategoryItems= [
    {id:1 ,name:"EV News" , icon: newspaper},
    {id:2 ,name:"Electric Cars" , icon: car},
    {id:3 ,name:"Electric Bikes" , icon: bike},
    {id:4 ,name:"Myth Buster" , icon: newspaper}
   
  ]
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className='category'>
      <div>
          <h1>Electric Vehicles in India </h1>
          {showFullText ? (
          <p>
            Electric vehicles (EVs) are becoming increasingly popular in India as
            the country aims to reduce its carbon footprint and improve air quality.
            HT Auto provides a comprehensive list of electric cars, electric bikes,
            electric scooters and even e-cycles with detailed specifications, price,
            images, and other features. We also bring latest updates and news on the
            electric industry, detailed reviews, drive videos, and information on electric
            charging stations.
          </p>
        ) : (
          <p>
            Electric vehicles (EVs) are becoming increasingly popular in India as
            the country aims to reduce its carbon footprint and improve air quality.
            HT Auto provides a comprehensive list...
            <button onClick={() => setShowFullText(true)}>Read More</button>
          </p>
        )}
      </div>
      <div className='categorydivv'>
        <h1>
            Explore By Category
        </h1>
        <div className='CategorySection'>
           {CategoryItems.map((item) => (
            <div key={item.id} className='categoryitems'>
              <img src={item.icon} /> 
              <h3>{item.name}</h3>
            </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default Category
