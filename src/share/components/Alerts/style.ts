import styled from 'styled-components'
import { Color } from '../../style/main_style'

export const StyleAlerts = styled.div`
  position: fixed;
  top: 79px;
  right: 8px;
  background-color: ${Color.black};
  height: 86px;
  width: 250px;
  z-index: 2000;
  border-radius: 10px;
  box-shadow: 0px 0px 25px 8px rgba(0, 0, 0, 0.8);
  border: solid 3px ${Color.blue};
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  .span {
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: ${Color.white};
    animation: diminuir 4s;

    @keyframes diminuir {
      0% {
        width: 100%;
      }

      100% {
        width: 0%;
      }
    }
  }
`
