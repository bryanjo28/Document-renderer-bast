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
            <div className="p-2">
              <img data-testid="logo" style={{ width: "150px" }} src={logo} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <strong> Beneficiary Address </strong>
            </div>
            <div className="p-2">
              <strong>To:</strong>
              <p data-testid="documentTo">
                <p>{document.documentTo}</p>
              </p>
            </div>
            <div className="p-2">
              <strong>Address:</strong>
              <p data-testid="beneficiaryAddress">
                <p>{document.beneficiaryAddress}</p>
              </p>
            </div>
            <div className="p-2">
              <strong>NPWP:</strong>
              <p data-testid="npwp">
                {document.npwp}
              </p>
            </div>
          </div>
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <strong> Shipping To: </strong>
              <p data-testid="shippingTo">
                {document.shippingTo}
              </p>
            </div>
            <div className="p-2">
              <strong>Shipping Address:</strong>
              <p data-testid="shippingAddress">
                <p>{document.shippingAddress}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full border-black border">
            <div className="p-2" style={{ textAlign: 'center' }}>
              <p><strong>Berita Acara Serah Terima</strong></p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <p data-testid="bastNo"><strong>BAST No:</strong> {document.bastNo}</p>
              <p data-testid="invoiceNo"><strong>Invoice No: </strong>{document.invoiceNo}</p>
              <p data-testid="skbdno"><strong>SKBDN No: </strong>{document.skbdno}</p>

            </div>

          </div>
          <div className="w-1/2 border-black border">
            <div className="p-2">
              <p data-testid="customerNo"><strong>BAST Date:</strong> {document.bastDate}</p>
              <p data-testid="invoiceDate"><strong>Invoice Date: </strong>{document.invoiceDate}</p>
              <p data-testid="customerAddress"><strong>SKBDN Date: </strong>{document.skbdnDate}</p>

            </div>

          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <div className="p-2">
              <h5 className="pt-2 pb-2">Description goods:</h5>
              <div className="border-t border-b border-bot">
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 250 }}>Goods.</div>
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 150 }}>Quantity</div>
                  <div className="p-2 border-l border-r border-b-2" style={{ width: 350 }}>Measurement</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 250 }}>{document.namaBarang}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas}</div>
                  <div className="p-2 border-l border-r" style={{ width: 350 }}>{document.measurement}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 250 }}>{document.namaBarang2}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas2}</div>
                  <div className="p-2 border-l border-r" style={{ width: 350 }}>{document.measurement2}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 250 }}>{document.namaBarang3}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas3}</div>
                  <div className="p-2 border-l border-r" style={{ width: 350 }}>{document.measurement3}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 250 }}>{document.namaBarang4}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas4}</div>
                  <div className="p-2 border-l border-r" style={{ width: 350 }}>{document.measurement4}</div>
                </div>
                <div className="flex flex-nowrap">
                  <div className="p-2 border-l border-r" style={{ width: 250 }}>{document.namaBarang5}</div>
                  <div className="p-2 border-l border-r" style={{ width: 150 }}>{document.kuantitas5}</div>
                  <div className="p-2 border-l border-r" style={{ width: 350 }}>{document.measurement5}</div>
                </div>
              </div>
              <br />
            </div>

          </div>
          <div className="w-1/2">

          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 border-black border ">
            <div className="p-2">
              <p data-testid="signature1" style={{ marginTop: '0.5rem' }}>
                <img className="w-1/2 mx-auto" data-testid="signature" src={document.signature1} />
              </p>
            </div>
          </div>
          <div className="w-1/2 border-black border ">
            <div className="p-2">
              <p data-testid="signature2" style={{ marginTop: '0.5rem' }}>
              <img className="w-1/2 mx-auto" data-testid="signature" src={document.signature2} />
              </p>
            </div>
          </div>
        </div>


      </div>
    </Wrapper>
  );
};