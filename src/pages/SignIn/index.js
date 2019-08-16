import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import history from '../../services/history';

import { signInSuccess } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'Sua senha tem pelo menos 6 caracteres 😉')
    .required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit({ email, password }) {
    setLoading(true);
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      dispatch(signInSuccess(token, user));

      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setError(err.response.data.error);
      setLoading(false);
    }
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? <FaSpinner size={20} color="#fff" /> : 'Entrar'}
        </button>
        {error && <span>{error}</span>}

        <Link to="/password/forgot">Esqueci a minha senha</Link>
        <Link to="/register">Criar uma conta grátis</Link>
      </Form>
    </>
  );
}
