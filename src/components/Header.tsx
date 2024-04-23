import styled from "@emotion/styled";
import Level from "./Level";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Header</Title>
      <Menu>
        <MenuItem onClick={() => navigate("/click")}>click</MenuItem>
        <MenuItem onClick={() => navigate("/number")}>number</MenuItem>
      </Menu>
      <Level />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  background-color: white;
  border-bottom: 1px solid gray;
`;

const Title = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
