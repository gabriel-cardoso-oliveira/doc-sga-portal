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
    title: 'Erros mais comuns',
    paragraph: 'Esses são os erros mais comuns encontrados e com as possíveis soluções.'
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
                  MSVCR110.dll ou MSVCP110.dll não foi encontrado
                </h3>
                <p className="m-0">
                  Esse erro acontece quando vai abrir o "<strong>EasyPHP-Devserver-17</strong>".
                </p>
                <br/>
                <p className="m-0">
                  - Ele acontece porque o "<strong>Visual C++ Redistributable for Visual Studio 2012</strong>" não está instalado no PC;
                </p>
                <p className="m-0">
                  - Para resolver esse erro acessa esté link, e faça o download do executável "<strong>VSU_4\vcredist_x64.exe</strong>" ou "<strong>VSU_4\vcredist_x86.exe</strong>", conforme a versão do Windows;
                </p>
                <p className="m-0">
                  Ao finalizar o download, execute o instalado, após a instalação "<strong>Reinicie o PC</strong>" e verifique se o erro persiste.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/erro01.png')}
                  alt="Features split 01"
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
                  API Node não inicializada
                </h3>
                <p className="m-0">
                  Se a "<strong>ApiNode</strong>" não for listada ao executar o comando "<strong>pm2 list</strong>" no "<strong>CMD</strong>".
                </p>
                <br/>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\bats</strong>";
                </p>
                <p className="m-0">
                  - Edite o bat "<strong>iniciar_api_node.bat</strong>";
                </p>
                <p className="m-0">
                  - Na linha 2, altere o caminho da pasta "<strong>api_relatorios</strong>" para "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api_relatorios</strong>", salve e feche o arquivo;
                </p>
                <p className="m-0">
                  - Execute o bat "<strong>iniciar_api_node.bat</strong>" novamente;
                </p>
                <p className="m-0">
                  - Ao finalizar, abra o "<strong>CMD</strong>" e execute o comando "<strong>pm2 list</strong>";
                </p>
                <p className="m-0">
                  - Se listar "<strong>ApiNode</strong>" com o status "<strong>online</strong>", a API Node foi inializada com sucesso;
                </p>
                <p className="m-0">
                  - Todas as vezes que iniciar o PC, a API Node já vai inicializar automaticamente.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/erro02.png')}
                  alt="Features split 01"
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
                  Soket não inicializado
                </h3>
                <p className="m-0">
                  Se a "<strong>Socket</strong>" não for listada ao executar o comando "<strong>pm2 list</strong>" no "<strong>CMD</strong>".
                </p>
                <br/>
                <p className="m-0">
                  - Abra a pasta "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>";
                </p>
                <p className="m-0">
                  - Edite o bat "<strong>service.bat</strong>";
                </p>
                <p className="m-0">
                  - Na linha 2, altere o caminho da pasta "<strong>socket</strong>" para "<strong>C:\digital\data\EasyPHP-Devserver-17\eds-www\api\socket</strong>", salve e feche o arquivo;
                </p>
                <p className="m-0">
                  - Execute o bat "<strong>service.bat</strong>" novamente;
                </p>
                <p className="m-0">
                  - Ao finalizar, abra o "<strong>CMD</strong>" e execute o comando "<strong>pm2 list</strong>";
                </p>
                <p className="m-0">
                  - Se listar "<strong>Socket</strong>" com o status "<strong>online</strong>", o socket foi inializado com sucesso;
                </p>
                <p className="m-0">
                  - Todas as vezes que iniciar o PC, o socket já vai inicializar automaticamente.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/erro03.png')}
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