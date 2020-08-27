
import { hot } from 'react-hot-loader'
import React from 'react'

import './Content.css'
import CreateProject from './CreateProject/CreateProject.jsx'

const Content = (props) => {
  const [page, setPage] = React.useState(<CreateProject />)

  return (
    <div className='Content'>

      {page}

    </div>
  )
}

export default (hot(module)(Content))
