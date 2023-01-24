import { Box } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";

type LayoutProps = {
  title?: string,
  children: ReactNode
}

export const Layout:FC<LayoutProps> = ({title = 'OpenJira', children}) => {
  return (
    <Box sx = {{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

    <NavBar />
    {/* SideBar */}

    <Box sx={{ padding: '10px 20px' }}>
      { children }
    </Box>

    </Box>
  )
};