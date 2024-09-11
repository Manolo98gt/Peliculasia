document.getElementById('generate-button').addEventListener('click', async () => {
    const textInput = document.getElementById('text-input').value;
    const duration = document.getElementById('duration-select').value;
    const location = document.getElementById('location-select').value;
    const characters = document.getElementById('characters-select').value;
    const option1 = document.getElementById('option1-select').value;
    const option2 = document.getElementById('option2-select').value;

    if (!textInput.trim()) {
        alert('Por favor, introduce algún texto para generar el video.');
        return;
    }

    try {
        // Configurar el payload para la API de D-ID
        const response = await fetch('https://api.d-id.com/generate-video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer bWFudWVsOThmbEBnbWFpbC5jb20:VxxFSiMlsTBIqThqrXOG8Y' // Reemplaza NUEVA_API_KEY con tu nueva clave
            },
            body: JSON.stringify({
                script: textInput,
                duration: duration,
                location: location,
                characters: characters,
                option1: option1,
                option2: option2
            })
        });

        if (!response.ok) {
            throw new Error('Error al generar el video');
        }

        const data = await response.json();
        const videoUrl = data.video_url;

        // Mostrar el video en la página
        const videoElement = document.getElementById('generated-video');
        videoElement.src = videoUrl;
        document.getElementById('video-output').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al generar el video. Inténtalo de nuevo.');
    }
});
