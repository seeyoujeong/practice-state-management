import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuList = ["search", "shop"];
  const isCurrentPathname = (pathname: string) =>
    location.pathname === `/${pathname}`;

  return (
    <Container>
      <Title onClick={() => navigate("/")}>Header</Title>
      <Menu>
        {menuList.map((name) => (
          <MenuItem
            key={name}
            isCurrentPathname={isCurrentPathname(name)}
            onClick={() => navigate(name)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
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
  box-sizing: border-box;
`;

const Title = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li<{ isCurrentPathname: boolean }>`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.isCurrentPathname ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)"};
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
