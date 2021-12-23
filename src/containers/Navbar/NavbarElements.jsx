import styled from "styled-components";

export const Menu = styled.ul`

  display: flex;

  @media screen and (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 90px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;
