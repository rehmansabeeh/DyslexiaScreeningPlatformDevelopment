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

        # selected_gender = request.form['selected']
        # print(selected_gender)
        return redirect(url_for('create_profile_2'))

    else:
        return render_template('DyslexiaScreen1.html')


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():
    print("methord is : ", request.method)
    if request.method == 'POST':
        print("HEREERHEHR")
        return redirect(url_for('q1start'))
    else:
        return render_template('DyslexiaScreen2.html')


@app.route('/q1start', methods=['POST', 'GET'])
def q1start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q1'))
    else:
        return render_template("test1_start_page.html")


@app.route('/q1', methods=['POST', 'GET'])
def q1():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q2start'))
    else:
        return render_template("screen2.html")


@app.route('/q2start', methods=['POST', 'GET'])
def q2start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q2'))
    else:
        return render_template("test2_start_page.html")


@app.route('/q2', methods=['POST', 'GET'])
def q2():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q3start'))
    else:
        return render_template("screen3.html")


@app.route('/q3start', methods=['POST', 'GET'])
def q3start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q3'))
    else:
        return render_template("test5_start_page.html")


@app.route('/q3', methods=['POST', 'GET'])
def q3():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q4start'))
    else:
        return render_template("screen4.html")


@app.route('/q4start', methods=['POST', 'GET'])
def q4start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q4'))
    else:
        return render_template("test6_start_page.html")


@app.route('/q4', methods=['POST', 'GET'])
def q4():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q5start'))
    else:
        return render_template("screen5.html")


@app.route('/q5start', methods=['POST', 'GET'])
def q5start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q5'))
    else:
        return render_template("test7_start_page.html")


@app.route('/q5', methods=['POST', 'GET'])
def q5():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q6start'))
    else:
        return render_template("screen6.html")


@app.route('/q6start', methods=['POST', 'GET'])
def q6start():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q6'))
    else:
        return render_template("test8_start_page.html")


@app.route('/q6', methods=['POST', 'GET'])
def q6():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q7'))
    else:
        return render_template("screen7.html")


@app.route('/q7', methods=['POST', 'GET'])
def q7():
    print("methord is : ", request.method)
    if request.method == 'POST':
        return redirect(url_for('q7'))
    else:
        return render_template("screen8.html")


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
