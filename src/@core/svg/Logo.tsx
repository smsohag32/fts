// React Imports
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
   <p{...props} className='font-bold text-xl'>F</p>
  )
}

export default Logo
