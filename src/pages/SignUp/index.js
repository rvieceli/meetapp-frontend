import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres 🙄')
    .required('A senha é obrigatória.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas estão diferentes 🤔'
  ),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Seu nome completo" />
        <Input type="email" name="email" placeholder="Seu e-mail principal" />
        <Input
          type="password"
          name="password"
          placeholder="Informe uma senha secreta"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha secreta"
        />
        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
