import React from 'react'

import {useEffect, useState} from 'react'

function Vizualiser({color1, color1BP, color2, color2BP, color3, color3BP, angle}) {

    const [gradient, setGradient] = useState('');

    useEffect(() => {
        setGradient('linear-gradient(' + angle + 'deg, ' + color1 + ' ' + color1BP + '%, ' + color2  + ' ' +  color2BP + '%, ' + color3  + ' ' +  color3BP + '%) ')  
        console.log(gradient)
    });

  return (
    <div className='vizualiser'>
        <div className='vizualiser_frame' style={{background: gradient, background: '-moz-' + gradient, background: '-webkit-' + gradient}}></div>
        <h3 className='vizualiser_cssRef'>{gradient}</h3>
    </div>
  )
}

export default Vizualiser