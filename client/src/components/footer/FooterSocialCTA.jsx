import React from 'react';
// Images
import FacebookLogo from '../../assets/images/media_icons/facebook_fb_social_media_black_logo_icon_48px.png';
import InstagramLogo from '../../assets/images/media_icons/instagram_camera_social_media_netowrking_logo_icon_48px.png';
import GoogleLogo from '../../assets/images/media_icons/google_brand_branding_logo_network_black_icon_48px.png';
import GithubLogo from '../../assets/images/media_icons/github_code_octopus_black_logo_icon_48px.png';
import SocialMediaPin from '../socialMedia/SocialMediaPin';
import { FACEBOOK_BUSINESS_URL, GITHUB_BUSINESS_URL, GOOGLE_BUSINESS_URL, INSTAGRAM_BUSINESS_URL } from '../../utils/Constants';
// Components

function FooterSocialCTA() {
  const navigateToSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  const socialMediaLinks = [
    {
      serviceName: 'Facebook',
      icon: FacebookLogo,
      url: FACEBOOK_BUSINESS_URL,
    },
    {
      serviceName: 'Instagram',
      icon: InstagramLogo,
      url: INSTAGRAM_BUSINESS_URL,
    },
    {
      serviceName: 'Google',
      icon: GoogleLogo,
      url: GOOGLE_BUSINESS_URL,
    },
    {
      serviceName: 'GitHub',
      icon: GithubLogo,
      url: GITHUB_BUSINESS_URL,
    },
  ];

  return (
    <section className='grid justify-center'>
      <div className='grid grid-flow-col w-fit gap-1'>
        {socialMediaLinks.map((social) => (
          <SocialMediaPin
            key={social.serviceName}
            serviceName={social.serviceName}
            icon={social.icon}
            func={() => navigateToSocialMedia(social.url)}
          />
        ))}
      </div>
    </section>
  );
}

export default FooterSocialCTA;
