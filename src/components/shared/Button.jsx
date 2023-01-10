import React from 'react'

const Button = ({classname}) => {
  return (
    <div>
      <button className= {`bg-primary text-white rounded-full px-4 py-2 font-heading font-black text-[12px] w-44 tracking-widest ${classname}`}>READ MORE</button>
    </div>
  )
}

export default Button
