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

export default function CarrinhoPage() {
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
              Total (3 produtos) <strong>R$161,00</strong>
            </p>
          </CartHeader>

          <ProductList>
            <ProductItem>
              <ProductImage src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop" />
              <ProductInfo>
                <div>
                  <h3>Caneca de cerâmica rústica</h3>
                  <p>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo...
                  </p>
                </div>
                <div>
                  <QuantitySelector>
                    <select>
                      <option value="1">1</option>
                    </select>
                  </QuantitySelector>
                  <Price>R$ 40,00</Price>
                </div>
              </ProductInfo>
              <RemoveButton>
                <FiTrash />
              </RemoveButton>
            </ProductItem>
            <ProductItem>
              <ProductImage src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop" />
              <ProductInfo>
                <div>
                  <h3>Caneca Decaf! P&Co</h3>
                  <p>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo...
                  </p>
                </div>
                <div>
                  <QuantitySelector>
                    <select>
                      <option value="1">1</option>
                    </select>
                  </QuantitySelector>
                  <Price>R$ 32,00</Price>
                </div>
              </ProductInfo>
              <RemoveButton>
                <FiTrash />
              </RemoveButton>
            </ProductItem>
            <ProductItem>
              <ProductImage src="https://images.unsplash.com/photo-1520975698519-59b42f1d72a9?w=400&h=400&fit=crop" />
              <ProductInfo>
                <div>
                  <h3>Camiseta Outcast</h3>
                  <p>
                    Aqui vem um texto descritivo do produto, esta caixa de texto
                    servirá apenas de exemplo...
                  </p>
                </div>
                <div>
                  <QuantitySelector>
                    <select>
                      <option value="1">1</option>
                    </select>
                  </QuantitySelector>
                  <Price>R$ 89,00</Price>
                </div>
              </ProductInfo>
              <RemoveButton>
                <FiTrash />
              </RemoveButton>
            </ProductItem>
          </ProductList>
        </CarrinhoContent>

        <SummarySection>
          <SummaryBox>
            <h2>RESUMO DO PEDIDO</h2>
            <SummaryRow>
              <p>Subtotal de produtos</p>
              <p>R$ 161,00</p>
            </SummaryRow>
            <SummaryRow>
              <p>Entrega</p>
              <p>R$ 40,00</p>
            </SummaryRow>
            <TotalRow>
              <p>Total</p>
              <p>
                <strong>R$ 201,00</strong>
              </p>
            </TotalRow>
            <CheckoutButton>FINALIZAR A COMPRA</CheckoutButton>
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
