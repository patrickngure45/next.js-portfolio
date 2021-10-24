import styled from 'styled-components';

export const FooterWrapper = styled.section`
  /* width: calc(100vw - 96px); */
  max-width: 1040px;
  padding: 2rem 0 40px;
  margin: 1rem auto;
  /* box-sizing: content-box; */
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 16px 48px;
    /* width: calc(100vw - 32px); */
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 20px;
  }
`;

export const LinkItem = styled.a`
  font-size: 2rem;
  /* line-height: 30px; */
  color: #13adc7;
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  &:hover {
    color: #fff;
    left: 6px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  width: fit-content;
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
  & span {
    font-style: italic;
    color: rgba(137, 43, 226, 0.8);
  }
  & a {
    color: rgba(137, 43, 226, 0.8);
    font-style: italic;
    text-decoration: underline;
  }

  @media ${(props) => props.theme.breakpoints.xg} {
    font-size: 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1040px;
  & li {
    padding: 0 5px;
    & a {
      color: #13acc7ad;
      font-size: 2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    /* flex-wrap: wrap; */
    & li a {
      font-size: 2rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.xg} {
    & li {
      & a {
        font-size: 3rem;
      }
    }
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px 0 20px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 220px; */
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }
`;
