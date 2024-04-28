import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { ListPersonnelResponseInterface } from "./types";

interface Props {
  page: number;
  limit: number;
  pangkat?: number;
  jabatan?: number;
}

const useGetPersonnel = ({ page, limit, pangkat, jabatan }: Props) => {
  const {
    data: listPersonnel,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/personil?page=${page}`,
    async (): Promise<ListPersonnelResponseInterface> => {
      const response = await axiosClient.get("/personil", {
        params: {
          page,
          limit,
          pangkat,
          jabatan,
        },
      });
      return response.data;
    }
  );

  return { loading, listPersonnel, mutate };
};

export default useGetPersonnel;