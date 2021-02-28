import React, { useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'
import { Spacer } from './styles'
import { Menu } from './partials/Menu'

export function Header({
  pageTitle,
  showFilterBtn = false,
  showSearchBtn = false
}) {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = useCallback(() => setOpenMenu(!openMenu), [
    setOpenMenu,
    openMenu
  ])

  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{pageTitle}</Typography>
          <Spacer />
          {showFilterBtn && (
            <IconButton color="inherit">
              <FilterListIcon />
            </IconButton>
          )}
          {showSearchBtn && (
            <IconButton edge="end" color="inherit">
              <SearchIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu open={openMenu} handleMenu={handleMenu} />
    </>
  )
}
