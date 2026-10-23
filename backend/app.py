from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # lets the React website talk to this server

@app.route("/api/health")
def health():
    return jsonify({"status": "ok", "message": "Backend is running"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)