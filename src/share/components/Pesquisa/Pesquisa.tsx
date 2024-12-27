import { useEffect, useState } from 'react'
import { ButtonStyle, Color, Texto } from '../../style/main_style'
import { PesquiStyle } from './style'

import { RootReducer } from '../../../store/store'
import { useSelector } from 'react-redux'
import Util from '../../../Util/Requisicao'
import { Profile } from '../../interface/interface'

type props = {
  onclick: () => void
}

const Pesquisa = ({ onclick }: props) => {
  const usuario = useSelector((state: RootReducer) => state.user.itens)

  const profileAtual = useSelector((state: RootReducer) => state.profile.itens)

  return (
    <PesquiStyle>
      <div>
        <img src={profileAtual?.avatar} alt="" />
      </div>
      <div className="content">
        <Texto color={Color.white} size={26} weight={500}>
          Interaja com quem te segue...
        </Texto>
        <ButtonStyle
          backColor={Color.blue}
          border={true}
          color={Color.black}
          maxWidth="100%"
          onClick={() => onclick()}
        >
          Comece uma publicação
        </ButtonStyle>
      </div>
    </PesquiStyle>
  )
}

export default Pesquisa
