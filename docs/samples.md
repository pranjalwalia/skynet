
# Project: Skynet Samples



### End-point- `/api/files`

### Description- POST: File Upload Endpoint


### Access: `public`


### PAYLOAD

- `myFile`: File to upload via multer multipart form parser 

## Headers

- `Content-Type: multipart/form-data`

## DESCRIPTION
- Default endpoint for file upload 
- FrontEnd makes a request to send multipart form data 
- multipart form accepts field `myfile` only for upload

Method: POST
>```
>http://localhost:5000/api/files
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|myfile|/home/pranjal/Pictures/nPxMw4m.jpg|file|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃



## End-point: `/files/{ID}` 


### Description: GET- Fetchrouter file 

### params

- `ID`: query the db by ID assigned to file 

### Access: `public`


### Headers:

- `Content-Type: application/json`


### DESCRIPTION:

- fetch file from the host 
- file uuid serves as query param


Method: GET



>```
>http://localhost:5000/files/5aa78d9e-ba5a-408e-ad79-73a61c960fe5
>```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: `/api/files/send` 

### Description: POST- Invoke Email Service

## Access: `public`

## Headers: `Content-Type: application/json`

## PAYLOAD

- `uuid`: ID of the file as stored in mongo, fetches the download link
- `destination`: download link reciever's email
- `source`: file senders email


### Description

- Invokes sendInBlue via nodemailer 
- Invoked client side


Method: POST


>```
>http://localhost:5000/api/files/send
>```


### Body (**raw**)

```json
{
    "uuid" : "5a828d48-2610-413b-8b3c-d53743be10be",
    "destination" : "pranjalwalia77@gmail.com",
    "source" : "pranjalwaliagamingfefefee@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________
Author: [Pranjal Walia](https://github.com/masterchief01)

