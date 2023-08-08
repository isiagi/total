import React from 'react'
import { Button } from 'antd'

function ButtonComponent({name, backgroundColor}) {
  return (
    <button style={{backgroundColor: backgroundColor}} className={`text-white py-3 px-4 rounded`} b>
        {name}
    </button>
    
  )
}

export default ButtonComponent