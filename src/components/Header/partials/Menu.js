import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { MenuList } from './MenuList'

export function Menu({ open, handleMenu }) {
  return (
    <Drawer open={open} onClose={handleMenu}>
      <MenuList />
    </Drawer>
  )
}
