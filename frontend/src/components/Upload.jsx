import React, { Component } from 'react';
import FileUploadProgress from 'react-fileupload-progress';
import 'react-select/dist/react-select.css';
import SimpleMap from "./SimpleMap"
import SelectSpecies from './SelectSpecies.jsx';
	
class Upload extends Component {

	formGetter(){
		return new FormData(document.getElementById('customForm'));
	}

	customFormRenderer(onSubmit){
		return (
		  <form id='customForm' style={{marginBottom: '15px'}}>
		    <input type="file" name='file' id="exampleInputFile" />
		    <button type="button" onClick={onSubmit}>Upload</button>
		  </form>
		);
	}

	render() {

		return (
			<div>
				<h1>Add a recording to the Cetacean Communication Database</h1>
				<FileUploadProgress key='ex1' url='http://localhost:3000/api/upload'
					onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
					onLoad={ (e, request) => {console.log('load', e, request);}}
					onError={ (e, request) => {console.log('error', e, request);}}
					onAbort={ (e, request) => {console.log('abort', e, request);}}
					formGetter={this.formGetter.bind(this)}
		      		formRenderer={this.customFormRenderer.bind(this)}
		        />
				<SelectSpecies />
		    	<SimpleMap/>
		    	<input 
		    		type="date"
		    		required
		    		pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
		    	<input
		    		defaultValue="Song" />
			</div>
		)
	}
}

export default Upload;