import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers/combineReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;