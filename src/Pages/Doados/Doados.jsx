import { useEffect, useState } from 'react';
import S from './doados.module.scss';
import { getLivros } from '../../services/api';
import livroPadrao from '../../assets/livro.png';

export default function Doados() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLivros = async () => {
      try {
        const livrosApi = await getLivros();
        setLivros(livrosApi);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadLivros();
  }, []);

  if (loading) return <div>Carregando livros...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxcard}>
        {livros.map((livro) => (
          <article key={livro.id}>
            <img 
              src={livro.imagem_url || livroPadrao}
              alt={`Capa do livro ${livro.titulo}`}
            />
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <p>{livro.categoria}</p>
          </article>
        ))}
      </section>
    </section>
  );
}