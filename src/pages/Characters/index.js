import { useEffect } from 'react';

//import React from 'react';

import styles from '../styles.module.css';

export default function Characters() {

  /*
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  */
  useEffect(() => {

    const page = document.URL.substring(22) === ""? "characters":document.URL.substring(22);
    console.log(page);

    fetch(`https://gateway.marvel.com/v1/public/${page}?ts=1619431864&apikey=9782305b0a915ba58c03ebeb809e9374&hash=52c529302a3ff8129758872dbe5afc1a&limit=12`)
      .then(response => response.json()).then((data) => {

        const resultsDiv = document.querySelector('#resultsDiv');

        data.data.results.map(result => {
            
            /*img config */
            const imgPath = result.thumbnail.path + '.' + result.thumbnail.extension;
            const img = document.createElement('img');
            img.src = imgPath;
            img.onclick = function(){
              document.querySelector("#modal").style.display = "flex";
              document.querySelector("#description").textContent = result.description === ""? "No description": result.description;
            };

            /*modal config */
            document.querySelector("#modal").onclick = function(){
              document.querySelector("#modal").style.display = "none";
            };
            
            /*p config */
            const p = document.createElement('p');
            p.textContent = result.name;

            /*contentCard config */
            const contentCard = document.createElement('div');
            contentCard.className = styles.contentCard;
            contentCard.appendChild(img);
            contentCard.appendChild(p);
            contentCard.id = result.id;

            
            resultsDiv.appendChild(contentCard);
            return(resultsDiv);
        });
        
        document.querySelector('#title').textContent = page;

        document.querySelector('#searchInput').placeholder = "Search for " + page;
      });
      
  }/*, [searchTerm]*/);

  /*
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  */

  return (
    <div>
    <p className={styles.title} id="title"></p>
        <div className={styles.resultsDiv} id="resultsDiv">
            <input 
                type="text" 
                className={styles.searchInput} 
                id="searchInput"
                //value={searchTerm}
                //onChange={handleChange}
            />
        </div>
    </div>
    
  );
}