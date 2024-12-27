import { FormEvent, useState } from 'react'
import { ButtonStyle, Color, InputS, Texto } from '../../../style/main_style'
import { StyleWindown } from '../Modal_login/style'
import Util from '../../../../Util/Requisicao'
import { useSelector } from 'react-redux'
import { Root } from 'react-dom/client'
import { RootReducer } from '../../../../store/store'
import { PostPorps } from '../../../interface/interface'
import { Alert } from '../../pages/Cadastro/Feed/Feed'

type props = {
  onclick: () => void
  modificar: () => void
  alert: (item: Alert) => void
}

const Modal_Posts = ({ onclick, modificar, alert }: props) => {
  const [titulo, setTitulo] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  const profile = useSelector((state: RootReducer) => state.profile.itens)

  const fazerPost = (e: FormEvent) => {
    e.preventDefault()

    if (profile !== null && profile.id !== undefined) {
      const post: PostPorps = {
        post_title: titulo,
        post_description: desc,
        post_img: img,
        user_id: profile.id //tem q ser o id do profile
      }

      Util.MandarPost(post).then((data) => {
        if (data) {
          console.log('post feito')
          modificar()
          alert({
            title: 'Post Feito!!',
            desc: 'post feito com sucesso'
          })
          onclick()
        } else {
          console.log('post recusado')
        }
      })
    }
  }

  return (
    <StyleWindown>
      <div className="modal_posts">
        <div onClick={() => onclick()} className="modal_posts_fechar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0,0,256,256"
          >
            <g
              fill={Color.blackFundo}
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path>
              </g>
            </g>
          </svg>
        </div>
        <Texto color={Color.post} size={28} weight={700}>
          Comece seu Posts
        </Texto>
        <form className="container_input" onSubmit={(e) => fazerPost(e)}>
          <InputS
            placeholder="Titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <InputS
            placeholder="Link da Imagem"
            onChange={(e) => setImg(e.target.value)}
          />
          <textarea
            placeholder="Descrição do seu Post"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <ButtonStyle
            backColor={Color.blue}
            border={false}
            color={Color.post}
            maxWidth="100%"
          >
            POSTAR
          </ButtonStyle>
        </form>
      </div>
    </StyleWindown>
  )
}

export default Modal_Posts
