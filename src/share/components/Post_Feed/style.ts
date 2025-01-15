import styled from 'styled-components'
import { Color, Texto } from '../../style/main_style'

export const PostStyle = styled.div`
  width: 100%;
  min-height: 560px;
  overflow: hidden;
  background-color: white;
  border: solid 1px gray;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0px 0px 10px 5px rgba(95, 95, 95, 0.26);

  .comentarios {
    height: 200px;
    overflow-y: scroll;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1 {
      font-weight: 700;
      font-size: 20px;
    }

    .interacoes {
      display: flex;
      gap: 16px;
      padding-top: 8px;

      .curtir {
        position: relative;

        span {
          position: absolute;
          top: -10px;
          right: -10px;
          font-weight: 700;
          color: black;
          background-color: ${Color.blue};
          height: 20px;
          width: 20px;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-itens: center;
        }
      }

      svg {
        transition: 0.4s all ease;
      }

      svg:hover {
        transform: scale(0.95);
        cursor: pointer;
      }
    }

    img {
      width: 100%;
      max-height: 330px;
      min-height: 330px;
      height: 100%;
      overflow-y: hidden;
      object-fit: cover;
      border-radius: 10px;
    }

    ${Texto} {
      max-width: 614px;
      overflow: hidden;
      max-height: 40px;
    }
  }

  .conta {
    display: flex;
    gap: 16px;
    margin-bottom: 12px;

    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }
`
