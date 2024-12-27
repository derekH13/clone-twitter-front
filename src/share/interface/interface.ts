export type Text = {
  size: number
  color: string
  weight: number
  lineH?: number
}

export type PropsButton = {
  color: string
  backColor: string
  border: boolean
  weight?: number
  maxWidth?: string
}

export type UserProps = {
  id?: number
  username: string
  email: string
  password: string
}

export type Profile = {
  id?: number
  user: number
  bio: string
  avatar: string
  profile_connections?: []
}

export type PostPorps = {
  post_id?: number
  post_title: string
  post_description: string
  post_img: string
  user_id: number
}
