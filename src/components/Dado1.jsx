import React, { useState } from 'react'
import './Dado1.css'



function Dado1() {

    const [imagem, setImagem] = useState(0)
    const [imagens, setImagens] = useState([

        'public/icons/pessoa1.svg', 
        './icons/seta2.svg', 
        './icons/atencao3.svg', 
        './icons/bateria4.svg', 
        './icons/bike5.svg', 
        'public/icons/maca6.svg', 
        'public/icons/recarregado7.svg',
        'public/icons/carro8.svg',
        'public/icons/duasPessoas9.svg',
        'public/icons/shopping10.svg',
        'public/icons/chuva11.svg',
        'public/icons/coracaoAmor12.svg',
        'public/icons/presente13.svg'

    ])

    function btnMudarImagem() {

        const numeroAleatorio = Math.floor(Math.random() * imagens.length);

        setImagem([[numeroAleatorio]]);
        
    }  

  return (

    <div className='container-dado1'>

        <h1>StoryMojis</h1>

        <button onClick={btnMudarImagem} className='btn-mudar-imagem'>

            <div className='div-images'>

                 <img className='imagem' src={imagens[imagem]} alt="" />

            </div>

        </button>

        

      
    </div>

  )
}

export default Dado1
