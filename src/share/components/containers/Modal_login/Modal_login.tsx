import { useState } from 'react'
import { ButtonStyle, Color, InputS, Texto } from '../../../style/main_style'
import * as s from './style'
import Util from '../../../../Util/Requisicao'
import { error } from 'console'
import { useDispatch } from 'react-redux'
import { guardarUser } from '../../../../store/reducers/usuario'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { motion } from 'framer-motion'

export type props = {
  onclick: () => void
}

const Modal_login = ({ onclick }: props) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhar, setSenhar] = useState('')

  const dispatch = useDispatch()

  const navegar = useNavigate()

  const mandarInfo = async () => {
    if (senha === senhar) {
      const data = {
        username: nome,
        email: email,
        password: senha
      }

      Util.CreateUser(data)
        .then((data1) => {
          if (!data1) return
          dispatch(guardarUser(data1))
          console.log('cadastro feito')
          navegar('/feed')

          LocalStorage()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const LocalStorage = async () => {
    const response = await axios.post(
      'https://derek576.pythonanywhere.com/api/token/',
      {
        username: nome,
        password: senha
      }
    )

    // Salvar o token no localStorage (ou qualquer outro método seguro)
    localStorage.setItem('accessToken', response.data.access)
    localStorage.setItem('refreshToken', response.data.refresh)
  }

  return (
    <s.StyleWindown>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modal_login"
      >
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
          <Texto color={Color.white} size={32} weight={600}>
            Criar sua conta
          </Texto>
          <div className="container_input">
            <InputS
              type="text"
              placeholder="username"
              onChange={(e) => setNome(e.target.value)}
            />
            <InputS
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputS
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <InputS
              type="password"
              placeholder="Repetir á Senha"
              onChange={(e) => setSenhar(e.target.value)}
            />
          </div>

          <ButtonStyle
            backColor={Color.blue}
            color={Color.white}
            border={false}
            maxWidth="100%"
            onClick={() => mandarInfo()}
          >
            Cadastrar
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
              Entrar
            </ButtonStyle>
          </div>
        </div>
      </motion.div>
    </s.StyleWindown>
  )
}

export default Modal_login
