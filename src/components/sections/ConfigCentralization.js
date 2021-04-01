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
                  - Clique <a href="https://drive.google.com/file/d/1SSn6sJ2nDTNmrmphVulIIr4y9WvwyCG6/view?usp=sharing" target="_blank">aqui</a> para baixar o "<strong>System Scheduler</strong>" (programa para configurar a sincronização);
                </p>
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

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;