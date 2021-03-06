
import { useEffect } from 'react';

import styles from '../styles.module.css';

export default function Characters() {

  useEffect(() => {

    const ts = "1619431864";
    const apikey = "9782305b0a915ba58c03ebeb809e9374";
    const md5 = "52c529302a3ff8129758872dbe5afc1a";

    const page = document.URL.substring(22) === ""? "characters":document.URL.substring(22);

    fetch(`https://gateway.marvel.com/v1/public/${page}?ts=${ts}&apikey=${apikey}&hash=${md5}&limit=12`)
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
              script.id = "mapsScript";

              // Attach your callback function to the `window` object
              window.initMap = function() {
                const google = window.google;
                new google.maps.Map(document.getElementById('maps'), {
                  center: {lat: -34.397, lng: 150.644},
                  zoom: 15
                });
    
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
                

                // verifica se o navegador tem suporte a geolocaliza????o
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position){ // callback de sucesso
                        // ajusta a posi????o do marker para a localiza????o do usu??rio
                        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                    }, 
                    function(error){ // callback de erro
                      alert('Erro ao obter localiza????o!');
                      console.log('Erro ao obter localiza????o.', error);
                    });
                } else {
                    console.log('Navegador n??o suporta Geolocaliza????o!');
                }
                
              });
              */

            };

            /*modal config */

            let modalContentClick;

            document.querySelector("#modalContent").onclick = function(){
              modalContentClick = true;
            };
            document.querySelector("#modal").onclick = function(){
              if(modalContentClick === false){
                document.querySelector("#modal").style.display = "none";
              }else{
                modalContentClick = false;
              }
              
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