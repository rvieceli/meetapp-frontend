import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('Seu e-mail é obrigatório.'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres 🙄')
    .required('A senha é obrigatória.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas estão diferentes 🤔'
  ),
});

export default function ResetPassword({ match }) {
  const { token } = match.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState();

  async function handleSubmit({ email, password, confirmPassword }) {
    setLoading(true);
    try {
      const response = await api.put(`/reset/${token}`, {
        email,
        password,
        confirmPassword,
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
          <Link to="/">Fazer login agora</Link>
        </div>
      ) : (
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Seu e-mail" />
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

          <button type="submit">
            {loading ? (
              <FaSpinner size={20} color="#fff" />
            ) : (
              'Alterar minha senha'
            )}
          </button>
          {error && <span>{error}</span>}
        </Form>
      )}
    </>
  );
}

ResetPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
