import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  padding: 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    /* padding: 24px 48px 0; */
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    grid-template-columns: 1fr;
    /* width: calc(100vw - 32px); */
    flex-direction: column;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 30px;
  top: 4rem;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  height: 500px;
  width: 350px;
  border-radius: 10px;
  opacity: 0.7;
  justify-self: center;
  box-shadow: 0px 0px 5px 3px rgba(80, 127, 128, 0.45) inset;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(80, 127, 128, 0.45) inset;
  -moz-box-shadow: 0px 0px 5px 3px rgba(80, 127, 128, 0.45) inset;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
export const RightContainer = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const AboutStack = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 3rem;
  gap: 8px;
`;
export const AboutTags = styled.li`
  background: rgba(237, 238, 238, 0.1);
  color: #cfcfcf;
  display: inline-block;
  /* margin-right: 0.5rem; */
  padding: 0.8rem 0.5rem;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 4px 0;
    margin: 0;
  }
`;
export const AboutInfo = styled.p`
  width: 100%;
  /* padding: 0 30px; */
  color: #e4e6e7bd;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    margin: 0 auto;
  }
`;
