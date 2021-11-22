import React, { useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FilterListIcon from '@material-ui/icons/FilterList'
import { Spacer } from './styles'
import { Menu } from './partials/Menu'
import { useNavigation } from '@/hooks'

export function Header({
  pageTitle,
  showFilterBtn = false,
  showSearchBtn = false,
  openSearch = () => false,
  backBtnPath = false
}) {
  const [openMenu, setOpenMenu] = useState(false)
  const { navigateTo } = useNavigation()
  const handleMenu = useCallback(() => setOpenMenu(!openMenu), [
    setOpenMenu,
    openMenu
  ])

  const BackButton = () => {
    return backBtnPath ? (
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => navigateTo(backBtnPath)}
      >
        <ArrowBackIcon />
      </IconButton>
    ) : null
  }

  const SearchButton = () => {
    return showSearchBtn ? (
      <IconButton edge="end" color="inherit" onClick={openSearch}>
        <SearchIcon />
      </IconButton>
    ) : null
  }

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
          <SearchButton />
          <BackButton />
        </Toolbar>
      </AppBar>
      <Menu open={openMenu} handleMenu={handleMenu} />
    </>
  )
}
