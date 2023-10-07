import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers/combineReducer";
//for commiot
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;