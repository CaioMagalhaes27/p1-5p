from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    output = []
    for user in users:
        user_data = {'id': user.id, 'username': user.username, 'email': user.email}
        output.append(user_data)
    return jsonify({'users': output})

# Implementar outras rotas para criar, atualizar e excluir usuários.

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)