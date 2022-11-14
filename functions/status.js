exports.handler = async (event, context) => {
	const data = JSON.parse(event.body)

	function getstatus() {
		const xhr = new XMLHttpRequest()
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				return xhr.status === 200 ? "ok" : "error"
			}
		}
		xhr.open('GET', data)
		xhr.send()
	}

	const status = getstatus()
	console.log(status)

	if (status == "ok") {
		document.write('OK')
		      return {
        statusCode: 200,
      }
	} else {
		document.write('Error')
		        statusCode: 400,
      }
	}


}
