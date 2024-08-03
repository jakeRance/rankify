# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, request, jsonify
from flask_cors import CORS
from initialize_algo import initialize_algorithm
from comparison import Comparison
from song import Song
from create_range import create_range
from song_pool import song_pool


# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


# The route() function of the Flask class is a decorator, 
# which tells the application which URL should call 
# the associated function.
# ‘/’ URL is bound with hello_world() function.
@app.route('/api/pairs', methods=['POST'])
def generate_pairs():
    data = request.get_json('objectsList')
    pairs = initialize_algorithm(data)
    return jsonify(pairs)

@app.route('/api/results', methods=['POST'])
def receive_data():
    data = request.get_json('data')
    pairs = [Comparison.from_dict(comp) for comp in data]

    for pair in pairs:
        pair.update_score(pair.score)

    sorted_songs = create_range(song_pool)

    
    return jsonify({
        'message': 'Data received successfully', 
        'processedData': [song.to_dict() for song in sorted_songs]
    }), 200

@app.route('/api/reset', methods=['POST'])
def reset_song_pool():
    global song_pool
    song_pool.clear()
    return jsonify({'message': 'Song pool has been reset'}), 200

# main driver function
if __name__ == '__main__':
    app.run(debug=True, port=8080)
