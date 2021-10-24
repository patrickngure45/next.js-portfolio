import styled from 'styled-components';

export const LeftContainer = styled.div`
  padding-top: 5rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  & li {
    padding: 0 5px 10px;
    & a {
      color: #13acc7ad;
      font-size: 2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }

  @media ${(props) => props.theme.breakpoints.xs} {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.xg} {
    & li {
      & a {
        font-size: 3rem;
      }
    }
  }
`;
