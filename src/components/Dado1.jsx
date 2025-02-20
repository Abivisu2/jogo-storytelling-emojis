import React, { useEffect, useState } from 'react'
import './Dado1.css'



function Dado1() {

    const [imagem, setImagem] = useState('/icons/pessoa1.svg')
    const [imagens, setImagens] = useState([

        '/icons/pessoa1.svg', 
        '/icons/seta2.svg', 
        '/icons/atencao3.svg', 
        '/icons/bateria4.svg', 
        '/icons/bike5.svg', 
        '/icons/maca6.svg', 
        '/icons/recarregado7.svg',
        '/icons/carro8.svg',
        '/icons/duasPessoas9.svg',
        '/icons/shopping10.svg',
        '/icons/chuva11.svg',
        '/icons/coracaoAmor12.svg',
        '/icons/presente13.svg'

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
