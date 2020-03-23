import React, { Component } from "react";
import "./App.css";
import firebase from "./components/firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      database: firebase.firestore(),
      storage: firebase.storage(),
      auth: firebase.auth(),
      user: null,
      userImages: [],
      userVideos: [],
      profileImage: null,
      videoIconClicked: false,
      journalIconClicked: false,
      journals: [],
    };
  }

  componentDidMount() {
    this.state.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user }, () => {
          this.state.storage
            .ref()
            .child(`${this.state.user.uid}`)
            .listAll()
            .then(res => {
              Promise.all(
                res.items.map(item => {
                  return item.getDownloadURL();
                })
              ).then(urls => {
                urls.forEach(url => {
                  if(url.includes('galleryImage')) {
                    const userImages = [...this.state.userImages];
                    userImages.unshift(url);
                    this.setState({ userImages });

                  } else if(url.includes('galleryVideo')) {
                    const userVideos = [...this.state.userVideos];
                    userVideos.unshift(url);
                    this.setState({ userVideos });

                  } else {
                    const profileImage = url;
                    this.setState({ profileImage });
                  };
                });
              });
            });
        });
      };
    });
  };

  userUploadedFile = (url, type) => {
    //----------- if type is true, it means it's image file and if not, it's video file ----------//
    if(type === true) {
      const userImages = [...this.state.userImages];

      userImages.unshift(url);

      this.setState({ userImages });

    } else {
      const userVideos = [...this.state.userVideos];

      userVideos.unshift(url);

      this.setState({ userVideos });
    };
  };

  deleteItem = e => {
    e.stopPropagation();
    if(e.keyCode === 13 || typeof e.keyCode !== 'number') {
      const confirm = window.confirm("Are you sure you want to delete the image?");
      const deletedItem = e.target.parentNode.childNodes[0].getAttribute('src');
      const userItems = deletedItem.includes('galleryImage') ? [...this.state.userImages] : [...this.state.userVideos];

      if (confirm) {
        this.state.storage.refFromURL(deletedItem).delete();

        if (deletedItem.includes('galleryImage')) {
          const filteredUserImages = userItems.filter(image => image !== deletedItem);
          this.setState({ userImages: filteredUserImages });

        } else {
          const filteredUserVideos = userItems.filter(video => video !== deletedItem);
          this.setState({ userVideos: filteredUserVideos });
        }
      }
    }
  };

  iconToggle = e => {
    const type = e.target.dataset.type;

    if(type === 'images') {
      this.setState({
        videoIconClicked: false,
        journalIconClicked: false,
      })

    } else {
      this.setState({
        videoIconClicked: true,
        journalIconClicked: false,
      })
    }
  }

  journalIconClicked = journals => {
    this.setState({
      videoIconClicked: false,
      journalIconClicked: true,
      journals
    })
  }

  render() {
    return (
      <Router>
          <Route path="/changmoSungReactProjectFive/">
            {this.state.user ? (
              <div>
                <Header
                  user={this.state.user}
                  userImages={this.state.userImages}
                  userVideos={this.state.userVideos}
                  profileImage={this.state.profileImage}
                  userUploadedFile={this.userUploadedFile}
                  videoIconClicked={this.state.videoIconClicked}
                  journalIconClicked={this.state.journalIconClicked}
                  journals={this.state.journals}
                />

                <Main
                  userImages={this.state.userImages}
                  userVideos={this.state.userVideos}
                  deleteItem={this.deleteItem}
                  iconToggle={this.iconToggle}
                  journalIconClicked={this.journalIconClicked}
                />
              </div>
            ) : (
              <LandingPage />
            )}
          </Route>
      </Router>
    );
  }
}

export default App;