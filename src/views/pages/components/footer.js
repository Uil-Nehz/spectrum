// @flow
import * as React from 'react';
import { Footer, FooterGrid, Masthead, Safety, SocialLinks } from '../style';
import { Link } from 'react-router-dom';
import Icon from 'src/components/icon';
import { Logo } from 'src/components/logo';

export default () => {
  return (
    <Footer>
      <FooterGrid>
        <Masthead>
          <Link to="/">
            <Logo />
          </Link>
          <SocialLinks>
            <a
              href="https://github.com/withspectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon glyph="github" hoverColor={'text.reverse'} />
            </a>
            <a
              href="https://twitter.com/withspectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon glyph="twitter" hoverColor={'text.reverse'} />
            </a>
          </SocialLinks>
        </Masthead>
        <Safety>
          <span>Safety</span>
          <a
            href="https://github.com/withspectrum/code-of-conduct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code of Conduct
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://help.github.com/en/github/site-policy/github-privacy-statement'
            }
          >
            Privacy Statement
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://help.github.com/en/github/site-policy/github-terms-of-service'
            }
          >
            Terms of Service
          </a>
        </Safety>
      </FooterGrid>
    </Footer>
  );
};
