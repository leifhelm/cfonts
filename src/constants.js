/***************************************************************************************************************************************************************
 *
 * cfonts
 *
 * Sexy fonts for the console. (CLI output)
 *
 * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
 * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
 * @repository  https://github.com/dominikwilkowski/cfonts
 *
 * Constants
 *   CHARS
 *   COLORS
 *   BGCOLORS
 *   GRADIENTCOLORS
 *   ALIGNMENT
 *   FONTFACES
 *   CLIOPTIONS
 *   PACKAGE
 *   HEXTEST
 *
 **************************************************************************************************************************************************************/

'use strict';

const { Chalk } = require('./Chalk.js');


// global defaults
const CHARS = [
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "|",
	"!", "?", ".", "+", "-", "_", "=", "@", "#", "$", "%", "&", "(", ")", "/", ":", ";", ",", " ", "'", "\"",
];

const COLORS = {
	system: 'system',
	black: 'black',
	red: 'red',
	green: 'green',
	yellow: 'yellow',
	blue: 'blue',
	magenta: 'magenta',
	cyan: 'cyan',
	white: 'white',
	gray: 'gray',
	redbright: 'redBright',
	greenbright: 'greenBright',
	yellowbright: 'yellowBright',
	bluebright: 'blueBright',
	magentabright: 'magentaBright',
	cyanbright: 'cyanBright',
	whitebright: 'whiteBright',
};

const BGCOLORS = {
	transparent: 'transparent',
	black: 'black',
	red: 'red',
	green: 'green',
	yellow: 'yellow',
	blue: 'blue',
	magenta: 'magenta',
	cyan: 'cyan',
	white: 'white',
	blackbright: 'blackBright',
	redbright: 'redBright',
	greenbright: 'greenBright',
	yellowbright: 'yellowBright',
	bluebright: 'blueBright',
	magentabright: 'magentaBright',
	cyanbright: 'cyanBright',
	whitebright: 'whiteBright',
};

const GRADIENTCOLORS = {
	transparent: 'transparent',
	black: 'black',
	red: 'red',
	green: 'green',
	yellow: 'yellow',
	blue: 'blue',
	magenta: 'magenta',
	cyan: 'cyan',
	white: 'white',
};

const GRADIENTS = {
	lgbt: [ '#750787', '#004dff', '#008026', '#ffed00', '#ff8c00', '#e40303' ],
	lgbtq: [ '#750787', '#004dff', '#008026', '#ffed00', '#ff8c00', '#e40303' ],
	pride: [ '#750787', '#004dff', '#008026', '#ffed00', '#ff8c00', '#e40303' ],
	agender: [ '#000000', '#b9b9b9', '#ffffff', '#b8f483', '#ffffff', '#b9b9b9', '#000000' ],
	aromantic: [ '#3da542', '#a7d379', '#ffffff', '#a9a9a9', '#000000' ],
	asexual: [ '#000000', '#a3a3a3', '#ffffff', '#800080' ],
	bisexual: [ '#d60270', '#d60270', '#9b4f96', '#0038a8', '#0038a8' ],
	genderfluid: [ '#ff75a2', '#ffffff', '#be18d6', '#000000', '#333ebd' ],
	genderqueer: [ '#b57edc', '#ffffff', '#4a8123' ],
	intersex: [ '#ffd800', '#ffd800', '#7902aa', '#ffd800', '#ffd800' ],
	lesbian: [ '#d52d00', '#ff9a56', '#ffffff', '#d362a4', '#a30262' ],
	nonbinary: [ '#fcf434', '#ffffff', '#9c5cd4', '#2c2c2c' ],
	pansexual: [ '#ff218c', '#ffd800', '#21b1ff' ],
	polysexual: [ '#f61cb9', '#07d569', '#1c92f6' ],
	transgender: [ '#5bcefa', '#f5a9b8', '#ffffff', '#f5a9b8', '#5bcefa' ],
};

const ALIGNMENT = [
	'left',
	'center',
	'right',
];

