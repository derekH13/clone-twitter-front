import { useSelector } from 'react-redux'
import { Color, Texto } from '../../style/main_style'
import { PostStyle } from './style'
import { RootReducer } from '../../../store/store'
import { FormEvent, useEffect, useState } from 'react'
import { PostPorps, Profile, UserProps } from '../../interface/interface'
import Util from '../../../Util/Requisicao'
import { Comentarios } from '../Comentario/Comentarios'
import { CreateComentario } from '../CreateComentario/CreateComentario'
import { CurtidaNoPost } from '../Curtida/Curtida'

const comentObj = [
  {
    iteracao_id: 1,
    profile_id: 21,
    post_id: 1,
    iteracao_comentario: '',
    iteracao_criada: '2025-01-15T13:41:03.211951Z'
  }
]

type props = {
  id: number
  title: string
  desc: string
  img: string
  user: number
}

export type comentarios = {
  iteracao_id: number
  profile_id: number
  post_id: number
  iteracao_comentario: string
  iteracao_criada: string
}

const Post_Feed = ({ title, desc, img, user, id }: props) => {
  const usuario = useSelector((state: RootReducer) => state.user.itens)
  const profile = useSelector((state: RootReducer) => state.profile.itens)
  const [isCurtido, setIsCurtido] = useState(false)

  const [usuarioAtual, setUsuarioAtual] = useState<UserProps>()
  const [profileAtual, setprofileAtual] = useState<Profile>()

  const [mostarComentarios, setMostrarComentarios] = useState(false)

  const [comentarios, setComentarios] = useState<comentarios[]>(comentObj)

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

  //função para curtir post
  function curtirPost(e: FormEvent) {
    e.preventDefault()

    if (profile && profile.id) {
      Util.CurtirPost(id, profile.id)
    }
  }

  function mudarCurtida() {
    setIsCurtido(!isCurtido)
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
    // chama a função para pegar todas as curtidas
  }, [])

  // func para carregar comentarios
  function loadingComentarios(e: FormEvent) {
    e.preventDefault()
    Util.allComentarios(id).then((data) => {
      if (data && typeof data !== 'boolean') {
        setComentarios(data)
      }
    })
    setMostrarComentarios(!mostarComentarios)
  }

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

        <Texto color={Color.gray} size={15} weight={400}>
          {desc}
        </Texto>
        <img src={img} alt="" />

        <div className="interacoes">
          <CurtidaNoPost
            id={id}
            curtirPost={curtirPost}
            funcIsCurtido={mudarCurtida}
            isCurtido={isCurtido}
            key={1}
          />
          <div className="comentar">
            <svg
              onClick={(e) => loadingComentarios(e)}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
          </div>
        </div>
      </div>

      {mostarComentarios && (
        <div className="comentarios">
          <CreateComentario postId={id} key={id} />
          {comentarios.map((item) => (
            <Comentarios
              iteracao_comentario={item.iteracao_comentario}
              iteracao_criada={item.iteracao_criada}
              iteracao_id={item.iteracao_id}
              post_id={item.post_id}
              profile_id={item.profile_id}
              key={item.post_id}
            />
          ))}
        </div>
      )}
    </PostStyle>
  )
}

export default Post_Feed
