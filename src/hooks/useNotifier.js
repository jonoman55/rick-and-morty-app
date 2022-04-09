import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

export const useNotifier = () => {
    const { enqueueSnackbar } = useSnackbar();

    const notify = useCallback((message, variant) => {
        enqueueSnackbar(message, {
            variant: variant
        });
    }, [enqueueSnackbar]);

    return notify;
};