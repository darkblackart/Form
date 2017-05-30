module.exports = function (config)
{
    config.set({
        files: [
            // Add your files here, this is just an example:
            {pattern: 'script.js', mutated: true, included: false},
            'tests/mutant/**/*.js'
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        htmlReporter: {
            baseDir: 'reports/mutation/html' // this is the default
        },
        reporter: ['clear-text', 'progress','html']
    });
};