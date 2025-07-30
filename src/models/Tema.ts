import type Postagem from "./Postagem"

export default interface Tema {
  id: number
  descrcao: string
  postagem?: Postagem[] | null
}