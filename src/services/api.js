const API_BASE_URL = 'https://api-livros-vnw-old.onrender.com';

export const getLivros = async () => {
  const response = await fetch(`${API_BASE_URL}/livros`);
  if (!response.ok) {
    throw new Error('Erro ao buscar livros');
  }
  return await response.json();
};

export const doarLivro = async (livroData) => {
    const response = await fetch(`${API_BASE_URL}/doar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroData)
    });
    
    if (!response.ok) {
      throw new Error('Erro ao doar livro');
    }
    
    return await response.json();
  };