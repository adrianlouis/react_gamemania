import React from 'react'
import banner1 from './banners/banner1.jpg'
import banner2 from './banners/banner2.jpg'
import banner3 from './banners/banner3.jpg'
import css from './css/banner.css'

const Banner = () => {

    const [banAtivo, setBanAtivo] = React.useState(banner1)

    React.useEffect(()=>{
        setTimeout(() => {
            if (banAtivo === banner1){
                setBanAtivo(banner2)
            }else if (banAtivo === banner2){
                setBanAtivo(banner3)
            }else{
                setBanAtivo(banner1)
            }

        }, 7000);
    },[banAtivo])

  return (
    <div className='bannerCarrossel'>
      <img className='bannerImgs' src={banAtivo} alt='Banner' />
      <div className='bannerDots'>
        <div className='dot' style={banAtivo === banner1 ? {backgroundColor: 'rgb(146, 0, 204)', boxShadow: '#fff 0 0 2px, inset rgb(246, 150, 300) 1px 1px 2px, inset rgb(46, 0, 104) -1px -1px 2px'} : {}}></div>
        <div className='dot' style={banAtivo === banner2 ? {backgroundColor: 'rgb(146, 0, 204)', boxShadow: '#fff 0 0 2px, inset rgb(246, 150, 300) 1px 1px 2px, inset rgb(46, 0, 104) -1px -1px 2px'} : {}}></div>
        <div className='dot' style={banAtivo === banner3 ? {backgroundColor: 'rgb(146, 0, 204)', boxShadow: '#fff 0 0 2px, inset rgb(246, 150, 300) 1px 1px 2px, inset rgb(46, 0, 104) -1px -1px 2px'} : {}}></div>
      </div>
    </div>
  )
}

export default Banner
