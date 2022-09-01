import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    
      <div className="destSectionTitle">
        <span>
        {title}
        </span>
      <p className="destaqueTexto">{subtitle}</p>
      </div>
    
  )
}

export default SectionTitle
