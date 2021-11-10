import React from 'react'
import { useNavigation } from '@/hooks/useNavigation'
import {
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  ListItemIcon
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import LinkIcon from '@material-ui/icons/Link'
import DeleteIcon from '@material-ui/icons/Delete'
import { MenuWrapper } from './styles'

export function TechniqueMenu({ open, handleClose, anchorEl, technique }) {
  const { navigateTo } = useNavigation()
  const baseUrl = window.location.hostname
  const techniquePath = `/techniques/edit/${technique.id}`

  const handleEditClick = () => {
    navigateTo(techniquePath)
    handleClose()
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`${baseUrl}/techniques/edit/${technique.id}`)
    handleClose()
  }

  return (
    <MenuWrapper>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  <MenuItem onClick={handleEditClick}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    Editar
                  </MenuItem>
                  <MenuItem onClick={copyLink}>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    Copiar Link
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    Deletar
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </MenuWrapper>
  )
}
