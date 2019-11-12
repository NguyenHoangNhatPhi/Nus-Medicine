# [React Native](https://facebook.github.io/react-native/) &middot;  [![Circle CI Status](https://circleci.com/gh/facebook/react-native.svg?style=shield)](https://circleci.com/gh/facebook/react-native) [![Build status](https://ci.appveyor.com/api/projects/status/g8d58ipi3auqdtrk/branch/master?svg=true)](https://ci.appveyor.com/project/facebook/react-native/branch/master) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

Instruction for setup and running the Nus Medicine Application.

## Requirements

Follow these instructions in the website [React Native](https://facebook.github.io/react-native/docs/getting-started) before going to the next step.

Supported target operating systems are >= Android 4.1 (API 16) and >= iOS 9.0.

IDE recommendation : Visual Code.



## When you dowloaded sourcode , step by stee to setup .

1. Install  librarys  from npm by command line :  npm install

2. For IOS, Found at ios/Podfile and run command line : pod install (If your computer don't setup COCOAPODS , please read the guide here [COCOAPODS](https://cocoapods.org/)).

3. Generate APK file for Android : 

- Found at your_project/android 

- Run command line :  ./gradlew assembleRelease ( release file ) and ./gradlew assembleDebug (debug file).

4. You can replicate the dev environment by change end point into file path :  src/configs/api.js.

5. You can run the application on Simulator on IOS and Android .

- For IOS : you open the file path  your_project/ios/nusmedicine.xcworkspace -> select simulator  and press run button in Xcode.

- For Android : you open Android Studio -> open the file path your_project/android in Android Studio  -> select simulator  and press run button in  Android Studio.