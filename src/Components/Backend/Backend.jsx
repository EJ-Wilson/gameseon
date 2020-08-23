
import { hot } from 'react-hot-loader'
import React from 'react'

import './Backend.css'
import { Button, Container, Box, TextField } from '@material-ui/core'

const Backend = (props) => {
  return (
    <div className='Backend'>
      <Container maxWidth='sm'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          className='formBox'
        >

          <TextField type='text' />

          <Button variant='contained' color='primary'>
            Hello World
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default hot(module)(Backend)
