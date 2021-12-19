
# React Native Clubhouse clone

<div align="center">
<p>
This is a simple UI clone of Clubhouse mobile application. Scan the qr code below to view on expo
</p>
<img src="./ScreenShots/qrCode.PNG"  />
</div>


### Demo

You can view the app on Expo. Visit  https://expo.dev/@uwemneku/clubhouse-expo or scan the QR code below to view



### Built With


* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://docs.expo.dev/)
* [@react-navigation/native](https://reactnavigation.org/)
* [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)


<!-- ROADMAP -->
## Roadmap

- [x] Add navigation dependencies
- [x] Set up project file structure 
- [x] Add <a href="https://github.com/uwemneku/clubhouse-expo/blob/master/src/Screens/Hallway/components/ActiveRooms.tsx">Active Room Component</a> to displays active club rooms in the hallway)- [ ] Add Additional Templates w/ Examples
- [x] Add a <a href="https://github.com/uwemneku/clubhouse-expo/blob/master/src/Screens/Hallway/Hallway.tsx#L127">swipe listener</a> to hallway screen which opens the back channel screen when activated
- [x] Add some <a href="https://github.com/uwemneku/clubhouse-expo/tree/master/src/components">global app</a>  components
- [x] Add <a href="https://github.com/uwemneku/clubhouse-expo/tree/master/src/Screens/Explore">Explore</a> and <a href="https://github.com/uwemneku/clubhouse-expo/tree/master/src/Screens/RecentlyListenedTo">Recently Listened To</a> screen 
- [x] Add <a href="https://github.com/uwemneku/clubhouse-expo/tree/master/src/Screens/Rooms">Room screen </a>  
- [x] Add <a href="https://github.com/uwemneku/clubhouse-expo/blob/master/src/Screens/Rooms/Rooms.tsx#L48"> Screen</a> and <a href="https://github.com/uwemneku/clubhouse-expo/blob/master/src/components/AppFooter.tsx#L29">Icon</a> animations to the room screen for when users enter, exit or minimize a room 
- [x] Add custom <a href="https://github.com/uwemneku/clubhouse-expo/blob/master/src/components/BottomSheet.tsx">BottomSheet component</a> with proper definition for all Props
- [ ] Finish the profile screen
- [ ] Finish the room screen 
- [ ] Link avatars on screens to open a profile snippet 



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
<p>
Make sure you have <a href="https://reactnative.dev/docs/environment-setup"> react native development environment</a> set up in your system 

Install expo-cli
```sh
    npm install -g expo-cli
```
</a>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/uwemneku/clubhouse-expo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   ```sh
   yarn
   ```

3. Start the App on expo
   ```sh
   expo start
   ```


### Resources
| Topic      | Helpful links Links | How I used It | Code
| ----------- | ----------- |--------------|------------|
| How to close a modal when the back button is pressed      | <a href="https://github.com/react-native-modal/react-native-modal/issues/115">React Native  repository  | The bottomSheet component was rendered inside a modal. I tried using <a href="https://reactnative.dev/docs/backhandler">BackHandler</a> but it failed. This helped me close it when the back button is pressed
| How to make a screen background transparent during navigation   | <a href="https://www.youtube.com/watch?v=NenHL6nBR_4&list=PLS1zufRhr-xjVIR7prTzNqHrKZ0OkGDLH&index=11&t=217s">YouTube Video</a>        |





