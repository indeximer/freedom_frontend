import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { DetailsWrapper } from './styles'

export function UserInfo() {
  const { user, logOut } = useAuthenticationContext()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{user.displayName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DetailsWrapper>
          <Typography gutterBottom>{user.email}</Typography>
          <Button startIcon={<ExitToAppIcon />} onClick={logOut}>
            Logout
          </Button>
        </DetailsWrapper>
      </AccordionDetails>
    </Accordion>
  )
}
