import { FormEvent, useState } from 'react'
import { InputS } from '../../style/main_style'
import { StyleCreatecoment } from './style'
import Util from '../../../Util/Requisicao'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/store'

type props = {
  postId: number
}

export const CreateComentario = ({ postId }: props) => {
  const [comentario, setcomentario] = useState('')

  const profile = useSelector((state: RootReducer) => state.profile.itens)

  console.log(postId)

  function comentar(e: FormEvent): void {
    e.preventDefault()
    if (profile && profile.id) {
      Util.ComentarPost(postId, profile.id, comentario)
    }
  }

  return (
    <StyleCreatecoment onSubmit={(e) => comentar(e)}>
      <InputS
        placeholder="Faça um comentario"
        value={comentario}
        onChange={(e) => setcomentario(e.target.value)}
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          fill="currentColor"
          className="bi bi-arrow-right-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
        </svg>
      </button>
    </StyleCreatecoment>
  )
}
