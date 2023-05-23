import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import AcionCreators from '../store/action-creator/';

export const useActions = () => {
  const dispatch = useDispatch();
  console.log(AcionCreators)
  return bindActionCreators(AcionCreators, dispatch);
} 