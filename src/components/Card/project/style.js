import styled from "styled-components";

const linearGradientValue = "180deg, #08bd8160, #ffffff10";

const ProjectCardWrapper = styled.div`
  position: relative;
  width: 350px;
  margin-bottom: 20px;
  /* border: 1px solid ${({ theme }) => theme.colors.greyColor70}; */
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 280px;
  }
`;
const ProjectImage = styled.div`
  position: relative;
  width: 100%;

  background-position: top;
  background-size: cover;
  img {
    width: 100%;
    height: auto;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(${linearGradientValue});
  }
`;
const ProjectDetail = styled.div`
  width: 100%;
  padding: 10px;
  background-color: rgba(45, 48, 57, 0.92);
  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #08bd80; */
  border-top: none;
`;
const ProjectTitle = styled.p`
  font-size: 20px;
  font-family: "Poppins";
  color: white;
  margin-bottom: 5px;
`;
const ProjectDescription = styled.p`
  font-size: 14px;
  color: #929292;
  font-family: "Poppins";
  margin-bottom: 10px;
`;
const Techstack = styled.span`
  font-size: 14px;
  color: #fff;
  font-family: "Poppins";
  background: rgba(82, 86, 85, 0.3);
  padding: 2px 10px;
  border-radius: 15px;
  margin: 5px;
`;
const ProjectCTAWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  margin: 10px 0;
  flex: 1;
  align-items: flex-start;
  justify-content: first baseline;
`;

const ProjectCTA = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  text-decoration: none;
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  text-align: center;
  transition: all 300ms ease-in-out;
  background: rgba(99, 99, 206, 1);
  padding: 2px 10px;
  align-self: flex-end;
  border-radius: 20px;

  &:hover {
    background: rgba(99, 99, 206, 0.7);
    transition: all 300ms ease-in-out;
  }
`;

export {
  ProjectCardWrapper,
  ProjectImage,
  ProjectDetail,
  ProjectTitle,
  ProjectDescription,
  Techstack,
  ProjectCTA,
  ProjectCTAWrapper,
};
