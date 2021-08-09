import React from 'react'
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

export function TechniqueMenu({ open, handleClose, anchorEl }) {
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
                  <MenuItem onClick={handleClose}>
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
