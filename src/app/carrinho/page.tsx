"use client";
import {
  CarrinhoContainer,
  CarrinhoContent,
  CartHeader,
  ProductList,
  ProductItem,
  ProductInfo,
  ProductImage,
  QuantitySelector,
  RemoveButton,
  Price,
  SummarySection,
  SummaryBox,
  SummaryRow,
  TotalRow,
  CheckoutButton,
  Links,
} from "@/styles/carrinho";
import { PageWrapper } from "@/styles/listCard";
import { BackButton } from "@/styles/product";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCarrinhoStore } from "@/hooks/useCarrinhoStore";

export default function CarrinhoPage() {
  const { cart, removeFromCart, updateQuantity } = useCarrinhoStore();

  const [subtotal, setSubtotal] = useState(0);
  const entrega = 40;

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cart]);

  return (
    <PageWrapper>
      <CarrinhoContainer>
        <CarrinhoContent>
          <BackButton onClick={() => window.history.back()}>
            <IoArrowBackCircleOutline size={24} />
            <p>Voltar</p>
          </BackButton>

          <CartHeader>
            <h1>SEU CARRINHO</h1>
            <p>
              Total ({cart.length} produto{cart.length !== 1 && "s"}){" "}
              <strong>
                R$
                {subtotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </strong>
            </p>
          </CartHeader>

          <ProductList>
            {cart.map((item) => (
              <ProductItem key={item.id}>
                <ProductImage src={item.image} alt={item.name} />
                <ProductInfo>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <QuantitySelector>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      >
                        {[1, 2, 3, 4, 5].map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </QuantitySelector>
                    <Price>
                      R$
                      {(item.price * item.quantity).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </Price>
                  </div>
                </ProductInfo>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FiTrash />
                </RemoveButton>
              </ProductItem>
            ))}
          </ProductList>
        </CarrinhoContent>

        <SummarySection>
          <SummaryBox>
            <h2>RESUMO DO PEDIDO</h2>
            <SummaryRow>
              <p>Subtotal de produtos</p>
              <p>
                R$
                {subtotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </SummaryRow>
            <SummaryRow>
              <p>Entrega</p>
              <p>
                R$
                {entrega.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </SummaryRow>
            <TotalRow>
              <p>Total</p>
              <p>
                <strong>
                  R$
                  {(subtotal + entrega).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </p>
            </TotalRow>
            <CheckoutButton onClick={() => alert("Compra finalizada!")}>
              FINALIZAR A COMPRA
            </CheckoutButton>

            <Links>
              <a>AJUDA</a>
              <a>REEMBOLSOS</a>
              <a>ENTREGAS E FRETE</a>
              <a>TROCAS E DEVOLUÇÕES</a>
            </Links>
          </SummaryBox>
        </SummarySection>
      </CarrinhoContainer>
    </PageWrapper>
  );
}
