import styled from 'styled-components'
import { ButtonStyle, Color, Texto } from '../../style/main_style'

export const PesquiStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  height: max-content;

  div {
    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      border-radius: 50%;

      @media (max-width: 1080px) {
        height: 65px;
        width: 65px;
      }
    }
  }

  .content {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;

    ${Texto} {
      @media (max-width: 1080px) {
        font-size: 20px;
        font-weight: 500;
      }
    }

    ${ButtonStyle} {
      border-color: ${Color.black};
      font-size: 18px;
      font-weight: 600;
      border-color: transparent;
      transition: all 0.3s ease;

      &:hover {
        background-color: transparent;
        color: ${Color.blue};
        border-color: ${Color.blue};
      }
    }
  }
`
