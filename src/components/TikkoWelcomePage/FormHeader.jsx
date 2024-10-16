import React from 'react'

const FormHeader = ({title , description}) => {
  return (
    <>
    <div>
      <h5 className="font-sans text-[32px] text-white font-semibold leading-[38px] text-center mb-1">{title}</h5>
      <p className="font-sans text-[16px] text-white font-normal leading-[22px] text-center">{description}</p>
    </div>
    </>
  )
}

export default FormHeader
