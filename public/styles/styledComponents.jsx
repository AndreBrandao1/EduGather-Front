import styled from "styled-components";

export const ButtonTest = styled.button`
  width: ${(props) => props.width || "150px"};
  height: 48px;
  padding: 16px 16px 16px 16px;
  background-color: ${(props) => props.bk_color || "purple"};
  color: white;
  border-radius: 5%;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  transition: all 0.15s ease-in-out;
  :hover {
    opacity: 0.9;
    transform: translateY(-3px);
  }
`;

export const RoundPic = styled.img`
  background-image: black;
  border-radius: 50%;
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "100px"};
`;
