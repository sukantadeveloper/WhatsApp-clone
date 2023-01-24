export const downloadMedia = async (e, link) => {
    e.preventDefault();
    try {
        fetch(link)
        .then(res => res.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.style.display = 'none';
            anchor.href = url;

            const nameSplit = link.split("/");
            const duplicateName = nameSplit.pop();

            anchor.download = "" + duplicateName + "";
            document.body.appendChild(anchor);
            anchor.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.log('Error  downloading the image ', error))

    } catch (error) {
        console.log('Error  downloading the image ', error);
    }
}