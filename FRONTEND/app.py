from flask import Flask, render_template, jsonify , redirect, url_for 
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import InputRequired,URL
from flask_cors import CORS, cross_origin
import requests
import json
app = Flask(__name__) 
app.config['SECRET_KEY'] = 'KingsClan'

class PostMeme(FlaskForm):
	name = StringField('Name',validators = [InputRequired()])
	caption = TextAreaField('Caption',validators = [InputRequired()])
	url = StringField('URL',validators = [InputRequired(),URL(message = 'enter a valid URL')])
CORS(app)

@app.route('/',methods=['GET','POST'])
def form():
	form = PostMeme()

	if form.validate_on_submit():
		data = {"name":form.name.data,"caption":form.caption.data,"url":form.url.data}
		json_object = json.dumps(data)  
		headers = {
    	 'Content-Type': 'application/json',
		}
		response = requests.post('https://doge72.herokuapp.com/memes', headers=headers, data=json_object)
		form.name.data =''
		form.caption.data=''
		form.url.data=''
		return redirect(url_for('form'))

	data_raw = requests.get('http://doge72.herokuapp.com/memes')
	
	return render_template('form.html',form= form,m_name = data_raw.json())
 

if __name__ == '__main__':
	app.run()

