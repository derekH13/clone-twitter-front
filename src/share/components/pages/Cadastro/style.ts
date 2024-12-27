import styled from 'styled-components'
import { Color } from '../../../style/main_style'

export const StyleCadastro = styled.section`
  background-color: rgba(0, 0, 0);
  height: 100vh;
  width: 100vw;
  padding: 5.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;

  .logo {
    @media (max-width: 1000px) {
      display: none;
    }
    img {
      height: 450px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 300px;
    width: 100%;

    &_ou {
      color: ${Color.white};
      display: flex;
      align-items: center;

      div {
        padding: 0px 8px;
      }

      span {
        flex-direction: row;
        height: 1px;
        width: 100%;
        background-color: ${Color.gray};
        opacity: 0.5;
      }
    }

    &_entrar {
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &_button {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &_acontecendo {
      margin-bottom: 18px;
    }
  }
`
