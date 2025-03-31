import { Helmet } from 'react-helmet';
// Constants
import { CompanyName } from '../../utils/Constants';

export const HelmetItem = ({
  PageName,
  desc,
  keywords,
  additionalMeta = [],
  structuredData = null, // New prop for structured data
}) => {
  return (
    <Helmet>
      <title>
        {PageName} - {CompanyName}
      </title>
      <meta name="description" content={desc} />
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Additional meta tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};
