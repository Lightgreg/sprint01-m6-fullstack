import { createContext, useEffect, useState } from "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../services/api";
import { FieldErrors, FieldErrorsImpl, FieldValues, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { iContacte, iContacteContext, iProviderProps } from "../interfaces/interfaces";
import { contacteSchema } from "../schemas/schemas";

export const ContacteContext = createContext<iContacteContext>(
  {} as iContacteContext
);

export function ContacteProvider({ children }: iProviderProps){

  const { register: registerContacte, handleSubmit: submitContacte, formState: { errors: contacteError } } = useForm<iContacte>({
    resolver: yupResolver(contacteSchema),
  });

  

  return (
    <ContacteContext.Provider value={({  })}>
      {children}
    </ContacteContext.Provider>
  )

}