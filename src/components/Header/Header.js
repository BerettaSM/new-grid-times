import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>

      <DesktopMainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <ColumnActionGroup>
          <Button>Subscribe</Button>
          <Link href='#'>Already a subscriber?</Link>
        </ColumnActionGroup>
      </DesktopMainHeader>

    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ColumnActionGroup = styled(ActionGroup)`
  flex-direction: column;
  gap: 8px;
  justify-self: flex-end;
  align-self: flex-end;
`

const BaseHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
  }
`

const MainHeader = styled(BaseHeader)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopMainHeader = styled(BaseHeader)`
  margin-top: 16px;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;

const Link = styled.a`
  font-style: italic;
  text-decoration: underline;
  font-size: ${14 / 16}rem;
`

export default Header;
