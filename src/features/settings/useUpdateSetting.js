import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateSetting as updateSettingApi } from '../../services/apiSettings';

export function useUpdateSetting() {
  //get access to query
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully edited');
      //making query stale
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: err => toast.error(err.message),
  });

  return { updateSetting, isUpdating };
}
