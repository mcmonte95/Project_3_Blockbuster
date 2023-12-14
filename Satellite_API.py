import numpy as np

import sqlalchemy
from sqlalchemy import create_engine, Column, Float, String, MetaData, Table
import pandas as pd

from flask import Flask, jsonify

# Connect to SQLite database SatelliteData.sqlite'
engine = create_engine('sqlite:///Resources/SatelliteData.sqlite') 

# Since only one table, can just run a raw query to get the data using read_sql
sat_df = pd.read_sql("SELECT * FROM satellites", engine)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/satLocations<br/>"
        )

@app.route("/satLocations")
def sat_locations():
    return jsonify(sat_df.to_dict(orient='records')) #return the jsonified dataframe


#################################################
# Start app
#################################################
if __name__ == '__main__':
    app.run(debug=False)