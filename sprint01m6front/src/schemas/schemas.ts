import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatorio'),
  email: yup.string().required('Email é obrigatorio'),
  password: yup.string().required('Senha é obrigatorio').min(6, 'Senha no minimo de 6 caracteres'),
  phone: yup.string().required('Telefone é obrigatorio'),
})

export const editUserSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired().min(6, 'Senha no minimo de 6 caracteres'),
  phone: yup.string().notRequired(),
})

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatorio'),
  password: yup.string().required('Senha é obrigatorio')
});

export const contacteSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatorio'),
  email: yup.string().required('Email é obrigatorio'),
  phone: yup.string().required('Numero é obrigatorio'),
})

export const editContacteSchema = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  phone: yup.string().notRequired(),
})