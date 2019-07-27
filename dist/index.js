const CLIENT_ID = '482917595357-jsjsbpniot6c12lh9ov329fdkjgl1gku.apps.googleusercontent.com';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.querySelector('#authorize-button');
const signoutButton = document.querySelector('#signout-button');
const content = document.querySelector("#content");
const channelForm = document.querySelector("#channel-form");
const channelInput = document.querySelector("#channel-input");
const videoContainer = document.querySelector("#video-container");

const defaultChannel = "techguyweb";

//load auth library
const handleClientLoad = () => {
  gapi.load('client: auth2', initClient);
}

 //init API CLIENT LIBRARY and set up sign in listeners
 const initClient = () => {
   gapi.client.init({
     discoveryDocs: DISCOVERY_DOCS,
     clientId: CLIENT_ID,
     scope: SCOPES
   }).then(() => {
     // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      //handle initial sign in state
      updateSigninStatus( gapi.auth2.getAuthInstance().isSignedIn.get())
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;

   })
 }

const updateSigninStatus = (isSignedIn) => {
  if (isSignedIn){
    authorizeButton.style.display = 'none';
    signoutButton.style.display = "block";
    content.style.display = "block";
    videoContainer.style.display = "block"; 

    getChannel(defaultChannel) ;

  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    content.style.display = "none";
    videoContainer.style.display = "none"; 
  }
}

const handleAuthClick = () => {
  gapi.auth2.getAuthInstance().signIn();

}

const handleSignoutClick = () => {
  gapi.auth2.getAuthInstance().signOut();
}

//get channel from api

const getChannel = (channel) => {
  console.log(channel)
}