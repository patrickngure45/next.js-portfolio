import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  overflow: hidden;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  min-height: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  padding: 10px 0;
  font-weight: 700;
  font-size: 2rem;
  color: #13acc7d8;
  z-index: 20;
  width: 100%;
`;
export const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: linear-gradient(90deg, rgb(0, 217, 255), rgb(162, 0, 255));
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '2.5rem' : '1.5rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(90deg, rgba(137, 43, 226, 0.842), #13acc7ea);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7bd;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 1.5rem;
  background: rgba(174, 0, 255, 0.2);
  border-radius: 10px;
  border: 1px ridge blueviolet;
  transition: 0.5s;
  &:hover {
    background: transparent;
    color: #d4c0c0;
  }
`;

export const TagList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  padding: 1rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    /* padding: 0.5rem 5px; */
  }
`;
export const Tag = styled.span`
  background: rgba(237, 238, 238, 0.2);
  color: #fff;
  /* display: inline-block; */
  margin: 5px 2.5rem;
  padding: 8px 1.5rem;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  @media ${(props) => props.theme.breakpoints.xm} {
    padding: 5px 0.2rem;
    font-size: 0.5rem;
    margin: 5px 3px;
  }
`;
