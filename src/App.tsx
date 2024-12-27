import React from 'react'
import Cadastro from './share/components/pages/Cadastro/Cadastro'
import Feed from './share/components/pages/Cadastro/Feed/Feed'
import { Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Provider>
  )
}
