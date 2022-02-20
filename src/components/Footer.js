import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    const infoFooter = (
      <p>
        Desenvolvido por &nbsp;
        <a href="https://github.com/phvleite" target="_blank" rel="noreferrer"><em>Paulo Henrique Vieira Leite</em></a>
        &nbsp;, estudante de Desenvolvimento Web Full Stack na &nbsp;
        <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer"><em>Trybe</em></a>
      </p>
    );

    return (
      <footer className="box-footer-solar-system">
        {infoFooter}
      </footer>
    );
  }
}

export default Footer;
