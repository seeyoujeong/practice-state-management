import styled from "@emotion/styled";
import { CartItem } from "@/context";

interface CartListProps {
  cartItems: CartItem[];
  onDeleteClick: (name: string) => void;
}

export default function CartList({ cartItems, onDeleteClick }: CartListProps) {
  return (
    <Container>
      {cartItems.map(({ name }) => (
        <Item key={name}>
          <ItemName>{name}</ItemName>
          <DeleteButton onClick={() => onDeleteClick(name)}>x</DeleteButton>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
`;

const Item = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

const ItemName = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  margin-right: 10px;
  cursor: pointer;
`;
