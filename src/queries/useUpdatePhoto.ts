import { useMutation } from 'react-query'
import { BACKEND_URL } from '../backend_url'
import { useUserContext } from '../contexts/User/useUserContext'

export const useUpdatePhoto = () => {
  const { token } = useUserContext()
  return useMutation<unknown, unknown, string>((photo) =>
    fetch(`${BACKEND_URL}/user/photo`, {
      method: 'put',
      headers: {
        Authorization: token as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photo }),
    }).then((res) => {
      if (!res.ok) throw new Error()
      return res
    })
  )
}
