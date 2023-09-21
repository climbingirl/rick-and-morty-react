import { bindActionCreators } from 'redux';
import { useAppDispatch } from './useAppDispatch';
import { rootActions } from '../rootActions';

export function useActions() {
  const dispatch = useAppDispatch();
  return bindActionCreators(rootActions, dispatch);
}
