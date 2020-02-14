import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/medium.duck";

const Footer = () => {
  const dispatch = useDispatch();

  const author = useSelector(state => state.medium.author);
  const authorImage = useSelector(state => state.medium.authorImage);
  const social = useSelector(state => state.medium.social);

  return (
    <div className="container">
      <ListItem className="author">
        <ListItemAvatar>
          <Avatar alt={author}
            src={authorImage} />
        </ListItemAvatar>
        <ListItemText primary={author} secondary={social} />
        <img src="logo.png" className="logo" onClick={() => dispatch(actions.toogleDialog(true))} />
      </ListItem>

    </div>
  )
};

export default Footer
