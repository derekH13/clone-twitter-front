import * as s from './style'
import { GlobalStyle } from '../../../../style/main_style'
import { useEffect, useState } from 'react'
import Util from '../../../../../Util/Requisicao'

import { Profile, PostPorps } from '../../../../interface/interface'
import Card_profile from '../../../Card_profile/Card_profile'
import Pesquisa from '../../../Pesquisa/Pesquisa'
import Post_Feed from '../../../Post_Feed/Post_Feed'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../../../store/store'
import Modal_Posts from '../../../containers/Modal_Posts/Modal_Posts'
import { guardarProfile } from '../../../../../store/reducers/profile'
import NavBar from '../../../containers/NavBar/NavBar'
import Alerts from '../../../Alerts/Alerts'

export type Alert = {
  title: string
  desc: string
}

const Feed = () => {
  const [objProfile, setObjProfile] = useState<Profile[]>()
  const [objPost, setObjPost] = useState<PostPorps[]>()
  const [dadosAlert, setDadosAlert] = useState<Alert>({
    title: 'ok',
    desc: 'tudo certo!!'
  })
  const [IsAlert, setIsAlert] = useState(false)

  const [isPost, setIsPost] = useState(false)

  const UserProfile = useSelector((state: RootReducer) => state.profile.itens)

  const dispatch = useDispatch()

  const usuario = useSelector((state: RootReducer) => state.user.itens)

  const [modificar, setModificar] = useState(false)

  // pega todos os perfil
  useEffect(() => {
    Util.profilleAll().then((data) => {
      if (data) {
        setObjProfile(data)
      } else {
        console.error('erro ao fazer a requisição')
      }
    })
    if (usuario?.id !== undefined) {
      Util.UserProfile(usuario.id).then((data) => {
        if (data) {
          dispatch(guardarProfile(data))
        }
      })
    }
  }, [])

  function carregarPosts() {
    if (UserProfile && UserProfile.profile_connections !== undefined) {
      Util.buscarPosts(UserProfile.profile_connections).then((data) => {
        setObjPost(data)
      })
    }
  }

  //pega todos os posts de quem segue
  useEffect(() => {
    carregarPosts()
  }, [UserProfile, modificar])

  const AbrirPost = () => {
    setIsPost(!isPost)
  }

  const IsModificado = () => {
    console.log('Modificado antes:', modificar)
    setModificar((prev) => !prev)
    console.log('Modificado depois:', !modificar)
  }

  const mudarAlert = (item: Alert) => {
    setDadosAlert(item)
    setIsAlert(true)

    setTimeout(() => {
      setIsAlert(false)
    }, 4000)
  }

  console.log(modificar)
  console.log(UserProfile)
  return (
    <>
      <GlobalStyle />
      <NavBar />

      {IsAlert && <Alerts desc={dadosAlert?.desc} title={dadosAlert?.title} />}
      {isPost && (
        <Modal_Posts
          carregar={carregarPosts}
          modificar={IsModificado}
          onclick={AbrirPost}
          alert={mudarAlert}
        />
      )}
      <s.FeedStyle>
        <s.InterfaceFeed>
          <div className="conatiner_post">
            <s.pesquisa>
              <Pesquisa onclick={AbrirPost} />
            </s.pesquisa>
            <s.PostStyle>
              {objPost &&
                objPost.map((item) => {
                  if (item.post_id !== undefined) {
                    return (
                      <Post_Feed
                        id={item.post_id}
                        key={item.post_id}
                        desc={item.post_description}
                        img={item.post_img}
                        title={item.post_title}
                        user={item.user_id}
                      />
                    )
                  }
                })}
            </s.PostStyle>
          </div>
          <s.conexao>
            {objProfile &&
              objProfile.map((data) => (
                <Card_profile
                  carregar={carregarPosts}
                  alert={mudarAlert}
                  data={data}
                  modificar={IsModificado}
                  key={data.id}
                />
              ))}
          </s.conexao>
        </s.InterfaceFeed>
      </s.FeedStyle>
    </>
  )
}

export default Feed
