"use client";

import { ArrowButton, PageButton, Wrapper } from "@/styles/pagination";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Wrapper>
      <ArrowButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BiChevronLeft />
      </ArrowButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BiChevronRight />
      </ArrowButton>
    </Wrapper>
  );
}
