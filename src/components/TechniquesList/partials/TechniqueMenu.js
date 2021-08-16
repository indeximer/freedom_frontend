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
import DeleteIcon from '@material-ui/icons/Delete'
import { MenuWrapper } from './styles'

export function TechniqueMenu({ open, handleClose, anchorEl, technique }) {
  const { navigateTo } = useNavigation()
  const handleEditClick = () => {
    navigateTo(`/techniques/edit/${technique.id}`)
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
