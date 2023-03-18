import React from 'react'
import galleryIamges from './galleryImage'
import Masonry,  {ResponsiveMasonry } from 'react-responsive-masonry'

const BusImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
                {
                    galleryIamges.map((item,index)=>(
                        <img 
                        className='citybus__img'
                        src={item} 
                        key={index} 
                        alt="" style={{'width' : '100%', 'display':'block', 'borderRadius':'10px'}}/>
                    ))
                }
        </Masonry>

    </ResponsiveMasonry>
  )
}

export default BusImages