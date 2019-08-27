import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash, FaCalendarDay, FaMapMarkerAlt } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { Button } from '../../components/Button';
import { Container, Header, Meetup, Confirmation } from './styles';

export default function Detail({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);

      setMeetup({
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' h:mm'h'",
          {
            locale: pt,
          }
        ),
      });
    }

    loadMeetup();
  }, [id]);

  async function handleDelete() {
    try {
      await api.delete(`meetups/${id}`);
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>
        <div>
          <Link className="button" to={`/meetup/${id}/edit`}>
            <FaPen />
            Editar
          </Link>
          <Button
            className="button"
            Icon={FaTrash}
            onClick={() =>
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <Confirmation>
                      <h2>Cancelar {meetup.title}?</h2>
                      <p>Você tem certeza que quer cancelar este evento?</p>
                      <div>
                        <button
                          type="button"
                          className="cancel"
                          onClick={onClose}
                        >
                          Ainda não
                        </button>
                        <button
                          type="button"
                          className="ok"
                          onClick={() => {
                            handleDelete();
                            onClose();
                          }}
                        >
                          Sim, cancele agora!
                        </button>
                      </div>
                    </Confirmation>
                  );
                },
              })
            }
          >
            Cancelar
          </Button>
        </div>
      </Header>

      <Meetup>
        <img src={meetup.banner && meetup.banner.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <div>
          <div>
            <FaCalendarDay />
            <span>{meetup.dateFormatted}</span>
          </div>
          <div>
            <FaMapMarkerAlt />
            <span>{meetup.location}</span>
          </div>
        </div>
      </Meetup>
    </Container>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
