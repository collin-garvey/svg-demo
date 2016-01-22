/**
 * TOOLS USED
 *
 * SVG Store
 * Combines multiple svg files into one using <symbol> elements
 * @link https://github.com/w0rm/gulp-svgstore
 *
 * SVGmin
 * Gulp wrapper/adapter for SVGO
 * @link https://github.com/sindresorhus/grunt-svgmin
 *
 * SVGO
 * *Actually* minifies the SVG files
 * @link https://github.com/svg/svgo
 */

var gulp = require('gulp');
var rename = require('gulp-rename');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

var config = {
    paths: {
        svg: './svg/',
        svg_source: './svg/source/*.svg'
    },
    svg_output: 'symbols.svg'
};

gulp.task('svg', function(){

    gulp.src(config.paths.svg_source)
        .pipe(svgmin({
            plugins: [
                { convertStyleToAttrs: false }
            ],

            // js2svg is simply used to (sort of) prettify the symbols.svg for this demo
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename(config.svg_output))
        .pipe(gulp.dest(config.paths.svg));
});

/*
SVGO / SVGMin "Plugins" - All boolean values
cleanupAttrs
removeDoctype
removeXMLProcInst
removeComments
removeMetadata
removeTitle
removeDesc
removeUselessDefs
removeEmptyAttrs
removeHiddenElems
removeEmptyText
removeEmptyContainers
removeViewBox
cleanUpEnableBackground
convertStyleToAttrs
convertColors
convertPathData
removeUnknownsAndDefaults
removeNonInheritableGroupAttrs
removeUselessStrokeAndFill
removeUnusedNS
cleanupIDs
cleanupNumericValues
moveElemsAttrsToGroup
moveGroupAttrsToElems
collapseGroups
removeRasterImages
mergePaths
sortAttrs
transformsWithOnePath
removeDimensions
removeAttrs
addClassesToSVGElement
removeStyleElement
*/