import { FormEvent, useEffect, useState } from 'react'
import Util from '../../../Util/Requisicao'

type props = {
  isCurtido: boolean
  funcIsCurtido: () => void
  curtirPost: (e: FormEvent) => void
  id: number
}

export const CurtidaNoPost = ({
  isCurtido,
  id,
  funcIsCurtido,
  curtirPost
}: props) => {
  const [numCurtidas, setNumCurtidas] = useState<null | number>(null)

  function carregandoCurtida() {
    console.log('dddddddddddddddddddddddddddddddddddddd')
    Util.all_curtidas(id).then((data) => {
      if (data.length > 0) {
        setNumCurtidas(data.length)
      }
    })
  }

  useEffect(() => {
    carregandoCurtida()
  }, [])

  return (
    <div
      onClick={() => {
        funcIsCurtido()
        carregandoCurtida()
      }}
      className="curtir"
    >
      {numCurtidas && <span>{numCurtidas}</span>}
      {!isCurtido ? (
        <svg
          onClick={(e) => curtirPost(e)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="red"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
      )}
    </div>
  )
}
