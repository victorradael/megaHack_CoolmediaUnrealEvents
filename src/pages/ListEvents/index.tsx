import React from 'react';
import { FiSearch } from 'react-icons/fi';

import imgEx from '../../images/imgex.jpg';

import TopBar from '../../components/TopBar';
import Input from '../../components/Input';

import { SearchBar, Container, List, Card } from './styles';

export const ListEvents: React.FC = () => (
  <>
    <TopBar />
    <SearchBar>
      <h3>Qual tipo de evento voce procura?</h3>

      <Input name="search" icon={FiSearch} placeholder="Digite o que procura" />
      <Container>
        <select>
          <option value="Mais Popular">Mais Popular</option>
          <option value="Melhor Avaliado">Melhor Avaliado</option>
          <option value="Mais Recente">Mais Recente</option>
          <option value="Preco">Preco</option>
        </select>
      </Container>
    </SearchBar>
    <List>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
      <Card>
        <img src={imgEx} alt="" />
        <div>
          <h1>Nome do Evento</h1>
          <p>
            Descricao do evento, que contem informacoes a respeito do conteudo
            do evento.
          </p>
          <h4>
            Horario: <span>19:00 Horas</span>
          </h4>
          <h5>
            Valor: <span>Gratis</span>
          </h5>
          <div>
            <a href="/eventPage">Ver mais</a>
          </div>
        </div>
      </Card>
    </List>
  </>
);

export default ListEvents;
