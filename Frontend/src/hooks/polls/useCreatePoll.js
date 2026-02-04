import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createPoll as createPollApi } from "../../services/apiPolls";
import { useAxiosPrivate } from "../axios/useAxiosPrivate";

export function useCreatePoll() {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosPrivate();

  const {
    mutateAsync: createPoll,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: () => createPollApi(axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries(["polls"]);

      toast.success("Poll created successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });

  return { createPoll, isLoading, isError, error };
}
