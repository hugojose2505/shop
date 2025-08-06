import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza horizontalmente */
  width: 100%; /* ocupa toda a largura disponível */
  gap: 8px;
`;

export const buttonCommon = css`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  ${buttonCommon};

  ${({ $active }) =>
    $active
      ? css`
          border: 2px solid #7f5af0;
          background: white;
          color: #7f5af0;
        `
      : css`
          border: none;
          background: #f2f2f2;
          color: #999;
        `}

  &:hover {
    ${({ $active }) =>
      $active ? `background: #f9f5ff;` : `background: #e0e0e0;`}
  }
`;

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  ${buttonCommon};

  border: none;
  background: #f2f2f2;
  padding: 0;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ disabled }) => (disabled ? "#ccc" : "#666")};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.5;
    `}

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }
`;
