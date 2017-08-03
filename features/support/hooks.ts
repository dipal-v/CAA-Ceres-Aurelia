import {defineSupportCode} from 'cucumber';

defineSupportCode(function({After}){
	After(function(){
		//return this.driver.quit();
		console.log('Done');
	});
});
