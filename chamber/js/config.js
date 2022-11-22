var config = {
	MY_KEY : 'eca2e7203a10b67fdba7623d59464749'
}

function calcWindChill(wind, temp)
{
    return Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
}
