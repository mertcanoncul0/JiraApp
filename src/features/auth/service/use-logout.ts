import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { client } from "@/lib/rpc"
import { InferRequestType, InferResponseType } from "hono"

type ResponseType = InferResponseType<(typeof client.api.auth.signout)["$post"]>

export const useLogout = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.signout["$post"]()

      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current"] })
    },
  })

  return mutation
}
