import styled, { createGlobalStyle } from 'styled-components'
import { Text, PropsButton } from '../interface/interface'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lexend", sans-serif;
  }

  html{
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: "Lexend", sans-serif;
    color: #333;
    overflow-x: hidden;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Color = {
  white: 'rgb(236, 236, 236);',
  blue: 'rgb(29, 155, 240);',
  gray: 'rgb(83, 100, 113)',
  black: 'rgb(15, 15, 15)',
  blackFundo: 'rgb(51, 51, 51)',
  post: 'rgb(222, 225, 226)'
}

export const Texto = styled.h3<Text>`
  font-size: ${(Text) => (Text.size ? Text.size : '15')}px;
  font-weight: ${(Text) => (Text.weight ? Text.weight : '700')};
  color: ${(Text) => (Text.color ? Text.color : Color.white)};
  line-height: ${(Text) => (Text.lineH ? Text.lineH : '')};

  .azul {
    color: ${Color.blue};
  }
`

export const InputS = styled.input`
  border: none;
  border: 1px solid ${Color.gray};
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  color: ${Color.gray};
  border-radius: 5px;
  width: 100%;
  padding: 0px 8px;
  background-color: transparent;
`

export const ButtonStyle = styled.button<PropsButton>`
  height: 40px;
  border: none;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  color: ${(PropsButton) =>
    PropsButton.color ? PropsButton.color : Color.white};
  background-color: ${(PropsButton) =>
    PropsButton.backColor ? PropsButton.backColor : Color.white};
  border: ${(PropsButton) =>
    PropsButton.border ? `1px solid ${Color.gray}` : 'none'};
  font-weight: ${(PropsButton) =>
    PropsButton.weight ? PropsButton.weight : '400'};
  max-width: ${(PropsButton) =>
    PropsButton.maxWidth ? PropsButton.maxWidth : '300px'};

  svg {
    margin-right: 5px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
