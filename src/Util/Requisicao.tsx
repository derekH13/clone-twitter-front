import axios from 'axios'
import { PostPorps, UserProps } from '../share/interface/interface'
import { Profile } from '../share/interface/interface'
import { comentarios } from '../share/components/Post_Feed/Post_Feed'

class Util {
  static async IsExiste(id: number): Promise<UserProps | null> {
    const url = `https://derek576.pythonanywhere.com/user/cadastro/${id}/` // URL da API

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('falha na requisição')
      }

      const data = response.json()
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static CreateUser = async (
    userData: UserProps
  ): Promise<UserProps | null> => {
    const url = 'https://derek576.pythonanywhere.com/user/cadastro/'

    try {
      const response = await axios.post<UserProps>(url, userData)
      console.log('Dados Recebidos:', response.data)
      return response.data // Retorna os dados do usuário criado
    } catch (error) {
      console.error('Erro na requisição:') // Exibe erro detalhado
      return null // Retorna null em caso de erro
    }
  }

  static async profilleAll(): Promise<Profile[] | null> {
    const url = 'https://derek576.pythonanywhere.com/user/profile/'

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('erro na requisição')
      }

      const result = await response.json()
      return result
    } catch (error) {
      return null
    }
  }

  static async UserProfile(id: number): Promise<Profile | null> {
    try {
      const response = await fetch(
        `https://derek576.pythonanywhere.com/user/profileUser/${id}/`
      )

      if (!response.ok) {
        throw new Error('falha na requisição')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static async get_username(username: string): Promise<UserProps | null> {
    try {
      const response = await fetch(
        `https://derek576.pythonanywhere.com/user/username/${username}/`
      )

      if (!response.ok) {
        throw new Error('falha na requisição')
      }

      const dados = response.json()
      return dados
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static followUser = async (userId: number) => {
    console.log(`Seguindo usuário com ID: ${userId}`)

    try {
      // Obtendo o token de autenticação
      const token = localStorage.getItem('accessToken')

      console.log(token)
      if (!token) {
        console.error('Token de autenticação não encontrado')
        return { success: false, message: 'Usuário não autenticado' }
      }

      // Enviando a requisição POST para o backend
      const response = await axios.post(
        `https://derek576.pythonanywhere.com/user/follow/${userId}/`, // Endpoint da API
        null, // O corpo da requisição pode ser omitido se vazio
        {
          headers: {
            Authorization: `Bearer ${token}` // Cabeçalho para autenticação
          }
        }
      )

      // Exibindo a mensagem de sucesso retornada pela API
      console.log('Sucesso:', response.data.message)
      return { success: true, message: response.data.message }
    } catch (error: any) {
      // Tratamento detalhado do erro
      if (error.response) {
        // Erros com resposta do servidor
        console.error(
          `Erro ${error.response.status}: ${
            error.response.data?.message || error.response.statusText
          }`
        )
        return {
          success: false,
          message: error.response.data?.message || 'Erro ao seguir o usuário'
        }
      } else if (error.request) {
        // Falha de comunicação com o servidor
        console.error('Erro na requisição:', error.request)
        return {
          success: false,
          message: 'Não foi possível se conectar ao servidor'
        }
      } else {
        // Erros na configuração da requisição
        console.error('Erro desconhecido:', error.message)
        return { success: false, message: 'Erro inesperado' }
      }
    }
  }

  static async buscarPosts(arg: []) {
    try {
      // Use Promise.all para executar todas as requisições em paralelo
      const requests = arg.map((num) =>
        fetch(`https://derek576.pythonanywhere.com/feed/postUser/${num}/`).then(
          (response) => {
            if (!response.ok) {
              throw new Error(`Falha na requisição para o número ${num}`)
            }
            return response.json()
          }
        )
      )

      // Aguarde todas as requisições serem concluídas
      const results = await Promise.all(requests)

      // Combine todos os resultados em um único array
      const agrPosts: PostPorps[] = results.flat()

      console.log('Posts encontrados:', agrPosts)
      return agrPosts
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
      return []
    }
  }

  static async MandarPost(data: PostPorps) {
    const url = 'https://derek576.pythonanywhere.com/feed/post/'

    try {
      axios.post(url, data)

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  static async EditarProfile(data: Profile, id: number) {
    const url = `https://derek576.pythonanywhere.com/user/profile/${id}/`

    try {
      axios.put(url, data)

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  static async all_curtidas(postId: number) {
    const url = `https://derek576.pythonanywhere.com/feed/postCurtidas/${postId}/`

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('falha na requisição')
      }
      const result = await response.json()
      return result
    } catch (err) {
      console.error(err)
      return false
    }
  }

  static CurtirPost = async (postId: number, profileId: number) => {
    console.log(postId, profileId)
    try {
      axios.post(
        `https://derek576.pythonanywhere.com/feed/postCurtir/${postId}/${profileId}/`
      )

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  static allComentarios = async (
    postId: number
  ): Promise<boolean | comentarios[]> => {
    const url = `https://derek576.pythonanywhere.com/feed/postComentarios/${postId}/`

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('falha na requisição')
      }
      const result = await response.json()
      return result
    } catch (err) {
      console.error(err)
      return false
    }
  }

  static getProfile = async (profileId: number): Promise<Profile | null> => {
    try {
      const response = await fetch(
        `https://derek576.pythonanywhere.com/user/profile/${profileId}/`
      )

      if (!response.ok) {
        throw new Error('falha na requisição')
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  static ComentarPost = async (
    postId: number,
    profileId: number,
    dataComent: string
  ) => {
    console.log(postId)

    if (!dataComent) {
      alert('Por favor, insira um comentário.')
      return
    }

    // Dados que serão enviados no corpo da requisição
    const data = new FormData()
    data.append('iteracao_comentario', dataComent)

    // Realiza a requisição POST
    fetch(
      `https://derek576.pythonanywhere.com/feed/postComentar/${postId}/${profileId}/`,
      {
        method: 'POST',
        body: data,
        headers: {}
      }
    )
  }
}

export default Util
