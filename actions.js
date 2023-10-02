const fs = require( 'fs' );

// The "num" parameter was originally used to connect the key press to the button name 
// but was replaced by the button parameter which provides the actual name.
// The declaration was removed but this was kept as an example
// {
// 	id: 'num',
// 	type: 'number',
// 	label: 'Button Id',
// 	default: 5,
// 	min: 0,
// 	max: 100,
// },

module.exports = function (self) {
	self.setActionDefinitions({
		press_action: {
			name: 'ButtonPressed',
			options: [
				{
					id: 'button',
					type: 'textinput',
					label: 'Button Name',
					default: 'not set',
				},
			],
			callback: async (event) => {
				const details = { id:event.options.num, button:event.options.button, action: "pressed", time:Date.now() };
				const json_text = JSON.stringify( details );
				console.log('Button event', json_text );

				fs.writeFile( '/home/companion/python/queue/action.json', json_text, (err) =>
				{
					if ( err ) console.log( 'Error writing to buttons queue' );
				});
			},
		},
		release_action: {
			name: 'ButtonReleased',
			options: [
				{
					id: 'button',
					type: 'textinput',
					label: 'Button Name',
					default: 'not set',
				},
			],
			callback: async (event) => {
				const details = { id:event.options.num, button:event.options.button, action: "released", time:Date.now() };
				const json_text = JSON.stringify( details );
				console.log('Button event', json_text );

				fs.writeFile( '/home/companion/python/queue/action.json', json_text, (err) =>
				{
					if ( err ) console.log( 'Error writing to buttons queue' );
				});
			},
		},
	})
}
