import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import HomeIcon from '@material-ui/icons/Home'
import { MenuWrapper } from './styles'
import { UserInfo } from './UserInfo'
import { HeroTitle } from './HeroTitle'
import { useNavigation } from '@/hooks/useNavigation'

export function MenuList() {
  const { navigateTo } = useNavigation()
  return (
    <MenuWrapper>
      <HeroTitle />
      <UserInfo />
      <List>
        <ListItem onClick={() => navigateTo('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={() => navigateTo('/characters')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Personagens" />
        </ListItem>
        <ListItem onClick={() => navigateTo('/skills')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Habilidades" />
        </ListItem>
        <ListItem onClick={() => navigateTo('/techniques')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Técnicas" />
        </ListItem>
      </List>
    </MenuWrapper>
  )
}
