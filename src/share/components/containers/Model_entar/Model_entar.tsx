import { FormEvent, useState } from 'react'
import { ButtonStyle, Color, InputS, Texto } from '../../../style/main_style'
import { StyleWindown } from '../Modal_login/style'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { guardarUser } from '../../../../store/reducers/usuario'
import Util from '../../../../Util/Requisicao'
import { useNavigate } from 'react-router-dom'

type props = {
  onclick: () => void
}

const Model_entar = ({ onclick }: props) => {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navegar = useNavigate()

  const mandarInfo = () => {
    console.log('s')
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: nome,
        password: senha
      })

      // Salvar o token no localStorage (ou qualquer outro método seguro)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      // procurar o user pelo username, pegar o obj e guardar no redux user
      Util.get_username(nome).then((data) => {
        console.log(data)
        if (data) {
          dispatch(guardarUser(data))
          console.log('dados salvos')
          navegar('/feed')
        }
      })
    } catch (err: any) {
      console.error('Erro no login:', err.response?.data || err.message)
      setError('Credenciais invalidas. Tente Novamente')
    }
  }

  return (
    <>
      <StyleWindown>
        <div className="modal_login">
          <div onClick={() => onclick()} className="modal_login_fechar">
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
          <div className="modal_login_logo">
            <img src="assets/twitter.svg" alt="" />
          </div>

          <div className="modal_login_form">
            <form action="" onSubmit={(e) => handleLogin(e)}>
              <Texto color={Color.white} size={32} weight={600}>
                Entre com a sua Conta
              </Texto>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="container_input">
                <InputS
                  type="text"
                  placeholder="username"
                  onChange={(e) => setNome(e.target.value)}
                />

                <InputS
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <ButtonStyle
                type="submit"
                backColor={Color.blue}
                color={Color.white}
                border={false}
                maxWidth="100%"
              >
                Entrar
              </ButtonStyle>

              <div className="modal_login_link">
                <Texto color={Color.white} size={16} weight={500}>
                  Já tem conta?
                </Texto>

                <ButtonStyle
                  weight={600}
                  backColor={Color.black}
                  border={true}
                  color={Color.blue}
                  maxWidth="100%"
                >
                  Cadastrar
                </ButtonStyle>
              </div>
            </form>
          </div>
        </div>
      </StyleWindown>
    </>
  )
}

export default Model_entar
