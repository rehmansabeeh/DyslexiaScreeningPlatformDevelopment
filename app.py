from flask import Flask, render_template, url_for, request, session, redirect, make_response, jsonify
from flask_pymongo import PyMongo
import bcrypt
import json

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'TESTLOGIN'
app.config['MONGO_URI'] = "mongodb+srv://sabeeh:sabeeh123@cluster0.etpsv.gcp.mongodb.net/TESTLOGIN?retryWrites=true&w=majority"
session = {}
mongo = PyMongo(app)

email_on_which_link_is_to_be_sent = []
phone_no_on_which_link_is_to_be_sent = []
score = 0


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print('hello')
    if 'username' in session:
        print("successful")
    return redirect(url_for("create_profile_3"))


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
                {'name': request.form['username'], 'password': hashpass}
            )
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        return 'That username already exists!'
    else:
        return render_template('register.html')


@app.route('/register_1', methods=['POST', 'GET'])
def register_1():
    if request.method == 'POST':

        data = request.get_json(force=True)
        print(data)
        print(data['entered_email_user'])
        print(data['phone_number_user'])
        res = ""
        if(data['entered_email_user'] == '' and data['phone_number_user'] != ''):

            res = make_response(
                jsonify({'message': "successful", 'trajectory': "phone_no"}))

        elif (data['entered_email_user'] != '' and data['phone_number_user'] == ''):

            res = make_response(
                jsonify({'message': "successful", 'trajectory': "email"}))

        return res

    else:
        return render_template('DyslexiaScreen_After_1.html')


@app.route('/register_using_email', methods=['POST', 'GET'])
def register_using_email():
    # print("register 2", request.method)
    # temp = {"email": email_on_which_link_is_to_be_sent[0]}
    print(request.method)
    if request.method == "POST":
        print("after email clicking")
        # change the email in html

        return redirect(url_for('register_3'))
    else:
        return render_template("DyslexiaScreen_After_2.html", data=temp)
    # print(request.method)
    # return render_template("DyslexiaScreen_After_2.html")


@app.route('/register_using_phone', methods=['POST', 'GET'])
def register_using_phone():
    print("register 2", request.method)
    # temp = {"phone_no": phone_no_on_which_link_is_to_be_sent[0]}
    if request.method == "POST":
        # print("after phone clicking")
        return redirect(url_for('register_3'))
    else:
        return render_template("DyslexiaScreen_After_3.html", data=temp)


@app.route('/register3', methods=['POST', 'GET'])
def register_3():
    print("register page 3", request.method)

    if request.method == "POST":
        print("after clicking")
        return redirect(url_for('register_4'))
    else:
        return render_template("DyslexiaScreen_After_4.html")


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
        data = request.get_json(force=True)
        print(data)
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('DyslexiaScreen1.html')


@app.route('/q1_quiz', methods=['POST', 'GET'])
def q1_quiz():
    questions = mongo.db.Questions
    data = questions.find({'q_level': '3'})
    # print(data)
    for i in data:
        print(i['actual_word'])
    print("Q1: ", request.method)
    if request.method == 'POST':
        # answers = request.get_json(force=True)
        # if answers['selected'] == answers['correct']:
        #     score += 1
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template("screen2.html", data=data)


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('DyslexiaScreen2.html')


@app.route('/create_profile_3', methods=['POST', 'GET'])
def create_profile_3():

    users = mongo.db.name_age_gender
    data = users.find_one({'name': 'sabeeh'})
    print(data)
    users.replace_one(
        {"name": "sabeeh"},
        {"name": "sabeeh",
         "date": data['date'],
         "update": 'true'})

    data = users.find_one({'name': 'abc'})
    print(data)
    print("method12 is : ", request.method)
    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        res = make_response(jsonify({'message': "chal gaya"}))
        # return redirect(url_for('q1_quiz'))
        return res

    else:
        return render_template('DyslexiaScreen3.html')


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
