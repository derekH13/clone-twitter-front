import { useEffect, useState } from 'react'
import { comentarios } from '../Post_Feed/Post_Feed'
import { ComentariosStyle } from './style'
import Util from '../../../Util/Requisicao'
import { Profile } from '../../interface/interface'

export const Comentarios = ({
  iteracao_id,
  profile_id,
  post_id,
  iteracao_comentario,
  iteracao_criada
}: comentarios) => {
  const [profileDados, setProfileDados] = useState<Profile>()

  useEffect(() => {
    Util.getProfile(profile_id).then((data) => {
      if (data) {
        setProfileDados(data)
      }
    })
  }, [])

  return (
    <>
      {profileDados && (
        <ComentariosStyle>
          <img src={profileDados.avatar} alt="" />

          {iteracao_comentario}
        </ComentariosStyle>
      )}
    </>
  )
}
