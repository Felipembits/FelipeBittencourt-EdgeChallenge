import "./assets/main.css";
import azionLogo from "./assets/azion.svg";
import aboutAzion from "./assets/aboutAzion.png";
import { useState } from "react";



function App() {
  function AccordionItem({ title, content }) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
      setIsActive(!isActive);
    };

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleActive}>
          <h2>{title}</h2>
          <div className="accordion-toggle">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <p className="accordion-content">{content}</p>}
      </div>
    );
  }
  function EdgeComputingPosition() {
    window.scrollTo(0, 0);
  }

  function AboutAzionPosition() {
    window.scrollTo(0, 1619);
  }
  function NavigationBar() {
    return (
      <nav className="navbar">
        <a
          href="https://www.azion.com/pt-br/"
          target="_blank"
          class="azionLogo"
        >
          <img src={azionLogo} width="100" height="24" />
        </a>
        <ul>
          <li>
            <a class="navScroll" onClick={EdgeComputingPosition} href="#EdgeComputing">
              Edge Computing
            </a>
          </li>
          <li>
            <a class="navScroll" onClick={AboutAzionPosition} href="#aboutAzion">
              About Azion
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <section class="allApp">
      <NavigationBar />
      <section class="principalPart">
        <div class="description">
          <h1>Edge Computing</h1>
          <h3>
            Edge Computing, a catalyst for progress! Em um mundo cada vez mais
            conectado, essa tecnologia é a trilha que nos levará ao futuro da
            eficiência e segurança. Reduza a latência, aumente a disponibilidade
            e conquiste o desempenho máximo. Seja a diferença, abrace o Edge
            Computing e transforme desafios em oportunidades!
          </h3>
        </div>
        <div class="content">
          <div>
            <AccordionItem
              title="Menor Custo de Transmissão de Dados"
              content="Minimiza a sobrecarga das redes e reduz custos associados à transferência de dados para a nuvem central."
            />
            <AccordionItem
              title="Maior Disponibilidade"
              content="Aumenta a disponibilidade de serviços e aplicações, mesmo em ambientes com conexões instáveis."
            />
            <AccordionItem
              title="Descentralização de Carga de Servidores"
              content="Distribui a carga de servidores, evitando sobrecarga em data centers centralizados."
            />
          </div>
        </div>
      </section>
      <div class="base">
        <a target="_blank">
          <h1>Redução de Latência </h1>
          <p>
            Processamento próximo ao local de geração de dados resulta em
            respostas mais rápidas e eficazes.
          </p>
        </a>
        <a target="_blank">
          <div>
            <h1>Maior Desempenho</h1>
            <p>
              Melhora significativa no processamento de dados, especialmente
              para tarefas complexas e dispositivos avançados.
            </p>
          </div>
        </a>
        <a target="_blank">
          <div>
            <h1>Maior Segurança</h1>
            <p>
              Funciona como uma camada adicional de proteção, limitando ameaças
              à nuvem central e mantendo o desempenho.
            </p>
          </div>
        </a>
      </div>
      <div class="aboutAzion">
      <div class="textAboutAzion">
          <h3>
          A plataforma de Edge da Azion oferece soluções para desenvolvedores e provedores de serviços, incluindo aplicações serverless, segurança zero-trust, otimização da entrega de conteúdo, IoT e virtualização de infraestruturas de edge. Isso resulta em melhorias de desempenho e segurança, além de economia de mais de 70% em relação a soluções legadas.
          </h3>
        </div>
        <img src={aboutAzion} class="aboutAzionImage" />
      </div>
      <footer> 
      <div class="background">
            <ul class="social-media-buttons">
                <li>
                    <a href="https://www.instagram.com/felipembits/" target="_parent" title="Instagram">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/FelipemBits" target="_parent" title="Twitter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                                    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5
                                    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                            >
                            </path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/felipe-martins-bittencourt-613362273/" target="_parent" title="Linkedin">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        >
                             <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 
                                      2v7h-4v-7a6 6 0 0 1 6-6z" 
                             />
                             <rect x="2" y="9" width="4" height="12"/>#
                             <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        </footer>
    </section>
  );
}

export default App;
