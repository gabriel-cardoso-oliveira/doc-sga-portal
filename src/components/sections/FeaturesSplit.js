import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Configurando o ambiente',
    paragraph: 'Se deparar com algum erro, verifique no modulo "Erros mais comuns" se esse erro já possui uma possível solução.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  1. Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Dependências
                </h3>
                <p className="m-0">
                  Para configurar o ambiente SGA Portal no Windows, iremos realizar 2 instalações principais:
                </p>
                <br/>
                <p className="m-0">
                  - Node.js 14 (LTS);
                </p>
                <p className="m-0">
                  - PM2
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  1.1 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Instalando o Node.js
                </h3>
                <p className="m-0">
                  - No início da página, clique no botão "<strong>Download Programas</strong>" para baixar o instalador do Node.js;
                </p>
                <p className="m-0">
                  - Na página que abrir, clique no link "<strong>node-v14.16.0-x64.msi</strong>" ou "<strong>node-v14.16.0-x86.msi</strong>"(conforme a versão do Windows);
                </p>
                <p className="m-0">
                  - Ao finalizar o download, execute o instalador e vai seguindo as próximas etapas até finalizar a instalação do Node.js.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  1.2 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Instalando do PM2
                </h3>
                <p className="m-0">
                  - Abra o terminal "<strong>Node.js command prompt</strong>";
                </p>
                <p className="m-0">
                  - Com o terminal aberto, execute o comando "<strong>npm install pm2 -g</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar execute este outro comando "<strong>npm install pm2-windows-startup -g</strong>";
                </p>
                <p className="m-0">
                  - Por fim ao finalizar execute o comando "<strong>pm2-startup install</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2. Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Baixando e Configurando Arquivos
                </h3>
                <p className="m-0">
                  - No início da página, clique no botão "<strong>Download Arquivos</strong>", para baixar o executável do SGA Portal;
                </p>
                <p className="m-0">
                  - No Explorador de Arquivos do Windows, acessa o caminho "<strong>C:\</strong>" e cria uma pasta com o nome "<strong>digital</strong>", caso não exista;
                </p>
                <p className="m-0">
                  - Depois que finalizar o download do executável "<strong>PortalSGA</strong>", mova-o para dentro da pasta "<strong>digital</strong>", que acabamos de criar (<strong>C:\digital</strong>).
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias04.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.1 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Instalando SGA Portal
                </h3>
                <p className="m-0">
                  - Dentro da pasta "<strong>C:\digital</strong>";
                </p>
                <p className="m-0">
                  - Execute o arquivo "<strong>PortalSGA</strong>". Se aparecer uma chanela da "<strong>Microsoft defender</strong>", clique em "<strong>Mais informações</strong>" e clique no botão "<strong>Executar assim mesmo</strong>";
                </p>
                <p className="m-0">
                  - Na chanela que abrir, clique no botão "<strong>Extract</strong>" e aguarde a finalização;
                </p>
                <p className="m-0">
                  - Ao finalizar a extração, altere o nome da pasta "<strong>PortalSGA</strong>" para "<strong>data</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias05.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.2 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Instalando Dependências da API
                </h3>
                <p className="m-0">
                  - Abra o terminal "<strong>Node.js command prompt</strong>";
                </p>
                <p className="m-0">
                  - Execute o comando "<strong>cd C:\digital\data\EasyPHP-Devserver-17\eds-www\api_relatorios</strong>" para acessar a pasta "<strong>api_relatorios</strong>";
                </p>
                <p className="m-0">
                  - Agora execute o seguinte comando "<strong>npm install</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias06.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.3 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Adicionando Variável de Ambiente
                </h3>
                <p className="m-0">
                  - Abra as configurações do Windows. No tela que abrir clique no menu "<strong>Sistema</strong>";
                </p>
                <p className="m-0">
                  - No menu lateral, clique na opção "<strong>Sobre</strong>", em seguida clique na opção "<strong>Configurações avançadas do sistema</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, clique no botão "<strong>Variáveis de Ambiente</strong>, em seguida vai abrir outra tela, no menu "<strong>Variáveis do sistema</strong>", procure pela variável "<strong>Path</strong>", selecionea e clique em editar;
                </p>
                <p className="m-0">
                  - Na tela que abrir, no menu lateral clique no botão "<strong>Novo</strong>", no campo que abrir, cole este caminho "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-binaries\php\php5630vc11x86x190503172401</strong>" (sem as aspas), e em seguida clique em "<strong>Ok</strong>" até fecha todas as telas.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias07.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.4 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Configurando IP da API
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>";
                </p>
                <p className="m-0">
                  - Edita o arquivo "<strong>url_api_relatorios.json</strong>";
                </p>
                <p className="m-0">
                  - Altere o endereço "<strong>127.0.0.1</strong>" para o endereço "<strong>IPv4</strong>" (o endereço IPv4 é obtido abrindo o CMD e executando o comando "<strong>ipconfig</strong>") e salve o arquivo.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias08.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  3. Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Executando API Node.js
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\bats</strong>";
                </p>
                <p className="m-0">
                  - Execute o bat "<strong>iniciar_api_node.bat</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar, abra o "<strong>CMD</strong>" e execute o comando "<strong>pm2 list</strong>";
                </p>
                <p className="m-0">
                  - Se listar "<strong>ApiNode</strong>" com o status "<strong>online</strong>", a API Node foi inializada com sucesso;
                </p>
                <p className="m-0">
                  - Todas as vezes que iniciar o PC, a API Node já vai inicializar automaticamente.
                </p><br/>
                <p className="m-0">
                  <strong>Obs:</strong> Se a "<strong>ApiNode</strong>" não for listada ao executar o comando "<strong>pm2 list</strong>" no "<strong>CMD</strong>", vai até o modulo "Erros mais comuns".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias09.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;