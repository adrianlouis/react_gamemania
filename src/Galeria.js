import React from 'react'
import SectionTitle from './SectionTitle'
import css from './css/galeria.css'

const Galeria = () => {


    const fotos = [
        {
            id: 1,
            image: require("./images/peep1.jpg"),
        },
        {
            id: 2,
            image: require("./images/peep2.jpg")
        },
        {
            id: 3,
            image: require("./images/peep3.jpg")
        },
        {
            id: 4,
            image: require("./images/peep4.jpg")
        },
        {
            id: 5,
            image: require("./images/peep5.jpg")
        }
    ]

    const [picGrande, setPicGrande] = React.useState(fotos[0].image)

    function handleClick({target}){
        console.log(target)
        setPicGrande(target)
    }


  return (
    <div>
      <SectionTitle title='Galeria' subtitle='Estas fotos são dos nossos clientes mais do que amáveis!' />

        <div className='galeriaContainer'>
            <div className='galeriaContainerMiniaturas'>

                {fotos.map((foto)=>(
                    <img key={foto.id} src={foto.image} onClick={()=>setPicGrande(foto.image)} />
                ))}
                
            </div> 

            <div className='galeriaContainerGrande'>

                <img className='galeriaImgGrande' src={picGrande} />

            </div>
        </div>

    </div>
  )
}

export default Galeria
