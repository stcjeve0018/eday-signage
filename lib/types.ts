export interface EstimateRequestBody {
  width_cm: number;
  height_cm: number;
  lighting?: string;
  location_type?: string;
  sign_type?: string;
  customer_name?: string;
  customer_mobile?: string;
  note?: string;
}

export type EstimateAPIError =
  | "MISSING_DIMENSION"
  | "INVALID_DIMENSION"
  | "INTERNAL_ERROR"
  | "AIRTABLE_ERROR"
  | "AIRTABLE_FETCH_ERROR"
  | string;

export interface EstimateResult {
  min: number;
  max: number;
  currency: "TWD";
}

export interface EstimateSuccessResponse {
  ok: true;
  estimate: EstimateResult;
  airtableRecordId: string | null;
  warning?: string;
}

export interface EstimateErrorResponse {
  ok: false;
  error: EstimateAPIError;
  status?: number;
  body?: string;
  message?: string;
}

export type EstimateResponse = EstimateSuccessResponse | EstimateErrorResponse;

// --- Mock Data Types ---

export interface CaseItem {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface EncyclopediaEntry {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
}