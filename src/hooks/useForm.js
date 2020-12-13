import{ useContext } from "react";
import { FormContext } from '../contexts/form'

export default function useForm() {
  const context = useContext(FormContext);
  return context;
}
