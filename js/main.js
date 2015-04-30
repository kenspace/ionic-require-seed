require.config({
    waitSeconds: 20,
    paths: {
        'ionic': '../lib/ionic/js/ionic.bundle',
        'app':'app'
    },
    shim: {
        'ionic': {
            exports: 'ionic'
        }
    }
});

require([
        'ionic',
        'app'
    ],
    function (ionic) {
        console.log("ionic seed ok");
    });