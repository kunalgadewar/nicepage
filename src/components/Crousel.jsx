import React from 'react'


function Crousel() {
  return (
    
      <>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6e6414551ba057cda3373ae6/logo-amazon.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d31506595cff5d9f89d800f7/1.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/16dceaaca47153d9b01ce7f6/evga.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b88bf2b6798c5483a79b3bc6/tesla-9.svg" className="    " alt="..." width={176}/>
    </div>

    <div className="carousel-item">

      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/fd4ece42119f51ca87c2bbeb/sony-logo.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ad49a007b134537684c73513/crocs-wordmark.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6e6414551ba057cda3373ae6/logo-amazon.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0497d31bf88a5c2aba703f01/asos-1.svg" className="    " alt="..." width={176}/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/00f68fef8ce55d0e8e28d3cf/bergners-1.svg" className="    " alt="..." width={176}/>
    </div>

    <div className="carousel-item">
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0497d31bf88a5c2aba703f01/asos-1.svg" className="    " alt="..."/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/00f68fef8ce55d0e8e28d3cf/bergners-1.svg" className="    " alt="..."/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/099952eaaf675c8d84eaf4fa/ffff.svg" className="    " alt="..."/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/7167938e992d596f9adec06f/medium-wordmark.svg" className="    " alt="..."/>
      <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c55909f7b257529786abd0a8/t.svg" className="    " alt="..."/>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     
    <div className="section-3">

     <div className="ideas">
        <h1>Turn your ideas to live web experiences</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            <button className='btn btn-primary'>Learn More</button>
     </div>

  <div className="pics"  >
    <img data-aos="zoom-in" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyJlTOJxNp6IsyGsmCsSlaMSvLxVUVx13F4AlAZVxaf4nYJdj4' alt=''></img>
    <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0ABKCAeNo7BdfGjh9j959AtC2JLmzcV7TSJq_BrNWw7UTYI8p' alt=''></img>
    <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdqztwWpqCH8Auy6ZJnMo2PZt7Fh22dHia5H6vCexS3QM_6U1m' alt=''></img>
    <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0G1749LxudUfq195_gs9NCGs8QhbPgd3MVAOSrtHczzYPTNmY' alt=''></img>
  </div>
     
    </div>
     

       <div className="section-4">
        <div className='sub-sec'>
            <p>Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum</p>
           <img src='https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2324a88340e158a1af771448/1153892_medium2000.png' alt=''></img>
        </div>

         <div className="sub-sec-2">
          <h5>Create a Webinar in Minutes</h5>
          <h3 id='plus-2'>+</h3>
          <h5>Business Sustainability Managemant</h5>
          <h3 id='plus'>+</h3>
          <h5>Learn How To Grow Business</h5>
          <h3 id='plus-3'>+</h3>
         </div>
       </div>
     
     
      </>
          // CSS ends at line 380//
   
  )
}

export default Crousel
