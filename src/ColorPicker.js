import React from 'react'
import { useState, useEffect } from 'react'

import Vizualiser from './Vizualiser';
import 'bootstrap/dist/css/bootstrap.min.css'

function ColorPicker() {

    const [color1, setColor1] = useState("#fdbb2d");
    const [color1BP, setColor1BP] = useState(10);
    
    const [color2, setColor2] = useState("#7585be");
    const [color2BP, setColor2BP] = useState(50);

    const [color3, setColor3] = useState("#22c1c3");
    const [color3BP, setColor3BP] = useState(80);

    const [angle, setAngle] = useState("120");

  return (
    <>
        <section className='interface'>
            <div className='interface_color'>
                <strong>Couleur 1</strong>
                <input id="c1" type="color" value="#fdbb2d" onChange={() => {setColor1(document.getElementById('c1').value)}}></input>
                <input id="c1bp" type="range" min="0" max="100" onChange={() => {setColor1BP(document.getElementById('c1bp').value)}}></input>
            </div>
            <div className='interface_color'>
                <strong>Couleur 2</strong>
                <input id="c2" type="color" value="#7585be" onChange={() => {setColor2(document.getElementById('c2').value)}}></input>
                <input id="c2bp" type="range" min="0" max="100" onChange={() => {setColor2BP(document.getElementById('c2bp').value)}}></input>

            </div>
            <div className='interface_color'>
                <strong>Couleur 3</strong>
                <input id="c3" type="color" value="#22c1c3" onChange={() => {setColor3(document.getElementById('c3').value)}}></input>
                <input id="c3bp" type="range" min="0" max="100" onChange={() => {setColor3BP(document.getElementById('c3bp').value)}} ></input>

            </div>
            <div className='interface_angle'>
                <strong>Angle</strong>
                <input id='angle' type="range" min="0" max="360" onChange={() => {setAngle(document.getElementById('angle').value)}}></input>

            </div>
        </section>
        <Vizualiser color1={color1} color1BP={color1BP} color2={color2} color2BP={color2BP} color3={color3} color3BP={color3BP} angle={angle} />
    </>
  )
}

export default ColorPicker