export interface SubscribePayload {
  readonly email: string;
  readonly firstName?: string;
  readonly source: "hero" | "experience" | "book" | "final";
}

export interface ApiResponse {
  readonly success: boolean;
  readonly message: string;
}

export interface SectionProps {
  readonly id?: string;
  readonly className?: string;
  readonly children?: React.ReactNode;
}
