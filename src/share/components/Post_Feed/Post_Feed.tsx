import { useSelector } from 'react-redux'
import { Color, Texto } from '../../style/main_style'
import { PostStyle } from './style'
import { RootReducer } from '../../../store/store'
import { useEffect, useState } from 'react'
import { PostPorps, Profile, UserProps } from '../../interface/interface'

type props = {
  id: number
  title: string
  desc: string
  img: string
  user: number
}

const Post_Feed = ({ title, desc, img, user, id }: props) => {
  const usuario = useSelector((state: RootReducer) => state.user.itens)

  const [usuarioAtual, setUsuarioAtual] = useState<UserProps>()
  const [profileAtual, setprofileAtual] = useState<Profile>()

  async function buscarProfile(): Promise<Profile | null> {
    try {
      const response = await fetch(
        `https://derek576.pythonanywhere.com/user/profile/${user}/`
      )

      if (!response.ok) {
        throw new Error('falha')
      }

      const result = response.json()
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }

  console.log(id)

  async function buscarUser(id: number) {
    try {
      const response = await fetch(
        `https://derek576.pythonanywhere.com/user/cadastro/${id}/`
      )

      if (!response.ok) {
        throw new Error('falha')
      }

      const result = response.json()
      return result
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    buscarProfile().then((data) => {
      if (data) {
        setprofileAtual(data)
        buscarUser(data.user).then((data) => {
          setUsuarioAtual(data)
        })
      }
    })
  }, [])

  console.log(usuarioAtual?.username)

  return (
    <PostStyle>
      <div className="conta">
        <img src={profileAtual?.avatar} alt="" />
        <Texto color={Color.gray} size={20} weight={700}>
          {usuarioAtual?.username}
        </Texto>
      </div>
      <div className="content">
        <h1>{title}</h1>

        <img src={img} alt="" />

        <Texto color={Color.gray} size={16} weight={400}>
          {desc}
        </Texto>
      </div>
    </PostStyle>
  )
}

export default Post_Feed
