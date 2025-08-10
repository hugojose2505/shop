import { NavBar } from "@/components/NavBar";
import { Content, LayoutContainer } from "@/styles/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insany Shop",
  description:
    "Website de e-commerce desenvolvido para teste técnico da Insany",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LayoutContainer>
          <NavBar />
          <Content>{children}</Content>
        </LayoutContainer>
      </body>
    </html>
  );
}
