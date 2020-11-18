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


@app.route('/register', methods=['POST', 'GET'])
def register():
    print(request.method)
    if request.method == 'POST':
        users = mongo.db.users
        e_u = users.find_one({'name': request.form['username']})
        if e_u is None:
            hashpassword = bcrypt.hashpw(
                request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            users.insert(
                {'name': request.form['username'], 'password': hashpassword})
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        else:
            return 'That username already exists'
    else:
        return render_template('register.html')


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
