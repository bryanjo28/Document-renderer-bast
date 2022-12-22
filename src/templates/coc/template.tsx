import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CocTemplateCertificate } from "../samples/customTemplateSample";
import { Wrapper } from "../../core/Wrapper";
import logo from "./logo_bca.svg";
import "./main.css";

// const smallText = (text: string): JSX.Element => <p style={{ fontSize: "0.8em" }}>{text}</p>;
// const smallStrongText = (text: string): JSX.Element => (
//   <p style={{ fontSize: "0.8em" }}>
//     <strong>{text}</strong>
//   </p>
// );

// const myStyle = {
//   borderWidth: "1px",

// }



export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <Wrapper>
      <div className="border-black border">
        <div className="flex">
          <div className="w-full border-black border ">
            <div className="p-2" style={{ textAlign: "center" }}>
              <h5>INVOICE</h5>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <strong> From: </strong>
              <p data-testid="documentFrom">
                {document.documentFrom}
              </p>
            </div>
            <div className="p-2">
              <strong>Address:</strong>
              <p data-testid="documentAddress">
                <p>{document.documentAddress}</p>
              </p>
            </div>
            <div className="p-2">
              <strong>TAX ID:</strong>
              <p data-testid="taxId">
                <p>{document.taxId}</p>
              </p>
            </div>
          </div>
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <strong> SKBDN No: </strong>
              <p data-testid="skbdno">
                {document.skbdno}
              </p>
            </div>
            <div className="p-2">
              <strong>SKBDN Date:</strong>
              <p data-testid="skbdnDate">
                <p>{document.skbdnDate}</p>
              </p>
            </div>
            <div className="p-2">
              <strong>Invoice No:</strong>
              <p data-testid="invoiceno">
                <p>{document.skbdno}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border">
            <div className="p-2">
              <p data-testid="formSKBDN"><strong>term of Payment: </strong>{document.termOfPayment}</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border">
            <div className="p-2">
              <p data-testid="customerNo"><strong>Customer No:</strong> {document.customerNo}</p>
              <p data-testid="customerTo"><strong>To: </strong>{document.customerTo}</p>
              <p data-testid="customerAddress"><strong>Address: </strong>{document.customerAddress}</p>
              <p data-testid="taxId"><strong>Tax ID: </strong>{document.taxId}</p>
              <p data-testid="salesNo"><strong>PO/Sales Order No: </strong>{document.salesNo}</p>
              <p data-testid="salesDate"><strong>PO/Sales Order Date: </strong>{document.salesDate}</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <div className="p-2">
              <h5>Description goods:</h5>
              <div className="border-t border-b border-bot">
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 150 }}>Goods.</div>
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 150 }}>Quantity</div>
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 150 }}>Measurement</div>
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 300 }} data-testid="unitCurrency">Unit Price in {document.unitCurrency}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.namaBarang}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.measurement}</div>
                  <div className="p-2 border-l border-r" style={{ width: 300 }}>{document.unitCurrency} {document.unitPrice}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.namaBarang2}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas2}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.measurement2}</div>
                  <div className="p-2 border-l border-r" style={{ width: 300 }}>{document.unitCurrency} {document.unitPrice2}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.namaBarang3}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas3}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.measurement3}</div>
                  <div className="p-2 border-l border-r" style={{ width: 300 }}>{document.unitCurrency} {document.unitPrice3}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.namaBarang4}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas4}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.measurement4}</div>
                  <div className="p-2 border-l border-r" style={{ width: 300 }}>{document.unitCurrency} {document.unitPrice4}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.namaBarang5}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas5}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.measurement5}</div>
                  <div className="p-2 border-l border-r" style={{ width: 300 }}>{document.unitCurrency} {document.unitPrice5}</div>
                </div>
              </div>
              <br />
              <p><strong>SubTotal:</strong> {document.unitCurrency} {document.subTotal}</p>
              <p data-testid="rounding" style={{ marginTop: '0.5rem' }}><strong>Rounding:</strong> {document.rounding}</p>
              <p data-testid="vat" style={{ marginTop: '0.5rem' }}><strong>VAT:</strong> {document.vat}</p>
              <p data-testid="grandTotal" style={{ marginTop: '0.5rem' }}><strong>Grand Total:</strong> {document.grandTotal}</p>
              <p data-testid="priceClause" style={{ marginTop: '0.5rem' }}><strong>Price clause:</strong> {document.priceClause}</p>
            </div>

          </div>
          <div className="w-1/2">

          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border ">
            <div className="p-2">
              <p data-testid="bankName" style={{ marginTop: '0.5rem' }}>
                <p><strong>Bank Name:</strong> {document.bankName}</p>
              </p>
              <p data-testid="bankAccountName" style={{ marginTop: '0.5rem' }}>
                <p><strong>Bank Account Name:</strong> {document.bankAccountName}</p>
              </p>
              <p data-testid="bankAccountNo" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                <p><strong>Bank Account No:</strong> {document.bankAccountNo}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border ">
            <div className="w-1/2">
              <div className="p-2">
                <p data-testid="quality"><strong>Quality:</strong> {document.quality}</p>
                <p data-testid="originOfGoods" style={{ marginTop: '0.5rem' }}><strong>Origin Of Good:</strong> {document.originOfGoods}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border ">
            <div className="p-2">
              <p data-testid="invoicePlace" style={{ marginTop: '0.5rem' }}>
                <p><strong>Invoice Place:</strong> {document.invoicePlace}</p>
              </p>
              <p data-testid="invoiceDate" style={{ marginTop: '0.5rem' }}>
                <p><strong>Invoice Date:</strong> {document.invoiceDate}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border ">
            <div className="w-1/2">
              <div className="p-2">
                <p><strong>Signature</strong></p>
              </div>
              <div style={{ minHeight: "60px", paddingTop: "10px" }}>
                <img className="w-1/2 mx-auto" data-testid="signature" src={document.signature} />
              </div>
            </div>
          </div>
        </div>


      </div>
    </Wrapper>
  );
};