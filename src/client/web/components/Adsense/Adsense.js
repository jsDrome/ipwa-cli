import React from 'react';

const Adsense = props => {
  const {
    className,
    adFormat,
    style,
    adClient,
    adSlot,
    layoutKey,
  } = props;

  return <ins className={className}
    data-ad-format={adFormat}
    style={{ display: 'block', ...style }}
    data-ad-layout-key={layoutKey}
    data-ad-client={adClient}
    data-ad-slot={adSlot} />;
};

Adsense.defaultProps = {
  className: 'adsbygoogle',
  adFormat: '',
  style: null,
  adClient: '',
  adSlot: '',
  layoutKey: '',
}

export default Adsense;
