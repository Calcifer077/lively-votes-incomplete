import { useQuery } from "@tanstack/react-query";
import { getPollsUserHaveVotedIn as getPollsUserHaveVotedInApi } from "../../services/apiUser";
import { useAxiosPrivate } from "../axios/useAxiosPrivate";

export function useGetPollsUserHaveVotedIn() {
  const axiosInstance = useAxiosPrivate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pollsUserHaveVotedIn"],
    queryFn: () => getPollsUserHaveVotedInApi(axiosInstance),
  });

  if (isLoading) {
    return { pollsUserHaveVotedIn: [], isLoading, isError, error };
  }

  const pollsUserHaveVotedIn = data.data;

  return { pollsUserHaveVotedIn, isLoading, isError, error };
}
