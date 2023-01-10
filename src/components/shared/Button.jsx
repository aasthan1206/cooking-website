import React from 'react'

const Button = ({classname}) => {
  return (
    <div>
      <button className= {`bg-primary text-white rounded-full px-6 py-3 font-heading font-black text-[14px] w-48 tracking-widest hover:bg-white hover:text-primary ${classname}`}>READ MORE</button>
    </div>
  )
}

export default Button
