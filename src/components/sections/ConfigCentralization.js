/* eslint-disable react/jsx-no-target-blank */
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
    title: 'Configurando a Centralização',
    paragraph: 'Essas são as configurações para ativar a centralização dos bancos de dados das unidades e a sincronização diária dos mesmos'
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
                  1. Configuração
                </div>
                <h3 className="mt-0 mb-12">
                  Configurando a zincronização
                </h3>
                <p className="m-0">
                  - Clique <strong><a href="https://drive.google.com/file/d/1vdlH-6467C87bD2r9QVsSfsYZWLKDQbi/view?usp=sharing" target="_blank">aqui</a></strong> para baixar o "<strong>System Scheduler</strong>" (<code>programa que configura e ativa o bat da sincronização dos bancos de dados das unidades</code>);
                </p>
                <p className="m-0">
                  - Ao finalizar o download, execute o arquivo "<strong>SystemScheduler</strong>", na tela que abrir, escolha o diretório da extração em "<strong>C:\digital\data</strong>" e clique no botão "<strong>Extract</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar a extração, acesse a pasta "<strong>C:\digital\data\SystemScheduler</strong>", execute e crie um atalho do executável "<strong>WScheduler.exe</strong>" (<code>selecione o executável e clique com o botão direito do mouse, em seguida clique na opção "<strong>Criar atalho</strong>"</code>);
                </p>
                <p className="m-0">
                  - Mova esse "Atalho" para a pasta "<strong>inicializar</strong>" do Windows.
                </p>
                <br/>
                <p className="m-0">
                  <strong>Obs:</strong> Para acessar a pasta "<strong>inicializar</strong>" do Windows. Na barra de endereço da pasta, digite "<strong>inicializar</strong>" e tecle "<strong>Enter</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2. Sistema
                </div>
                <h3 className="mt-0 mb-12">
                  Adicionando Marca
                </h3>
                <p className="m-0">
                  - Abra o SGA Portal, faça o login e em seguida no menu lateral clique na opção "<strong>Marcas</strong>";
                </p>
                <p className="m-0">
                  - Em seguida clique no botão "<strong>Adicionar Marca</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, digite a marca desejada e clique em "<strong>Salvar</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao02.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  3. Sistema
                </div>
                <h3 className="mt-0 mb-12">
                  Adicionando Unidade
                </h3>
                <p className="m-0">
                  - Abra o SGA Portal, no menu lateral clique na opção "<strong>Unidades</strong>";
                </p>
                <p className="m-0">
                  - Em seguida clique no botão "<strong>Adicionar Unidades</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, preenche os campos "<strong>Nome da Unidade</strong>", "<strong>Hostname ou IP</strong>" e "<strong>Marcas</strong>";
                </p>
                <p className="m-0">
                  - Em seguida clique em "<strong>Adicionar</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao03.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  3.1 Sistema
                </div>
                <h3 className="mt-0 mb-12">
                  Ativando Centralização Unidade
                </h3>
                <p className="m-0">
                  - Na página "<strong>Unidades</strong>";
                </p>
                <p className="m-0">
                  - Na unidade cadastrada anteriomente, clique no botão "<strong>Editar</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, clique no botão "<strong>Ativar centralização</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao04.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  4. SGA Administrativo
                </div>
                <h3 className="mt-0 mb-12">
                  Ativando SGA Portal
                </h3>
                <p className="m-0">
                  - Acesse a área "<strong>administrativa do SGA</strong>" da unidade que foi cadastrada no SGA Portal;
                </p>
                <p className="m-0">
                  - Acesse no menu superior a opção "<strong>Rede Local</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir no canto superior direito, clique no botão "<strong>Servidor de Ralatórios</strong>";
                </p>
                <p className="m-0">
                  - Clique no botão "<strong>Adicionar</strong>";
                </p>
                <p className="m-0">
                  - Preenche os campos "<strong>IP</strong>", "<strong>Terminal</strong>" e "<strong>Chave</strong>"<code>(O campo Chave é a chave que foi gerada no "<strong>SGA Portal</strong>", no cadastro dessa "<strong>unidade</strong>")</code>;
                </p>
                <p className="m-0">
                  - Em seguida clique em "<strong>Verificar IP</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao05.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  4.1 Ambiente SGA
                </div>
                <h3 className="mt-0 mb-12">
                  Configurando a zincronização
                </h3>
                <p className="m-0">
                  - Clique <strong><a href="https://drive.google.com/file/d/1Y2SxmJwyZe7Vg2ly4NKp_PcarxANDtrP/view?usp=sharing" target="_blank">aqui</a></strong> para fazer o download dos arquivos de importação das configurações de sincronização;
                </p>
                <p className="m-0">
                  - Ao finalizar o download, execute o arquivo "<strong>Events.exe</strong>" e clique em "<strong>Extract</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar a extração, acesse a pasta "<strong>Events</strong>" e copie os arquivos que contém nela;
                </p>
                <p className="m-0">
                  - Acesse a pasta "<strong>C:\digital\data\SystemScheduler\Events</strong>" e cole os arquivos copiados anteriomente.
                </p>
                <br/>
                <p className="m-0">
                  <strong>Obs:</strong> Se o "<strong>System Scheduler</strong>" não estiver instalado, clique <strong><a href="https://drive.google.com/file/d/1OJxF1LIPvB9F-kjHpG3YR7R278PgJ2Kw/view?usp=sharing" target="_blank">aqui</a></strong> para fazer o download;
                </p>
                <p className="m-0">
                  - Ao finalizar o download, execute o arquivo "<strong>SystemScheduler</strong>", na tela que abrir, escolha o diretório da extração em "<strong>C:\digital\data</strong>" e clique no botão "<strong>Extract</strong>";
                </p>
                <p className="m-0">
                  - Ao finalizar a extração, acesse a pasta "<strong>C:\digital\data\SystemScheduler</strong>", execute e crie um atalho do executável "<strong>WScheduler.exe</strong>" (<code>selecione o executável e clique com o botão direito do mouse, em seguida clique na opção "<strong>Criar atalho</strong>"</code>);
                </p>
                <p className="m-0">
                  - Mova esse "Atalho" para a pasta "<strong>inicializar</strong>" do Windows (<code>Para acessar a pasta "<strong>inicializar</strong>" do Windows. Na barra de endereço da pasta, digite "<strong>inicializar</strong>" e tecle "<strong>Enter</strong>"</code>).
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao06.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  5. Banco de dados SGA
                </div>
                <h3 className="mt-0 mb-12">
                  Exportando Banco de Dados SGA
                </h3>
                <p className="m-0">
                  - Acesse o "<strong>PhpMyAdmin</strong>" do "<strong>SGA</strong>";
                </p>
                <p className="m-0">
                  - No menu superior, clique no botão "<strong>Exportar</strong>";
                </p>
                <p className="m-0">
                  - Em seguida clique em "<strong>Personalizado</strong>";
                </p>
                <p className="m-0">
                  - Depois selecione o banco de dados "<strong>SGA</strong>";
                </p>
                <p className="m-0">
                  - Desmarque a opção "<strong>Add create TRIGGER statement</strong>";
                </p>
                <p className="m-0">
                  - Logo em seguida clique em "<strong>Executar</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao07.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  6. SGA Portal
                </div>
                <h3 className="mt-0 mb-12">
                  Importando Banco de Dados no SGA Portal
                </h3>
                <p className="m-0">
                  - Abra o SGA Portal, no menu lateral clique na opção "<strong>Unidades</strong>";
                </p>
                <p className="m-0">
                  - Na unidade configurada anteriomente, clique no botão "<strong>Editar</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, clique no campo "<strong>Importar Banco de Dados</strong>";
                </p>
                <p className="m-0">
                  - Na tela que abrir, selecione o "<strong>Banco de Dados</strong>" que exportamos dessa "<strong>Unidade</strong>" anteriormente;
                </p>
                <p className="m-0">
                  - Aguarde a finalização da importação e faça o mesmo processo com as demais unidades <code>(Caso precise cadastrar mais unidades)</code>.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/centralizacao08.png')}
                  alt="Features split 01"
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