obfuscate = function(string){
	i = 0;
	obfuscatedString = "";
	while(string.length > i){
		/**
		 * Get the unicode value of a character
		 */
		code = string.charCodeAt(i) + 13

		/**
		 * Some gibberish string
		 */
		gibberishString = "DENUI"

		/**
		 * Seperate each unicode value by gibberish string
		 */
		obfuscatedString += code + gibberishString
		i++
	}

	return "https://extension.**********.com/?res=" + obfuscatedString + "&hl=en-US&v=" + string + "&type=track&lang=en&name&kind&fmt=1";
}

//Youtube Video ID
obfuscate("9Sc-ir2UwGU");

//Result
//https://extension.**********.com/?res=70DENUI96DENUI112DENUI58DENUI118DENUI127DENUI63DENUI98DENUI132DENUI84DENUI98DENUI&hl=en-US&v=9Sc-ir2UwGU&type=track&lang=en&name&kind&fmt=1