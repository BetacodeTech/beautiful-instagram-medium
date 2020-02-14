import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from "react-redux";
import { TextareaAutosize } from "@material-ui/core";
import "./style.css"
import { actions } from "../../store/medium.duck";

export default function FormDialog() {

  const dispatch = useDispatch();

  const open = useSelector(state => state.medium.dialogOpen);

  const author = useSelector(state => state.medium.author);
  const authorImage = useSelector(state => state.medium.authorImage);
  const social = useSelector(state => state.medium.social);
  const title = useSelector(state => state.medium.title);
  const description = useSelector(state => state.medium.description);
  const image = useSelector(state => state.medium.image);
  const mediumAddress = useSelector(state => state.medium.mediumAddress);
  const readLength = useSelector(state => state.medium.readLength); 


  const [authorLocal, setAuthor] = React.useState(author);
  const [authorImageLocal, setAuthorImage] = React.useState(authorImage);
  const [socialLocal, setSocial] = React.useState(social);
  const [titleLocal, setTitle] = React.useState(title);
  const [descriptionLocal, setDescription] = React.useState(description);
  const [imageLocal, setImage] = React.useState(image);
  const [mediumAddressLocal, setMediumAddress] = React.useState(mediumAddress);
  const [readLengthLocal, setReadLength] = React.useState(readLength);


  const handleSave = () => {
    dispatch(actions.setMedium(titleLocal, descriptionLocal, imageLocal, authorLocal, authorImageLocal, socialLocal, mediumAddressLocal, readLengthLocal));
    dispatch(actions.toogleDialog(false));
  };

  const handleClose = () => {
    dispatch(actions.toogleDialog(false));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Medium Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the form bellow to update your Instagram Medium Post.
          </DialogContentText>
          <TextField
            margin="dense"
            id="author"
            label="Author"
            type="text"
            fullWidth
            value={authorLocal}
            onChange={e => {
              setAuthor(e.target.value)
            }}
          />
          <TextField
            margin="dense"
            id="authorImage"
            label="Author Image"
            type="text"
            fullWidth
            value={authorImageLocal}
            onChange={e => {
              setAuthorImage(e.target.value)
            }}
          />
          <TextField
            margin="dense"
            id="social"
            label="Author Social"
            type="text"
            fullWidth
            value={socialLocal}
            onChange={e => {
              setSocial(e.target.value)
            }}
          />
          <TextField
            margin="dense"
            id="org"
            label="Title"
            type="text"
            fullWidth
            value={titleLocal}
            onChange={e => {
              setTitle(e.target.value)
            }}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={descriptionLocal}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />       
          <TextField
            margin="dense"
            id="articleImage"
            label="Article Image"
            type="text"
            fullWidth
            value={imageLocal}
            onChange={e => {
              setImage(e.target.value)
            }}
          />  
          <TextField
            margin="dense"
            id="articleImage"
            label="Medium Address"
            type="text"
            fullWidth
            value={mediumAddressLocal}
            onChange={e => {
              setMediumAddress(e.target.value)
            }}
          />  
          <TextField
            margin="dense"
            id="articleImage"
            label="Article Image"
            type="text"
            fullWidth
            value={readLengthLocal}
            onChange={e => {
              setReadLength(e.target.value)
            }}
          />  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Update Medium Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
