import React from "react";
import { useFetch } from "../hooks/useFetch";
import {InvoiceList} from "../components/InvoiceList";

function Home() {
  const {
    data: invoices,
    isPending,
    error,
  } = useFetch("http://localhost:3009/data");
  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {invoices && <InvoiceList invoices={invoices} />}
    </div>
  );
}

export default Home;
