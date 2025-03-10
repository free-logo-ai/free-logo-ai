async function generateLogo() {
    const businessName = document.getElementById("businessName").value;
    const style = document.getElementById("style").value;

    if (!businessName) {
        alert("Please enter a business name.");
        return;
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
            prompt: `A ${style} logo for a business called '${businessName}'`,
            n: 1,
            size: "512x512"
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;

    document.getElementById("logoContainer").innerHTML = `<img src="${imageUrl}" alt="Generated Logo">`;
}
