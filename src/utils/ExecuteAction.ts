
import { toast } from 'react-toastify';

interface AsyncActionParams<T> {
  asyncFunction: () => Promise<T>;
  successAction: (response: T) => void;
  errorAction?: (error: any) => void;
  finalAction?: () => void;
}

export const executeAsyncAction = async <T> ({
  asyncFunction,
  successAction,
  errorAction,
  finalAction
}: AsyncActionParams<T>) => {
  try {
    const response = await asyncFunction();
    successAction(response);
  } catch (error: any) {
    if (errorAction) {
      errorAction(error);
    } else {
      toast.error(error.response?.data || 'A ocurrido un error!');
    }
  } finally {
    if (finalAction) {
      finalAction();
    }
  }
};
