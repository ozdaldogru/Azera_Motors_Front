"use client"



function GoogleMaps() {



  return (
    <div >

        <iframe 
          id="map" aria-label="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.447822193178!2d-79.74380262309514!3d43.59721657110498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6b5b3fd9049b%3A0xd17d3f74068c80d5!2sAzera%20Motors!5e0!3m2!1sen!2sca!4v1735272842888!5m2!1sen!2sca" 
          width="300" 
          height="200"
          loading="lazy">
            
        </iframe>
    </div>
  );
};

export default GoogleMaps;