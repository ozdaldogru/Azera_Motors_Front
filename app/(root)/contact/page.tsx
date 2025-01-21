

const Contact = () => {


  return (

    <>
    

        <div className="flex flew-wrap flex-col justify-center object-fill ">

            <div className="flex flex-col items-center py-4">

                    <h1 className="font-bold text-[30px] border-b">Contact Details</h1>
                    
                    <br />

                    <p className="font-bold border-b">Call:</p>
                    <a href="tel:14375056334">+1-437-505-63-34</a>
                    <br />
                    <p className="font-bold border-b">Email:</p>
                    <a href="mailto:info@azeramotors.ca" target="_blank"> info@azeramotors.ca</a>
                    <br />
                    <p className="font-bold border-b"> Location:</p>
                    <p> 6610 Turner Valley Rd #201d</p>
                    <p> Mississauga, ON L5N 2P1</p>

            </div>



            <div className="flex flex-col items-center py-4 sm:w-full">
                    <iframe className="w-full py-2 px-4"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.447822193178!2d-79.74380262309514!3d43.59721657110498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6b5b3fd9049b%3A0xd17d3f74068c80d5!2sAzera%20Motors!5e0!3m2!1sen!2sca!4v1735272842888!5m2!1sen!2sca" 
                            width="960" 
                            height="530"
                            loading="lazy">
                                
                    </iframe>     
             </div>
        </div>



    </>  

  );
};

export default Contact;

