import styled from 'styled-components'
import { InputS } from '../../style/main_style'

export const StyleCreatecoment = styled.form`
  width: 100%;
  margin-top: 8px;
  display: flex;
  gap: 4px;

  ${InputS} {
    height: 40px;
  }

  button {
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0;
    border: none;

    &:hover {
      transform: scale(0.95);
    }

    svg {
      width: 100%;
      height: 100%;
      transition: all 0.3s;

      &:hover {
        transform: scale(0.95);
        border-radius: 10px;
      }
    }
  }
`
