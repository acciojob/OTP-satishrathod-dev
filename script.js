//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
	document.addEventListener('DOMContentLoaded', function() {
		let inputs = document.getElementsByClassName('code');

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('input', function() {
				let nextInput = this.nextElementSibling;

				if(this.value.length === 1 && nextInput){
					nextInput.focus();
				}
			});
			inputs[i].addEventListener('keydown', function(event) {
				if(event.key === 'Backspace' && this.value.length === 0) {
					let prevInput = this.previousElementSibling;

					if(prevInput) {
						prevInput.focus();
					}
				}
			});
		}
	});
})