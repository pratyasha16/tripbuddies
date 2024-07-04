import React, { useState } from 'react';
import axios from 'axios';
import ReactWhatsapp from 'react-whatsapp';

const Matchmaker = () => {
  const [nameQuery, setNameQuery] = useState('');
  const [foodChoice, setFoodChoice] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/companions', {
        params: {
          filters: {
            $and: [
              { state: { $contains: "Goa" } },
              { FoodChoice: { $contains: foodChoice } },
            ],
          },
        },
      });

      setResults(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data from Strapi:', error);
    }
  };


  

  return (
    <div>
      <input
        type="text"
        value={nameQuery}
        onChange={(e) => setNameQuery(e.target.value)}
        placeholder="Search by name..."
      />
      <label htmlFor="diet">Dietary Preference:</label>
      <select
        id="diet"
        name="diet"
        value={foodChoice}
        onChange={(e) => setFoodChoice(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
      </select>
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.length > 0 ? (
          results.map((companion) => (
            <div key={companion.id}>
              <h2>Name: {companion.attributes.Name}</h2>
              <p>FoodChoice: {companion.attributes.FoodChoice}</p>
              <p>Age: {companion.attributes.Age}</p>
              <p>Contact: {companion.attributes.Mobile}</p>
              <ReactWhatsapp number={companion.attributes.Mobile}>whatsapp</ReactWhatsapp>
              {/* <ReactWhatsapp number="+91 8978898978">whatsapp</ReactWhatsapp> */}

            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Matchmaker;
