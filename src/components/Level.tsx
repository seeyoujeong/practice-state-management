import { useAppSelector } from "@/context/hooks";
import styled from "@emotion/styled";

function Level() {
  const level = useAppSelector((state) => state.level.value);

  return (
    <Container>
      <NumberBox>{level}</NumberBox>
    </Container>
  );
}

export default Level;

const Container = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 100px;
  background-color: royalblue;
`;

const NumberBox = styled.div`
  padding-left: 25px;
  padding-bottom: 25px;
`;
