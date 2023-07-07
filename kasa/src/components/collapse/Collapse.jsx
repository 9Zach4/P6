import arrow from "../../assets/arrow.png";         // import arrow imagee 
import { useState } from 'react'; 
import './collapse.scss';                          // import collapse style

function Collapse ({ title, content }) { 
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="collapse" >   {/*  collapse container */}
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="skip to content arrow" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}

export default Collapse;