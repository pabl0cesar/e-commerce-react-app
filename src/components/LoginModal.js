import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LoginModal() {

    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            // document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/dashboard',
        signInOptions: [{
          // Leave the lines as is for the providers you want to offer your users.
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'AR',
        }
        ],
        // Terms of service url.
        tosUrl: '/tos',
        // Privacy policy url.
        privacyPolicyUrl: '/privacy-policy'
      };

    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    )
}