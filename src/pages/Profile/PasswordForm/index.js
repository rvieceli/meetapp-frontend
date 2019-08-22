import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FaKey } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { Submit } from '../../../components/Button';

const schema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'A senha tem pelo menos 6 caracteres 🙄')
    .required('A senha atual é obrigatória.'),
  password: Yup.string()
    .min(6, 'A nova senha deve ter pelo menos 6 caracteres 🙄')
    .required('A nova senha é obrigatória.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas estão diferentes 🤔'
  ),
});

export default function PasswordForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    { oldPassword, password, confirmPassword },
    { resetForm }
  ) {
    setLoading(true);
    try {
      await api.put('users/password', {
        oldPassword,
        password,
        confirmPassword,
      });
      resetForm();
      toast.success('Senha atualizada com sucess!');
      setLoading(false);
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input type="password" name="oldPassword" placeholder="Senha atual" />
      <Input type="password" name="password" placeholder="Nova senha" />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmação da nova senha"
      />
      <Submit Icon={FaKey} isLoading={loading}>
        Alterar senha
      </Submit>
    </Form>
  );
}
