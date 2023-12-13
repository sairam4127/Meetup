import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegistered: false,
  registerStateChange: () => {},
})

export default RegisterContext
