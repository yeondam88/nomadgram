import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea
      placeholder={context.t("Add a comment...")}
      className={styles.input}
      value={props.comment}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  photoId: PropTypes.number.isRequired
};

export default CommentBox;
