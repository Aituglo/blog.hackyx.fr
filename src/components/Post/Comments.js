import React from "react";
import PropTypes from "prop-types";
import { Disqus } from 'gatsby-plugin-disqus'

import config from "../../../content/meta/config";

const Comments = props => {
  const { post, theme } = props;
  let disqusConfig = {
    url: `${config.siteUrl+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <Disqus config={disqusConfig} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  post: PropTypes.array.isRequired,
};

export default Comments;
