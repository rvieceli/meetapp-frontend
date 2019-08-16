import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('Seu e-mail é obrigatório.'),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  async function handleSubmit({ email }) {
    setLoading(true);
    try {
      const response = await api.post('/reset', {
        email,
        endpoint: `http://127.0.0.1:3000/password/reset`,
      });

      setMessage(response.data.message);
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false);
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />

      {message ? (
        <div>
          <p>{message}</p>
          <Link to="/">Lembrei a minha senha</Link>
          <Link to="/register">Criar uma conta grátis</Link>
        </div>
      ) : (
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Seu e-mail" />

          <button type="submit">
            {loading ? <FaSpinner size={20} color="#fff" /> : 'Recuperar'}
          </button>
          {error && <span>{error}</span>}
          <Link to="/">Lembrei a minha senha</Link>
          <Link to="/register">Criar uma conta grátis</Link>
        </Form>
      )}
    </>
  );
}
