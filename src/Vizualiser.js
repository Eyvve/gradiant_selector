import React from 'react'

import {useEffect, useState} from 'react'

function Vizualiser({color1, color1BP, color2, color2BP, color3, color3BP, angle}) {

  const [gradient, setGradient] = useState('');

  useEffect(() => {
      setGradient('linear-gradient(' + angle + 'deg, ' + color1 + ' ' + color1BP + '%, ' + color2  + ' ' +  color2BP + '%, ' + color3  + ' ' +  color3BP + '%) ')  
      console.log(gradient)
  });

  const handleCopy = () => {
    document.getElementById('alertContainer').innerHTML = '<div id="alert" class="alert alert-success" role="alert">Code copié</div>'
    window.setTimeout(function(){
      document.getElementById('alertContainer').innerHTML = ''
      }, 2000);
    return navigator.clipboard.writeText(gradient)
  }

  return (
    <div className='vizualiser'>
        <div className='vizualiser_frame' style={{background: gradient, background: '-moz-' + gradient, background: '-webkit-' + gradient}}></div>
        <h3 onClick={() => handleCopy()} className='vizualiser_cssRef'>{gradient}</h3>
        <small>Cliquez sur le code pour le copier</small>
        <div id="alertContainer"></div>
    </div>
  )
}

export default Vizualiser