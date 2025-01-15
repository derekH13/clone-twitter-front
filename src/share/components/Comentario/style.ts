import styled from 'styled-components'
import { Color } from '../../style/main_style'

export const ComentariosStyle = styled.div`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background-color: ${Color.post};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`
