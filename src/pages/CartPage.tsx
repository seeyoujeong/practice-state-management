import { useContext } from "react";
import styled from "@emotion/styled";
import { CartList } from "@/components";
import { CartContext } from "@/context";

export default function CartPage() {
  const { cartItems, dispatch } = useContext(CartContext);

  const handleDeleteClick = (name: string) => {
    dispatch({ type: "deleted", name });
  };

  return (
    <Container>
      <CartList cartItems={cartItems} onDeleteClick={handleDeleteClick} />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
