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
    title: 'Atualizando o Sistema',
    paragraph: 'Essas são as etapas para a atualização do SGA Portal'
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
                  1. Backup
                </div>
                <h3 className="mt-0 mb-12">
                  Salvando configurações
                </h3>
                <p className="m-0">
                  - Abra o "<strong>CMD</strong>" e execute o comando "<strong>pm2 stop all</strong>";
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>";
                </p>
                <p className="m-0">
                  - Salva o arquivo "<strong>url_api_relatorios.json</strong>" em outra pasta.
                </p>
                <br/>
                <p className="m-0">
                  <strong>Obs:</strong> De preferência, salve o arquivo na pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\CONFIGURACOES</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/doc02.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  2. Salvando Arquivos
                </div>
                <h3 className="mt-0 mb-12">
                  Salvando arquivos da atualização
                </h3>
                <p className="m-0">
                  - No início da página, clique no botão "<strong>Download Arquivos</strong>", para baixar o executável do SGA Portal;
                </p>
                <p className="m-0">
                  - Ao finalizar o download, execute o arquivo "<strong>PortalSGA</strong>";
                </p>
                <p className="m-0">
                  - Na chanela que abrir, clique no botão "<strong>Extract</strong>" e aguarde a finalização.
                </p>
                <br/>
                <p className="m-0">
                  <strong>Obs:</strong> Se aparecer uma chanela da "<strong>Microsoft defender</strong>", clique em "<strong>Mais informações</strong>" e clique no botão "<strong>Executar assim mesmo</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/doc01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  3. Substituindo Arquivos
                </div>
                <h3 className="mt-0 mb-12">
                  Substituindo arquivos da atualização
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www</strong>" e altere o nome ou remova os arquivos "<strong>portal</strong>", "<strong>api</strong>" e "<strong>api_relatorios</strong>";
                </p>
                <p className="m-0">
                  - Copie os arquivos "<strong>portal</strong>", "<strong>api</strong>" e "<strong>api_relatorios</strong>" que foi baixado anteriormente;
                </p>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www</strong>" e cole todos dentro desta pasta.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/doc03.png')}
                  alt="Features split 01"
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
                  5. Backup
                </div>
                <h3 className="mt-0 mb-12">
                  Restaurando Backup
                </h3>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\CONFIGURACOES</strong>";
                </p>
                <p className="m-0">
                  - Copie o arquivo "<strong>url_api_relatorios.json</strong>";
                </p>
                <p className="m-0">
                  - Cole na pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>".
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/doc02.png')}
                  alt="Features split 01"
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
                  Iniciando API
                </h3>
                <p className="m-0">
                  - Abra o terminal "<strong>Node.js command prompt</strong>";
                </p>
                <p className="m-0">
                  - Execute o seguinte comando "<strong>pm2 start all</strong>";
                </p>
                <p className="m-0">
                  - O portal está atualizado.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/doc04.png')}
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