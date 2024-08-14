import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  //get access to query client instance
  const queryClient = useQueryClient();

  //mutation for delete cabin from supabase(firestore), mutate is calling mutationFn
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    //make cache inactive after mutation, to refresh page
    onSuccess: () => {
      toast.success('Cabin succesfully deleted');
      //making query stale
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
