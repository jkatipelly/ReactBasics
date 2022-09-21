import React from 'react'

const className={
    fontSize:'72px',
    color:'blue'
}

function Inline() {
  return (
    <div>
        <h1 className='error'>Error from Inline</h1>
        <h1 style={className}>Inline</h1>
    </div>
  )
}

export default Inline