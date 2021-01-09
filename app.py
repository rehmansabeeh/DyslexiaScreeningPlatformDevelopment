from flask import Flask, render_template, url_for, request, session, redirect, make_response, jsonify
from flask_pymongo import PyMongo
import bcrypt
import json
from bson import ObjectId


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
    return redirect(url_for("homepage"))


@app.route('/homepage', methods=['GET', 'POST'])
def homepage():
    if request.method == 'POST':
        print('hello')
        return redirect(url_for("create_profile_1"))
    return render_template("homepage.html")


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
    users = mongo.db.name_age_gender
    # lusers = users.find_one({'name': request.form['username']})
    # users.replace_one(
    # {"name": "sabeeh"},
    # {"name": "sabeeh",
    #  "date": data['date'],
    #  "update": 'true'}
    #                  )

    if request.method == 'POST':
        data_user = request.get_json(force=True)
        print(data_user)
        _id = users.insert_one(
            {'name': data_user['entered_name_user'], 'date_of_birth': [data_user['entered_day_user'],
                                                                       data_user['entered_month_user'], data_user['entered_year_user']], 'gender_user': data_user['selected_gender_user']}
        )
        # lusers = users.find_one({'temp_id': temp})
        new_entry_unique_id = str(_id.inserted_id)
        print("User ID IN INSERT", new_entry_unique_id)

        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": new_entry_unique_id}))
        return res
    else:
        return render_template('DyslexiaScreen1.html')

# @app.route('/q1_quiz', methods=['POST', 'GET'])
# def q1_quiz():

#     questions = mongo.db.Questions
#     data = questions.find({'q_level': '3'})
#     # print(data)
#     for i in data:
#         print(i['actual_word'])
#     print("Q1: ", request.method)
#     if request.method == 'POST':
#         res = make_response(jsonify({'message': "successful"}))
#         return res

