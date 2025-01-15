import styled from 'styled-components'
import { Color } from '../../../style/main_style'

export const navBarStyle = styled.nav`
  width: 100%;
  height: max-content;
  padding: 15px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${Color.black};
  border-bottom: solid 1px ${Color.gray};
  z-index: 5000;

  .interface {
    max-width: 1080px;
    width: 100%;
    color: ${Color.white};
    font-size: 16px;
    font-weight: 600;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1080px) {
      width: 95%;
    }

    img {
      height: 40px;
      width: 40px;
      object-fit: cover;
    }

    .user_editar {
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;

      img {
        border-radius: 50%;
      }

      &:hover {
        color: ${Color.blue};
        cursor: pointer;
        transform: scale(0.98);
      }
    }
  }
`
