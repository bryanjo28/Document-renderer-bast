import { v2, v3 } from "@govtechsg/open-attestation";

export type CocSchemaV2 = v2.OpenAttestationDocument & CocDocument;
export type CocSchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: CocDocument;
};

export type BillOfLadingSchema = CocSchemaV2 | CocSchemaV3;

export interface CocDocument {
  scac: string;
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
  carrierName?: string;
  packages?: {
    description: string;
    weight: string;
    measurement: string;
  }[];
  shipper?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignee?: { name?: string };
  notifyParty?: { name?: string };
  placeOfReceipt?: string;
  placeOfDelivery?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
