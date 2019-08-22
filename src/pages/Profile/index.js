import React from 'react';

import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <ProfileForm />
      <hr />
      <PasswordForm />
    </Container>
  );
}
