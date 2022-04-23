import { isRejectedWithValue } from '@reduxjs/toolkit'

import { useNotifier } from '../hooks/useNotifier';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
    const notify = useNotifier()
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
        console.warn('We got a rejected action!');
        notify(`Async error: ${action.error.data.message}`, 'warning');
    }
    return next(action);
};