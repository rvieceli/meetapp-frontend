import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarPlus, FaChevronRight } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '../../services/api';
import { Container, Header, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às' h:mm'h'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <Link to="/meetup">
          <FaCalendarPlus />
          Novo Meetup
        </Link>
      </Header>

      {meetups.map(meetup => (
        <Meetup key={meetup.id}>
          <strong>{meetup.description}</strong>
          <div>
            <span>{meetup.dateFormatted}</span>
            <Link to={`/detail/${meetup.id}`}>
              <FaChevronRight />
            </Link>
          </div>
        </Meetup>
      ))}
    </Container>
  );
}
