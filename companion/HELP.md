## Avoce RT Limited
This module connects to Landscape Transmission Automation

### Configuration
* This requires that your Avocet Landscape system be configured with the latest cues panel controller
* You must also configure the python3 process companion_cuespanel.py to be started at boot.
* companion-module-avocet-landscape/companion/HELP.md

### Available actions
* ButtonPressed - accepts the button name as a parameter
* ButtonReleased - accepts the button name as a parameter
* The button name determines the action performed by the Landscape and there are specific to each site.
* Standard buttons names include HOLD, TAKE, MCUE, PAUSE
