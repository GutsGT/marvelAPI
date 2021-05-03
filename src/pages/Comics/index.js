import { useEffect } from 'react';

import styles from '../styles.module.css';

export default function Characters() {

  useEffect(() => {

    const ts = "1619431864";
    const apikey = "9782305b0a915ba58c03ebeb809e9374";
    const md5 = "52c529302a3ff8129758872dbe5afc1a";

    const page = document.URL.substring(22) === ""? "characters":document.URL.substring(22);

    fetch(`https://gateway.marvel.com/v1/public/${page}?ts=${ts}&apikey=${apikey}&hash=${md5}&limit=9`)
      .then(response => response.json()).then((data) => {

        const resultsDiv = document.querySelector('#resultsDiv');

        data.data.results.map(result => {
            
            /*img config */
            const imgPath = result.thumbnail.path + '.' + result.thumbnail.extension;
            const img = document.createElement('img');
            img.src = imgPath;
            img.onclick = function(){
              document.querySelector("#modal").style.display = "flex";
              
              let description = result.description == null? "No description": result.description;

              document.querySelector("#description").textContent = description;

              

              // Create the script tag, set the appropriate attributes
              var script = document.createElement('script');
              script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8VKlqIydR6c3NsRn_JW8voUjTxroQ7H4&callback=initMap';
              script.async = true;

              // Attach your callback function to the `window` object
              window.initMap = function() {
                // JS API is loaded and available
              };

              // Append the 'script' element to 'head'
              document.getElementById("maps").appendChild(script);
              
              
              /*
              fetch('maps.googleapis.com/maps/api/js?key=AIzaSyB8VKlqIydR6c3NsRn_JW8voUjTxroQ7H4&callback=initMap')
              .then(response => response.json()).then(google =>{
                console.log(google);
                var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
                var options = {
                    zoom: 5,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("mapa"), options);

                var marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                });

                marker.setPosition(latlng);
                

                // verifica se o navegador tem suporte a geolocalização
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
                        // ajusta a posição do marker para a localização do usuário
                        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                    }, 
                    function(error){ // callback de erro
                      alert('Erro ao obter localização!');
                      console.log('Erro ao obter localização.', error);
                    });
                } else {
                    console.log('Navegador não suporta Geolocalização!');
                }
                
              });
              */

            };

            /*modal config */
            document.querySelector("#modal").onclick = function(){
              document.querySelector("#modal").style.display = "none";
            };
            /*
            const description = result.id;
            document.querySelector("#modalParagraph").textContent = description;
            */
            
            /*p config */
            const p = document.createElement('p');
            p.textContent = result.title;

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
      
      
  });
  return (
    <div>
    <p className={styles.title} id="title"></p>
        <div className={styles.resultsDiv} id="resultsDiv">
            <input type="text" className={styles.searchInput} id="searchInput" />
        </div>
    </div>
    
  );
}