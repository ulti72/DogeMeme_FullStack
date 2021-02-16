**Doge Meme** is a full featured web app designed to submit memes and view latest 100 memes. The frontend is built on [Flask](https://flask.palletsprojects.com/en/1.1.x/) and utilizes the [Jinja](https://jinja.palletsprojects.com/en/2.11.x/) template. The backend implements a express and Node with a MongoDB datastore. 

**Live Demo**: https://cheems72.herokuapp.com/

---
## Requirements

You need [Node.js](https://nodejs.org/en/) installed (>=12.14.1), [Python 3+](https://www.python.org/downloads/) and you'll need [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed and running.


## Getting Started

Download from GitLab:

```bash
$ git clone https://github.com/ulti72/DogeMeme_FullStack.git
$ cd DogeMeme_FullStack
```



Install dependencies:

#### Backend

``` bash
$ cd backend
$ npm install
```

#### Frontend

``` bash
$ cd FRONTEND
$ pip install requirements.txt
```

### Running Doge Meme

#### Backend

``` bash
$ node index.js
```

Point your browser to http://localhost:8081/ to view the backend data.

#### Frontend

``` bash
$ python app.py
```

Point your browser to http://127.0.0.1:5000/ to view the app.


License
-------
Doge Meme is an open source project by [Abhishek kumar](abhishekpro47@gmail.com) that is licensed under [MIT](http://opensource.org/licenses/MIT).