const FONTFACES = {
	console: 'console',
	block: 'block',
	simpleblock: 'simpleBlock',
	simple: 'simple',
	'3d': '3d',
	simple3d: 'simple3d',
	chrome: 'chrome',
	huge: 'huge',
	shade: 'shade',
	slick: 'slick',
	grid: 'grid',
	pallet: 'pallet',
	tiny: 'tiny',
};

const CLIOPTIONS = {
	'--version': {
		description: 'Use to display the version of cfonts',
		example: '--version',
		short: '-v',
		default: false,
	},
	'--help': {
		description: 'Use to display this help',
		example: '--help',
		short: '-h',
		default: false,
	},
	'--font': {
		description: 'Use to define the font face',
		example: `--font block ${ Chalk.green(`( ${ Object.keys( FONTFACES ).map( font => FONTFACES[ font ] ).join(', ') } )`) }`,
		short: '-f',
		options: Object.keys( FONTFACES ).map( color => FONTFACES[ color ] ),
		default: 'block',
	},
	'--colors': {
		description: 'Use to define the font color',
		example: `--colors red ${ Chalk.green(`( ${ Object.keys( COLORS ).map( color => COLORS[ color ] ).join(', ') }, #ff8800, hex-colors etc... )`) }`,
		short: '-c',
		options: true,
		default: 'system',
	},
	'--background': {
		description: 'Use to define background color',
		example: `--background blue ${ Chalk.green(`( ${ Object.keys( BGCOLORS ).map( bgcolor => BGCOLORS[ bgcolor ] ).join(', ') } )`) }`,
		short: '-b',
		options: Object.keys( BGCOLORS ).map( color => BGCOLORS[ color ] ),
		default: 'transparent',
	},
	'--align': {
		description: 'Use to align your text output',
		example: `--align ${ Chalk.green(`( ${ ALIGNMENT.join(', ') } )`) }`,
		short: '-a',
		options: ALIGNMENT,
		default: 'left',
	},
	'--letter-spacing': {
		description: 'Use to define your letter spacing',
		example: '--letter-spacing 2',
		short: '-l',
		options: true,
		default: undefined,
	},
	'--line-height': {
		description: 'Use to define your line height',
		example: '--line-height 5',
		short: '-z',
		options: true,
		default: undefined,
	},
	'--spaceless': {
		description: 'Use to disable the padding around your output',
		example: '--spaceless',
		short: '-s',
		default: false,
	},
	'--max-length': {
		description: 'Use to define the amount of maximum characters per line',
		example: '--max-length 10',
		short: '-m',
		options: true,
		default: 0,
	},
	'--gradient': {
		description: 'Use to define a start and end color of a gradient',
		example: '--gradient red,blue',
		short: '-g',
		options: true,
		default: false,
	},
	'--independent-gradient': {
		description: 'Use to define that a gradient is applied independently for each line',
		example: '--gradient red,blue --independent-gradient',
		short: '-i',
		default: false,
	},
	'--transition-gradient': {
		description: 'Use to define that a gradient is a transition between the colors',
		example: '--gradient red,blue,green --transition-gradient',
		short: '-t',
		default: false,
	},
	'--env': {
		description: 'Use to define what environment you run CFonts in.',
		example: `--env ${ Chalk.green('"node", "browser"') }`,
		short: '-e',
		options: true,
		default: 'node',
	},
	'--debug': {
		description: 'Use to enable debug mode',
		example: '--debug',
		short: '-d',
		default: false,
	},
	'--debug-level': {
		description: 'Use to define the debug level. The higher, the less debug infos',
		example: '--debug-level 2',
		short: '-x',
		options: true,
		default: 1,
	},
};

const PACKAGE = require('../package.json');

const HEXTEST = RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');


module.exports = exports = {
	CHARS,
	COLORS,
	BGCOLORS,
	GRADIENTCOLORS,
	GRADIENTS,
	ALIGNMENT,
	FONTFACES,
	CLIOPTIONS,
	PACKAGE,
	HEXTEST,
};
