import { CardStyle } from './style'
import { UserProps, Profile } from '../../interface/interface'
import Util from '../../../Util/Requisicao'
import { useEffect, useState } from 'react'
import { ButtonStyle, Color, Texto } from '../../style/main_style'
import { guardarProfile } from '../../../store/reducers/profile'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store/store'
import { Alert } from '../pages/Cadastro/Feed/Feed'

type props = {
  data: Profile
  modificar: () => void
  alert: (item: Alert) => void
}

const Card_profile = ({ data, modificar, alert }: props) => {
  const [user1, setUser1] = useState<UserProps>()
  const usuario = useSelector((state: RootReducer) => state.user.itens)

  const dispatch = useDispatch()

  const { id, user, avatar, bio } = data

  useEffect(() => {
    Util.IsExiste(user).then((response) => {
      console.log(response)
      response && setUser1(response)
    })
  }, [])

  function seguir() {
    if (id && id !== null && id !== undefined) {
      Util.followUser(id)
      alert({
        title: `Seguindo ${user1?.username}`,
        desc: `Agora voçê pode ver posts do ${user1?.username}`
      })
    }

    console.log('ddddddddddddddddddddddddddddddddddddddddddddddddd')

    if (usuario && usuario.id !== undefined) {
      Util.UserProfile(usuario.id).then((data) => {
        if (data) {
          dispatch(guardarProfile(data))
        }
      })
    }
  }

  return user ? (
    <CardStyle>
      <div className="card_container_imagem">
        <img src={avatar} alt="" />
      </div>
      <div className="card_content">
        <h4>{user1?.username}</h4>
        <Texto color={Color.white} size={14} weight={300}>
          {bio}
        </Texto>
        <ButtonStyle
          maxWidth="100%"
          backColor={Color.blackFundo}
          border={true}
          color={Color.blue}
          onClick={() => seguir()}
        >
          Seguir
        </ButtonStyle>
      </div>
    </CardStyle>
  ) : (
    <CardStyle>
      <div className="card_container_imagem">
        <img
          src="https://i.pinimg.com/736x/46/54/4a/46544ac4de6bd949f268cb0167b4371d.jpg"
          alt=""
        />
      </div>
      <div>
        <h4>derek</h4>
        <div className="texto">
          <Texto color={Color.white} size={11} weight={400}>
            perfil associado a ele. No Django, um Profile está geralmente
            vinculado a um único usuário, e não pode haver dois perfis para o
            mesmo usuário. Esse erro sugere que você está tentando criar um
            perfil para um usuário que já possui um perfil.
          </Texto>
        </div>
        <ButtonStyle
          maxWidth="100%"
          backColor={Color.blackFundo}
          border={true}
          color={Color.blue}
        >
          seguir
        </ButtonStyle>
      </div>
    </CardStyle>
  )
}

export default Card_profile
