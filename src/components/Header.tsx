import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { isCurrentPathname } from "@/utils";

const menuList = [
  { path: "search", label: "검색" },
  { path: "cart", label: "장바구니" },
];

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title onClick={() => navigate("/")}>상태 관리 연습</Title>
      <Menu>
        {menuList.map(({ path, label }) => (
          <MenuItem
            key={path}
            isCurrentPathname={isCurrentPathname(path)}
            onClick={() => navigate(path)}
          >
            {label}
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
  padding: 0 10px;
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
  font-size: 14px;
  color: ${(props) =>
    props.isCurrentPathname ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)"};
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;
