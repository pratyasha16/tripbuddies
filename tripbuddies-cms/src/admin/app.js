const config = {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    
    translations: { en: { 'app.components.LeftMenu.navbrand.title': 'Trip buddies',
                          'app.components.LeftMenu.navbrand.title': 'Trip buddies',
                          'Auth.form.welcome.title': 'Welcome to Trip buddies',
                          'Auth.form.welcome.subtitle': 'Log in to workspace',
                     } },
                     theme: {
                        colors: {
                          alternative100: '#f6ecfc',
                          alternative200: '#e0c1f4',
                          alternative500: '#ac73e6',
                          alternative600: '#9736e8',
                          alternative700: '#8312d1',
                          danger700: '#b72b1a'
                        },
                      },
  };
  
  const bootstrap = (app) => {
    console.log(app);
  };
  
  export default {
    config,
    bootstrap,
  };
  