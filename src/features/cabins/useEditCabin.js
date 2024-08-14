import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  //get access to query
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      //making query stale
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: err => toast.error(err.message),
  });

  return { editCabin, isEditing };
}
