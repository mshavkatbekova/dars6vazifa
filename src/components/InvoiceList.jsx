import React from "react";
import { Link } from "react-router-dom";

export function InvoiceList({ invoices }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-3 font-bold text-3xl">Invoices</h2>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex items-center gap-3">
          <p>Filter by status</p>
          <button className="bg-dark-slate-blue text-white pt-2 pb-2 pl-3 pr-3 rounded-[24px]">
            New Invoice
          </button>
        </div>
      </div>
      <ul className="justify-between mt-6 pb-3 text-center">
        {invoices.map((invoice) => {
          const { id, clientName, total, status, paymentDue } = invoice;
          return (
            <li key={id}>
              <Link to={`invoice/${id}`}>
                #{id}
                Due {paymentDue}
                {clientName}£{total}
                {status}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
