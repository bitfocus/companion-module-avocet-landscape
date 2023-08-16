const checkFeedbacks = require('@companion-module/base');

module.exports = function (self)
{

	// Print the list of properties
	if ( false )
	{
		let methods = new Set();

		let obj = self;
		console.log( "Class name", self.constructor.name );
		console.log( 'Getting methods' );
	//	while( obj = Reflect.getPrototypeOf( obj))
		do
		{
			let keys = Reflect.ownKeys(obj);
			keys.forEach((k) => methods.add( k ));
		} while( obj = Reflect.getPrototypeOf( obj));

		for( entry of methods ){ console.log( "Property ", entry ); }
	}
	self.m_ticks++;

	// Need to do this in a loop for each button in the list/dictionary as there is only one
	// instance of the module

	flag = false;
	Object.entries( self.m_list ).forEach( entry =>
	{
		const [key, value ] = entry;
//		console.log( "Checking ", key, value );
		if ( value[ "m_is_flashing" ] == true )
		{
//			console.log( "Checking ", key, value );
		
			if ( self.m_ticks >= value[ "m_flash_change_tick" ] )
			{
				value[ "m_flash_change_tick" ] = self.m_ticks + self.m_flash_hcycle_ticks;
				value[ "m_lamp_on" ] = !value[ "m_lamp_on" ];
//				console.log( "Perops : change time for ", key );
				flag = true;
			}
		}
	});

	if ( flag == true ) self.checkFeedbacks('ChannelState');
}


