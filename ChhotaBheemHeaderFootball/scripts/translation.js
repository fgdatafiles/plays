(function (exports)
{
    exports.drawTranslationScreen = function (){
    };

    var translateImages = function ()
    {
        translations.images.forEach(function (imageName)
        {
            var img = new Image();
            img.src = 'Assets/Images/' + exports.language + '/' + imageName;
            exports.resources[imageName] = img;
        });
    };

    var translations = {};

    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");

        var params = {}, tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])]
                = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    exports.translate = function (text){
        if(text in translations && exports.language !== 'English'){
            return translations[text][exports.language];
        }
        else {
            return text;
        }
    };

    var locales = {
        'en': 'English',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'pt': 'Portuguese'
    };
    var curLocale = getQueryParams(document.location.search)['locale'];

    var selectLanguage = function (language){
        exports.language = language;
        if(exports.loaded === true){
            exports.screen = 'splash';
            exports.addAllButtons();
            exports.initTree();
        }
        else {
            exports.screen = '';
        }
        if(exports.language !== 'English'){
            translateImages();
        }
    };
    exports.initTranslateScreen = function ()
    {
        exports.draw();
        
        var callback = function (translations){
            translations.languages.forEach(function (language, i){

                if(curLocale in locales){
                    selectLanguage(locales[curLocale]);
                }

                exports.addButton('', 320, 200 + i * 60,
                    function (){
                        return exports.screen === 'translation';
                    },
                    function (){
                        selectLanguage(language);
                    },
                    true,
                    language.toLowerCase() + '_btn.png'
                    //'translation_buttons.png'
                );
            });

            if(translations.languages.length === 1){
                exports.language = translations.languages[0];
                if(exports.loaded === true){
                    exports.screen = 'splash';
                    exports.addAllButtons();
                    exports.initTree();
                }
                else {
                    exports.screen = '';
                }
                if(exports.language !== 'English'){
                    translateImages();
                }
            }
        };

        if(location.protocol !== 'file:'){
            var XHR = new XMLHttpRequest();
            XHR.open('GET', 'Translations/translations.json', false);
            XHR.onreadystatechange = function (){
                if(XHR.status === 200 && XHR.readyState === 4){
                    console.log(XHR.responseText);
                    translations = JSON.parse(XHR.responseText);
                    callback(translations);
                }
            };
            XHR.send();
        }
        else {
            translations = {"languages": ["English", "French"], "images": [], "Select": {"French": "Selezionare"}};
            callback(translations);
        }
    };

})(window.head);