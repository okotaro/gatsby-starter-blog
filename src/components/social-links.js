import React from 'react';
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  PocketShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  PocketIcon,
} from 'react-share';

import styles from './social-links.css';

const query = graphql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

const SocialLinks = ({ url, title, via }) => {
  const data = useStaticQuery(query);
  const { siteUrl, social } = data.site.siteMetadata;
  const twitterAccount = via || social.twitter;
  const fullUrl = `${siteUrl}${url}`;

  return (
    <ul className="socialLinkRoot">
      <li className="socialLinkItem">
        <FacebookShareButton url={fullUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li className="socialLinkItem">
        <TwitterShareButton title={title} via={twitterAccount} url={fullUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li className="socialLinkItem">
        <LineShareButton title={title} url={fullUrl}>
          <LineIcon size={32} round />
        </LineShareButton>
      </li>
      <li className="socialLinkItem">
        <PocketShareButton title={title} url={fullUrl}>
          <PocketIcon size={32} round />
        </PocketShareButton>
      </li>
      <li className="socialLinkItem">
        <a 
          href="https://b.hatena.ne.jp/entry/"
          class="hatena-bookmark-button" 
          data-hatena-bookmark-layout="touch"
          data-hatena-bookmark-width="32"
          data-hatena-bookmark-height="32"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
          />
        </a>
        <Helmet>
          <script
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charset="utf-8"
            async="async">
          </script>
        </Helmet>
      </li>
    </ul>
  );
};

export default SocialLinks;