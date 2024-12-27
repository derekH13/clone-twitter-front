import styled from 'styled-components'
import { ButtonStyle, Color } from '../../../style/main_style'
import { InputS } from '../../../style/main_style'

export const StyleWindown = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(22, 22, 22, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  .modal_editar {
    height: max-content;
    max-width: 550px;
    width: 95%;
    background-color: ${Color.black};
    border-radius: 25px;
    position: relative;
    padding: 50px 40px 40px 40px;

    .container_input {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      ${ButtonStyle} {
        margin-top: 16px;
      }
    }
  }

  .modal_posts {
    height: max-content;
    max-width: 550px;
    width: 95%;
    background-color: ${Color.black};
    border-radius: 25px;
    position: relative;
    padding: 50px 40px 40px 40px;

    @media (max-width: 1080px) {
      max-width: 100%;
      width: 95%;
      padding: 40px 20px 30px 20px;
    }

    &_fechar {
      position: absolute;
      left: 20px;
      top: 20px;
      cursor: pointer;
    }

    .container_input {
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      ${InputS} {
        background-color: white;
      }
      textarea {
        width: 100%;
        height: 150px;
        resize: none;
        border-color: ${Color.gray};
        font-size: 16px;
        font-weight: 400;
        padding: 8px 8px;
      }
    }
  }

  .modal_login {
    height: max-content;
    max-width: 550px;
    width: 95%;
    background-color: ${Color.black};
    border-radius: 25px;
    position: relative;
    padding: 20px 80px 40px 80px;

    @media (max-width: 650px) {
      height: 100vh;
      max-width: 100%;
      width: 100%;
      padding: 0px 20px;
    }

    &_fechar {
      position: absolute;
      left: 20px;
      top: 20px;
      cursor: pointer;
    }

    &_link {
      margin-top: 20px;
      width: 100%;
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &_form {
      margin-top: 40px;

      .container_input {
        padding: 44px 0px;
        display: flex;
        flex-direction: column;
        gap: 28px;
      }
    }

    &_logo {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        height: 40px;
        margin-top: 10px;
      }
    }
  }
`
