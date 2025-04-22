import { useState } from 'react';
import S from './queroDoar.module.scss';
import livro from '../../assets/Vector.png';

export default function QueroDoar() {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    autor: '',
    imagem_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('https://api-livros-vnw-old.onrender.com/doar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao doar livro');
      }

      setMessage('Livro doado com sucesso!');
      // Limpa o formulário após sucesso
      setFormData({
        titulo: '',
        categoria: '',
        autor: '',
        imagem_url: ''
      });
    } catch (error) {
      setMessage(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <img src={livro} alt="icone de um livro" />
            <h3>Informações do Livro</h3>
          </div>
          
          <input
            type="text"
            name="titulo"
            placeholder='Titulo'
            value={formData.titulo}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="categoria"
            placeholder='Categoria'
            value={formData.categoria}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="autor"
            placeholder='Autor'
            value={formData.autor}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="imagem_url"
            placeholder='Link da Imagem'
            value={formData.imagem_url}
            onChange={handleChange}
            required
          />
          
          <input
            type="submit"
            value={loading ? 'Enviando...' : 'Doar'}
            disabled={loading}
          />
          
          {message && <p className={S.message}>{message}</p>}
        </form>
      </section>
    </section>
  );
}