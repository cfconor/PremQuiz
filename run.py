import json
from flask import Flask, render_template, request, flash
if os.path.exists("env.py"):
    import env

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True
        )