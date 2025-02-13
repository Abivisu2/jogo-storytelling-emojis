import React, { useState } from 'react'
import './Dado1.css'



function Dado1() {

    const [imagem, setImagem] = useState(8)
    const [imagens, setImagens] = useState([

        './icons/pessoa1.svg', 
        './icons/seta2.svg', 
        './icons/atencao3.svg', 
        './icons/bateria4.svg', 
        './icons/bike5.svg', 
        './icons/maca6.svg', 
        './icons/recarregado7.svg',
        './icons/carro8.svg',
        './icons/duasPessoas9.svg',
        './icons/shopping10.svg',
        './icons/chuva11.svg',
        './icons/coracaoAmor12.svg',
        './icons/presente13.svg'

    ])

    function btnMudarImagem() {

        const numeroAleatorio = Math.floor(Math.random() * imagens.length);

        setImagem([[numeroAleatorio]]);
        
    }  

  return (

    <div className='container-dado1'>

        <div className="div-titulo">
            <h1 className='titulo'>StoryMojis</h1>
        </div>

        <div className="div-btn-jogar">
            <p className='paragrafo-informativo'>Clica ali na imagem abaixo para começar a história! ↙</p>
            <button onClick={btnMudarImagem} className='btn-mudar-imagem'>
                <img className='imagem' src={imagens[imagem]} alt="Alterar-imagem" />  
            </button>
        </div>

    </div>

  )
}

export default Dado1
