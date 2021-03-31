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
                  - E dentro da pasta "<strong>digital</strong>" cria outra pasta com o nome "<strong>data</strong>";
                </p>
                <p className="m-0">
                  - Depois que finalizar o download do executável "<strong>PortalSGA</strong>", mova-o para dentro da pasta "<strong>C:\digital\data</strong>", que acabamos de criar.
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
                  - Dentro da pasta "<strong>C:\digital\data</strong>";
                </p>
                <p className="m-0">
                  - Execute o arquivo "<strong>PortalSGA</strong>". Se aparecer uma chanela da "<strong>Microsoft defender</strong>", clique em "<strong>Mais informações</strong>" e clique no botão "<strong>Executar assim mesmo</strong>";
                </p>
                <p className="m-0">
                  - Na chanela que abrir, clique no botão "<strong>Extract</strong>" e aguarde a finalização.
                </p>
                {/* <p className="m-0">
                  - Ao finalizar a extração, altere o nome da pasta "<strong>PortalSGA</strong>" para "<strong>data</strong>".
                </p> */}
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
                  Instalando EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>";
                </p>
                <p className="m-0">
                  - Execute o arquivo "<strong>EasyPHP-Devserver-17.0-setup.exe</strong>", na tela que abrir escolha a linguagem;
                </p>
                <p className="m-0">
                  - Na tela seguinte, troca o local de instalação para "<strong>C:\digital\data\</strong>";
                </p>
                <p className="m-0">
                  - Depois que escolher o caminho da instalação, vai seguindo as próximas etapas até finalizar a instalação do EasyPHP-Devserver-17.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias11.png')}
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
                  Fechando o EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Se você não "<strong>desmarcou</strong>" a opção de iniciar o EasyPHP-Devserver-17 no final da instalação;
                </p>
                <p className="m-0">
                  - Na barra de tarefas, clique com botão direito do mouse sobre o ícone do EasyPHP-Devserver-17;
                </p>
                <p className="m-0">
                  - No menu que abrir, clique no botão "<strong>Exit</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias12.png')}
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
                  Alterando pasta data do EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>" e copie a pasta "<strong>data</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-binaries\dbserver\mysql5717x86x[<i>números que está na sua pasta</i>]</strong>" apague pasta "<strong>data</strong>" e "<strong>cole</strong>" a pasta "<strong>data</strong>" que copiamos anteriomente.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias13.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.5 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Alterando pasta eds-www do EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>" e copie a pasta "<strong>eds-www</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17</strong>" apague pasta "<strong>eds-www</strong>" e "<strong>cole</strong>" a pasta "<strong>eds-www</strong>" que copiamos anteriomente.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias14.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.6 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Alterando o arquivo eds.ini do EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>" e copie o arquivo "<strong>eds.ini</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17</strong>" e substitua o arquivo "<strong>eds.ini</strong>" no destino.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias15.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.7 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Alterando o arquivo httpd.conf do EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>" e copie o arquivo "<strong>httpd.conf</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-binaries\httpdserver\apache2425vc11x86x[<i>números que está na sua pasta</i>]\conf</strong>" e substitua o arquivo "<strong>httpd.conf</strong>" no destino.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias16.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2.8 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Alterando o arquivo php.ini do EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\PortalSGA</strong>" e copie o arquivo "<strong>php.ini</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-binaries\php\php5630vc11x86x[<i>números que está na sua pasta</i>]</strong>" e substitua o arquivo "<strong>php.ini</strong>" no destino.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias17.png')}
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
                  4. Ambiente
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
                  - Na tela que abrir, no menu lateral clique no botão "<strong>Novo</strong>", no campo que abrir, cole este caminho da pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-binaries\php\php5630vc11x86x[<i>números que está na sua pasta</i>]</strong>", e em seguida clique em "<strong>Ok</strong>" até fecha todas as telas.
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
                  5. Ambiente
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
                  6. Ambiente
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

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  6.1 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Executando Socket
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>";
                </p>
                <p className="m-0">
                  - Execute o bat "<strong>service.bat</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar, abra o "<strong>CMD</strong>" e execute o comando "<strong>pm2 list</strong>";
                </p>
                <p className="m-0">
                  - Se listar "<strong>Socket</strong>" com o status "<strong>online</strong>", o socket foi inializado com sucesso;
                </p>
                <p className="m-0">
                  - Todas as vezes que iniciar o PC, o socket já vai inicializar automaticamente.
                </p><br/>
                <p className="m-0">
                  <strong>Obs:</strong> Se a "<strong>Socket</strong>" não for listada ao executar o comando "<strong>pm2 list</strong>" no "<strong>CMD</strong>", vai até o modulo "Erros mais comuns".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias10.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  7. Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Iniciando o EasyPHP-Devserver-17
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17</strong>";
                </p>
                <p className="m-0">
                  - Execute o arquivo "<strong>run-devserver.exe</strong>";
                </p>
                <p className="m-0">
                  - Quando "<strong>Devserver</strong>" é iniciado, um ícone aparece na Área de Notificação (ao lado do relógio) - se você não vê o ícone, clique em "<strong>Show hidden iconse</strong>" mova o ícone ao lado do relógio;
                </p>
                <p className="m-0">
                  - Clique com o botão direito / esquerdo do mouse, vai abrir o menu do "<strong>Devserver</strong>";
                </p>
                <p className="m-0">
                  - Clique em "<strong>Open Dashboard</strong>" e vai abrir o "<strong>Dashboard</strong>" do EasyPHP-Devserver-17.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias18.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  7.1 Ambiente
                </div>
                <h3 className="mt-0 mb-12">
                  Configurando o Apache
                </h3>
                <p className="m-0">
                  - No "<strong>Dashboard</strong>" do EasyPHP-Devserver-17 (que abrimos no passo anterior);
                </p>
                <p className="m-0">
                  - Clique no segundo botão (que tem o ícone de uma engrenagem) do "<strong>HTTP SERVER</strong>";
                </p>
                <p className="m-0">
                  - No <i>select</i> do "<strong>PHP version</strong>" deixa selecionado a versão "<strong>5.6.30 x86</strong>";
                </p>
                <p className="m-0">
                  - Já no <i>select</i> da "<strong>Port</strong>", seleciona a porta "<strong>8000</strong>";
                </p>
                <p className="m-0">
                  - Por fim, clique em "<strong>Start</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/dependencias19.png')}
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