import React from "react";
import ReactDOM from "react-dom/client";
// Just like react-redux gives us Provider component that will wrap the whole app,
// similarly we get PersistGate from redux-persist. We need it to wrap around the whole app:
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./app/store";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {/* <Counter /> */}
                <div>Hello World!</div>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
