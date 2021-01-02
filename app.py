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


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print('hello')
    if 'username' in session:
        print("successful")
    return redirect(url_for('create_profile_3'))


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


@app.route('/register1', methods=['POST', 'GET'])
def register_1():
    if request.method == 'POST':
        email = request.form.get('lemail')
        print(email)
        email_on_which_link_is_to_be_sent.append(email)
        #temp = {'email' : email_on_which_link_is_to_be_sent}

        phone_no = request.form.get('lphone')

        phone_no_on_which_link_is_to_be_sent.append(phone_no)
        print("Phone", phone_no_on_which_link_is_to_be_sent[0])
        print("Email", email_on_which_link_is_to_be_sent[0])
        if(email_on_which_link_is_to_be_sent[0] != None):

            return redirect(url_for('register_using_email'))

        elif(phone_no_on_which_link_is_to_be_sent[0] != None):

            return redirect(url_for('register_using_phone'))

    else:
        return render_template('DyslexiaScreen_After_1.html')


@app.route('/register_using_email', methods=['POST', 'GET'])
def register_using_email():
    # print("register 2", request.method)
    temp = {"email": email_on_which_link_is_to_be_sent[0]}
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
    temp = {"phone_no": phone_no_on_which_link_is_to_be_sent[0]}
    if request.method == "POST":
        print("after phone clicking")
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
        print("HEREERHEHR")
        month = request.form['dob-month']
        name = request.form['lname']
        year = request.form['dob-year']
        day = request.form['dob-day']
        # gender = request.form['selected']

        print("HERERE21")
        print("HERERE22")
        print("HERERE23")
        selected_gender = request.form['selected']
        print(selected_gender)
        print(month)
        print(year)
        # request.form['gender_selection_female']
        # request.form['gender_selection_other']
        return redirect(url_for('create_profile_2'))

    else:
        return render_template('DyslexiaScreen1.html')

    # if request.form.get('gender_reached_or_not') == 'success':
    #     gender = request.form.get('gender')
    #     # should be stored in DB
    #     return json.dumps({'abc': 'successfuly noted gender'})
    # else:
    #     return json.dumps({'abc': 'couldn''t store gender'})

    # if request.form.get('date_reached_or_not') == 'success':
    #     day = request.form.get('day_selected')
    #     month = request.form.get('month_selected')
    #     year = request.form.get('year_selected')
    #     # should be stored in DB
    #     return json.dumps({'abc': 'successfuly noted DOB'})
    # else:
    #     return json.dumps({'abc': 'couldn''t store DOB'})

    # if request.form.get('gender_reached_or_not') == 'success':
    #     gender = request.form.get('gender')
    #     # should be stored in DB
    #     return json.dumps({'abc': 'successfuly noted gender'})
    # else:
    #     return json.dumps({'abc': 'couldn''t store gender'})


@app.route('/q1_quiz', methods=['POST', 'GET'])
def q1_quiz():
    print("Q1: ", request.method)
    return render_template("screen2.html")


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():

    print("method1 is : ", request.method)

    if request.method == 'POST':
        # selected_educational_level = request.form['grade_sent']
        # print( "Selected Grade: ", selected_educational_level)
        # print("Selected Educational Level: ", request.form['selected_education_level_sent'])
        # print("HERERE22")
        # print("hello2")
        selected_educational_grade = request.json['grade_sent']
        # # print("hello3")
        print("Selected Grade: ", selected_educational_grade)
        print("Selected Educational Level: ",
              request.json['selected_education_level_sent'])
        print("HERERE22")
        print("hello2")
        # selected_educational_grade =

        # return redirect(url_for('q1_quiz'))
        # # print(request.form['test_div'])
        # print("Grade: " , grade)

        # THIS REDIRECT STATEMENT WON'T COME HERE
        # \return render_template('q1.html',data=Todos.query.all())

        return"asdf"

        # sreturn redirect(url_for('q1_quiz'))
        # # print(request.form['test_div'])
        # print("Grade: " , grade)

        # THIS REDIRECT STATEMENT WON'T COME HERE
        # \return render_template('q1.html',data=Todos.query.all())

    else:
        return render_template('DyslexiaScreen2.html')


@app.route('/create_profile_3', methods=['POST', 'GET'])
def create_profile_3():

    print("method12 is : ", request.method)

    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        res = make_response(jsonify({'message': "chl gaya"}))
        return redirect(url_for('q1_quiz'))

    else:
        return render_template('DyslexiaScreen3.html')


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
