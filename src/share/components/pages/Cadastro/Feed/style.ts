import styled from 'styled-components'
import { Color } from '../../../../style/main_style'

export const FeedStyle = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${Color.black};
  padding-top: 140px;
`
export const InterfaceFeed = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 330px;
  gap: 16px;

  .conatiner_post {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
`

export const PostStyle = styled.div`
  background-color: ${Color.blackFundo};
  min-height: 100vh;
  height: max-content;
  border-radius: 20px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1080px) {
    padding: 40px 10px;
    border-radius: 10px;
  }
`

export const conexao = styled.div`
  background-color: ${Color.blackFundo};
  min-height: 100vh;
  height: max-content;
  border-radius: 20px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const pesquisa = styled.div`
  background-color: ${Color.blackFundo};
  height: 150px;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`
