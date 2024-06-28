import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
        <div
        style={{
          width:"10rem",
        }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis perspiciatis aspernatur sequi rerum modi accusantium necessitatibus eaque facere nesciunt doloribus expedita unde blanditiis accusamus reprehenderit, nihil est a, quo pariatur?
        </div>
    </Menu>
  )
}

export default FileMenu
