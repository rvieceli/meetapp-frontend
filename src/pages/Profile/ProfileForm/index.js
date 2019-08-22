import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { FaUserEdit } from 'react-icons/fa';
import api from '../../../services/api';
import { updateProfileSuccess } from '../../../store/modules/user/actions';

import { Submit } from '../../../components/Button';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
});

export default function ProfileForm() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ name, email }) {
    setLoading(true);
    try {
      const response = await api.put('users', {
        name,
        email,
      });

      dispatch(updateProfileSuccess(response.data));

      toast.success('Perfil atualizado com sucess!');
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.error);
      setLoading(false);
    }
  }

  return (
    <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Seu nome" />
      <Input type="email" name="email" placeholder="Seu email" />
      <Submit Icon={FaUserEdit} isLoading={loading}>
        Salvar perfil
      </Submit>
    </Form>
  );
}
