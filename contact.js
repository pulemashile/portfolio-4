function handleFormSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

   fetch("https://formspree.io/f/mpzvkqlo", 
    {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }
)
.then( response => response.json())
.then( data => {
    console.log(data);
    if(data.ok) {
        alert('Email successfully sent')
    }
}) 
}
