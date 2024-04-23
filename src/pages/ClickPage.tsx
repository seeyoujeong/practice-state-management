import { LevelContext } from "@/context";
import styled from "@emotion/styled";
import { useContext } from "react";

function ClickPage() {
  const { setLevel } = useContext(LevelContext);

  const handleClick = () => {
    setLevel((prev) => prev + 1);
  };

  return (
    <Container>
      <NameBox>Click Page</NameBox>
      <ButtonBox>
        <button onClick={handleClick}>click!</button>
      </ButtonBox>
    </Container>
  );
}

export default ClickPage;

const Container = styled.div`
  height: calc(100% - 51px);
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const NameBox = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;

const ButtonBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
