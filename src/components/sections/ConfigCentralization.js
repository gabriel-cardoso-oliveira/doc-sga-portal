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

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;