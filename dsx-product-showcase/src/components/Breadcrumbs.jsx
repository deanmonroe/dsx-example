import React from "react";
import { Breadcrumbs as DSXBreadcrumbs, Breadcrumb, MdHome } from "@dsx/react";

const Breadcrumbs = ({ currentPage }) => {
  return (
    <div style={{ margin: "var(--size-400) 0" }}>
      <DSXBreadcrumbs>
        <Breadcrumb href="/" icon={MdHome}>
          Home
        </Breadcrumb>
        <Breadcrumb href="/products">Products</Breadcrumb>
        {currentPage && <Breadcrumb>{currentPage}</Breadcrumb>}
      </DSXBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
