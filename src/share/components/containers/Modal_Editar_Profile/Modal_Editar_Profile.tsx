import { useDispatch, useSelector } from 'react-redux'
import { ButtonStyle, Color, InputS, Texto } from '../../../style/main_style'
import { StyleWindown } from '../Modal_login/style'
import { RootReducer } from '../../../../store/store'
import { FormEvent, useState } from 'react'
import Util from '../../../../Util/Requisicao'
import { Profile } from '../../../interface/interface'
import { guardarProfile } from '../../../../store/reducers/profile'

type props = {
  onclick: () => void
  carregarImagem: () => void
}

const Modal_Editar_Profile = ({ onclick, carregarImagem }: props) => {
  const [Biografia, setBiografia] = useState('')
  const [imagem, setImagem] = useState('')
  const [modificado, setModificado] = useState(true)

  const profile = useSelector((state: RootReducer) => state.profile.itens)
  const usuario = useSelector((state: RootReducer) => state.user.itens)

  const dispatch = useDispatch()

  const mudarProfile = (e: FormEvent) => {
    e.preventDefault()

    console.log('modificado')

    if (
      profile &&
      usuario &&
      usuario.id !== undefined &&
      profile.id !== undefined
    ) {
      const objProfile: Profile = {
        user: usuario.id, // Supondo que usuario seja um número
        bio: Biografia,
        avatar: imagem
      }

      Util.EditarProfile(objProfile, profile.id).then((data) => {
        if (data && typeof usuario.id == 'number') {
          Util.UserProfile(usuario.id).then((data) => {
            if (data) {
              dispatch(guardarProfile(data))
              setModificado(!modificado)
            }
          })

          onclick()
        }
      })
    }
  }

  function apertaConcluir(e: FormEvent) {
    e.preventDefault()
    mudarProfile(e)
    onclick()
    carregarImagem()
  }

  return (
    <StyleWindown>
      <div className="modal_editar">
        <div className="modal_login_fechar" onClick={() => onclick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
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
        <Texto color={Color.white} size={28} weight={700}>
          Mude seu Perfil
        </Texto>

        <form className="container_input" onSubmit={(e) => mudarProfile(e)}>
          <InputS
            placeholder="Colar Endereço de Imagem"
            onChange={(e) => setImagem(e.target.value)}
          />
          <InputS
            placeholder="Sua Biografia"
            onChange={(e) => setBiografia(e.target.value)}
          />
          <ButtonStyle
            onClick={(e) => apertaConcluir(e)}
            backColor={Color.blue}
            border={false}
            color={Color.white}
            maxWidth="100%"
            type="submit"
          >
            Concluir
          </ButtonStyle>
        </form>
      </div>
    </StyleWindown>
  )
}

export default Modal_Editar_Profile
