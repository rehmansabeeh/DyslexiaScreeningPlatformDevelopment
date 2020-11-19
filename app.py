from flask import Flask, render_template, url_for, request, session, redirect
from flask_pymongo import PyMongo
import bcrypt


app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'TESTLOGIN'
app.config['MONGO_URI'] = "mongodb+srv://sabeeh:sabeeh123@cluster0.etpsv.gcp.mongodb.net/TESTLOGIN?retryWrites=true&w=majority"
session = {}
mongo = PyMongo(app)


@app.route('/')
def index():
    if 'username' in session:
        print("successful")
    # return render_template("index.html")
    return render_template("LoginScreen.html")


@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    lusers = users.find_one({'name': request.form['username']})
    if lusers:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), lusers['password']) == lusers['password']:
            session['username'] = request.form['username']
            return ("Login is successful")
    else:
        print("invalid credentials")
        return redirect(url_for('index'))


@app.route('/register1', methods=['POST', 'GET'])
def register_1():
    if request.method == 'POST':
        users = mongo.db.register1
        users.insert(
            {'name': request.form['lemail']})
        return redirect(url_for('register_2'))
    else:
        return render_template('DyslexiaScreen_After_1.html')


@app.route('/register2', methods=['POST', 'GET'])
def register_2():
    return render_template("DyslexiaScreen_After_2.html")


@app.route('/register3', methods=['POST', 'GET'])
def register_3():
    return render_template("DyslexiaScreen_After_3.html")


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
