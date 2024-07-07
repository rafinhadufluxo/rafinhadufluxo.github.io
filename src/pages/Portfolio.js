import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  const fetchRepos = async (page) => {
    try {
      const response = await axios.get(`https://api.github.com/users/rafinhadufluxo/repos?sort=updated&page=${page}&per_page=100`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllRepos = async () => {
      let page = 1;
      let allRepos = [];
      let newRepos = [];

      do {
        newRepos = await fetchRepos(page);
        allRepos = [...allRepos, ...newRepos];
        page++;
      } while (newRepos.length > 0);

      const filteredRepos = allRepos.filter(repo => !repo.fork);
      setRepos(filteredRepos);
    };

    fetchAllRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(repos.length / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="about">
     {/*  <p>Meu portfólio do GitHub é um espaço onde compartilho conhecimentos valiosos e exponho meus trabalhos acadêmicos e projetos de pesquisa em desenvolvimento de software. Aqui, você encontrará uma coleção dos meus projetos, artigos e tutoriais, todos focados em aprimorar e disseminar práticas inovadoras na engenharia de software. Meu objetivo é inspirar e colaborar com outras pessoas apaixonadas por tecnologia.</p> */}
      <p>On GitHub I present my academic efforts and research projects in software development, where I share valuable knowledge. It features a compilation of projects, articles, and tutorials I authored to improve and promote innovative practices in software engineering. My aspiration is to inspire other technology enthusiasts and collaborate with them</p>
      <div className="projects-grid">
        {currentRepos.map((repo, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{repo.name}</h2>
            <p className="project-description">{repo.description}</p>
            <div className="repo-info">
              <p>
                <i className="fas fa-star"></i> {repo.stargazers_count} &nbsp;
                <i className="fas fa-code-branch"></i> {repo.forks_count} &nbsp;
                <i className="fas fa-eye"></i> {repo.watchers_count}
              </p>
            </div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver Projeto no GitHub
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`page-button ${number === currentPage ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
