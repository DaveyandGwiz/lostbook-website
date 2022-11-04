/* global monogatari */

// Define the messages used in the game
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});
// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
});
// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({
});
// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
});
// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
});
// Define the music used in the game.
monogatari.assets ('music', {
});
// Define the voice files used in the game.
monogatari.assets ('voices', {
});
// Define the sounds used in the game.
monogatari.assets ('sounds', {
});
// Define the videos used in the game.
monogatari.assets ('videos', {
});
// Define the images used in the game.
monogatari.assets ('images', {
});
// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
});
// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'd': {
    	name: 'Depressed Redditor',
    	color: '#ffa500'
    },
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		// I think I can put my Pokemon choice box here and then the options to jump to after 'start':[]
		{
        	'Choice': {
        		'Dialog': 'Choose your starter Pokemon',
        			'Bulbasaur': {
        				'Text': 'Bulbasaur',
        				'Do': 'jump Bulbasaur'
        			},
        			'Charmander': {
        				'Text': 'Charmander',
        				'Do': 'jump Charmander'
        			},
        			'Squirtle': {
                    	'Text': 'Squirtle',
        			}
        	}
     	},
        'd Ive had a few bad days at work in a row that with each day theyre getting worse; my fuse is getting shorter',
         'show scene url("assets/scenes/magic.png")',
        'show notification Welcome',

		// Here we open choice
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		} // Here we close choice
	],
	// The sections we jump to go after 'start':[]
	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],
	// Pokemon options
	'Charmander': [
    	'y CHARMANDER-CHAR!!!',
    	'end'
    ],
    'Bulbasaur': [
    	'y Bulba...SAUR!!!',
		'end'
    ]

});