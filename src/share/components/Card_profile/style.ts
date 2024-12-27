import styled from 'styled-components'
import { Color } from '../../style/main_style'
import { Texto } from '../../style/main_style'
import { ButtonStyle } from '../../style/main_style'

export const CardStyle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: solid 1px ${Color.black};

  color: ${Color.white};

  .card_container_imagem {
    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .card_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      text-transform: uppercase;
    }

    ${Texto} {
      height: 53px;
      overflow: hidden;
    }

    ${ButtonStyle} {
      margin-top: 5px;
      border-color: ${Color.blue};
      height: 35px;
      transition: all 0.4s ease;

      &:hover {
        background-color: ${Color.blue};
        color: ${Color.black};
      }
    }
  }
`
