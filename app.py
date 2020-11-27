from flask import Flask, render_template, url_for, request, session, redirect
from flask_pymongo import PyMongo
import bcrypt
import json

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'TESTLOGIN'
app.config['MONGO_URI'] = "mongodb+srv://sabeeh:sabeeh123@cluster0.etpsv.gcp.mongodb.net/TESTLOGIN?retryWrites=true&w=majority"
session = {}
mongo = PyMongo(app)
abc = {"name": "Sabeeh"}


@app.route('/')
def index():
    if 'username' in session:
        print("successful")
    return render_template("LoginScreen.html", data=abc)


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


@app.route('/temp', methods=['POST', 'GET'])
def temp():
    print(request.method)
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name': request.form['username']})
        if existing_user is None:
            hashpass = bcrypt.hashpw(
                request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            users.insert(
                {'name': request.form['username'], 'password': hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        return 'That username already exists!'
    else:
        return render_template('register.html', data=abc)


@app.route('/register1', methods=['POST', 'GET'])
def register_1():
    if request.method == 'POST':
        print(request.form['lemail'])
        return redirect(url_for('register_2'))
    else:
        return render_template('DyslexiaScreen_After_1.html')


@app.route('/register2', methods=['POST', 'GET'])
def register_2():
    print("register 2", request.method)
    if request.method == "POST":
        print("after clicking")
        return redirect(url_for('register_3'))
    else:
        return render_template("DyslexiaScreen_After_2.html")
    # print(request.method)
    # return render_template("DyslexiaScreen_After_2.html")


@app.route('/register3', methods=['POST', 'GET'])
def register_3():
    print("register 3", request.method)
    if request.method == "POST":
        print("after clicking")
        return redirect(url_for('register_4'))
    else:
        return render_template("DyslexiaScreen_After_3.html")


@app.route('/register4', methods=['POST', 'GET'])
def register_4():
    print("register 4", request.method)
    if request.method == "POST":
        print("after clicking")
        return redirect(url_for('create_profile_1'))
    else:
        return render_template("DyslexiaScreen_After_4.html")


# @app.route('/create_profile_1', methods=['POST', 'GET'])
# def create_profile_1():
#     if request.method == 'POST':
#         file_val = request.files['file']
#     return render_template("DyslexiaScreen1.html")

@app.route('/create_profile_1', methods=['POST', 'GET'])
def create_profile_1():
    print("method is : ", request.method)
    # users = mongo.db.users
    # lusers = users.find_one({'name': request.form['username']})
    if request.method == 'POST':
        # month = request.form['dob-month']
        # name = request.form['lname']
        # year = request.form['dob-year']
        # day = request.form['dob-day']

        selected_gender = request.form['selected']
        print(selected_gender)
        return redirect(url_for('create_profile_2'))

    else:
        return render_template('DyslexiaScreen1.html')


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():
    print("methord is : ", request.method)
    if request.method == 'POST':
        print("HEREERHEHR")
        return redirect(url_for('q1'))
    else:
        return render_template('DyslexiaScreen2.html')


@app.route('/q1', methods=['POST', 'GET'])
def q1():
    return render_template("screen2.html")


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
