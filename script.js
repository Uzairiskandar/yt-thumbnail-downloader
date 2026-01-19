document.getElementById('getBtn').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(url);

    if (videoId) {
        // YouTube Image Server URL patterns
        const maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        const stdResUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

        // Update Images
        document.getElementById('maxRes').src = maxResUrl;
        document.getElementById('stdRes').src = stdResUrl;

        // Update Download Links
        document.getElementById('maxResDownload').href = maxResUrl;
        document.getElementById('stdResDownload').href = stdResUrl;

        // Show Result Area
        document.getElementById('resultArea').style.display = 'block';
    } else {
        alert("Please enter a valid YouTube URL");
    }
});

function extractVideoId(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}