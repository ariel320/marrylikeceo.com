/**
 * Google tag (gtag.js) for Google Ads — rendered as the first thing inside
 * <head> on every page (see app/layout.tsx), exactly as Google instructs.
 * Only one Google tag per page: don't add it anywhere else.
 */
export const GOOGLE_ADS_ID = "AW-18502560067";

const GTAG_INIT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GOOGLE_ADS_ID}');
`;

export const GoogleAdsTag = () => (
  <>
    {/* Google tag (gtag.js) */}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
    <script id="google-ads-gtag" dangerouslySetInnerHTML={{ __html: GTAG_INIT }} />
  </>
);
