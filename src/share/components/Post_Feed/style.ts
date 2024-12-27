import styled from 'styled-components'
import { Color, Texto } from '../../style/main_style'

export const PostStyle = styled.div`
  width: 100%;
  height: 520px;
  overflow: hidden;
  background-color: white;
  border: solid 1px gray;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 5px rgba(95, 95, 95, 0.26);

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    img {
      width: 100%;
      max-height: 330px;
      height: 100%;
      overflow-y: hidden;
      object-fit: cover;
      border-radius: 20px;
    }

    ${Texto} {
      max-width: 614px;
      overflow: hidden;
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
