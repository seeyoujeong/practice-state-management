import styled from "@emotion/styled";
import { CartList } from "@/components";
import { useCartStore } from "@/stores";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

  const handleDeleteClick = (name: string) => {
    deleteCartItem(name);
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
