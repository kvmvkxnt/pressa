import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './Store/index.js';
//import './index.scss';

//fonts
//import "./Assets/Fonts/SFProDisplay-Medium.eot";
//import "./Assets/Fonts/SFProDisplay-Medium.woff2";
//import "./Assets/Fonts/SFProDisplay-Medium.woff";
//import "./Assets/Fonts/SFProDisplay-Medium.ttf";
//import "./Assets/Fonts/SFProDisplay-Heavy.eot";
//import "./Assets/Fonts/SFProDisplay-Heavy.woff2";
//import "./Assets/Fonts/SFProDisplay-Heavy.woff";
//import "./Assets/Fonts/SFProDisplay-Heavy.ttf";
//import "./Assets/Fonts/SFProDisplay-UltralightItalic.eot";
//import "./Assets/Fonts/SFProDisplay-UltralightItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-UltralightItalic.woff";
//import "./Assets/Fonts/SFProDisplay-UltralightItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-RegularItalic.eot";
//import "./Assets/Fonts/SFProDisplay-RegularItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-RegularItalic.woff";
//import "./Assets/Fonts/SFProDisplay-RegularItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-Thin.eot";
//import "./Assets/Fonts/SFProDisplay-Thin.woff2";
//import "./Assets/Fonts/SFProDisplay-Thin.woff";
//import "./Assets/Fonts/SFProDisplay-Thin.ttf";
//import "./Assets/Fonts/SFProDisplay-Light.eot";
//import "./Assets/Fonts/SFProDisplay-Light.woff2";
//import "./Assets/Fonts/SFProDisplay-Light.woff";
//import "./Assets/Fonts/SFProDisplay-Light.ttf";
//import "./Assets/Fonts/SFProDisplay-BlackItalic.eot";
//import "./Assets/Fonts/SFProDisplay-BlackItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-BlackItalic.woff";
//import "./Assets/Fonts/SFProDisplay-BlackItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-Bold.eot";
//import "./Assets/Fonts/SFProDisplay-Bold.woff2";
//import "./Assets/Fonts/SFProDisplay-Bold.woff";
//import "./Assets/Fonts/SFProDisplay-Bold.ttf";
//import "./Assets/Fonts/SFProDisplay-Black.eot";
//import "./Assets/Fonts/SFProDisplay-Black.woff2";
//import "./Assets/Fonts/SFProDisplay-Black.woff";
//import "./Assets/Fonts/SFProDisplay-Black.ttf";
//import "./Assets/Fonts/SFProDisplay-SemiboldItalic.eot";
//import "./Assets/Fonts/SFProDisplay-SemiboldItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-SemiboldItalic.woff";
//import "./Assets/Fonts/SFProDisplay-SemiboldItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-Ultralight.eot";
//import "./Assets/Fonts/SFProDisplay-Ultralight.woff2";
//import "./Assets/Fonts/SFProDisplay-Ultralight.woff";
//import "./Assets/Fonts/SFProDisplay-Ultralight.ttf";
//import "./Assets/Fonts/SFProDisplay-LightItalic.eot";
//import "./Assets/Fonts/SFProDisplay-LightItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-LightItalic.woff";
//import "./Assets/Fonts/SFProDisplay-LightItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-ThinItalic.eot";
//import "./Assets/Fonts/SFProDisplay-ThinItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-ThinItalic.woff";
//import "./Assets/Fonts/SFProDisplay-ThinItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-MediumItalic.eot";
//import "./Assets/Fonts/SFProDisplay-MediumItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-MediumItalic.woff";
//import "./Assets/Fonts/SFProDisplay-MediumItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-Semibold.eot";
//import "./Assets/Fonts/SFProDisplay-Semibold.woff2";
//import "./Assets/Fonts/SFProDisplay-Semibold.woff";
//import "./Assets/Fonts/SFProDisplay-Semibold.ttf";
//import "./Assets/Fonts/SFProDisplay-HeavyItalic.eot";
//import "./Assets/Fonts/SFProDisplay-HeavyItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-HeavyItalic.woff";
//import "./Assets/Fonts/SFProDisplay-HeavyItalic.ttf";
//import "./Assets/Fonts/SFProDisplay-Regular.eot";
//import "./Assets/Fonts/SFProDisplay-Regular.woff2";
//import "./Assets/Fonts/SFProDisplay-Regular.woff";
//import "./Assets/Fonts/SFProDisplay-Regular.ttf";
//import "./Assets/Fonts/SFProDisplay-BoldItalic.eot";
//import "./Assets/Fonts/SFProDisplay-BoldItalic.woff2";
//import "./Assets/Fonts/SFProDisplay-BoldItalic.woff";
//import "./Assets/Fonts/SFProDisplay-BoldItalic.ttf";
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-regular.eot';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-regular.ttf';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-regular.svg';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-500.eot';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-500.woff2';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-500.woff';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-500.ttf';
//import './Assets/Fonts/roboto-v30-latin-ext_latin_cyrillic-ext_cyrillic-500.svg';
//import './Assets/Fonts/bebasneuethin.woff2';
//import './Assets/Fonts/bebasneuethin.woff';
//import './Assets/Fonts/bebasneuethin.ttf';
//import './Assets/Fonts/bebasneuelight.ttf';
//import './Assets/Fonts/bebasneuelight.woff';
//import './Assets/Fonts/bebasneuelight.woff2';
//import './Assets/Fonts/bebasneuebook.woff2';
//import './Assets/Fonts/bebasneuebook.woff';
//import './Assets/Fonts/bebasneuebook.ttf';
//import './Assets/Fonts/bebasneueregular.ttf';
//import './Assets/Fonts/bebasneueregular.woff';
//import './Assets/Fonts/bebasneueregular.woff2';
//import './Assets/Fonts/bebasneuebold.woff2';
//import './Assets/Fonts/bebasneuebold.woff';
//import './Assets/Fonts/bebasneuebold.ttf';

// css
import './Scss/Main.scss';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
