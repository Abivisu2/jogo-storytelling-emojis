import React, { useEffect, useState } from 'react'
import './Dado1.css'



function Dado1() {

    const [imagem, setImagem] = useState('/icons/pessoa1.svg')
    const [imagens, setImagens] = useState([

        'public/icons/pessoa1.svg', 
        'public/icons/seta2.svg', 
        'public/icons/atencao3.svg', 
        'public/icons/bateria4.svg', 
        'public/icons/bike5.svg', 
        'public/icons/maca6.svg', 
        'public/icons/recarregado7.svg',
        'public/icons/carro8.svg',
        'public/icons/duasPessoas9.svg',
        'public/icons/shopping10.svg',
        'public/icons/chuva11.svg',
        'public/icons/coracaoAmor12.svg',
        'public/icons/presente13.svg'

    ])

    //  useEffect(() => 
    //     console.log(imagens)
    //  ,[imagens])

    function btnMudarImagem() {

        if(imagens.length > 0){

            const numeroAleatorio = Math.floor(Math.random() * imagens.length);
    
            setImagem(imagens[numeroAleatorio]);

            setImagens(imagens.filter((i) => i != imagens[numeroAleatorio]))
            console.log(numeroAleatorio)

        }else{
            alert("Acabou a história")
        }

        
    }  

  return (

    <div className='container-dado1'>

        {/* <h1>StoryMojis</h1> */}

        <button onClick={btnMudarImagem} className='btn-mudar-imagem'>

            <div className='div-images'>

                 <img className='imagem' src={imagem} alt="" />

            </div>

        </button>

        

      
    </div>

  )
}

export default Dado1
