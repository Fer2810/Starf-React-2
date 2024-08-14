from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",  # Cambia esto por tu contraseña de MySQL
    database="app_incas"  # Cambia esto por el nombre de tu base de datos
)

# Ruta para inicio de sesión de administrador
@app.route('/login/administrador', methods=['POST'])
def login_administrador():
    data = request.json
    nombre = data.get('nombre')
    contraseña = data.get('contraseña')

    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM administradores WHERE nombre = %s", (nombre,))
    admin = cursor.fetchone()

    if admin and admin['contraseña'] == contraseña:
        return jsonify({"message": "Inicio de sesión exitoso"}), 200
    else:
        return jsonify({"message": "Nombre o contraseña incorrectos"}), 401

# Ruta para inicio de sesión de profesor
@app.route('/login/profesor', methods=['POST'])
def login_profesor():
    data = request.json
    nombre = data.get('nombre')
    contraseña = data.get('contraseña')

    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM datos_prof WHERE nombre = %s", (nombre,))
    profesor = cursor.fetchone()

    if profesor and profesor['contraseña'] == contraseña:
        return jsonify({"message": "Inicio de sesión exitoso"}), 200
    else:
        return jsonify({"message": "Nombre o contraseña incorrectos"}), 401

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
