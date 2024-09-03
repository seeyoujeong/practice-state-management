import { useContext } from "react";
import styled from "@emotion/styled";
import { CartContext } from "@/context";

export default function CartPage() {
  const { cartItems, dispatch } = useContext(CartContext);

  const handleDeleteClick = (name: string) => {
    dispatch({ type: "deleted", name });
  };

  return (
    <Container>
      <CartList>
        {cartItems.map(({ name }) => (
          <CartItem key={name}>
            <ItemName>{name}</ItemName>
            <DeleteButton onClick={() => handleDeleteClick(name)}>
              x
            </DeleteButton>
          </CartItem>
        ))}
      </CartList>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartList = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
`;

const CartItem = styled.div`
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
