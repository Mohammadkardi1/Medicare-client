import React from 'react'
import { CircularProgress } from '@mui/material'


const LoadingModel = ({padding = "py-2", color= "#2196f3", isFixed= false, dimensions}) => {

  return (
    <div className={`${isFixed ? "fixed inset-0 z-20 " : ""} ${dimensions} flex items-center justify-center  ${padding}`}>
          <CircularProgress style={{ color: color }}/>
    </div>
  )
}

export default LoadingModel