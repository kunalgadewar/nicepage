import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";



export default function Text() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      
    });
  }, []);
  return (
    <div className='section'>
    <div className='main-2'>
      <div className='links'>
        <li><a href="*">Home</a></li>
        <li><a href="*">About</a></li>
        <li><a href="*">Team</a></li>
        <li><a href="*">Contact</a></li>
      </div>
   <div className='content' data-aos="zoom-in" >
        <h1>How To Get Consulting Clients</h1> 
   </div>
      <div className="text">
        <h1>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</h1>
      </div>
        
        <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led.
             Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer.</p>
              <button>Read More</button>
    </div>
    <div className='img'>
        <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/d188e82e3328502aba1161b3/young-confident-woman-with-natural-light-make-up-holding-hands-waist-looking-left-empty-copy-space-staring-logo-smiling-standing-white-wall1.png" alt="" width={500}></img>
    </div>
    </div>
  )
}