#     else:
#         return render_template("screen2.html", data=data)


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():

    print("method2 is : ", request.method)
    users = mongo.db.name_age_gender

    if request.method == 'POST':

        data = request.get_json(force=True)
        print(data)
        user_id = data['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)

        print("Uer_id testing", user_id)
        lusers = users.find_one({'_id': user_id})
        print(lusers['_id'])

        _id = users.find_and_modify(
            {"_id": user_id},
            {'name': lusers['name'], 'date_of_birth': lusers['date_of_birth'], 'gender_user': lusers['gender_user'],
                'grade_selected_user': data['grade_sent'], 'selected_education_user': data['selected_education_level_sent']}
        )
        user_id = str(_id.get('_id'))
        print("User ID IN REPLACE", user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    return render_template('DyslexiaScreen2.html')


@app.route('/create_profile_3', methods=['POST', 'GET'])
def create_profile_3():

    print("method3 is : ", request.method)
    users = mongo.db.name_age_gender

    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        user_id = data['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        print("Uer_id testing", user_id)

        lusers = users.find_one({'_id': user_id})
        print(lusers['_id'])

        _id = users.find_and_modify(
            {"_id": user_id},
            {'name': lusers['name'], 'date_of_birth': lusers['date_of_birth'], 'gender_user': lusers['gender_user'], 'grade_selected_user': lusers['grade_selected_user'], 'selected_education_user':
                lusers['selected_education_user'], 'first_language_Urdu': data['first_language_Urdu'], 'bilingual_Urdu': data['bilingual_Urdu'], 'reading_writing_in_Urdu': data['reading_writing_in_Urdu']}
        )
        user_id = str(_id.get('_id'))
        print("User ID IN REPLACE3", user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    return render_template('DyslexiaScreen3.html')


@app.route('/q1_quiz', methods=['POST', 'GET'])
def q1_quiz():

    print("Q1 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        for element in range(len(mcqs_answers['selected'])):
            if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores
        add_score.insert_one(
            {'user_id': user_id, "quiz_type": "picture_word", "score": score}
        )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        data = questions.find(
            {'q_level': user_data['grade_selected_user'], 'question_type': 'picture_word'})
        questions_to_send = list(data)
        print("Data: ", questions_to_send)
        return render_template("screen2_ayesha.html", data=questions_to_send)


@app.route('/q2_quiz', methods=['POST', 'GET'])
def q2_quiz():

    print("Q2 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':

        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        for element in range(len(mcqs_answers['entered'])):
            if mcqs_answers['entered'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores
        add_score.insert_one(
            {'user_id': user_id, "quiz_type": "picture_word_typing", "score": score}
        )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        data = questions.find(
            {'q_level': user_data['grade_selected_user'], 'question_type': 'picture_word'})
        questions_to_send = list(data)
        print("Data: ", questions_to_send)
        return render_template("screen3.html", data=questions_to_send)


@app.route('/q3_quiz', methods=['POST', 'GET'])
def q3_quiz():

    print("Q3 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        for element in range(len(mcqs_answers['selected'])):
            if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores
        add_score.insert_one(
            {'user_id': user_id, "quiz_type": "audio_word", "score": score}
        )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        data = questions.find({'q_level': user_data['grade_selected_user']})
        questions_to_send = list(data)
        print("Data: ", questions_to_send)
        return render_template("screen4.html", data=questions_to_send)


@app.route('/q4_quiz', methods=['POST', 'GET'])
def q4_quiz():

    print("Q4 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':

        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        # for element in range(len(mcqs_answers['entered'])):
        #     if mcqs_answers['entered'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res
    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        data = questions.find(
            {'q_level': user_data['grade_selected_user'], 'question_type': 'audio_word'})
        questions_to_send = list(data)
        print("Data: ", questions_to_send)
        return render_template("screen5.html", data=questions_to_send)


@app.route('/q5_quiz', methods=['POST', 'GET'])
def q5_quiz():
    print("Q4 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        # print("Answers: " , mcqs_answers)
        # # for element in range(len(mcqs_answers['selected'])):
        #     if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        # users = mongo.db.name_age_gender
        # user_id = request.args.get('id')
        # # print("USERNAMEEEEE2 ", username )
        # user_id = ObjectId(user_id)
        # user_data = users.find_one({'_id':user_id})
        # data = questions.find({'q_level': user_data['grade_selected_user']})
        # questions_to_send = list(data)
        # print("Data: " , questions_to_send)
        return render_template("screen6.html")


@app.route('/q6_quiz', methods=['POST', 'GET'])
def q6_quiz():
    print("Q6 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        # for element in range(len(mcqs_answers['selected'])):
        #     if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        # users = mongo.db.name_age_gender
        # user_id = request.args.get('id')
        # # print("USERNAMEEEEE2 ", username )
        # user_id = ObjectId(user_id)
        # user_data = users.find_one({'_id':user_id})
        # data = questions.find({'q_level': user_data['grade_selected_user']})
        # questions_to_send = list(data)
        # print("Data: " , questions_to_send)
        return render_template("screen7.html")


@app.route('/q7_quiz', methods=['POST', 'GET'])
def q7_quiz():
    print("Q7 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        # for element in range(len(mcqs_answers['selected'])):
        #     if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        # users = mongo.db.name_age_gender
        # user_id = request.args.get('id')
        # # print("USERNAMEEEEE2 ", username )
        # user_id = ObjectId(user_id)
        # user_data = users.find_one({'_id':user_id})
        # data = questions.find({'q_level': user_data['grade_selected_user']})
        # questions_to_send = list(data)
        # print("Data: " , questions_to_send)
        return render_template("screen8.html")


@app.route('/test_start_1', methods=['POST', 'GET'])
def test_start_1():

    print("method is test_start_1 : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test1_start_page.html')


@app.route('/test_start_2', methods=['POST', 'GET'])
def test_start_2():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test2_start_page.html')


@app.route('/test_start_5', methods=['POST', 'GET'])
def test_start_5():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test5_start_page.html')


@app.route('/test_start_6', methods=['POST', 'GET'])
def test_start_6():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test6_start_page.html')


@app.route('/test_start_7', methods=['POST', 'GET'])
def test_start_7():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test7_start_page.html')


@app.route('/test_start_8', methods=['POST', 'GET'])
def test_start_8():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test8_start_page.html')


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
