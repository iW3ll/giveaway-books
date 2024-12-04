import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import hpcsecret from '../../assets/hpcsecret.png'


export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
        
                <article>
                    <img src={livro} alt="imagem de um livro que se chama o protagonista" />
                    
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    
                </article>
                <article>
                    <img src={hpcsecret} alt="imagem de um livro que se chama harry potter e a camera secreta" />
                    
                    <h3>Harry Potter e a Câmera Secreta</h3>
                    <p>J. K. Rowling</p>
                    <p>Aventura</p>
                    
                </article>
            </section>
        </section>
    )
}