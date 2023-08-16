const { combineRgb } = require('@companion-module/base')

// The "num" parameter was provided as part of the template provided. It was
// removed as no longer used but retained as an example.
// {
// 	id: 'num',
// 	type: 'number',
// 	label: 'Test',
// 	default: 5,
// 	min: 0,
// 	max: 24,
// },

module.exports = async function (self) {
	self.setFeedbackDefinitions({
		ChannelState: {
			name: 'Example Feedback',
			type: 'boolean',
			label: 'Channel State',
			defaultStyle: {
				bgcolor: combineRgb(255, 255, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'button',
					type: 'textinput',
					label: 'Button Name',
					default: 'not set',
				},

			],
			callback: (feedback) => {
				// console.log( "Feedbacks this Class name", self.constructor.name, " Ticks ", self.m_ticks,
				// 		"Button ", feedback.options.button  );

				values = self.m_list[ feedback.options.button ];
			
//				For testing only
					
//				if ( feedback.options.num == 6)
//				{
//					values[ "m_is_flashing" ] = true;
//					values[ "m_lamp_on" ] = true;
//					values[ "m_flash_change_tick" ] = self.m_ticks;
//					console.log( "Lamp set on for ", feedback.options.button );
//				}
//				else if ( feedback.options.num == 4)
//				{
//					values[ "m_is_flashing" ] = false;
//					values[ "m_lamp_on" ] = false;
//					values[ "m_flash_change_tick" ] = self.m_ticks;
//					console.log( "Lamp set off" );
//				}


				if ( values[ "m_ld_lamp_on" ] != values[ "m_lamp_on" ] ) 
				{
					values[ "m_ld_lamp_on" ] = values[ "m_lamp_on" ];
//					console.log( "Lamp changed" );
				}
				return values[ "m_lamp_on" ];
			},
		},
		
		ChannelComms: {
			name: 'Comms State',
			type: 'boolean',
			label: 'Landscape Comms State',
			defaultStyle: {
				bgcolor: combineRgb(0, 160, 0),
				color: combineRgb(0, 0, 0),
				text: "OK",
			},
			options: [
				{
					id: 'button',
					type: 'textinput',
					label: 'Button Name',
					default: 'not set',
				},

			],
			callback: (feedback) => {
				values = self.m_list[ feedback.options.button ];
				if ( values[ "m_ld_lamp_on" ] != values[ "m_lamp_on" ] ) 
				{
					values[ "m_ld_lamp_on" ] = values[ "m_lamp_on" ];
					// console.log( "Comms changed ", values );
				}
				return values[ "m_lamp_on" ];
			},
		},
	})
}
