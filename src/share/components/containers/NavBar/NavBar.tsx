import { useSelector } from 'react-redux'
import * as s from './style'
import { RootReducer } from '../../../../store/store'
import { useState } from 'react'
import Modal_Editar_Profile from '../Modal_Editar_Profile/Modal_Editar_Profile'

// {
//   "id": 1,
//   "user": 12,
//   "bio": "Sou um apaixonado por tecnologia, programação e inteligência artificial. Com experiência no desenvolvimento de projetos em React, TypeScript e Django, estou sempre em busca de novos desafios para expandir minhas habilidades.",
//   "avatar": "https://i.pinimg.com/736x/40/06/04/40060451628939411c900455fc17baee.jpg",
//   "profile_connections": []
// }

const NavBar = () => {
  const profile = useSelector((state: RootReducer) => state.profile.itens)

  const [isModalProfile, setIsModalProfile] = useState(true)

  const toggleEditar = () => {
    setIsModalProfile(!isModalProfile)
  }

  return (
    <>
      {isModalProfile && <Modal_Editar_Profile onclick={toggleEditar} />}
      <s.navBarStyle>
        <div className="interface">
          <img src="assets/twitter.svg" alt="" />

          <div className="user_editar" onClick={() => toggleEditar()}>
            {profile && profile.avatar ? (
              <img src={profile.avatar} alt="" />
            ) : (
              <img src="assets/user.jpg" alt="" />
            )}
            <span>Editar Perfil</span>
          </div>
        </div>
      </s.navBarStyle>
    </>
  )
}

export default NavBar
