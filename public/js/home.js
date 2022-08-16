window.addEventListener("load", () => {
    function sendData() {
        const XHR = new XMLHttpRequest()

        const FD = new FormData(form)

        XHR.addEventListener("load", (event) => {
            alert(event.target.responseText)
        })

        XHR.addEventListener("error", (event) => {
            alert("ERROR: Something went wrong")
        })

        XHR.open("POST", "home.html/dates.php")

        XHR.send(FD)
    }

    const form = document.getElementById("exerciseform")

    form.addEventListener("submit", (event) => {
        event.preventDefault
        sendData()
    })
})