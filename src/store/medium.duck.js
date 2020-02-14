const types = {
  SET_MEDIUM: "SET_MEDIUM",
  TOOGLE_DIALOG: "TOOGLE_DIALOG",
};

const actions = {
  setMedium: (title, description, image, author, authorImage, social, mediumAddress, readLength) => {
    return {
      "type": types.SET_MEDIUM,
      title,
      description,
      image,
      author,
      authorImage,
      social,
      mediumAddress,
      readLength
    }
  },
  toogleDialog: (open) => {
    return {
      "type": types.TOOGLE_DIALOG,
      open
    }
  }
};

const initialState = {
  "title": "Publishing a Medium Article",
  "description": "I am a very important article that will sky rocket our company's prospects and exposure.",
  "image": "https://miro.medium.com/max/5184/0*lxDyCTuCwZCIWd57",
  "author": "Marco Mendão",
  "authorImage": "https://trello-attachments.s3.amazonaws.com/5a0b139f45ffc6a03302373d/5a78660b9d750c86294ea7d1/d9efa6cab5eccd418dd488fa8641e598/eu1.jpg",
  "social": "@marco.mendao",
  "dialogOpen": false,
  "mediumAddress": "@marco.mendao",
  "readLength": "5 min"
};

function medium(state = initialState, action) {
  switch (action.type) {
    case types.SET_MEDIUM:
      const { title, description, image, author, authorImage, social, mediumAddress, readLength } = action;
      return { ...state, title, description, image, author, authorImage, social, mediumAddress, readLength };
    case types.TOOGLE_DIALOG:
      return { ...state, dialogOpen: action.open };
    default:
      return state
  }
}

export { medium, actions }
