//! elements
const dropZone = document.querySelector('.drop-zone');
const browseBtn = document.querySelector('#browseBtn');
const fileInput = document.querySelector('#fileInput');

//! utils
const host = ''; // API url
const uploadUrl = `${host}api/files`;

//! listeners
//*============= drag n drop functionals =============//
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (!dropZone.classList.contains('dragged')) {
        dropZone.classList.add('dragged');
    }
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragged');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragged');

    //* get the files from the event prarm
    const files = e.dataTransfer.files;
    if (files.length) {
        fileInput.files = files;
        uploadFile();
    }
});

//*============= file selector functionals =============//

fileInput.addEventListener('change', () => {
    uploadFile();
});

browseBtn.addEventListener('click', () => {
    fileInput.click();
});

const uploadFile = () => {
    const files = fileInput.files[0]; // only get the first file
    const formData = new FormData();
    formData.append('myfile', file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    };
    xhr.open('POST', uploadUrl);
    xhr.send(formData);
};
