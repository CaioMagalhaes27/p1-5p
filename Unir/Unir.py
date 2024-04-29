import requests
from flask import jsonify

@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    response = requests.post('http://localhost:3000/auth/register', json=data)
    return jsonify(response.json()), response.status_code   