import { useCallback } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";
import "typeface-rubik";
import "@fontsource/ibm-plex-mono";
import { blogCollection } from "./blogCollection";

import logo from "./assets/logo-small.png";

const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dobro-powraca.firebaseapp.com",
  projectId: "dobro-powraca",
  storageBucket: "dobro-powraca.appspot.com",
  messagingSenderId: "1055073743101",
  appId: "1:1055073743101:web:3f0ab40017173363000e94",
  measurementId: "G-X03CPLL3DC",
};

function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (
        ![
          "lukasz.kaczmarek.codedev@gmail.com",
          ["dobro.powraca.czernichow@gmail.com"],
        ].includes(user?.email) ||
        !user?.emailVerified
      ) {
        throw Error("Brak uprawnień");
      }

      console.log("Allowing access to", user?.email);
      // This is an example of retrieving async data related to the user
      // and storing it in the controller's extra field.
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  return (
    <FirebaseCMSApp
      name={"DOBRO POWRACA - panel administratora"}
      authentication={myAuthenticator}
      collections={[blogCollection]}
      firebaseConfig={firebaseConfig}
      logo={logo}
    />
  );
}

export default App;
