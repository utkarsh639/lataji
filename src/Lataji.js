import React, {Component} from 'react';
import './App.js'

class Lataji extends Component {
    constructor(props){
        super()
        this.state = {
            lataji : "https://i.scdn.co/image/ab6761610000e5eba0199b159c0c5a9f62333d32"
        }
    }
    render(){
        return(
            <>
              <header>
                  <h1>Lata ji</h1>
                  <p>A singer</p>
              </header> 
                 <div className='whi'>
                     <div className='white'>
                         <img src = {this.state.lataji} className="lataji" />
                         <p className='black'>Lata Mangeshkar (1929 - 2022) </p>
                     </ div>
                </div>

                <div className='bio'>
                    <h3>A Short Biography</h3>
                    <p>Lata Mangeshkar (born as Hema Mangeshkar; 28 September 1929 – 6 February 2022) was an Indian playback singer and occasional music composer. She is widely considered to have been one of the greatest and most influential singers in India. Her contribution to the Indian music industry in a career spanning seven decades gained her honorific titles such as the "Queen of Melody", "Nightingale of India", "Voice of the Millennium".

Lata Mangeshkar recorded songs in over thirty-six Indian languages and a few foreign languages, though primarily in Hindi, Bengali, Marathi. She also sang in English, Russian, Dutch, and even Swahili.  She received several accolades and honors throughout her career. In 1989 the Dadasaheb Phalke Award was bestowed on her by the Government of India. In 2001, in recognition of her contributions to the nation, she was awarded the Bharat Ratna, India's highest civilian honour; she is only the second female singer, after M. S. Subbulakshmi, to receive this honour. France conferred on her its highest civilian award, Officer of the National Order of the Legion of Honour, in 2007.

She was the recipient of three National Film Awards, 15 Bengal Film Journalists' Association Awards, four Filmfare Best Female Playback Awards, two Filmfare Special Awards, the Filmfare Lifetime Achievement Award and many more. In 1974, she was one of the first Indian playback singers to ever perform at Royal Albert Hall in London, UK. Her last recorded song was "Saugandh Mujhe Is Mitti ki" released on 30 March 2019 as a tribute to the Indian army and Nation.

At one point, she appeared in the Guinness World Records which listed her as the most recorded artist in history between 1948 and 1987.</p>
                </div>
                    
                    
            </>
        )
    }
}


export default Lataji;